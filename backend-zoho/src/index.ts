import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors'; // Importa cors

dotenv.config(); // Carga las variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

// Configura CORS para permitir solicitudes desde cualquier origen durante desarrollo
// En producción, restringe esto a la URL de tu frontend
app.use(cors({
  origin: '*', // Permitir cualquier origen para debugging
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON

// Endpoint para recibir los datos del formulario de contacto
app.post('/api/zoho/submit-lead', async (req, res) => {
  const { name, email, phone, company, message, quotedProducts } = req.body;

  // Validar datos básicos
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required.' });
  }

  try {
    // 1. Obtener Access Token de Zoho CRM
    // Esta es la parte donde usarías tu ZOHO_REFRESH_TOKEN para obtener un nuevo access_token
    // Si aún no tienes un refresh_token, primero debes obtenerlo manualmente
    // siguiendo la documentación de Zoho para "Self Client" o "Server-side Applications".
    // Una vez que lo tengas, lo guardarás en tu .env
    const accessToken = await getZohoAccessToken(); // Implementa esta función

    if (!accessToken) {
      return res.status(500).json({ error: 'Failed to obtain Zoho access token. Please check if the credentials (Client ID, Client Secret, Refresh Token) in the backend configuration are valid and not expired.' });
    }

    // 2. Preparar los datos para Zoho CRM
    // Mapea los datos del formulario a la estructura de un Lead de Zoho
    const zohoLeadData = {
      data: [
        {
          Last_Name: name, // Zoho CRM requiere Last_Name
          Email: email,
          Phone: phone,
          Company: company,
          Description: message,
          // Puedes añadir más campos aquí si los tienes en tu Zoho CRM
          // Por ejemplo, si tienes un campo personalizado para productos cotizados:
          // Custom_Products_Field: JSON.stringify(quotedProducts),
        },
      ],
      trigger: ["workflow"], // Opcional: dispara flujos de trabajo en Zoho
    };

    // 3. Enviar los datos a Zoho CRM
    const zohoResponse = await axios.post(
      'https://www.zohoapis.com/crm/v2/Leads', // O /Contacts, /Potentials, etc.
      zohoLeadData,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // 4. Manejar la respuesta de Zoho
    if (zohoResponse.data && zohoResponse.data.data && zohoResponse.data.data[0].code === 'SUCCESS') {
      console.log('Lead created successfully in Zoho CRM:', zohoResponse.data.data[0].details);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      console.error('Error from Zoho CRM:', zohoResponse.data);
      res.status(500).json({ error: 'Failed to submit form to Zoho CRM.' });
    }

  } catch (error) {
    console.error('Error processing form submission:', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Zoho API Error Response:', error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal server error.' });
    }
  }
});

// Función para obtener el Access Token de Zoho usando el Refresh Token
async function getZohoAccessToken(): Promise<string | null> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.error('Zoho CRM credentials (Client ID, Client Secret, Refresh Token) are not set in .env');
    return null;
  }

  try {
    const response = await axios.post(
      'https://accounts.zoho.com/oauth/v2/token',
      null, // No body for this request
      {
        params: {
          refresh_token: refreshToken,
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'refresh_token',
        },
      }
    );
    return response.data.access_token;
  } catch (error: unknown) {
    console.error('Error getting Zoho access token:', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Zoho Token API Error Response:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (axios.isAxiosError(error) && error.request) {
      console.error('No response received from Zoho Token API:', error.request);
    } else if (error instanceof Error) {
      console.error('Error setting up request to Zoho Token API:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Access token will be fetched using refresh token.`);
});

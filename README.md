# Proyecto Web Grupo Alcayato

Este repositorio contiene el código fuente del sitio web de Grupo Alcayato, desarrollado con React y Tailwind CSS, con integración para la captura de leads a Zoho CRM.

## Características

- Diseño responsive y moderno.
- Secciones informativas: Inicio, Servicios, Soluciones, Marcas, Recursos, Nosotros, Contacto.
- Formulario de contacto integrado con Zoho CRM para la gestión de leads.
- Contenido detallado de marcas aliadas (Telefire, Bose Professional, Extreme Networks, Panduit, Inncom) con imágenes de productos.

## Tecnologías Utilizadas

- **Frontend:** React.js, Vite, Tailwind CSS
- **Integración CRM:** API REST (Zoho CRM)

## Configuración del Proyecto

Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/MarcusAlienx/alcayato.com.git
    cd alcayato.com
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    # o npm install si usas npm
    # o yarn install si usas yarn
    ```

3.  **Variables de Entorno (Opcional para desarrollo local):**
    Si necesitas configurar variables de entorno para desarrollo local (por ejemplo, para la URL de la API de Zoho), crea un archivo `.env` en la raíz del proyecto con el siguiente formato:
    ```
    VITE_ZOHO_API_URL=https://tu-url-api-zoho.com/api/zoho/submit-lead
    ```
    *Nota: Para el despliegue en Netlify, estas variables se configuran directamente en el panel de Netlify (ver sección de Despliegue).* 

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    pnpm run dev
    # o npm run dev
    # o yarn dev
    ```
    El sitio estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## Despliegue en Netlify

Este proyecto está configurado para ser desplegado fácilmente en Netlify.

**Configuración recomendada en Netlify:**

-   **Build command (Comando de construcción):** `pnpm run build`
-   **Publish directory (Directorio de publicación):** `dist`

**Variables de Entorno en Netlify:**

Si tu aplicación React necesita acceder a variables de entorno (como la URL de la API de Zoho), estas deben configurarse en el panel de Netlify bajo `Site settings` (Configuración del sitio) > `Build & deploy` (Construcción y despliegue) > `Environment variables` (Variables de entorno).

Por ejemplo, para la URL de la API de Zoho:

-   **Key:** `VITE_ZOHO_API_URL`
-   **Value:** `https://5000-i6j4psais6wnwqvsr08w7-df623d15.manus.computer/api/zoho/submit-lead` (o la URL permanente de tu API de Flask una vez desplegada)

## Estructura del Proyecto

```
alcayato-web/
├── public/
├── src/
│   ├── assets/ (Imágenes, logo)
│   ├── components/ (Componentes reutilizables, si los hubiera)
│   ├── App.jsx (Componente principal de la aplicación)
│   ├── App.css (Estilos globales)
│   └── main.jsx (Punto de entrada de React)
├── .git/
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── tailwind.config.js
└── README.md
```



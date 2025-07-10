# Alcayato Website

Este es el repositorio para el sitio web de Alcayato, una aplicación de React de una sola página (SPA) construida con Vite, TypeScript y Tailwind CSS. El sitio web muestra los productos y servicios de la empresa, y cuenta con un formulario de contacto que se integra con Zoho CRM a través de un backend de Node.js.

## Características

- **Frontend React:** Una interfaz de usuario moderna y receptiva construida con React y TypeScript.
- **Estilo con Tailwind CSS:** Utilidades de CSS para un desarrollo rápido y un diseño consistente.
- **Enrutamiento del lado del cliente:** Navegación fluida entre páginas usando React Router.
- **Páginas de productos dinámicas:** Las páginas de productos se generan dinámicamente en función de la marca seleccionada.
- **Integración con Zoho CRM:** El formulario de contacto envía los datos de los clientes potenciales a Zoho CRM a través de un servidor backend.

## Estructura del Proyecto

```
alcayato-website/
├── backend-zoho/         # Backend de Node.js para la integración con Zoho
│   ├── src/index.ts      # Lógica del servidor Express
│   └── ...
├── public/               # Activos estáticos (imágenes, etc.)
├── src/                  # Código fuente del frontend
│   ├── components/       # Componentes de React reutilizables
│   ├── context/          # Contexto de React (para la cotización)
│   ├── data/             # Datos de productos y marcas
│   ├── pages/            # Componentes de página (HomePage, ProductsPage)
│   ├── App.tsx           # Componente raíz de la aplicación y enrutamiento
│   └── main.tsx          # Punto de entrada de la aplicación
├── package.json          # Dependencias y scripts del proyecto
└── ...
```

## Stack Tecnológico

- **Frontend:**
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Axios (para solicitudes HTTP a la API de Zoho)
  - Dotenv (para gestionar variables de entorno)
  - Cors (para habilitar solicitudes de origen cruzado)

## Instalación y Uso

### Prerrequisitos

- Node.js (v14 o superior)
- npm o bun

### Frontend

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/alcayato-website.git
    cd alcayato-website
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    bun install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    bun run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

### Backend (Integración con Zoho)

El backend gestiona el envío de los datos del formulario de contacto a Zoho CRM.

1.  **Navegar al directorio del backend:**
    ```bash
    cd backend-zoho
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    bun install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en el directorio `backend-zoho` y añade las siguientes variables:
    ```
    ZOHO_CLIENT_ID=tu_client_id
    ZOHO_CLIENT_SECRET=tu_client_secret
    ZOHO_REFRESH_TOKEN=tu_refresh_token
    ```
    Necesitarás obtener estas credenciales desde la consola de desarrollador de Zoho.

4.  **Iniciar el servidor de backend:**
    ```bash
    npm start
    # o
    bun start
    ```
    El servidor se ejecutará en `http://localhost:5000`.

## Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier cambio.
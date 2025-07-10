# Alcayato Website

Este es el repositorio para el sitio web de Alcayato, una aplicación de React de una sola página (SPA) construida con Vite, TypeScript y Tailwind CSS. El sitio web muestra los productos y servicios de la empresa.

## Características

- **Frontend React:** Una interfaz de usuario moderna y receptiva construida con React y TypeScript.
- **Estilo con Tailwind CSS:** Utilidades de CSS para un desarrollo rápido y un diseño consistente.
- **Enrutamiento del lado del cliente:** Navegación fluida entre páginas usando React Router.
- **Páginas de productos dinámicas:** Las páginas de productos se generan dinámicamente en función de la marca seleccionada.

## Estructura del Proyecto

```
alcayato-website/
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

## Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier cambio.

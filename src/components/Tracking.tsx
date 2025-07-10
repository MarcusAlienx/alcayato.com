
import { useEffect } from 'react';

// Define the Zoho SalesIQ object structure on the window object for TypeScript
declare global {
  interface Window {
    $zoho: {
      salesiq: {
        widgetcode: string;
        values: object;
        ready: () => void;
        floatbutton?: {
          visible: (state: 'show' | 'hide') => void;
        };
      };
    };
  }
}

const Tracking = () => {
  useEffect(() => {
    const widgetCode = import.meta.env.VITE_ZOHO_WIDGET_CODE;

    if (!widgetCode) {
      console.error('Zoho SalesIQ Widget Code not found in environment variables.');
      return;
    }

    // Prevent script from running twice in React's Strict Mode (in development)
    if (document.getElementById('zsiqscript')) {
      return;
    }

    // Set configuration directly on the window object
    window.$zoho = {
      salesiq: {
        widgetcode: widgetCode,
        values: {},
        ready: function () {
          // This function is called once the Zoho script is loaded and ready.
          // We ensure the float button is hidden.
          if (window.$zoho.salesiq.floatbutton) {
            window.$zoho.salesiq.floatbutton.visible('hide');
            console.log('Zoho SalesIQ ready and float button hidden.');
          }
        },
      },
    };

    // Create and append the Zoho script tag
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqscript';
    script.defer = true;
    script.src = 'https://salesiq.zoho.com/widget';

    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default Tracking;

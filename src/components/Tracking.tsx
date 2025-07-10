import { useEffect } from 'react';

// Define the Zoho SalesIQ object structure on the window object for TypeScript
declare global {
  interface Window {
    $zoho: {
      salesiq: {
        ready: () => void;
        floatbutton?: {
          visible: (state: 'show' | 'hide') => void;
        };
        chat?: {
          open: () => void;
        };
      };
    };
    openSalesIQChat: () => void; // Declare the global function
  }
}

const Tracking = () => {
  useEffect(() => {
    // Prevent script from running twice in React's Strict Mode (in development)
    if (document.getElementById('zsiqscript')) {
      return;
    }

    // Create the Zoho SalesIQ object
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      ready: function () {},
    };

    // Define the global function to open SalesIQ chat
    window.openSalesIQChat = () => {
      if (window.$zoho && window.$zoho.salesiq) {
        // Prefer opening the chat directly if available, otherwise show the float button
        if (window.$zoho.salesiq.chat && window.$zoho.salesiq.chat.open) {
          window.$zoho.salesiq.chat.open();
        } else if (window.$zoho.salesiq.floatbutton) {
          window.$zoho.salesiq.floatbutton.visible('show');
        }
      } else {
        console.warn('Zoho SalesIQ not ready yet. Cannot open chat.');
      }
    };

    // Create and append the Zoho script tag
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.defer = true;
    script.src = 'https://salesiq.zoho.com/widget?wc=siq4c545201570e02a71637114ea4feb7d3363e35b42f36ae5578c37ea62367cfe4';
    
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

import { useEffect } from 'react';

const Tracking = () => {
  useEffect(() => {
    const widgetCode = import.meta.env.VITE_ZOHO_WIDGET_CODE;

    if (!widgetCode) {
      console.error('Zoho SalesIQ Widget Code not found in environment variables.');
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqscript';
    script.defer = true;
    script.src = 'https://salesiq.zoho.com/widget';

    const zohoConfig = `
      var $zoho=$zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "${widgetCode}",
        values:{},
        ready:function(){
          $zoho.salesiq.floatbutton.visible('hide');
        }
      };
    `;

    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = zohoConfig;

    document.head.appendChild(configScript);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        existingScript.remove();
      }
      // It's harder to clean up the config script object, but this is generally sufficient
    };
  }, []);

  return null;
};

export default Tracking;

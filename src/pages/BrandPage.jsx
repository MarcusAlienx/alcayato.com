import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
// Removed Link import as it's not used after removing App component

// Product image imports
import telefireTfh280aImg from '../assets/telefire_tfh_280a-xRYuJLfy.png';
import telefireGuard7Img from '../assets/telefire_guard_7-D7AEO_WG.png';
import telefirePanel7000Img from '../assets/telefire_panel_7000-Cj2Y1IFR.jpg';
import boseFreespaceFs2pImg from '../assets/bose_freespace_fs2p-C7Ep_ooZ.png';
import boseL1Pro8Img from '../assets/bose_l1_pro8-CC3ekIw4.jpg';
import panduitCablingInfrastructureImg from '../assets/panduit_cabling_infrastructure-IOGZWzWW.jpg';
import inncomHoneywellIiImg from '../assets/inncom_honeywell_ii-X6DcDv4i.jpg';

// Brand logo SVGs (already present, ensuring they are kept)
import telefireLogoSvg from '../assets/telefire-logo.svg';
import boseLogoSvg from '../assets/bose.svg';
import extremeNetworksLogoSvg from '../assets/extreme-networks-vector-logo.svg';
import panduitLogoSvg from '../assets/panduit.svg';
import inncomLogoSvg from '../assets/Logo_INNCOM.svg';

// Page transition variants (defined locally)
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const products = {
  telefire: [
    {
      id: 'telefire-tfo-770a',
      name: 'Detector de Humo TFO-770A',
      description: 'Detector de humo fotoeléctrico analógico direccionable, diseñado para una detección precisa y confiable de incendios. Ideal para sistemas de seguridad avanzados.',
      image: telefireLogoSvg, // Fallback
      features: [
        'Tecnología fotoeléctrica avanzada para detección temprana',
        'LED indicador de 360° para visualización de estado',
        'Compatible con paneles de control Telefire Serie 7000',
        'Certificado UL para aplicaciones comerciales',
        'Fácil instalación y mantenimiento'
      ]
    },
    {
      id: 'telefire-tfh-280a',
      name: 'Detector de Calor TFH-280A',
      description: 'Detector de calor analógico direccionable con tecnología avanzada, que opera en modos de temperatura fija y tasa de aumento. Compatible con paneles de control Telefire.',
      image: telefireTfh280aImg,
      features: [
        'Doble modo de detección: temperatura fija y tasa de aumento',
        'Microprocesador integrado para análisis avanzado',
        'Compensación automática de temperatura ambiente',
        'Diseño de bajo perfil y estético',
        'Ideal para áreas donde los detectores de humo no son adecuados'
      ]
    },
    {
      id: 'telefire-guard-7',
      name: 'Unidad de Control GUARD-7',
      description: 'Solución compacta y potente para seguridad contra incendios en sitios pequeños, con capacidad para hasta 60 dispositivos. Fácil de instalar y mantener.',
      image: telefireGuard7Img,
      features: [
        'Soporta hasta 60 dispositivos direccionables',
        'Pantalla LCD integrada para fácil programación',
        'Conectividad TCP/IP para monitoreo remoto',
        'Batería de respaldo integrada',
        'Software de gestión intuitivo'
      ]
    },
    {
      id: 'telefire-adr-7000',
      name: 'Panel de Control ADR-7000',
      description: 'Panel de control analógico direccionable de última generación, diseñado para sistemas de detección de incendios de mediana y gran escala.',
      image: telefirePanel7000Img,
      features: [
        'Soporta hasta 1016 dispositivos direccionables',
        'Pantalla táctil a color de 7"',
        'Conectividad TCP/IP y RS-485',
        'Programación avanzada de eventos y alarmas',
        'Certificado EN54 y UL'
      ]
    }
  ],
  bose: [
    {
      id: 'bose-freespace-fs2p',
      name: 'Altavoz FreeSpace FS2P',
      description: 'Altavoz colgante de montaje en techo con transductor de rango completo de 2.25 pulgadas, ideal para música de fondo y anuncios claros en entornos comerciales.',
      image: boseFreespaceFs2pImg,
      features: [
        'Transductor de rango completo de 2.25"',
        'Dispersión de 160° para cobertura uniforme',
        'Diseño elegante que se integra en cualquier ambiente',
        'Fácil instalación con sistema de montaje QuickHang',
        'Disponible en blanco o negro'
      ]
    },
    {
      id: 'bose-l1-pro8',
      name: 'Sistema Line Array Portátil L1 Pro8',
      description: 'El sistema L1 Pro más portátil, con un mezclador integrado y cobertura de sonido de 180 grados, ideal para eventos pequeños y medianos.',
      image: boseL1Pro8Img,
      features: [
        'Cobertura horizontal de 180° con patrón vertical enfocado',
        'Mezclador digital integrado con efectos',
        'Control remoto vía aplicación móvil',
        'Diseño modular para fácil transporte',
        'Conectividad Bluetooth para streaming de audio'
      ]
    },
    {
      id: 'bose-powershare-ps604d',
      name: 'Amplificador PowerShare PS604D',
      description: 'Amplificador de potencia adaptable con tecnología PowerShare que distribuye 600 watts de forma asimétrica entre todas las salidas según las necesidades.',
      image: boseLogoSvg, // Fallback
      features: [
        'Tecnología PowerShare para distribución asimétrica de potencia',
        'Audio digital Dante integrado',
        'DSP integrado con EQ, crossover y limitador',
        'Sistema de doble bucle de realimentación',
        'Montaje en rack 1U para instalaciones profesionales'
      ]
    },
    {
      id: 'bose-edgemax-em180',
      name: 'Altavoz de Techo EdgeMax EM180',
      description: 'Altavoz premium de montaje en techo con tecnología PhaseGuide que proporciona cobertura de 180° desde el borde de la habitación.',
      image: boseLogoSvg, // Fallback
      features: [
        'Tecnología PhaseGuide patentada',
        'Woofer de 8" para reproducción de graves extendidos',
        'Transformador integrado para sistemas de 70V/100V',
        'Diseño de perfil bajo que se integra con cualquier arquitectura',
        'Ideal para espacios comerciales de alta gama'
      ]
    }
  ],
  extreme_networks: [
    {
      id: 'extreme-networks-x465',
      name: 'Switch ExtremeSwitching X465',
      description: 'Familia de switches apilables de alto rendimiento, listos para convergencia, resilientes y seguros, con puertos Gigabit y multi-Gigabit Ethernet.',
      image: extremeNetworksLogoSvg, // Fallback
      features: [
        'Puertos 1/2.5/5/10 Gigabit Ethernet',
        'Capacidad de apilamiento de hasta 8 unidades',
        'Alimentación PoE/PoE+ de hasta 90W por puerto',
        'Soporte para VxLAN y fabric networking',
        'Garantía de por vida con reemplazo al siguiente día hábil'
      ]
    },
    {
      id: 'extreme-networks-ap505i',
      name: 'Access Point AP505i',
      description: 'Access point Wi-Fi 6 (802.11ax) de alto rendimiento para entornos empresariales, con radios duales y tecnología de antena inteligente.',
      image: extremeNetworksLogoSvg, // Fallback
      features: [
        'Wi-Fi 6 (802.11ax) con velocidades de hasta 1.77 Gbps',
        'Radios duales (2.4 GHz y 5 GHz) con MIMO 2x2',
        'Radio IoT integrado para Bluetooth y BLE',
        'Seguridad avanzada con firewall L2-L7 integrado',
        'Gestión centralizada a través de ExtremeCloud IQ'
      ]
    },
    {
      id: 'extreme-networks-x440-g2',
      name: 'Switch ExtremeSwitching X440-G2',
      description: 'Switch de acceso Gigabit Ethernet de nivel empresarial, ideal para despliegues de campus y sucursales.',
      image: extremeNetworksLogoSvg, // Fallback
      features: [
        'Puertos Gigabit Ethernet con opciones PoE+',
        'Capacidad de apilamiento virtual (MLAG)',
        'Enrutamiento IPv4/IPv6 de capa 3',
        'Soporte para SDN con OpenFlow',
        'Gestión unificada a través de ExtremeCloud IQ'
      ]
    }
  ],
  panduit: [
    {
      id: 'panduit-cabling-infrastructure',
      name: 'Infraestructura de Cableado Estructurado Panduit',
      description: 'Soluciones completas de cableado estructurado, incluyendo paneles de parcheo, cables y conectores, diseñadas para redes de alto rendimiento y fácil instalación.',
      image: panduitCablingInfrastructureImg,
      features: [
        'Soluciones end-to-end para cableado de cobre y fibra',
        'Sistemas de administración de cables integrados',
        'Garantía certificada de 25 años',
        'Cumplimiento con estándares TIA/EIA e ISO/IEC',
        'Opciones para entornos de alta densidad'
      ]
    },
    {
      id: 'panduit-tx6a-sd',
      name: 'Cable TX6A-SD Cat6A UTP',
      description: 'Cable de par trenzado no blindado Categoría 6A con tecnología MaTriX para reducción de alien crosstalk, ideal para aplicaciones de 10 Gigabit Ethernet.',
      image: panduitLogoSvg, // Fallback
      features: [
        'Tecnología MaTriX para reducción de alien crosstalk',
        'Diámetro reducido para mayor densidad en canalizaciones',
        'Rendimiento verificado hasta 650 MHz',
        'Disponible en configuraciones plenum y riser',
        'Compatible con PoE++ (100W)'
      ]
    },
    {
      id: 'panduit-opticom',
      name: 'Sistema de Fibra Óptica OptiCom',
      description: 'Solución completa de fibra óptica que incluye bandejas, adaptadores y accesorios para una gestión eficiente de conexiones de fibra.',
      image: panduitLogoSvg, // Fallback
      features: [
        'Diseño modular para fácil instalación y mantenimiento',
        'Opciones de alta densidad hasta 144 fibras por U',
        'Compatible con conectores LC, SC, ST y MPO',
        'Sistema de gestión de radio de curvatura integrado',
        'Etiquetado e identificación según estándares TIA-606'
      ]
    }
  ],
  inncom: [
    {
      id: 'inncom-honeywell-ii',
      name: 'Sistema de Domótica INNCOM Honeywell II',
      description: 'Soluciones avanzadas de automatización de habitaciones para hoteles, que mejoran la eficiencia energética y la experiencia del huésped.',
      image: inncomHoneywellIiImg,
      features: [
        'Control integrado de HVAC, iluminación y cortinas',
        'Sensores de ocupación para ahorro energético',
        'Integración con sistemas de gestión hotelera (PMS)',
        'Reportes detallados de consumo energético',
        'Interfaz intuitiva para huéspedes y personal'
      ]
    },
    {
      id: 'inncom-e7-thermostat',
      name: 'Termostato Digital E7',
      description: 'Termostato inteligente con pantalla táctil que proporciona control preciso de temperatura y humedad, con capacidades de ahorro energético.',
      image: inncomLogoSvg, // Fallback
      features: [
        'Pantalla táctil a color de alta resolución',
        'Control de temperatura y humedad',
        'Sensores de ocupación integrados',
        'Comunicación inalámbrica o cableada',
        'Compatible con sistemas de gestión energética'
      ]
    },
    {
      id: 'inncom-evora-switch',
      name: 'Interruptores Inteligentes Evora',
      description: 'Sistema de interruptores inteligentes para control de iluminación y otros dispositivos en habitaciones de hotel.',
      image: inncomLogoSvg, // Fallback
      features: [
        'Diseño elegante y personalizable',
        'Retroiluminación configurable',
        'Comunicación inalámbrica con el sistema central',
        'Programación de escenas y modos',
        'Instalación sencilla sin cableado adicional'
      ]
    }
  ],
};

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedLogo = ({ logo, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center h-32"
    >
      <img src={logo} alt={name} className="max-h-full max-w-full object-contain" />
    </motion.div>
  );
};

function ProductPage({ brand }) {
  // useParams is used by ProductPage to get brand from URL
  const { brand } = useParams(); // Keep useParams
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToQuote = (product) => {
    setSelectedProducts((prevSelected) => [...prevSelected, product]);
    alert(`${product.name} ha sido añadido a tu solicitud de cotización.`);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto p-4 pt-24"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center text-blue-400"
      >
        Productos {brand.charAt(0).toUpperCase() + brand.slice(1).replace('_', ' ')}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products[brand].map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Adjusted duration for potentially smoother hover effect coordination
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="bg-gray-800 bg-opacity-70 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-contain transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-blue-400">{product.name}</h3>
              <p className="text-gray-300 text-base mb-4">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Características:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {product.features.map((feature, i) => (
                    <li key={i} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToQuote(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Añadir a Cotización
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Removed ScrollToTop, App component, handleChange, handleSubmit, and related imports.
// Ensured ProductPage is the default export.
export default ProductPage;

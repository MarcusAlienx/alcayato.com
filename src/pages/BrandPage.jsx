import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import telefireLogoSvg from '../assets/telefire-logo.svg';
import boseLogoSvg from '../assets/bose.svg';
import extremeNetworksLogoSvg from '../assets/extreme-networks-vector-logo.svg';
import panduitLogoSvg from '../assets/panduit.svg';
import inncomLogoSvg from '../assets/Logo_INNCOM.svg';

const products = {
  telefire: [
    {
      id: 'telefire-tfo-770a',
      name: 'Detector de Humo TFO-770A',
      description: 'Detector de humo fotoeléctrico analógico direccionable, diseñado para una detección precisa y confiable de incendios. Ideal para sistemas de seguridad avanzados.',
      image: telefireLogoSvg,
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
      image: telefireLogoSvg,
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
      image: telefireLogoSvg,
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
      image: telefireLogoSvg,
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
      image: boseLogoSvg,
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
      image: boseLogoSvg,
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
      image: boseLogoSvg,
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
      image: boseLogoSvg,
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
      image: extremeNetworksLogoSvg,
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
      image: extremeNetworksLogoSvg,
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
      image: extremeNetworksLogoSvg,
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
      image: panduitLogoSvg,
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
      image: panduitLogoSvg,
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
      image: panduitLogoSvg,
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
      image: inncomLogoSvg,
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
      image: inncomLogoSvg,
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
      image: inncomLogoSvg,
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
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToQuote = (product) => {
    setSelectedProducts((prevSelected) => [...prevSelected, product]);
    alert(`${product.name} ha sido añadido a tu solicitud de cotización.`);
  };

  return (
    <div className="container mx-auto p-4 pt-24">
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_ZOHO_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error de conexión. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans">
        {/* Header */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="bg-gray-800 bg-opacity-70 shadow-lg p-4 fixed w-full z-10"
        >
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img 
                whileHover={{ rotate: 5 }}
                src={logo} 
                alt="Alcayato Logo" 
                className="h-12" 
              />
              <span className="text-2xl font-bold text-white">Alcayato</span>
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li><Link to="/#inicio" className="hover:text-blue-400 transition duration-300">Inicio</Link></li>
              <li><Link to="/#servicios" className="hover:text-blue-400 transition duration-300">Servicios</Link></li>
              <li><Link to="/#soluciones" className="hover:text-blue-400 transition duration-300">Soluciones</Link></li>
              <li className="relative group">
                <Link to="/#marcas" className="cursor-pointer hover:text-blue-400 transition duration-300">Marcas</Link>
                <ul className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded shadow-lg mt-2 w-40">
                  <li><Link to="/marcas/telefire" className="block px-4 py-2 hover:bg-gray-600">Telefire</Link></li>
                  <li><Link to="/marcas/bose" className="block px-4 py-2 hover:bg-gray-600">Bose Professional</Link></li>
                  <li><Link to="/marcas/extreme_networks" className="block px-4 py-2 hover:bg-gray-600">Extreme Networks</Link></li>
                  <li><Link to="/marcas/panduit" className="block px-4 py-2 hover:bg-gray-600">Panduit</Link></li>
                  <li><Link to="/marcas/inncom" className="block px-4 py-2 hover:bg-gray-600">Inncom</Link></li>
                </ul>
              </li>
              <li><Link to="/#recursos" className="hover:text-blue-400 transition duration-300">Recursos</Link></li>
              <li><Link to="/#nosotros" className="hover:text-blue-400 transition duration-300">Nosotros</Link></li>
              <li><Link to="/#contacto" className="hover:text-blue-400 transition duration-300">Contacto</Link></li>
            </ul>
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </nav>
        </motion.header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <section id="inicio" className="relative h-screen flex items-center justify-center text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                  >
                    <img
                      src={heroTech1}
                      alt="Hero Technology"
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg max-w-4xl text-center"
                  >
                    <h1 className="text-5xl font-extrabold mb-4 text-white leading-tight">Soluciones Integrales para Infraestructura de Redes</h1>
                    <p className="text-xl text-gray-200 mb-8">Expertos en cableado estructurado, redes, audio profesional y seguridad contra incendios para instaladores.</p>
                    <motion.a 
                      href="#contacto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
                    >
                      Contáctanos para una Cotización
                    </motion.a>
                  </motion.div>
                </section>

                {/* Servicios Section */}
                <section id="servicios" className="py-20">
                  <div className="container mx-auto px-4">
                    <FadeInWhenVisible>
                      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Nuestros Servicios</h2>
                    </FadeInWhenVisible>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ y: -10 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <div className="text-blue-400 text-4xl mb-4">
                            <i className="fas fa-lightbulb"></i>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">Asesoría y Diseño</h3>
                          <p className="text-gray-300">Ofrecemos asesoría experta y diseño de soluciones personalizadas para infraestructuras de red y sistemas de seguridad.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ y: -10 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <div className="text-blue-400 text-4xl mb-4">
                            <i className="fas fa-box"></i>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">Suministro de Equipos</h3>
                          <p className="text-gray-300">Proveemos equipos y accesorios de redes, cableado estructurado, audio y detección de incendios de las mejores marcas.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ y: -10 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <div className="text-blue-400 text-4xl mb-4">
                            <i className="fas fa-graduation-cap"></i>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">Capacitación Técnica</h3>
                          <p className="text-gray-300">Programas de capacitación para instaladores, asegurando el conocimiento y la aplicación de las últimas tecnologías.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ y: -10 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <div className="text-blue-400 text-4xl mb-4">
                            <i className="fas fa-headset"></i>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">Soporte Post-Venta</h3>
                          <p className="text-gray-300">Soporte técnico continuo y mantenimiento para garantizar el óptimo funcionamiento de sus sistemas.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                    </div>
                  </div>
                </section>

                {/* Soluciones Section */}
                <section id="soluciones" className="py-20 bg-gray-900 bg-opacity-50">
                  <div className="container mx-auto px-4">
                    <FadeInWhenVisible>
                      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Nuestras Soluciones</h2>
                    </FadeInWhenVisible>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-white">Redes y Conectividad</h3>
                          <p className="text-gray-300">Soluciones robustas para redes de datos, incluyendo switches, routers y puntos de acceso Wi-Fi.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-white">Cableado Estructurado</h3>
                          <p className="text-gray-300">Sistemas de cableado de cobre y fibra óptica para infraestructuras de comunicación confiables.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-white">Audio Profesional</h3>
                          <p className="text-gray-300">Sistemas de sonido de alta fidelidad para espacios comerciales, corporativos y de entretenimiento.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-white">Detección de Incendios</h3>
                          <p className="text-gray-300">Sistemas avanzados de detección y alarma contra incendios para la protección de vidas y bienes.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
                        >
                          <h3 className="text-2xl font-bold mb-4 text-white">Domótica y Automatización</h3>
                          <p className="text-gray-300">Soluciones de automatización para hoteles y edificios, mejorando la eficiencia y el confort.</p>
                        </motion.div>
                      </FadeInWhenVisible>
                    </div>
                  </div>
                </section>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

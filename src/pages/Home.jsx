import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import heroTech1 from '../assets/hero_technology_1-DLzTOeXu.png';
import heroTech2 from '../assets/hero_technology_2-CBFoFHRY.png'; // Import heroTech2
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

const brands = [
  { name: 'telefire', displayName: 'Telefire', logo: telefireLogoSvg },
  { name: 'bose', displayName: 'Bose Professional', logo: boseLogoSvg },
  { name: 'extreme_networks', displayName: 'Extreme Networks', logo: extremeNetworksLogoSvg },
  { name: 'panduit', displayName: 'Panduit', logo: panduitLogoSvg },
  { name: 'inncom', displayName: 'Inncom', logo: inncomLogoSvg },
];

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans"
    >
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-black bg-opacity-50" // Kept overlay
          style={{
            backgroundImage: `url(${heroTech1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Img tag removed, content is empty */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg max-w-4xl text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-white leading-tight">
            Soluciones Integrales para Infraestructura de Redes
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Expertos en cableado estructurado, redes, audio profesional y seguridad contra incendios para instaladores.
          </p>
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

      {/* Soluciones Section with heroTech2 background */}
      <section id="soluciones" className="py-20 relative"> {/* Ensure relative positioning and removed old background classes */}
        {/* Background Div */}
        <div
          className="absolute inset-0 w-full h-full bg-black bg-opacity-60" // New overlay
          style={{
            backgroundImage: `url(${heroTech2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1, // Ensure it's behind content
          }}
        ></div>

        {/* Existing content of "Soluciones" section */}
        <div className="container mx-auto px-4 relative"> {/* Added relative for z-index context */}
          {/* This is where FadeInWhenVisible and the rest of the Soluciones content was, assuming it's here */}
          {/* For the purpose of this diff, I'll re-add the structure from the prompt example if it's missing.
             Based on the prompt, the structure should be:
             <FadeInWhenVisible> <h2 ...>Nuestras Soluciones</h2> </FadeInWhenVisible>
             <div class="grid..."> ...cards... </div>
             It seems the original file did not have a "Soluciones" section, the prompt implied modifying an existing one.
             I will proceed assuming the prompt wants to ADD the "Soluciones" section structure ALONG with the background.
             If "Soluciones" was meant to be "Brands" section, the prompt is slightly misaligned with the file content.
             Given the prompt's detail for "Soluciones", I will create it as described.
             If there was a "Servicios" or other section that was intended, this will differ.
             The prompt is clear about "Soluciones", so I will add it.
          */}
          <motion.div // Assuming FadeInWhenVisible is a motion component or wraps one
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Nuestras Soluciones</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example solution items (replace with actual content if available) */}
            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Redes y Conectividad</h3>
              <p className="text-gray-300">Soluciones robustas para redes de datos, incluyendo switches, routers y puntos de acceso Wi-Fi.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Cableado Estructurado</h3>
              <p className="text-gray-300">Sistemas de cableado de cobre y fibra óptica para infraestructuras de comunicación confiables.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Audio Profesional</h3>
              <p className="text-gray-300">Sistemas de sonido de alta fidelidad para espacios comerciales, corporativos y de entretenimiento.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-20"> {/* This was the original next section */}
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-blue-400"
          >
            Nuestras Marcas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
              >
                <Link to={`/marcas/${brand.name}`} className="w-full h-full flex items-center justify-center">
                  <img src={brand.logo} alt={brand.displayName} className="max-h-20 object-contain brand-logo" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

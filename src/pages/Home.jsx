import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import heroTech1 from '../assets/hero_technology_1-DLzTOeXu.png';
import telefireLogoSvg from '../assets/telefire-logo.svg';
import boseLogoSvg from '../assets/bose.svg';
import extremeNetworksLogoSvg from '../assets/extreme-networks-vector-logo.svg';
import panduitLogoSvg from '../assets/panduit.svg';
import inncomLogoSvg from '../assets/Logo_INNCOM.svg';

const brands = [
  { name: 'telefire', displayName: 'Telefire', logo: telefireLogoSvg },
  { name: 'bose', displayName: 'Bose Professional', logo: boseLogoSvg },
  { name: 'extreme_networks', displayName: 'Extreme Networks', logo: extremeNetworksLogoSvg },
  { name: 'panduit', displayName: 'Panduit', logo: panduitLogoSvg },
  { name: 'inncom', displayName: 'Inncom', logo: inncomLogoSvg },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans">
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

      {/* Brands Section */}
      <section id="marcas" className="py-20">
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
                  <img src={brand.logo} alt={brand.displayName} className="max-h-20 object-contain" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

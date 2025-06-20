// src/pages/Nosotros.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Define pageVariants and pageTransition (can be copied from Home.jsx or App.jsx)
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

const Nosotros = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto p-4 pt-24 text-white" // pt-24 for content below fixed header
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Sobre Nosotros</h1>

      <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl">
        <p className="text-lg mb-4">
          Grupo Alcayato se especializa en proveer soluciones tecnológicas integrales para instaladores y empresas en el sector de telecomunicaciones y seguridad.
          Con años de experiencia en el mercado, nos hemos consolidado como un distribuidor líder de equipamiento de alta calidad y ofrecemos un acompañamiento cercano a nuestros clientes.
        </p>
        <p className="text-lg mb-4">
          Nuestra misión es potenciar el éxito de los instaladores a través de productos innovadores, capacitación técnica especializada y un soporte post-venta robusto.
          Trabajamos con las marcas más reconocidas a nivel mundial para asegurar que cada proyecto cumpla con los más altos estándares de rendimiento y confiabilidad.
        </p>
        <p className="text-lg mb-4">
          En Grupo Alcayato, creemos en la importancia de construir relaciones a largo plazo con nuestros clientes, basadas en la confianza, el conocimiento técnico y el compromiso con la excelencia.
          Ofrecemos asesoría experta para el diseño de proyectos, optimización de costos y selección de la tecnología adecuada para cada necesidad.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-6 text-blue-300">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Compromiso con el cliente</li>
          <li>Innovación tecnológica constante</li>
          <li>Integridad y transparencia en todas nuestras operaciones</li>
          <li>Calidad superior en productos y servicios</li>
          <li>Desarrollo y capacitación continua</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nosotros;

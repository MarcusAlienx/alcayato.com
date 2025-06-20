import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Imported AnimatePresence
import logo from './assets/logo_alcayato.png';
import './App.css';

import Home from './src/pages/Home';
import BrandPage from './src/pages/BrandPage';
import Nosotros from './src/pages/Nosotros'; // Import Nosotros component

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Page transition variants
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

function App() {
  const location = useLocation(); // Added for AnimatePresence
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
              <li><Link to="/" className="hover:text-blue-400 transition duration-300">Inicio</Link></li>
              <li className="relative group">
                <span className="cursor-pointer hover:text-blue-400 transition duration-300">Marcas</span>
                <ul className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded shadow-lg mt-2 w-40">
                  <li><Link to="/marcas/telefire" className="block px-4 py-2 hover:bg-gray-600">Telefire</Link></li>
                  <li><Link to="/marcas/bose" className="block px-4 py-2 hover:bg-gray-600">Bose Professional</Link></li>
                  <li><Link to="/marcas/extreme_networks" className="block px-4 py-2 hover:bg-gray-600">Extreme Networks</Link></li>
                  <li><Link to="/marcas/panduit" className="block px-4 py-2 hover:bg-gray-600">Panduit</Link></li>
                  <li><Link to="/marcas/inncom" className="block px-4 py-2 hover:bg-gray-600">Inncom</Link></li>
                </ul>
              </li>
              <li><Link to="/#servicios" className="hover:text-blue-400 transition duration-300">Servicios</Link></li>
              <li><Link to="/#soluciones" className="hover:text-blue-400 transition duration-300">Soluciones</Link></li>
              <li><Link to="/#recursos" className="hover:text-blue-400 transition duration-300">Recursos</Link></li>
              <li><Link to="/nosotros" className="hover:text-blue-400 transition duration-300">Nosotros</Link></li>
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
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/marcas/:brand" element={<BrandPage />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#262626] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/assets/ALCAYATO_DEG_LOGO.svg"
                alt="Alcayato"
                className="h-12 w-auto filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTYwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjM0U4REZGIi8+Cjx0ZXh0IHg9IjgwIiB5PSIzMCIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BTENBWUFUTzwvdGV4dD4KPHN2Zz4=';
                }}
              />
            </Link>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Especialistas en soluciones tecnológicas para redes, cableado estructurado,
              seguridad y automatización de edificios. Conectamos el futuro digital.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-[#3C3473]" />
                <span>contacto@alcayato.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-[#3C3473]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-[#3C3473]" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-mont-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-[#3C3473] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-[#3C3473] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('soluciones')}
                  className="text-gray-300 hover:text-[#3C3473] transition-colors"
                >
                  Soluciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('marcas')}
                  className="text-gray-300 hover:text-[#3C3473] transition-colors"
                >
                  Marcas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-gray-300 hover:text-[#3C3473] transition-colors"
                >
                  Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-mont-bold mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Asesoría Técnica</li>
              <li className="text-gray-300">Capacitación Especializada</li>
              <li className="text-gray-300">Soporte 24/7</li>
              <li className="text-gray-300">Diseño de Soluciones</li>
              <li className="text-gray-300">Implementación</li>
              <li className="text-gray-300">Mantenimiento</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#3C3473] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3C3473] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#3C3473] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Alcayato. Todos los derechos reservados.</p>
              <p className="text-sm mt-1">
                Diseñado con tecnología y precisión
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

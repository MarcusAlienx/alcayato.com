import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { getTotalItems } = useQuote();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['inicio', 'servicios', 'soluciones', 'marcas', 'recursos', 'nosotros', 'contacto'];
      let currentSection = 'inicio';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/ALCAYATO_DEG_LOGO.svg"
              alt="Alcayato"
              className="h-12 md:h-16 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMUJBRTJGIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9Ik1vbnRzZXJyYXQiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BTENBWUFUTzwvdGV4dD4KPHN2Zz4=';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'inicio'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'servicios'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('soluciones')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'soluciones'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollToSection('marcas')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'marcas'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Marcas
            </button>
            <button
              onClick={() => scrollToSection('recursos')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'recursos'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'nosotros'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md'
                    : 'text-[#3E8DFF] font-semibold shadow-md'
                  : isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF]'
                  : 'text-white hover:text-[#3E8DFF]'
              }`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'contacto'
                  ? isScrolled
                    ? 'text-[#3E8DFF] font-semibold shadow-md btn-alcayato-primary'
                    : 'text-[#3E8DFF] font-semibold shadow-md btn-alcayato-primary'
                  : 'btn-alcayato-primary'
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={() => scrollToSection('contacto')}
              className={`relative p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF] hover:bg-gray-100'
                  : 'text-white hover:text-[#3E8DFF] hover:bg-white/10'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3E8DFF] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#3E8DFF] hover:bg-gray-100'
                  : 'text-white hover:text-[#3E8DFF] hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'inicio' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'servicios' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('soluciones')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'soluciones' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Soluciones
              </button>
              <button
                onClick={() => scrollToSection('marcas')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'marcas' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Marcas
              </button>
              <button
                onClick={() => scrollToSection('recursos')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'recursos' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'nosotros' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  activeSection === 'contacto' ? 'text-[#3E8DFF] font-semibold' : 'text-gray-700'
                } hover:text-[#3E8DFF] hover:bg-gray-100 rounded-md`}
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import {
  Flame,
  Volume2,
  Network,
  Shield,
  Building,
  Monitor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../data/products';

export default function Solutions() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create a map for quick lookup of brand names to IDs
  const brandNameToIdMap = new Map(brands.map(brand => [brand.name, brand.id]));

  const solutions = [
    {
      icon: Flame,
      title: 'Detección de Incendios',
      description: 'Sistemas avanzados de detección y alarma contra incendios para proteger vidas y propiedades.',
      applications: ['Edificios comerciales', 'Instalaciones industriales', 'Hospitales y clínicas'],
      brands: ['Telefire'],
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Volume2,
      title: 'Audio Profesional',
      description: 'Soluciones de audio de alta calidad para ambientes comerciales, corporativos y de entretenimiento.',
      applications: ['Oficinas corporativas', 'Centros comerciales', 'Auditorios'],
      brands: ['Bose Professional'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Network,
      title: 'Infraestructura de Redes',
      description: 'Cableado estructurado y soluciones de conectividad para redes empresariales de alto rendimiento.',
      applications: ['Data centers', 'Campus empresariales', 'Edificios inteligentes'],
      brands: ['Panduit', 'Extreme Networks', 'Huawei'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Sistemas de Seguridad',
      description: 'Videovigilancia, control de acceso y sistemas de alarma integrados para protección total.',
      applications: ['Empresas', 'Residencias', 'Instalaciones críticas'],
      brands: ['Honeywell Security'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Building,
      title: 'Automatización de Edificios',
      description: 'Sistemas BMS para control de HVAC, iluminación y gestión energética inteligente.',
      applications: ['Edificios comerciales', 'Hoteles', 'Hospitales'],
      brands: ['Honeywell BMS', 'Inncom'],
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: Monitor,
      title: 'Soluciones Integradas',
      description: 'Integración de múltiples sistemas tecnológicos en una plataforma unificada de gestión.',
      applications: ['Smart buildings', 'Ciudades inteligentes', 'Campus universitarios'],
      brands: ['Múltiples marcas'],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="soluciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#1B1E2F] mb-6">
            Soluciones por Vertical
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones tecnológicas especializadas para diferentes sectores,
            adaptadas a las necesidades específicas de cada vertical de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>

                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-mont-bold text-[#1B1E2F] mb-4 group-hover:text-[#1B1E2F] transition-colors">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-mont-semibold text-gray-800 mb-3">Aplicaciones:</h4>
                    <ul className="space-y-2">
                      {solution.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#1B1E2F] mr-2 flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brands */}
                  <div className="mb-6">
                    <h4 className="text-sm font-mont-semibold text-gray-800 mb-2">Marcas disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.brands.map((brand, brandIndex) => {
                        const brandId = brandNameToIdMap.get(brand);
                        return brandId ? (
                          <Link
                            key={brandIndex}
                            to={`/products/${brandId}`}
                            className="px-3 py-1 bg-gray-100 text-[#5c51a6] font-bold text-xs rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {brand}
                          </Link>
                        ) : (
                          <span
                            key={brandIndex}
                            className="px-3 py-1 bg-gray-100 text-[#5c51a6] font-bold text-xs rounded-full"
                          >
                            {brand}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <button onClick={() => scrollToSection('marcas')} className="w-full bg-[#6C60BF] text-white px-4 py-3 rounded-lg hover:bg-[#6C60BF] transition-all duration-300 flex items-center justify-center font-semibold group-hover:shadow-lg">
                    Ver Productos
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-mont-bold text-[#1B1E2F] mb-4">
              Soluciones Personalizadas
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              ¿No encuentra la solución exacta que necesita? Nuestro equipo puede diseñar
              una solución a medida que integre múltiples tecnologías.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#6C60BF] text-white px-8 py-3 rounded-lg hover:bg-[#6C60BF] transition-colors font-semibold">
                Consultar Proyecto
              </button>
              <button className="border border-[#6C60BF] text-[#1B1E2F] px-8 py-3 rounded-lg hover:bg-[#6C60BF] hover:text-white transition-colors font-semibold">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

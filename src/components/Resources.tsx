import {
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Blog Técnico',
      description: 'Artículos especializados sobre tendencias, mejores prácticas y análisis del sector.',
      items: ['Últimas tendencias en redes', 'Guías de instalación', 'Casos de estudio'],
      badge: 'Nuevo',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FileText,
      title: 'Documentación Técnica',
      description: 'Manuales, especificaciones y guías de configuración para todos nuestros productos.',
      items: ['Manuales de instalación', 'Especificaciones técnicas', 'Diagramas de conexión'],
      badge: 'Popular',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Video,
      title: 'Tutoriales en Video',
      description: 'Contenido audiovisual paso a paso para instalación, configuración y mantenimiento.',
      items: ['Videos de instalación', 'Webinars especializados', 'Demostraciones de producto'],
      badge: 'Destacado',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Download,
      title: 'Herramientas de Diseño',
      description: 'Software, calculadoras y herramientas especializadas para el diseño de proyectos.',
      items: ['Calculadoras de cable', 'Software de diseño', 'Templates de proyecto'],
      badge: 'Gratis',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const featuredResources = [
    {
      title: 'Guía Completa de Cableado Estructurado 2025',
      description: 'Todo lo que necesitas saber sobre las últimas normas y mejores prácticas.',
      type: 'PDF',
      size: '2.3 MB',
      downloads: '1,250'
    },
    {
      title: 'Calculadora de Pérdida de Señal',
      description: 'Herramienta online para calcular pérdidas en enlaces de fibra óptica.',
      type: 'Web App',
      size: 'Online',
      downloads: '850'
    },
    {
      title: 'Serie de Webinars: Redes Wi-Fi 6E',
      description: '4 episodios sobre implementación y optimización de redes Wi-Fi 6E.',
      type: 'Video',
      size: '4 horas',
      downloads: '650'
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#1B1E2F] mb-6">
            Recursos Técnicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accede a nuestra biblioteca completa de recursos técnicos diseñada especialmente
            para instaladores y profesionales del sector.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>

                <div className="p-6">
                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-[#3E8DFF] text-white text-xs font-semibold rounded-full">
                      {resource.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-mont-bold text-[#1B1E2F] mb-3 group-hover:text-[#3E8DFF] transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-1 mb-4">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                        <Star className="w-3 h-3 text-[#3E8DFF] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="w-full bg-gray-100 hover:bg-[#3E8DFF] hover:text-white text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center text-sm font-semibold">
                    Explorar
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-mont-bold text-[#1B1E2F] mb-8 text-center">
            Recursos Destacados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-[#3E8DFF] hover:shadow-md transition-all duration-300 group"
              >
                <h4 className="font-mont-semibold text-[#1B1E2F] mb-2 group-hover:text-[#3E8DFF] transition-colors">
                  {resource.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {resource.type}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {resource.size}
                  </span>
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloads}
                  </span>
                </div>

                <button className="w-full bg-[#3E8DFF] text-white px-4 py-2 rounded-lg hover:bg-[#2563EB] transition-colors text-sm font-semibold flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1B1E2F] to-[#3E8DFF] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-mont-bold mb-4">
              ¿Necesita contenido específico?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Nuestro equipo puede crear documentación técnica personalizada
              para sus proyectos específicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1B1E2F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Solicitar Documentación
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1B1E2F] transition-colors">
                Suscribirse a Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

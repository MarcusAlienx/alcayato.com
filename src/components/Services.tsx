import {
  Lightbulb,
  Users,
  Headphones,
  PenTool,
  Settings,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada para identificar las mejores soluciones tecnológicas según sus necesidades específicas.',
      features: ['Análisis de requerimientos', 'Diseño de arquitectura', 'Selección de equipos']
    },
    {
      icon: Users,
      title: 'Capacitación Especializada',
      description: 'Programas de entrenamiento técnico para instaladores y personal técnico en las últimas tecnologías.',
      features: ['Cursos presenciales', 'Certificaciones oficiales', 'Material didáctico']
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica continua para garantizar el funcionamiento óptimo de sus instalaciones.',
      features: ['Soporte remoto', 'Atención telefónica', 'Respuesta rápida']
    },
    {
      icon: PenTool,
      title: 'Diseño de Soluciones',
      description: 'Desarrollo de proyectos personalizados adaptados a las características únicas de cada instalación.',
      features: ['Planos técnicos', 'Especificaciones detalladas', 'Lista de materiales']
    },
    {
      icon: Settings,
      title: 'Implementación',
      description: 'Ejecución profesional de proyectos con seguimiento completo desde el inicio hasta la puesta en marcha.',
      features: ['Instalación certificada', 'Pruebas de funcionamiento', 'Documentación técnica']
    },
    {
      icon: Award,
      title: 'Mantenimiento',
      description: 'Servicios de mantenimiento preventivo y correctivo para asegurar la vida útil de los equipos.',
      features: ['Mantenimiento preventivo', 'Actualizaciones', 'Garantía extendida']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#1B1E2F] mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos un acompañamiento integral a instaladores y empresas del sector,
            desde la consultoría inicial hasta el soporte post-implementación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3C3473] to-[#262626] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-mont-bold text-[#1B1E2F] mb-4 group-hover:text-[#6C60BF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#6C60BF] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA removed as per user request */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#262626] to-[#3C3473] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-mont-bold mb-4">
              ¿Necesita una solución personalizada?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo de expertos está listo para diseñar la solución perfecta para su proyecto.
            </p>
            <a href="/#contacto" className="bg-white text-[#1B1E2F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

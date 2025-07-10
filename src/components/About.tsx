import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precisión',
      description: 'Cada proyecto se ejecuta con la máxima precisión técnica y atención al detalle.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la transparencia y la honestidad.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Tecnología con Propósito',
      description: 'Implementamos tecnología que realmente mejora la vida y el trabajo de las personas.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Proyectos Completados' },
    { number: '8', label: 'Marcas Líderes' },
    { number: '50+', label: 'Instaladores Certificados' }
  ];

  const achievements = [
    'Partner certificado de las principales marcas tecnológicas',
    'Más de 500 instalaciones exitosas en diferentes sectores',
    'Equipo técnico altamente especializado y certificado',
    'Soporte 24/7 para todos nuestros clientes',
    'Presencia en múltiples países de Latinoamérica',
    'Reconocimiento por excelencia en servicio al cliente'
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#262626] mb-6">
            Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas en soluciones tecnológicas integrales, con más de 15 años
            de experiencia conectando el futuro digital.
          </p>
        </div>

        {/* Company Logo and Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/assets/Alcayato_sq_logo.svg"
                alt="Alcayato"
                className="h-16 w-auto mr-4"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjAwIDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjMUJBRTJGIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUxDQVlBVE88L3RleHQ+CjxzdmU+';
                }}
              />
              <div>
                <h3 className="text-2xl font-mont-bold text-[#262626]">Alcayato</h3>
                <p className="text-gray-600">Conectando el futuro digital</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En Alcayato, nos especializamos en brindar soluciones tecnológicas integrales
              para instaladores y empresas del sector. Nuestra experiencia abarca desde
              cableado estructurado y redes empresariales hasta sistemas de seguridad
              y automatización de edificios.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos con las marcas más reconocidas del mercado para garantizar
              que nuestros clientes tengan acceso a la tecnología más avanzada y
              confiable disponible.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-[#3C3473] to-[#262626] rounded-xl text-white">
                <div className="text-3xl font-mont-heavy mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3C3473] to-[#262626] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-mont-bold text-[#262626] mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Facilitar la transformación digital de las empresas a través de soluciones
              tecnológicas innovadoras y un acompañamiento integral que asegure el éxito
              de cada proyecto.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3C3473] to-[#262626] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-mont-bold text-[#262626] mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser el referente latinoamericano en soluciones tecnológicas integrales,
              reconocidos por nuestra excelencia técnica, innovación constante y
              compromiso con el crecimiento de nuestros clientes.
            </p>
          </div>

          {/* Values Preview */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3C3473] to-[#262626] rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-mont-bold text-[#262626] mb-4">Valores</h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestros valores fundamentales guían cada decisión y acción:
              precisión técnica, confianza mutua y tecnología con propósito real.
            </p>
          </div>
        </div>

        {/* Values Detail */}
        <div className="mb-20">
          <h3 className="text-3xl font-mont-bold text-[#262626] text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-mont-bold text-[#262626] mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-mont-bold text-[#262626] mb-6">
                Nuestros Logros
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A lo largo de nuestra trayectoria, hemos alcanzado importantes hitos
                que reflejan nuestro compromiso con la excelencia y la innovación.
              </p>

              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#3C3473] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-[#3C3473] mr-3" />
                  <h4 className="text-lg font-mont-bold text-[#262626]">Equipo Experto</h4>
                </div>
                <p className="text-gray-600">
                  Contamos con un equipo de profesionales altamente capacitados
                  y certificados por las principales marcas del sector.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-[#3C3473] mr-3" />
                  <h4 className="text-lg font-mont-bold text-[#262626]">Presencia Regional</h4>
                </div>
                <p className="text-gray-600">
                  Operamos en múltiples ciudades del país, brindando
                  soporte local con estándares internacionales de calidad.
                </p>
              </div>

              <a
                href="https://grupotse.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-[#3C3473] text-white rounded-lg font-semibold hover:bg-[#6C60BF] transition-colors flex items-center justify-center"
              >
                Conocer Más
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

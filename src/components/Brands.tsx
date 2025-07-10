import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { brands } from '../data/products';

export default function Brands() {
  return (
    <section id="marcas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#262626] mb-6">
            Marcas Líderes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabajamos con las marcas más reconocidas del sector para ofrecer
            productos de la más alta calidad y tecnología de vanguardia.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/products/${brand.id}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="p-8 text-center">
                {/* Brand Logo */}
                <div className="h-20 flex items-center justify-center mb-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300 ${
                      ['bose', 'honeywell-security', 'huawei'].includes(brand.id) ? 'max-h-32' : 'max-h-16'
                    }`}
                  />
                  <div
                    className="hidden w-full h-16 rounded-lg items-center justify-center text-white font-mont-bold text-lg"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.name}
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="text-xl font-mont-bold text-[#262626] mb-3 group-hover:text-[#3C3473] transition-colors">
                  {brand.name}
                </h3>

                {/* Brand Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {brand.description}
                </p>

                {/* Product Count */}
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {brand.products.length} productos disponibles
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center text-[#3C3473] font-semibold text-sm group-hover:text-[#2563EB] transition-colors">
                  <span>Ver Productos</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section - Partnership Benefits */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#262626] to-[#3C3473] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-mont-bold mb-6">
                  Alianzas Estratégicas
                </h3>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  Nuestras alianzas con marcas líderes mundiales nos permiten ofrecer
                  las mejores soluciones tecnológicas con soporte especializado y
                  garantías extendidas.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3C3473] rounded-full mr-3"></div>
                    <span>Certificaciones oficiales</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3C3473] rounded-full mr-3"></div>
                    <span>Soporte técnico especializado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3C3473] rounded-full mr-3"></div>
                    <span>Garantías extendidas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#3C3473] rounded-full mr-3"></div>
                    <span>Capacitación continua</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="text-3xl font-mont-heavy mb-2">120+</div>
                  <div className="text-sm opacity-90">Productos disponibles</div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      if (window.openSalesIQChat) {
                        window.openSalesIQChat();
                      }
                    }}
                    className="w-full md:w-auto bg-white text-[#262626] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Solicitar Catálogo
                  </button>
                  <button
                    onClick={() => {
                      if (window.openSalesIQChat) {
                        window.openSalesIQChat();
                      }
                    }}
                    className="w-full md:w-auto border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#262626] transition-colors"
                  >
                    Contactar Distribuidor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

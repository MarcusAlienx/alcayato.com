import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getBrandById } from '../data/products';

export default function ProductsPage() {
  const { brandId } = useParams<{ brandId: string }>();

  if (!brandId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Marca no encontrada</h2>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-[#6C60BF] text-white rounded-lg hover:bg-[#6C60BF] transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const brand = getBrandById(brandId);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Marca no encontrada</h2>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-[#6C60BF] text-white rounded-lg hover:bg-[#6C60BF] transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#262626] to-[#3C3473] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              to="/#marcas"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const element = document.getElementById('marcas');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const element = document.getElementById('marcas');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver a marcas
            </Link>
            <img
              src={brand.logo}
              alt={brand.name}
              className={`mx-auto mb-6 filter brightness-0 invert ${
                ['bose', 'honeywell-security', 'huawei'].includes(brand.id) ? 'h-32' : 'h-16'
              }`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Productos {brand.name}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                brandName={brand.name}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { ShoppingCart, Check, Star } from 'lucide-react';
import type { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface ProductCardProps {
  product: Product;
  brandName: string;
}

export default function ProductCard({ product, brandName }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToQuote } = useQuote();

  const handleAddToQuote = () => {
    addToQuote(product, brandName);
    setIsAdded(true);

    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6C60BF]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-[#6C60BF]" />
              </div>
              <p className="text-sm text-gray-500 font-medium">{product.name}</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-[#6C60BF] text-white text-xs font-semibold rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-mont-bold text-gray-800 mb-2 group-hover:text-[#6C60BF] transition-colors">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-mont-semibold text-gray-800 mb-2">Características principales:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-[#6C60BF] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{product.features.length - 3} características más...
              </li>
            )}
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddToQuote}
          disabled={isAdded}
          className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
            isAdded
              ? 'bg-green-500 text-white'
              : 'bg-[#6C60BF] text-white hover:bg-[#6C60BF] hover:shadow-lg hover:transform hover:scale-105'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Añadido a Cotización
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Añadir a Cotización
            </>
          )}
        </button>

        {/* Brand Badge */}
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {brandName}
          </span>
        </div>
      </div>
    </div>
  );
}

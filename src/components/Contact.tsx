import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ShoppingCart,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function Contact() {
  const { items, updateQuantity, removeFromQuote, clearQuote } = useQuote();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the data including any quoted products
      const quotedProducts = items.map(item => ({
        name: item.product.name,
        category: item.product.category,
        brand: item.brandName,
        quantity: item.quantity
      }));

      const payload = {
        ...formData,
        quotedProducts
      };

      // Send to backend (make sure your backend is running)
      const response = await fetch('http://localhost:5000/api/zoho/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (err) {
          console.error('Error parsing response:', err);
        }
        console.error('Backend error:', errorData);
        setSubmitStatus({
          type: 'error',
          message: `Error al enviar el formulario: ${(errorData as any).error || 'Inténtalo de nuevo más tarde.'}`
        });
      }
    } catch (error) {
      console.error('Network or other error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión al enviar el formulario. Asegúrate de que el servidor backend esté activo o inténtalo más tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mont-heavy text-[#1B1E2F] mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarle con su próximo proyecto. Contáctenos para una
            consultoría personalizada y cotización sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1B1E2F] to-[#3E8DFF] rounded-2xl p-8 text-white h-fit">
              <h3 className="text-2xl font-mont-bold mb-8">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-mont-semibold mb-1">Email</h4>
                    <p className="opacity-90">contacto@alcayato.com</p>
                    <p className="opacity-90">ventas@alcayato.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-mont-semibold mb-1">Teléfono</h4>
                    <p className="opacity-90">(+52) 332696-4466</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-mont-semibold mb-1">Dirección</h4>
                    <p className="opacity-90">Turquesa 3246</p>
                    <p className="opacity-90">Guadalajara, Jalisco, 44550, México</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-mont-semibold mb-4">Horarios de Atención</h4>
                <div className="space-y-2 text-sm opacity-90">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-mont-semibold mb-4">Soporte 24/7</h4>
                <p className="text-sm opacity-90">
                  Para emergencias técnicas, nuestro equipo de soporte está disponible
                  las 24 horas del día, los 7 días de la semana.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form and Quote */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Quote Items */}
              {items.length > 0 && (
                <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-mont-bold text-[#1B1E2F] flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Productos en Cotización ({items.length})
                    </h3>
                    <button
                      onClick={clearQuote}
                      className="text-gray-500 hover:text-red-500 transition-colors text-sm"
                    >
                      Limpiar todo
                    </button>
                  </div>

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-mont-semibold text-[#1B1E2F] text-sm">{item.product.name}</h4>
                          <p className="text-gray-500 text-xs">{item.brandName} - {item.product.category}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 bg-[#3E8DFF] text-white rounded-full flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromQuote(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <div className="mt-8">
                <h3 className="text-lg font-mont-bold text-[#1B1E2F] mb-6">Formulario de Contacto</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="company" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-8 py-3 rounded-lg font-mont-semibold text-white transition-colors ${
                        isSubmitting ? 'bg-[#2563EB]/70 cursor-not-allowed' : 'bg-[#2563EB] hover:bg-[#3E8DFF]'
                      }`}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    </button>
                  </div>
                </form>
                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

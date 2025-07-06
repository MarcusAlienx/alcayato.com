import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShoppingCart,
  X,
  Plus,
  Minus,
  CheckCircle,
  AlertCircle
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
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const submitData = {
        ...formData,
        quotedProducts: items.map(item => ({
          productName: item.product.name,
          brandName: item.brandName,
          quantity: item.quantity,
          description: item.product.description,
          category: item.product.category
        }))
      };

      const response = await fetch(import.meta.env.VITE_ZOHO_API_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        clearQuote();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
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
                    <p className="opacity-90">+1 (555) 123-4567</p>
                    <p className="opacity-90">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-mont-semibold mb-1">Dirección</h4>
                    <p className="opacity-90">Calle Principal 123</p>
                    <p className="opacity-90">Ciudad, País 12345</p>
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

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent transition-colors"
                      placeholder="Su nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent transition-colors"
                      placeholder="su@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent transition-colors"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mont-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3E8DFF] focus:border-transparent transition-colors resize-none"
                    placeholder="Describa su proyecto o necesidades específicas..."
                  />
                </div>

                {/* Status Messages */}
                {submissionStatus === 'success' && (
                  <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</span>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Error al enviar el mensaje. Por favor, inténtelo de nuevo.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3E8DFF] text-white py-4 px-8 rounded-lg hover:bg-[#2563EB] transition-colors font-mont-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {items.length > 0 ? 'Enviar Cotización' : 'Enviar Mensaje'}
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Al enviar este formulario, acepta que procesemos sus datos para responder a su consulta.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

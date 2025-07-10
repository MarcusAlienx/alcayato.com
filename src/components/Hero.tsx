import { ArrowRight, Network, Shield, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#262626] via-[#2A2D42] to-[#3C3473]"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6C60BF] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#94989c] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-16 mt-24">
            <Zap className="w-4 h-4 mr-2 text-[#3E8DFF]" />
            Soluciones Tecnológicas Avanzadas
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mont-heavy text-white mb-6 leading-tight">
            Conectamos el
            <span className="block bg-gradient-to-r from-[#3C3473] to-[#6C60BF] bg-clip-text text-transparent pb-2">
              Futuro Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Especialistas en <strong>redes</strong>, <strong>cableado estructurado</strong>,
            <strong> seguridad</strong> y <strong>automatización de edificios</strong>.
            Transformamos espacios con tecnología de vanguardia.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
              <Network className="w-5 h-5 mr-2 text-[#3E8DFF]" />
              <span className="font-medium">Redes Empresariales</span>
            </div>
            <div className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
              <Shield className="w-5 h-5 mr-2 text-[#3E8DFF]" />
              <span className="font-medium">Sistemas de Seguridad</span>
            </div>
            <div className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
              <Zap className="w-5 h-5 mr-2 text-[#3E8DFF]" />
              <span className="font-medium">Automatización BMS</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('marcas')}
              className="group px-8 py-4 bg-[#3C3473] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#2563EB] hover:transform hover:scale-105 hover:shadow-2xl flex items-center"
            >
              Ver Productos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#1B1E2F] hover:transform hover:scale-105"
            >
              Solicitar Cotización
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mont-heavy text-[#3E8DFF] mb-2">8+</div>
              <div className="text-white/80 text-lg">Marcas Líderes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mont-heavy text-[#3E8DFF] mb-2">500+</div>
              <div className="text-white/80 text-lg">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-mont-heavy text-[#3E8DFF] mb-2">24/7</div>
              <div className="text-white/80 text-lg">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

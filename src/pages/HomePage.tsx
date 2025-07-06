import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Brands from '../components/Brands';
import Resources from '../components/Resources';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Brands />
        <Resources />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

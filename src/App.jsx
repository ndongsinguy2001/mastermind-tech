import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';
import Hero from './sections/Hero';
import Expertise from './sections/Expertise';
import Services from './sections/Services';
import Solutions from './sections/Solutions';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import WhyUs from './sections/WhyUs';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement (à ajuster selon les besoins)
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Services />
        <Solutions />
        <About />
        <Technologies />
        <Portfolio />
        <Process />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
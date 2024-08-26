  
import { useEffect } from 'react'
import './App.css'
import HeroSection from './components/banner'
import ContactSection from './components/ContactSection'
import GallerySection from './components/GallerySection'
 import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = {
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <div>
        <HeroSection title="Peluquería YuBarb" description="Tu peluquero de confianza" imageUrl="home.webp" />
        <ServicesSection className="section" />
        <TestimonialsSection className="section" />
        <GallerySection className="section" />
        <ContactSection className="section" />
      </div>
    </>
  );
}

export default App;
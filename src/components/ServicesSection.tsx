import React from "react";
import "../styles/service.css"
export interface SectionProps {
  className?: string;
}

const services = [
  {
    title: 'Corte de Cabello',
    description: 'Cortes modernos y clásicos adaptados a tu estilo.',
    price: '$3000',
  },
  {
    title: 'Coloración',
    description: 'Tintes de alta calidad para un cambio de look vibrante.',
    price: '$3580',
  },
  {
    title: 'Tratamiento Capilar',
    description: 'Cuida tu cabello con nuestros tratamientos profesionales.',
    price: '$2000',
  },
  // Agrega más servicios según sea necesario
];

const ServicesSection: React.FC<SectionProps> = ({ className }) => {
  return (
    <section id="services" className={`py-16 bg-gray-100 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 text-shadow-md">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-black bg-opacity-75 text-white p-6 rounded-lg shadow-lg animate-wave"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-shadow-lg">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-shadow-md">{service.description}</p>
                <span className="text-lg font-semibold text-shadow-lg">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

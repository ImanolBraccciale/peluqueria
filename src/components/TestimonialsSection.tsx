import { SectionProps } from "./ServicesSection";

 

const testimonials = [
  {
    name: 'Juan Pérez',
    feedback: 'Excelente servicio, el mejor corte que he recibido.',
  },
  {
    name: 'María García',
    feedback: 'Me encantó el tratamiento capilar, mi cabello nunca ha estado tan suave.',
  },
  {
    name: 'Carlos Ruiz',
    feedback: 'El personal es muy profesional y atento, definitivamente volveré.',
  },
  // Agrega más testimonios según sea necesario
];

const TestimonialsSection:React.FC<SectionProps>  = ({ className }) => {
    return (
      <section id="testimonials" className={`py-16 bg-pattern bg-cover bg-fixed ${className}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-white-800 text-shadow-lg">Testimonios de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-xl">
                <p className="text-gray-700 italic mb-4 text-shadow-md">"{testimonial.feedback}"</p>
                <h3 className="text-xl font-bold text-right text-gray-800 text-shadow-l">- {testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default TestimonialsSection;

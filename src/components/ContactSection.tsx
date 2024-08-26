import { SectionProps } from "./ServicesSection";

 
const ContactSection:React.FC<SectionProps> = ({className}) => {
  return (
    <section id="contact" className={`py-16 bg-black ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <p className="text-white-700 mb-4">Dirección: Calle Falsa 123, Ciudad</p>
            <p className="text-white-700 mb-4">Teléfono: (123) 456-7890</p>
            <p className="text-white-700 mb-4">Email: contacto@peluqueria.com</p>
            <p className="text-white-700">Horario: Lunes a Sábado, 9:00 AM - 7:00 PM</p>
            <div className="mt-8 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-white hover:text-blue-600">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.9559252153169!3d-37.817209979751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a06acb1e1f0!2sFederation+Square!5e0!3m2!1sen!2sau!4v1532582341270"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
              title="Ubicación"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default ContactSection;

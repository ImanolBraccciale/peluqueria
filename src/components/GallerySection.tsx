import { SectionProps } from "./ServicesSection";

 
const galleryImages = [
  'img2.png',
  'img5.png',
  'img3.png',


];

const GallerySection:React.FC<SectionProps> = ({className}) => {
  return (
    <section id="gallery" className={`py-16 bg-gray-900 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white text-shadow-lg">Galería de Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Trabajo ${index + 1}`} className="w-full h-full object-cover border border-gray-800"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default GallerySection;

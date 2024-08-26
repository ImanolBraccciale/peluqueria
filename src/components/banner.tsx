import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl }) => {
  return (
    <div id='home' className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen con difuminado en los bordes */}
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Pseudo-elemento para el difuminado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      </div>

      {/* Título y descripción */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base max-w-lg">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;

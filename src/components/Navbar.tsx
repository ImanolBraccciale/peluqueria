import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full z-10 top-0">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <a href="#home">YuBarb</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300 text-shadow-lg">Inicio</a>
          <a href="#services" className="text-white hover:text-gray-300 text-shadow-lg">Servicios</a>
           <a href="#testimonials" className="text-white hover:text-gray-300  text-shadow-lg">Testimonios</a>
           <a href="#gallery" className="text-white hover:text-gray-300 text-shadow-lg">Trabajos</a>
          <a href="#contact" className="text-white hover:text-gray-300 text-shadow-lg">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden   bg-black bg-opacity-10  px-2 pt-2 pb- space-y-1 sm:px-3">
          <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium text-shadow-lg">Home</a>
          <a href="#services" className="text-white block px-3 py-2 rounded-md text-base font-medium text-shadow-lg">Servicios</a>
          <a href="#pricing" className="text-white block px-3 py-2 rounded-md text-base font-medium text-shadow-lg">Precios</a>
          <a href="#testimonials" className="text-white block px-3 py-2 rounded-md text-base font-medium text-shadow-lg">Testimonios</a>
          <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium text-shadow-lg">Nosotros</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

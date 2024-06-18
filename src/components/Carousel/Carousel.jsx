import React, { useRef, useEffect, useState } from 'react';

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true); // Mostrar inicialmente la flecha derecha

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;

      // Mostrar la flecha izquierda si hay espacio para desplazarse hacia la izquierda
      setShowLeftArrow(scrollLeft > 0);

      // Mostrar la flecha derecha si hay espacio para desplazarse hacia la derecha
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1); // Ajuste para considerar el desbordamiento de precisión
    }
  };

  useEffect(() => {
    // Configurar el listener de scroll y llamar a handleScroll inicialmente
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll);
    }

    handleScroll(); // Llamar a handleScroll inicialmente para determinar la visibilidad de las flechas

    // Limpiar el listener de scroll en el cleanup del useEffect
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <style>
        {`
          /* Ocultar la barra de desplazamiento */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Flecha Izquierda */}
      <button
        ref={leftArrowRef}
        className={`absolute left-2 z-10 p-2 bg-black text-white rounded-full ${showLeftArrow ? '' : 'hidden'}`}
        onClick={scrollLeft}
      >
         <img
            src="src/assets/arrow-filled.svg"
            alt=""
            
          />
      </button>

      {/* Contenedor del Carrusel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 py-4 px-2 scrollbar-hide"
        style={{ overflow: 'hidden' }}
      >
        {children}
      </div>

      {/* Flecha Derecha */}
      <button
        ref={rightArrowRef}
        className={`absolute right-2 z-10 p-2 bg-black text-white rounded-full ${showRightArrow ? '' : 'hidden'}`}
        onClick={scrollRight}
      >
         <img
            src="src/assets/arrow-filled.svg"
            alt=""
            className="rotate-180"
          />
      </button>
    </div>
  );
};

export default Carousel;

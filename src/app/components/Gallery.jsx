import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const slides = [
  {
    src: '/gallery/back-gallery01.webp',
    title: 'Explora nuestra galería 1',
    description: 'Una selección de imágenes que reflejan el espíritu de nuestro proyecto.',
  },
  {
    src: '/gallery/back-gallery02.webp',
    title: 'Conectando a través del arte',
    description: 'Historias que inspiran, conectan y transforman.',
  },
  {
    src: '/gallery/back-gallery03.webp',
    title: 'Momentos únicos',
    description: 'Capturas que muestran el poder de la comunidad.',
  },
  {
    src: '/gallery/back-gallery04.webp',
    title: 'Creatividad sin límites',
    description: 'El arte como forma de expresión y cambio.',
  },
  {
    src: '/gallery/back-gallery05.webp',
    title: 'Colores que cuentan historias',
    description: 'Una mirada visual a nuestras experiencias.',
  },
];

export const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="relative w-full md:h-[700px] h-[300px] bg-muted text-text-primary overflow-hidden"
    >
      {/* Swiper Slider */}
   {/* Contenedor del slider con flechas */}
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Flecha izquierda */}
        <button
          className="custom-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 text-4xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)] flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>

        {/* Swiper Slider */}
       <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
  allowTouchMove={true}
  pagination={false}
  className="w-full h-full"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full h-full">
        {/* Imagen de fondo */}
        <img
          src={slide.src}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 opacity-20" />
  {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 opacity-20"></div>

        {/* Texto encima del slide */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 text-center px-4">
          <div className="text-white max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg">{slide.description}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        {/* Flecha derecha */}
        <button
          className="custom-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 text-6xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)] flex"
          aria-label="Siguiente"
        >
         <ChevronRight className="w-12 h-12" />
        </button>
      </div>

    
     
    
    </section>
  );
};

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const images = [
  '/gallery/back-gallery01.webp',
  '/gallery/back-gallery02.webp',
  '/gallery/back-gallery03.webp',
  '/gallery/back-gallery04.webp',
  '/gallery/back-gallery05.webp',

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
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full md:h-[700px] h-[300px] object-cover"
              />
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

      {/* Overlay oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 opacity-20"></div>

      {/* Contenido opcional encima del overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 ">
        {/* Podés poner un título o botón aquí si querés */}
        {/* <h2 className="text-white text-4xl font-bold">{t('gallery_title')}</h2> */}
      </div>
    </section>
  );
};

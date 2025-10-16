"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

export const MobileGallery = ({ slides, t }) => {
  return (
    <div className="w-full h-[300px] md:h-[1200px] relative">
      {/* Flechas */}
      <button
        className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-30 text-4xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)]"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        allowTouchMove={true}
        pagination={false}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
              <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center z-20 text-center px-4 py-4">
                <div className="text-white max-w-2xl">
                  <h2 className="text-lg md:text-5xl font-bold ">
                    {t(`Gallery.${slide.key}.title`)}
                  </h2>
                  <p className="text-base md:text-lg">
                    {t(`Gallery.${slide.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha derecha */}
      <button
        className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-30 text-4xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)]"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  );
};

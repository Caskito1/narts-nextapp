"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

export const DesktopGallery = ({ slides, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Grid */}
      <div className="hidden sm:block py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-10 max-w-[1400px] mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <img
                src={slide.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center text-center px-4">
                <div className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500">
                  <h3 className="text-xl font-bold mb-2">
                    {t(`Gallery.${slide.key}.title`)}
                  </h3>
                  <p className="text-sm">
                    {t(`Gallery.${slide.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>

          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300">
            <ChevronRight className="w-10 h-10" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={false}
            autoplay={isOpen ? { delay: 4000, disableOnInteraction: false } : false}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            initialSlide={startIndex}
            className="w-full h-full max-w-5xl"
            observer={isOpen}
            observeParents={isOpen}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center w-full h-full px-4">
                  <img
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    className="object-contain max-h-[80vh] rounded-xl"
                    loading="lazy"
                  />
                  <div className="text-center text-white mt-6">
                    <h2 className="text-2xl font-bold mb-2">
                      {t(`Gallery.${slide.key}.title`)}
                    </h2>
                    <p className="text-base">
                      {t(`Gallery.${slide.key}.description`)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

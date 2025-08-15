"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partners = [
  { id: 1,  img: "/partners/sponsor01.webp" },
  { id: 2,  img: "/partners/sponsor02.webp" },
  { id: 3,  img: "/partners/sponsor03.webp" },
  { id: 4,  img: "/partners/sponsor04.webp" },
  // { id: 5,  img: "/partners/sponsor05.webp" },
];

export const Partners = () => {
  const { t } = useLanguage();


  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary relative px-4 py-12"
      id="partners"
    >
      <h2 className="text-3xl font-bold mb-6">{t("Partners.title")}</h2>

      <div className="w-full max-w-6xl relative flex items-center">
        <button className="custom-prev absolute -left-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex -ml-6 ">
          <ChevronLeft className="w-12 h-12 text-[var(--color-secondary)] hover:text-[var(--color-text-primary)] " />
        </button>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {partners.map((partners) => (
            <SwiperSlide key={partners.id} className="p-[10px]">
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:scale-[1.03] transition-transform duration-300 "
                
              >
                <Image
                  src={partners.img}
                  alt={`Sponsor ${partners.id}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-next absolute -right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex -mr-6">
          <ChevronRight className="w-12 h-12 text-[var(--color-secondary)] hover:text-[var(--color-text-primary)]" />
        </button>
      </div>

      <div className="custom-pagination flex md:hidden justify-center gap-2 mt-6" />


    </section>
  );
};

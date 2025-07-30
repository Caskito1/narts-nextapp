"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    key: "project1",
    img: "/projects/project-card.webp",
  },
  {
    id: 2,
    key: "project2",
    img: "/projects/project-card.webp",
  },
  {
    id: 3,
    key: "project3",
    img: "/projects/project-card.webp",
  },
  {
    id: 4,
    key: "project4",
    img: "/projects/project-card.webp",
  },
  {
    id: 5,
    key: "project5",
    img: "/projects/project-card.webp",
  },
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary relative px-4 py-12"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-6">{t("Projects.title")}</h2>

      <div className="w-full max-w-6xl relative flex items-center">
        {/* Flecha izquierda */}
        <button
          className="custom-prev text-4xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)] absolute -left-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-12 h-12"/>
        </button>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="p-[20px]">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:scale-[1.03] transition-transform duration-300">
                <Image
                  src={project.img}
                  alt={`Imagen de ${t(`Projects.projectCards.${project.key}.title`)}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">
                    {t(`Projects.projectCards.${project.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`Projects.projectCards.${project.key}.shortDescription`)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flecha derecha */}
        <button
          className="custom-next text-4xl text-[var(--color-secondary)] hover:text-[var(--color-text-primary)] absolute -right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>

      {/* Paginación */}
      <div className="custom-pagination flex md:hidden justify-center gap-2 mt-6" />
    </section>
  );
};

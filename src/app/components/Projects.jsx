"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  { id: 1, key: "project1", img: "/projects/project-card.webp" },
  { id: 2, key: "project2", img: "/projects/project-card.webp" },
  { id: 3, key: "project3", img: "/projects/project-card.webp" },
  { id: 4, key: "project4", img: "/projects/project-card.webp" },
  { id: 5, key: "project5", img: "/projects/project-card.webp" },
];

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary relative px-4 py-12"
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-6">{t("Projects.title")}</h2>

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
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="p-[10px]">
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <Image
                  src={project.img}
                  alt={`Imagen de ${t(`Projects.projectCards.${project.key}.title`)}`}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2 min-h-[110px] ">
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

        <button className="custom-next absolute -right-8 top-1/2 -translate-y-1/2 z-10 hidden md:flex -mr-6">
          <ChevronRight className="w-12 h-12 text-[var(--color-secondary)] hover:text-[var(--color-text-primary)]" />
        </button>
      </div>

      <div className="custom-pagination flex md:hidden justify-center gap-2 mt-6" />
      
      {/* MODAL */}
      {selectedProject && (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 px-4 overflow-y-auto flex justify-center md:items-center items-start py-12">
    <div className="bg-white rounded-xl shadow-lg max-w-2xl md:max-w-6xl w-full relative p-12 md:h-[80%] ">
      <button
        className="absolute top-4 right-4 text-gray-700 hover:text-black"
        onClick={closeModal}
        aria-label="Cerrar"
      >
        <X className="w-6 h-6" />
      </button>
      <Image
        src={selectedProject.img}
        alt={`Imagen de ${t(`Projects.projectCards.${selectedProject.key}.title`)}`}
        width={400}
        height={350}
        className=" md:h-64 h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">
        {t(`Projects.projectCards.${selectedProject.key}.title`)}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {t(`Projects.projectCards.${selectedProject.key}.longDescription`)}
      </p>
       {t(`Projects.projectCards.${selectedProject.key}.webSiteProject`) && 
       (<a href={t(`Projects.projectCards.${selectedProject.key}.webSiteProject`)} target="_blank" className="flex items-center"> <p className="uppercase text-md font-ui font-semibold">Ver Sitio </p><ChevronRight/></a>
      )} 
      
    </div>
  </div>
)}
  <div className="flex flex-col justify-center items-center text-center p-16 w-full">
         <p className="md:text-2xl text-base italic text-text-secondary leading-relaxed text-center">
          “{t("Projects.quote")}”
        </p>
         <p className="text-text-secondary md:text-lg text-base">{t("Projects.quoteSignature")}</p>
        </div>
    </section>
  );
};

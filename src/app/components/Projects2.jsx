"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

const projects = [
  { id: 1, key: "project1", img: "/projects/noir-week.webp" , website:true, link:'https://noirweekmiami.com/'},
  { id: 2, key: "project2", img: "/projects/ellas-crean.webp" },
  { id: 3, key: "project3", img: "/projects/letras-con-consciencia.webp" },
  { id: 4, key: "project4", img: "/projects/dialogos-en-colores.webp" },
  { id: 5, key: "project5", img: "/projects/raices-en-trancito.webp" },
];

export const Projects2 = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary relative px-4 py-12"
      id="project2"
    >
      <h2 className="text-3xl font-bold mb-6">{t("Projects.title")}</h2>

      {/* GRID con filas centradas */}
     <div className="w-full max-w-6xl space-y-8">
  {/* fila 1 → 3 cards */}
  <div className="flex justify-center gap-8 md:flex-nowrap flex-wrap">
    {projects.slice(0, 3).map((project) => (
      <div
        key={project.id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer w-full max-w-sm"
        onClick={() => openModal(project)}
      >
        <Image
          src={project.img}
          alt={`Imagen de ${t(`Projects.projectCards.${project.key}.title`)}`}
          width={500}
          height={320}
          className="w-full h-56 object-cover"
        />
        <div className="p-6 space-y-2 min-h-[140px]">
          <h3 className="text-xl font-semibold">
            {t(`Projects.projectCards.${project.key}.title`)}
          </h3>
          <p className="text-sm text-gray-600">
            {t(`Projects.projectCards.${project.key}.shortDescription`)}
          </p>
          {project.website && (
          <a className="flex" href={project.link} target="_blank">
               <p className="uppercase text-md font-ui font-semibold">
                  {t(`Projects.projectCards.${project.key}.websiteButton`)} 
                </p>
                <ChevronRight />
          </a>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* fila 2 → 2 cards centradas */}
  <div className="flex justify-center gap-8 md:flex-nowrap flex-wrap">
    {projects.slice(3).map((project) => (
      <div
        key={project.id}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer w-full max-w-sm "
        onClick={() => openModal(project)}
      >
        <Image
          src={project.img}
          alt={`Imagen de ${t(`Projects.projectCards.${project.key}.title`)}`}
          width={500}
          height={320}
          className="w-full h-56 object-cover"
        />
        <div className="p-6 space-y-2 min-h-[140px]">
          <h3 className="text-xl font-semibold">
            {t(`Projects.projectCards.${project.key}.title`)}
          </h3>
          <p className="text-sm text-gray-600">
            {t(`Projects.projectCards.${project.key}.shortDescription`)}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 px-4 overflow-y-auto flex justify-center md:items-center items-start py-12">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl md:max-w-6xl w-full relative p-12 md:h-[80%] flex flex-col justify-center items-center">
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
              width={600}
              height={400}
              className="md:h-80 h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">
              {t(`Projects.projectCards.${selectedProject.key}.title`)}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4 text-center">
              {t(`Projects.projectCards.${selectedProject.key}.longDescription`)}
            </p>
            {t(`Projects.projectCards.${selectedProject.key}.webSiteProject`) && (
              <a
                href={t(`Projects.projectCards.${selectedProject.key}.webSiteProject`)}
                target="_blank"
                className="flex items-center"
              >
           
                   <p className="uppercase text-xl font-ui font-semibold transform transition-transform duration-300 hover:scale-110 ">
                  {t(`Projects.projectCards.${selectedProject.key}.websiteButton`)}
                </p>
             
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

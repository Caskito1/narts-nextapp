"use client";

import { useLanguage } from "@/context/LanguageContext";


export const Header = () => {
  const { t } = useLanguage();

 return (
    <section className="relative h-screen">
      {/* Imagen de fondo */}

    <img
        src="/sliders/narts-slide01.webp" 
        alt="Fondo cultural"
        className="absolute inset-0 w-full h-full object-cover -scale-x-100"
      />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
    

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-start px-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-snug ">{t("header.title")}</h1>
      </div>
    </section>
  );
};


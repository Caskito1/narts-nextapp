"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { AccordionItem } from "./AccordionItem";

export const AboutUs = () => {
  const [selected, setSelected] = useState("narts");
  const { t } = useLanguage();
  

   const handleTabClick = (key) => {
    if (key === "us") {
      const section = document.getElementById("teams");
      if (section) {
        scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          scrollMode: "if-needed",
        });
      }
    } else {
      setSelected(key);
    }
  };
  const selectedContent = t("AboutUs.content")[selected];
  return (
 <section id="about-us" className="flex flex-col md:flex-row md:min-h-[100vh]">
      {/* Columna Izquierda */}
      <div className="w-full md:w-1/2 bg-background  flex flex-col justify-center md:items-start items-center px-10 pt-10  md:p-20 space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-text-primary ">
          {t("AboutUs.title")}
        </h2>
        <p className="md:text-2xl text-base italic text-text-secondary leading-relaxed max-w-xl md:text-start text-center">
          “{t("AboutUs.quote")}”
        </p>
        <p className="text-text-secondary md:text-lg text-base">— {t("AboutUs.quoteSignature")}</p>
      </div>

      {/* Columna Derecha */}
      <div className="relative w-full md:w-1/2 bg-[#FAF9F6] sm:bg-[#BCC7B3] flex flex-col sm:justify-center md:items-start items-center p-10 md:p-20 space-y-8 md:min-h-[100vh]">
       
      {/* Tabs para mobile */}
<div className="w-full md:hidden mt-2  space-y-2">
  {["narts", "mision", "vision", "us"].map((key, index, arr) => (
    <AccordionItem
      key={key}
      keyName={key}
      label={t(`AboutUs.tabs.${key}`)}
      isOpen={selected === key}
      onClick={(clickedKey) => {
        if (clickedKey === "us") {
          const section = document.getElementById("teams");
          if (section) {
            scrollIntoView(section, {
              behavior: "smooth",
              block: "start",
              scrollMode: "if-needed",
            });
          }
        } else {
         setSelected((prev) => (prev === clickedKey ? null : clickedKey));
        }
      }}
      content={t("AboutUs.content")[key]}
      isFirst={index === 0}
      isLast={index === arr.length - 1}
    />
  ))}
</div>

{/* Tabs para desktop */}
<div className="hidden md:flex gap-4 font-semibold md:items-start mt-12 absolute top-4">
  {["narts", "mision", "vision", "us"].map((key) => (
    <button
      key={key}
      onClick={() => handleTabClick(key)}
      className={`py-2 px-2 md:text-xl text-base transition-all duration-300 cursor-pointer ${
        selected === key
          ? "border-accent text-text-primary border-b-2"
          : "border-transparent text-text-secondary hover:text-text-primary hover:border-muted"
      }`}
    >
      {t(`AboutUs.tabs.${key}`)}
    </button>
  ))}
</div>
      <div className="hidden md:block">
        {/* Contenido dinámico */}
        <h2 className="text-text-primary text-3xl mt-0 pb-8">
          {selectedContent?.title}
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed md:text-start text-center md:text-base text-sm max-w-[700px]">
          {selectedContent?.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
    

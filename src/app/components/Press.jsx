import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const pressData = [
  {
    id: 1,
    key: "press1",
    img: "/press/nota-prensa01.webp",
    link: "https://ejemplo.com/articulo1",
  },
  {
    id: 2,
    key: "press2",
    img: "/press/nota-prensa01.webp",
    link: "https://ejemplo.com/articulo2",
  },
  {
    id: 3,
    key: "press3",
    img: "/press/nota-prensa01.webp",
    link: "https://ejemplo.com/articulo3",
  },
  {
    id: 4,
    key: "press4",
    img: "/press/nota-prensa01.webp",
    link: "https://ejemplo.com/articulo4",
  },
  {
    id: 5,
    key: "press5",
    img: "/press/nota-prensa01.webp",
    link: "https://ejemplo.com/articulo5",
  },
];
export const Press = () => {
  const { t } = useLanguage();
  return (
    <section
      className="min-h-[100dvh] flex flex-col md:flex-row  items-center justify-center bg-background text-text-primary"
      id="press"
    >
      {/* Columna Izquierda - Frase y título */}
      <div className="w-full md:w-1/2 bg-background flex flex-col justify-center md:items-start items-center p-10 md:p-20 space-y-6 ">
        <h2 className="text-4xl md:text-6xl font-bold text-text-primary font-serif ">
          {t("Press.title")}
        </h2>
        <p className="md:text-2xl text-base italic text-text-secondary leading-relaxed max-w-xl md:text-start text-center">
          {t("Press.subtitle")}
        </p>
      </div>

      {/* Columna Derecha - Tabs + contenido */}
      <div className=" relative w-full md:w-1/2 bg-background-alt flex flex-col justify-center md:items-start items-center p-10 md:p-20 space-y-8 min-h-[100vh] ">
        <div className="flex flex-col gap-6 max-w-[700px] w-full">
          {pressData.map((item) => {
            const data = t(`Press.pressCard.${item.key}`, {
              returnObjects: true,
            });
            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-[1.02] hover:shadow-lg md:h-28 h-52 "
              >
                <img
                  src={item.img}
                  alt={data.title}
                  className="w-full md:w-1/3 h-28 object-cover"
                />
                <div className="flex flex-col justify-between p-3 md:w-2/3">
                  <div className="leading-tight">
                    <h3 className="text-base font-semibold text-text-primary truncate">
                      {data.title}
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                  <div className="mt-1">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium text-xs"
                    >
                      {data.button}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

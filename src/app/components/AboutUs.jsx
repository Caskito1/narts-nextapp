"use client";

import { useState } from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

export const AboutUs = () => {
  const [selected, setSelected] = useState("mision");

  const contenido = {
    mision: {
      titulo: "Misión",
      texto: (
        <>
          <p>Impulsamos la cultura como un acto colectivo de transformación.</p>
          <p>
           Desde el cine, la música, el pensamiento, la moda, la literatura, el arte y sus intersecciones, generamos espacios donde la creación se convierte en lenguaje para habitar criticamente el presente.
          </p>
          <p>A traves de programs colaborativos, educación, residencias y acciones públicas, buscamos provocar, cuida y re-imaginar lo común.</p>
        </>
      ),
    },
    vision: {
      titulo: "Objetivos",
      texto: (
        <>
          <p>En NARTS creamos espacios donde la cultura se desborda, se discute y se vive.</p>
          <p>Ser un nodo cultural de referencia regional e internacional, donde la creación no adorna la realidad, sino que la tensiona, la escucha y la transforma. En NARTS, imaginamos una cultura que no se hereda intacta: se reinventa, se comprate y se vive como fuerza política, poética y regenerativa.</p>
          <p>Más que exhibir, conectamos; más que conservar, reimaginamos. Creemos en lo colectivo, lo contradictorio y lo que aún no tiene forma</p>
        </>
      ),
    },
  };

   const handleTabClick = (key) => {
    if (key === "nosotras") {
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
  return (
    <section id="about-us" className="flex flex-col md:flex-row min-h-[100vh]">
      {/* Columna Izquierda - Frase y título */}
      <div className="w-full md:w-1/2 bg-background flex flex-col justify-center md:items-start items-center p-10 md:p-20 space-y-6 ">
        <h2 className="text-4xl md:text-6xl font-bold text-text-primary font-serif ">
          About Us
        </h2>
        <p className="md:text-2xl text-base italic text-text-secondary leading-relaxed max-w-xl md:text-start text-center">
          “El arte no es lo que se ve, sino lo que hace que otros vean.”
        </p>
        <p className="text-text-secondary md:text-lg text-base">— Marcel Duchamp</p>
      </div>

      {/* Columna Derecha - Tabs + contenido */}
      <div className=" relative w-full md:w-1/2 bg-background-alt flex flex-col justify-center md:items-start items-center p-10 md:p-20 space-y-8 min-h-[100vh] ">
      {/* Tabs */}
        <div className="flex gap-4 font-semibold md:items-start  mt-12 absolute top-4  ">
          {["mision", "vision", "nosotras"].map((key) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`py-2 px-2 md:text-xl text-base transition-all duration-300 cursor-pointer ${
                selected === key
                  ? "border-accent text-text-primary border-b-2 "
                  : "border-transparent text-text-secondary hover:text-text-primary hover:border-muted"
              }`}
            >
              {key === "nosotras" ? "Nosotras" : contenido[key].titulo}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <h2 className="text-text-primary text-3xl md:mt-0 mt-16  ">
          {contenido[selected].titulo}
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed md:text-start text-center md:text-base text-sm">
          {contenido[selected].texto}
        </div>
      </div>
    </section>
    
  );
};

"use client";

import { useState } from "react";

export const AboutUs = () => {
  const [selected, setSelected] = useState("mision");

  const contenido = {
    mision: {
      titulo: "Misión",
      texto: (
        <>
          <p>Impulsamos la cultura como un acto colectivo de transformación.</p>
          <p>Desde el cine, la música, el pensamiento, la moda, la literatura...</p>
          <p>A través de programas colaborativos, educación, residencias...</p>
        </>
      ),
    },
    vision: {
      titulo: "Objetivos",
      texto: (
        <>
          <p>En NARTS creamos espacios donde la cultura se desborda...</p>
          <p>Ser un nodo cultural de referencia regional e internacional...</p>
          <p>Más que exhibir, conectamos; más que conservar, reimaginamos...</p>
        </>
      ),
    },
  };

  return (
    <section id="about-us" className="flex flex-col md:flex-row h-screen">
      {/* Columna Izquierda - Frase y título */}
      <div className="w-full md:w-1/2 bg-background flex flex-col justify-center items-start p-10 md:p-20 space-y-6">
        <h2 className="text-5xl md:text-6xl font-bold text-text-primary font-serif">
          About Us
        </h2>
        <p className="text-2xl italic text-text-secondary leading-relaxed max-w-xl">
          “El arte no es lo que se ve, sino lo que hace que otros vean.”
        </p>
        <p className="text-text-secondary text-lg">— Marcel Duchamp</p>
       
      </div>

      {/* Columna Derecha - Tabs + contenido */}
      <div className=" relative w-full md:w-1/2 bg-background-alt flex flex-col justify-center p-10 md:p-20 space-y-8">
       {/* Tabs */}
        <div className="flex gap-4 font-semibold items-start mt-12 absolute top-4   ">
          {["mision", "vision"].map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`py-2 rounded transition duration-300 ${
                selected === key
                  ? "bg-accent text-text-primary text-xl"
                  : "hover:bg-muted text-text-secondary text-xl"
              }`}
            >
             {contenido[key].titulo}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <h2 className="text-text-primary text-3xl">{contenido[selected].titulo}</h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          {contenido[selected].texto}
        </div>
      </div>
    </section>
  );
};

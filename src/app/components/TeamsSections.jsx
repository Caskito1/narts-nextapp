import { useState } from "react";
import { TeamCard } from "./TeamCard";

export const TeamsSections = () => {
  const [activeCard, setActiveCard] = useState(null);

  const members = [
    
    {
      id: "1",
      name: "Alicia Escardó",
      role: "Rol en Narts",
      image: "/about-us/alicia-profile.webp",
      description: (
        <>
          <p>
            Alicia Escardó es una escritora uruguaya, que ha publicado sus
            libros en Uruguay y Argentina. Su narrativa incluye novelas
            juveniles, un libro de relatos, una novela histórica y novelas noir.
          </p>
          <p>
            Recibió varios premios por sus obras, entre ellos el primer premio
            en el Concurso Internacional Horacio Quiroga para “El poder
            invisible” y el Premio de Narrativa del MEC para “Nayla y el
            misterio XO” y “La muerte de Pan”, y nominaciones en el Premio
            Onetti, Bartolomé Hidalgo, y Narradores de Banda Oriental. Como
            gestora cultural ha organizado eventos culturales como “Semana Negra
            Uy”, Encuentro Internacional de novela criminal, Ferias del Libro,
            concursos de relatos policiales, entre otros.
          </p>
          <p>
            Tiene un programa semanal de novela criminal, “La columna negra”.
            Coordina espacios culturales como Espacio CRA en La Floresta, y
            Guarida Casa de Libros en Montevideo. Es vicepresidenta de Narts
            Foundation, que desde 2023 gestiona eventos culturales,
            presentaciones, y distintas actividades relacionadas con el arte y
            la cultura iberoamericana, entre ellos el Festival Noir Week Miami,
            que junto a Miami Book Fair presenta escritores de género negro y
            otras actividades artísticas relacionadas.
          </p>
          <p>
            Estudió en UDELAR (Facultad de Ingeniería) y trabajó durante años
            como consultora en informática, especializada en elearning,
            contenidos educativos y guiones para cursos multimedia. Vivió seis
            años en España, donde ha cursado estudios en la Universidad Pompeu
            Fabra (Barcelona) y UNED (Madrid).
          </p>
        </>
      ),
    },
    {
      id: "2",
      name: "Mariella Bruno",
      role: "Rol en Narts",
      image: "/about-us/mariella-profile.webp",
      description: (
        <>
          <p>
            Arquitecta, gestora cultural y comunicadora, Mariella Bruno es la
            actual sub-directora de la Fundación NARTS. Su formación y
            trayectoria combinan diseño, arte, arquitectura y compromiso social,
            con una visión integradora que impulsa proyectos transformadores
            tanto a nivel local como internacional.
          </p>
          <p>
            Egresada de la Facultad de Arquitectura de la Universidad de la
            República (Uruguay), cuenta con una Maestría en Gestión Cultural y
            una Maestría en Hábitat y Vivienda, lo que le permite abordar el
            desarrollo urbano y comunitario desde una mirada profunda,
            interdisciplinaria y humana.
          </p>
          <p>
            Desde 2007 es presidenta y cofundadora de Ch2 Design en Miami, donde
            diseña y desarrolla espacios residenciales únicos con un enfoque
            sensible, funcional y estético.
          </p>
          <p>
            Ha liderado importantes iniciativas sociales y académicas en
            Uruguay, como integrante del programa “Arquitecto de la Comunidad”
            de la Sociedad de Arquitectos del Uruguay, cofundadora de la ONG
            AIDESUR y coordinadora general del Programa Post Obra SIAV, centrado
            en la mejora del hábitat en contextos vulnerables.
          </p>
          <p>
            En el campo artístico y cultural, fue Directora de Arte del
            Iberoamerican Film Festival Miami, y actualmente conduce el programa
            radial y pódcast “Arte a la Carta”. Además, colabora con la
            publicación cultural Letra Urbana, desde donde reflexiona sobre
            arte, diseño y sociedad.
          </p>
          <p>
            Su liderazgo en la Fundación NARTS se basa en una perspectiva amplia
            y comprometida, que vincula arquitectura, arte, comunidad y
            pensamiento crítico para construir futuros más justos e
            inspiradores.
          </p>
        </>
      ),
    },

  ];

  return (
    <section className="w-full flex flex-col justify-center items-center py-20 bg-muted text-text-primary min-h-[100vh] " id="teams">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-12"> Sobre Nosotras </h1>
        </div>
      <div className=" w-full flex flex-col md:flex-row gap-4 overflow-hidden justify-center items-center">
        {members.map((member) => (
          <TeamCard
            key={member.id}
            isActive={activeCard === member.id}
            isCollapsed={activeCard !== null && activeCard !== member.id}
            onClick={() => setActiveCard(member.id)}
            onClose={() => setActiveCard(null)}
            {...member}
          />
        ))}
      </div>
    </section>
  );
};

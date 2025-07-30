import { useState, useEffect, useRef } from "react";
import { ChevronUp, X } from "lucide-react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

export const TeamCard = ({
  isActive,
  isCollapsed,
  onClick,
  onClose,
  image,
  name,
  role,
  description,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const handleShowFullDescription = () => {
  setShowFullDescription(true);
  if (cardRef.current) {
    scrollIntoView(cardRef.current, {
      behavior: "smooth",
      block: "start",
      scrollMode: "if-needed",
    });
  }
};


  const getFirstParagraph = (desc) => {
    if (!desc?.props?.children) return null;
    const children = desc.props.children;
    return Array.isArray(children)
      ? children.find((el) => el?.type === "p")
      : children;
  };

  const handleCollapse = () => {
    setShowFullDescription(false);
  };

  return (
    <div
      ref={cardRef}
      className={`scroll-offset relative transition-all duration-700 ease-in-out  ${
        isMobile
          ? "w-[90%] md:w-full h-auto"
          : isActive
          ? "w-[1200px] h-[600px] flex"
          : isCollapsed
          ? "w-[100px] h-[600px] flex items-center justify-center"
          : "w-[90%] md:w-[400px] h-[600px] "
      } bg-background shadow-md rounded-lg overflow-hidden flex-shrink-0`}
    >
      {/* MOBILE VIEW: siempre visible ambas con texto reducido */}
{isMobile && (
  <div className="flex flex-col w-full mb-4">
    <img src={image} alt={name} className="w-full h-84 object-cover" />
    <div className="relative p-4 pb-10">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-text-secondary mb-2">{role}</p>

      <div className="text-text-secondary space-y-3">
        {showFullDescription
          ? description
          : getFirstParagraph(description)}
      </div>

      {!showFullDescription ? (
        <button
          className="mt-3 text-sm text-accent underline"
         onClick={handleShowFullDescription}
        >
          Ver más
        </button>
      ) : (
      <ChevronUp 
          className="absolute bottom-0 right-4 flex items-center text-text-secondary text-sm "
          onClick={handleCollapse}
        />
         
      )}
    </div>
  </div>
)}
      {/* ACTIVA - Desktop */}
      {!isMobile && isActive && (
        <>
          <img
            src={image}
            alt={name}
            className="w-[300px] h-full object-cover"
          />
          <div className="flex-1 p-6 flex flex-col justify-between relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl cursor-pointer"
            >
              <X />
            </button>
            <div>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-text-secondary mb-6">{role}</p>
              <div className="text-text-secondary space-y-4">
                {description}
              </div>
            </div>
          </div>
        </>
      )}

   {/* COLAPSADA */}
{!isMobile && isCollapsed && (
  <div
    onClick={onClick}
    className="cursor-pointer flex items-center justify-center w-full h-full"
  >
    <button className="transform md:-rotate-90 whitespace-nowrap text-text-primary tracking-wide">
      Ver perfil de <span className="font-bold">{name}</span>
    </button>
  </div>
)}

{/* CARD NORMAL */}
{!isMobile && !isActive && !isCollapsed && (
  <button
    onClick={onClick}
    className={`relative w-full h-[350px] md:h-full group overflow-hidden cursor-pointer flex flex-col`}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white px-4 py-3 text-left transition-opacity duration-300">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-accent ">{role}</p>
    </div>
  </button>
)}
    </div>
  );
};

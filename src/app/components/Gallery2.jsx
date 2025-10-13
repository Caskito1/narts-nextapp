"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MobileGallery } from "./MobileGallery";
import { DesktopGallery } from "./DesktopGallery";

const slides = [
  { src: "/gallery/back-gallery01.webp", key: "slide1" },
  { src: "/gallery/back-gallery02.webp", key: "slide2" },
  { src: "/gallery/back-gallery03.webp", key: "slide3" },
  { src: "/gallery/back-gallery04.webp", key: "slide4" },
  { src: "/gallery/back-gallery05.webp", key: "slide5" },
  { src: "/gallery/back-gallery06.webp", key: "slide6" },
  { src: "/gallery/back-gallery08.webp", key: "slide8" },
  { src: "/gallery/back-gallery09.webp", key: "slide9" },
  { src: "/gallery/back-gallery10.webp", key: "slide10" },
  { src: "/gallery/back-gallery11.webp", key: "slide11" },
  { src: "/gallery/back-gallery12.webp", key: "slide12" },
  { src: "/gallery/back-gallery13.webp", key: "slide13" },
  { src: "/gallery/back-gallery14.webp", key: "slide14" },
  { src: "/gallery/back-gallery15.webp", key: "slide15" },
];

export const GalleryGrid = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="gallery" className="relative w-full bg-muted py-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl my-12">{t("Gallery.title")}</h1>
      </div>

      {isMobile ? (
        <MobileGallery slides={slides} t={t} />
      ) : (
        <DesktopGallery slides={slides} t={t} />
      )}
    </section>
  );
};

"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        scrollMode: "if-needed",
      });
      setIsMenuOpen(false); // cerrar menú tras scroll
    }
  };

  const menuItems = [
    { label: "about-us", section: "about-us" },
    { label: "projects", section: "projects" },
    { label: "press", section: "press" },
    { label: "contact", section: "contact" },
  ];

  return (
    <>
     <nav
  className={`${
    isMenuOpen ? "hidden" : "flex"
  } justify-between items-center p-4 fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
  }`}
>

        <div className="text-xl font-bold">LOGO</div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center text-lg ">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="cursor-pointer relative  transition-all duration-300 border-b-2 border-transparent hover:border-secondary "
              onClick={() => handleScrollToSection(item.section)}
            >
              {t(`navbar.${item.label}`)}
            </a>
          ))}
          
<LanguageSwitcher isScrolled={isScrolled} />

        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu: slide down/up */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full h-[100dvh] bg-white text-black z-40 flex flex-col md:hidden"
    >
      {/* Top bar: Logo + Close button */}
      <div className="w-full flex justify-between items-center p-4">
        <div className="text-xl font-bold">LOGO</div>
        <button onClick={() => setIsMenuOpen(false)} className="text-black">
          <X size={28} />
        </button>
      </div>

      {/* Centered menu items */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className="text-lg font-medium hover:underline cursor-pointer"
            onClick={() => handleScrollToSection(item.section)}
          >
            {t(`navbar.${item.label}`)}
          </a>
        ))}
      </div>

      {/* Language Switcher with small text */}
      <div className="w-full flex flex-col items-center gap-2 p-4 text-sm">
        <p className="text-gray-500">¿Querés cambiar de idioma?</p> 
     
<LanguageSwitcher isScrolled={true} />


      </div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
}

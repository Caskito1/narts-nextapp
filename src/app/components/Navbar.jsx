"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useLanguage } from "@/context/LanguageContext";


export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };


  const menuItems = [
    { label: "about-us", section: "about-us" },
    { label: "projects", section: "projects" },
    { label: "gallery", section: "gallery" },
    { label: "press", section: "press" },
 
  ];

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 w-full z-50 text-white transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-bold">LOGO</div>
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className="hover:underline cursor-pointer"
            onClick={() => {handleScrollToSection(item.section)}}
          >
            {t(`navbar.${item.label}`)}
          </a>
        ))}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

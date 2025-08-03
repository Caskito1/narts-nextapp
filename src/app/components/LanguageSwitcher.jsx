"use client";

import { Switch } from "@headlessui/react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch({ isScrolled }) {
  const { language, switchLanguage } = useLanguage();
  const isEnglish = language === "en";

  const baseStyles = isScrolled
    ? "bg-white text-black border border-black"
    : "bg-transparent text-white border border-white";

  const circleStyles = isScrolled ? "bg-black" : "bg-white";

  return (
    <Switch
      checked={isEnglish}
      onChange={switchLanguage}
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-200 ${baseStyles}`}
    >
      {/* Texto centrado con opacidad según idioma */}
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
        <span className={`transition-opacity duration-200 ${isEnglish ? "opacity-100" : "opacity-0"}`}>EN</span>
        <span className={`ml-1 transition-opacity duration-200 ${isEnglish ? "opacity-0" : "opacity-100"}`}>ES</span>
      </div>

      {/* Círculo animado */}
      <span
        className={`inline-block h-5 w-5 transform rounded-full transition-transform duration-200 ${circleStyles} ${
          isEnglish ? "translate-x-9.5" : "translate-x-1"
        }`}
      />
    </Switch>
  );
}

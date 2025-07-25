"use client";

import { Switch } from "@headlessui/react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, switchLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <Switch
      checked={isEnglish}
      onChange={switchLanguage}
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-200 ${
        isEnglish ? "bg-white text-black" : "bg-gray-600 text-white"
      }`}
    >
      {/* Texto centrado con opacidad según idioma */}
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
        <span className={`transition-opacity duration-200 ${isEnglish ? "opacity-100" : "opacity-0"}`}>EN</span>
        <span className={`ml-1 transition-opacity duration-200 ${isEnglish ? "opacity-0" : "opacity-100"}`}>ES</span>
      </div>

      {/* Círculo animado */}
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-black transition-transform duration-200 ${
          isEnglish ? "translate-x-9" : "translate-x-1"
        }`}
      />
    </Switch>
  );
}

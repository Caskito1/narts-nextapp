"use client";
import { createContext, useContext, useState } from "react";
import en from "@/language/en.json";
import es from "@/language/es.json";

const languages = { en, es };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => (obj ? obj[k] : ""), languages[language]);
  };

  const switchLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
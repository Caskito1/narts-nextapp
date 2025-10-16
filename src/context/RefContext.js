"use client";
import { createContext, useContext, useRef } from "react";

const SectionRefsContext = createContext(null);

export function SectionRefsProvider({ children }) {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const galleryRef = useRef(null);
  const pressRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    "about-us": aboutRef,
    projects: projectsRef,
    gallery: galleryRef,
    press: pressRef,
    contact: contactRef,
  };

  return (
    <SectionRefsContext.Provider value={sectionRefs}>
      {children}
    </SectionRefsContext.Provider>
  );
}

export function useSectionRefs() {
  return useContext(SectionRefsContext);
}

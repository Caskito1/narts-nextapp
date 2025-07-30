// src/app/components/HomeWrapper.jsx
"use client";

import { Header } from "./Header";
import { AboutUs } from "./AboutUs";
import { Projects } from "./Projects";
import { Gallery } from "./Gallery";
import { Press } from "./Press";
import { TeamsSections } from "./TeamsSections";


export default function HomeWrapper() {
  return (
    <>    
      <Header />
      <AboutUs />
      <TeamsSections />
      <Projects />
      <Gallery />
      <Press />
      
    </>
  );
}

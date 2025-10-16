// src/app/components/HomeWrapper.jsx
"use client";

import { Header } from "./Header";
import { AboutUs } from "./AboutUs";
import { Projects } from "./Projects";
import { Gallery } from "./Gallery";
import { Press } from "./Press";
import { TeamsSections } from "./TeamsSections";
import { Partners } from "./Partners";
import { HeaderVideo } from "./HeaderVideo";
import { Projects2 } from "./Projects2";
import { GalleryGrid } from "./Gallery2";


export default function HomeWrapper() {
  return (
    <>    
      <HeaderVideo   />
      {/* <Header /> */}
      <AboutUs />
      <TeamsSections />
      {/* <Projects /> */}
      <Projects2 />
      {/* <Gallery /> */}
      <GalleryGrid />
      <Press />
      <Partners />
      
    </>
  );
}

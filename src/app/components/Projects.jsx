import { useLanguage } from '@/context/LanguageContext';
import React from 'react'

export const Projects = () => {
     const { t } = useLanguage();
  return (
     <section className="h-screen flex items-center justify-center bg-muted text-text-primary" id='projects'>
       <h1 className="text-4xl">{t("Proyects.title")}</h1>
     </section>
  )
}

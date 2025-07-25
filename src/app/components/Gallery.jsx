import { useLanguage } from '@/context/LanguageContext';
import React from 'react'

export const Gallery = () => {
   const { t } = useLanguage();
   return (
      <section className="h-screen flex items-center justify-center bg-background text-text-primary" id='gallery'>
        <h1 className="text-4xl">{t("Gallery.title")}</h1>
      </section>
   )
 }

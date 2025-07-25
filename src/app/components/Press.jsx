import { useLanguage } from '@/context/LanguageContext';
import React from 'react'

export const Press = () => {
     const { t } = useLanguage();
  return (
    <section className="h-screen flex items-center justify-center bg-muted text-text-primary" id='press'>
       <h1 className="text-4xl">{t("Press.title")}</h1>
     </section>
  )
}

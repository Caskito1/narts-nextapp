import { useLanguage } from '@/context/LanguageContext';
import React from 'react'

export const Contact = () => {
     const { t } = useLanguage();
   return (
      <section className="h-screen flex items-center justify-center bg-background text-text-primary" id='contact'>
        <h1 className="text-4xl">{t("Contact.title")}</h1>
      </section>
   )
 }


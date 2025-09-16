"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, Mail } from "lucide-react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import ContactForm from "./ContactForm";

export default function Footer() {
  const { t } = useLanguage();

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        scrollMode: "if-needed",
      });
    }
  };

  return (
    <footer
      className="bg-[var(--color-text-primary)] text-white py-20 px-6 md:px-20 "
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Info institucional */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="text-sm opacity-80 mb-6">{t("footer.description")}</p>
          <div className="text-sm space-y-1">
            <p>Email: infonaartsfoundation@gmail.com</p>
            <p>Tel: +1 786 375 0035</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contacto@fundacion.org"
                className="hover:text-gray-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
    <ContactForm/>
      </div>

      {/* Navegación inferior */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm border-t border-white border-opacity-10 pt-10">
        <div>
          <ul className="flex items-center md:justify-start justify-center gap-4">
            <li>
              <a
                href="#about-us"
                className="hover:underline "
                onClick={handleScrollToSection}
              >
                {t("navbar.about-us")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline "
                onClick={handleScrollToSection}
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#press"
                className="hover:underline "
                onClick={handleScrollToSection}
              >
                {t("navbar.press")}
              </a>
            </li>
            <li>
              <a
                href="#partners"
                className="hover:underline "
                onClick={handleScrollToSection}
              >
                {t("navbar.partners")}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 text-center md:text-right">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

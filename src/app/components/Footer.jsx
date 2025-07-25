"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  Facebook,
  Instagram,
  Mail,
} from "lucide-react"; // O usa iconos que prefieras

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 - Información */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Fundación Ejemplo</h2>
          <p className="text-sm opacity-80">
            {t("footer.description")}
          </p>
        </div>

        {/* Columna 2 - Navegación */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold mb-1">{t("footer.links")}</h3>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">{t("navbar.home")}</a></li>
            <li><a href="#projects" className="hover:underline">{t("navbar.projects")}</a></li>
            <li><a href="#gallery" className="hover:underline">{t("navbar.gallery")}</a></li>
            <li><a href="#contact" className="hover:underline">{t("navbar.contact")}</a></li>
          </ul>
        </div>

        {/* Columna 3 - Contacto & redes */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold mb-1">{t("footer.contact")}</h3>
          <p>Email: contacto@fundacion.org</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="mailto:contacto@fundacion.org" className="hover:text-gray-300" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs opacity-60 mt-8">
        © {new Date().getFullYear()} Fundación Ejemplo. {t("footer.rights")}
      </div>
    </footer>
  );
}

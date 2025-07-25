"use client";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function Providers({ children }) {
 const pathname = usePathname();
 const isMantenimientoPage = pathname === "/mantenimiento";

  return (
    <LanguageProvider>
      {!isMantenimientoPage && <Navbar />}
      <main>{children}</main>
      {!isMantenimientoPage && <Footer />}
    </LanguageProvider>
  );
}
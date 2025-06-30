// app/page.js
export default function MaintenancePage() {
  return (
    <div className="relative h-screen w-screen font-sans text-white">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/mantenience-back.webp')" }}
      ></div>

      {/* Overlay oscuro con mezcla */}
      <div className="absolute inset-0 bg-black mix-blend-multiply opacity-70 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full p-8 text-center">
        {/* Logo comentado */}
        {/* <img src="/logo.png" alt="Logo" className="mt-10 max-w-[150px]" /> */}

        {/* Encabezado */}
        <div className="mt-20 max-w-[90%] md:max-w-xl text-center ">
          <div className="flex items-center justify-center gap-3 text-m md:text-xl flex-wrap pb-8">
            {/* Engranaje girando */}
            <svg
              className="w-8 h-8  text-white"
              style={{ animation: "spin 4s linear infinite" }}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .66.42 1.25 1.04 1.47.45.15.91.26 1.4.32.36.04.56.06.56.21v.02a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            <h2 className="font-medium">Site Under Maintenance</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Narts Foundation
          </h1>
        </div>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center mb-10 bg-black/40 px-6 py-4 rounded-lg text-lg w-full max-w-xl mx-auto">
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-cyan-300">
            <img
              src="/icons/mail-icon.webp"
              alt="Mail"
              className="w-6 h-6 object-contain"
            />
            <a
              href="mailto:infonaartsfoundation@gmail.com"
              className="hover:underline transition-colors duration-300"
            >
               infonaartsfoundation@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:text-green-300">
            <img
              src="/icons/wsp-icon.webp"
              alt="WhatsApp"
              className="w-6 h-6 object-contain"
            />
            <a
              href="tel:+17863750035"
              className="hover:underline transition-colors duration-300"
            >
              +1 (786) 375-0035
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

"use client";

export const HeaderVideo = () => {
  return (
    <section className="relative h-screen">
      {/* Video de fondo */}
      <video
        src="/videos/header-desktop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hideen sm:block"
      />
      <video
        src="/videos/header-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />


      {/* Contenido vacío (solo overlay y video) */}
      <div className="relative z-10 h-full flex items-center justify-start px-10">
        {/* Si en el futuro querés meter contenido, va aquí */}
      </div>
    </section>
  );
};

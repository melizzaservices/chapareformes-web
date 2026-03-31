"use client";

import { motion } from "framer-motion";

export default function Hero({ locale }: { locale: "fr" | "es" | "en" }) {
  const titles = {
    fr: { head: "L'Excellence", sub: "Haussmannienne", p: "20 ans de perfection à Paris." },
    es: { head: "La Excelencia", sub: "Haussmanniana", p: "20 años de perfección en París." },
    en: { head: "The Excellence", sub: "Of Haussmann", p: "20 years of perfection in Paris." }
  };
  const t = titles[locale] || titles.fr;

  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center bg-textPrimary">
      {/* Background Video 4K Veo 3.1 */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="https://chapareformes.paris/assets/poster-placeholder.jpg"
        >
          {/* Veo 3.1 Generated Video Placeholder */}
          <source src="https://videos.chapareformes.paris/veo-3.1-timelapse-haussmann.mp4" type="video/mp4" />
        </video>
        {/* Gradiente sutil para legibilidad y profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl text-background font-serif font-light mb-6 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.head} <br />
          <span className="text-brass italic font-medium">{t.sub}</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-limestone font-sans font-light tracking-wide max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {t.p}
        </motion.p>
      </div>
    </section>
  );
}

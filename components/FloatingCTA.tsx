"use client";

import { motion } from "framer-motion";

export default function FloatingCTA({ locale }: { locale: "fr" | "es" | "en" | "ar" }) {
  const ctaText = {
    fr: "Appel Immédiat",
    es: "Llamada Inmediata",
    en: "Call Now",
    ar: "اتصل الآن"
  };
  const text = ctaText[locale] || ctaText.fr;

  return (
    <div className="fixed bottom-8 right-8 z-50 rtl:left-8 rtl:right-auto flex items-center group">
      {/* Texto expandible al hacer hover para revelar intencionalidad de forma elegante */}
      <motion.div
        className="hidden md:flex absolute right-16 px-5 py-2.5 bg-textPrimary text-background rounded-l-full font-sans text-xs tracking-[0.2em] uppercase shadow-lg rtl:left-16 rtl:right-auto rtl:rounded-r-full rtl:rounded-l-none pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
      >
        {text}
      </motion.div>

      {/* Botón Principal (Latón Cepillado) */}
      <motion.a
        href="tel:+33123456789"
        className="relative flex items-center justify-center w-16 h-16 bg-brass rounded-full shadow-2xl transition-all duration-300 hover:bg-brass-light hover:shadow-brass/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={text}
      >
        {/* Efecto Pulso Permanente */}
        <span className="absolute w-full h-full rounded-full bg-brass animate-pulse-ring"></span>
        
        {/* Icono minimalista y Premium */}
        <svg className="w-6 h-6 text-background relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.a>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteContent } from "@/content/content";

export default function Hero() {
  const { lang } = useLanguage();
  const t = siteContent[lang].hero;

  return (
    <section className="relative flex items-center justify-center min-h-[100vh] overflow-hidden">
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Mobile video */}
        <source
          src="/video2.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />

        {/* Desktop video */}
        <source
          src="/video2.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

   

    

      {/* CENTER TEXT */}
      <motion.div
        className={`relative z-10 px-6 ${
          lang === "ar" ? "text-right" : "text-center"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fffdf8]"
        >
          {t.title}
        </motion.h1>

      </motion.div>
    </section>
  );
}

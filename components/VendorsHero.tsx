"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function VendorsHero() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      className="relative w-full h-[660px] md:h-[520px] overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* IMAGE */}
      <Image
        src="/evolving2.jpg"
        alt="Vendors"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex items-center justify-center px-[5vw]"
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          {isArabic ? "الباعة" : "Our Vendors"}
        </h1>
      </motion.div>
    </section>
  );
}
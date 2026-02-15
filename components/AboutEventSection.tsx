"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import DecorativePattern4 from "./DecorativePattern4";
import { useLanguage } from "@/context/LanguageContext";
import type { EventData } from "@/data/events";

export default function AboutEventSection({ event }: { event: EventData }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  // OPTIONAL: same background color transition style
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#ffffff"]);
  // If you want the same feel as Foods section, change to ["#ffffff", "#6b1415"]
  // and then swap text colors accordingly.

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-screen bg-[#ffffff] pt-20 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* ===== DECORATIVE PATTERN (hidden on mobile) ===== */}
      <div
        className={`absolute top-24 w-[500px] h-[300px] pointer-events-none z-10 ${
          isArabic ? "left-0" : "right-0"
        } hidden md:block`}
      >
        <DecorativePattern4 />
      </div>

      {/* ===== SECTION HEADER ===== */}
      <SectionHeader
        label={isArabic ? "عن الفعالية" : "About"}
        title={
          isArabic ? (
            <>
              عن <br />
              الفعالية
            </>
          ) : (
            <>
              About <br />
              the event
            </>
          )
        }
      />

      {/* ===== DESCRIPTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-[94vw] mx-auto mb-14 relative z-20"
      >
        <p className="max-w-[920px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
          {isArabic
            ? event.fullDescriptionAr ?? event.descriptionAr
            : event.fullDescription ?? event.description}
        </p>
      </motion.div>

   
    </motion.section>
  );
}

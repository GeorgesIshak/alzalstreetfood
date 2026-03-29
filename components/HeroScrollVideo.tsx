"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // VIDEO CARD (same behavior)
  const width = useTransform(smoothProgress, [0, 0.7], ["60%", "100%"]);

  // ✅ make it feel better on smaller screens:
  // - smaller initial height
  // - smaller header offset (top)
  const height = useTransform(smoothProgress, [0, 0.7], ["70vh", "100vh"]);
  const top = useTransform(smoothProgress, [0, 0.7], ["12vh", "0vh"]);

  const videoSinkY = useTransform(smoothProgress, [0.8, 1], ["0%", "15%"]);
  const videoBlur = useTransform(smoothProgress, [0.8, 1], [
    "blur(0px)",
    "blur(12px)",
  ]);
  const videoScale = useTransform(smoothProgress, [0.8, 1], [1, 0.92]);

  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={containerRef}
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[300vh] bg-white "
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative h-full grid grid-cols-12 w-full items-center">
          {/* VIDEO (always LEFT) */}
          <div className="col-span-12 md:col-start-1 md:col-end-6 h-full relative flex items-center">
            <motion.div
              style={{
                width,
                height,
                top,
                y: videoSinkY,
                filter: videoBlur,
                scale: videoScale,
              }}
              className="fixed z-10 overflow-hidden origin-center shadow-2xl will-change-transform "
            >
              <video
                src="/video3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* TEXT */}
          <div className="col-span-12 md:col-start-8 md:col-end-12 h-full relative flex flex-col justify-center px-6 md:px-0">
            <motion.div style={{ opacity, zIndex: 20 }} className="relative">
              <div className="relative">
                {/* Accent line */}
                <div
                  className={[
                    "absolute top-0 bottom-0 w-1 bg-[#6b1415] opacity-50",
                    isArabic ? "-right-4" : "-left-4",
                  ].join(" ")}
                />

                {/* ✅ BOX: smaller padding + smaller height on 1080-ish widths */}
                <div
                  className={[
                    "bg-white/80 backdrop-blur-md shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center",
                    // base (mobile)
                    "h-[240px] px-8",
                    // small laptops (≈ 1024-1279)
                    "lg:h-[260px] lg:px-10",
                    // big desktop (1280+)
                    "xl:h-[320px] xl:px-12",
                  ].join(" ")}
                >
                  <h2
                    className={[
                      // ✅ typography scales down earlier for smaller screens
                      "text-[1.35rem] sm:text-[1.55rem] lg:text-[1.7rem] xl:text-[2.6rem]",
                      "leading-[1.25] text-[#1a1a1a]",
                      isArabic ? "text-right" : "text-left font-serif",
                    ].join(" ")}
                  >
                    {isArabic ? (
                      <>في سِكّة الأطعمة لا تبدأ التجربة من نقطة واحدة ولا تنتهي عند أخرى. تنقّل بين الأكشاك واكتشف شيئًا جديدًا في كل خطوة.</>
                    ) : (
                      <>
                        At Street Food,{" "}
                        <span className="text-[#6b1415] italic font-medium">
                          the experience
                        </span>{" "}
                        does not begin at a single point, nor does it end at another.
                      </>
                    )}
                  </h2>
                </div>
              </div>

              {/* ✅ HINT: also scale down on small laptops */}
              <div
                className={[
                  "mt-8",
                  isArabic ? "pr-8 lg:pr-9 xl:pr-10" : "pl-8 lg:pl-9 xl:pl-10",
                ].join(" ")}
              >
                <motion.div
                  initial={{ x: isArabic ? -20 : 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                  className={[
                    "flex items-center gap-3",
                    isArabic
                      ? "flex-row-reverse justify-end text-right"
                      : "justify-start text-left",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-center w-7 h-7 xl:w-8 xl:h-8 rounded-full border border-[#6b1415]/20">
                    <ChevronDown
                      size={14}
                      className="text-[#6b1415] animate-bounce"
                      strokeWidth={2.5}
                    />
                  </div>

                  <p className="text-[10px] xl:text-[11px] uppercase tracking-[0.25em] text-[#6b1415]/70 font-bold">
                    {isArabic ? "مرّر لاكتشاف من نكون" : "Scroll to discover who we are"}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

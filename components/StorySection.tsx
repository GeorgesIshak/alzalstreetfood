"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import DecorativePattern5 from "./DecorativePattern5";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-[#ffffff] overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false, // Ensures images disappear and reappear on scroll
          amount: 0.2,
          margin: "0px 0px -100px 0px",
        }}
        variants={staggerContainer}
        // Removed conditional flex-row-reverse. Standard flex-row obeys dir="rtl"
        className="w-[94%] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16"
      >
        {/* TEXT BLOCK: Naturally flips side based on dir attribute */}
        <motion.div
          variants={fadeUp}
          className={`lg:w-2/5 w-full flex flex-col gap-6 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <SectionHeader
            label={isArabic ? "عنّا" : "About Us"}
            title={
              isArabic ? (
                <>قصتنا <br /> وتجربتنا</>
              ) : (
                <>Our Story <br /> & Experience</>
              )
            }
          />

          <p className="text-[1.02rem] md:text-[1.12rem] text-[#6b1415]/80 leading-relaxed">
            {isArabic
              ? " تُعد سِكّة الأطعمة وجهة مفتوحة ترحّب بعشّاق المذاقات، حيث تلتقي النكهات المحلية الأصيلة بالإلهام العالمي في تجربة طهي معاصرة. هنا لا يقتصر الطعام على ما يُقدَّم في الأطباق، بل يتحول إلى رحلة اكتشاف وتجربة تجمع الناس حول المذاق واللحظة المشتركة. في سِكّة الأطعمة تتقاطع قصص صُنّاع الطعام مع قصص الزوّار، حيث تجتمع النكهات والذكريات في أجواء نابضة بالحياة تعكس روح المجتمع والاهتمام بالتفاصيل، لتقدّم تجربة تتجدّد مع كل زيارة وتترك أثرًا يتجاوز اللحظة."
              : "Street Food is an open and welcoming destination for food lovers, where authentic local flavors meet globally inspired culinary experiences presented through a contemporary perspective. Here, food goes beyond what is served, becoming a journey of discovery and a shared moment that connects people. At Street Food, the stories of food creators intersect with those of visitors, where flavors and memories come together in a vibrant setting that reflects community spirit and attention to detail. An experience that evolves with every visit and leaves a lasting impression."}
          </p>

          
        </motion.div>

        {/* IMAGES BLOCK: Will appear on the left in Arabic, right in English */}
        <div className="lg:w-3/5 w-full flex gap-4 lg:mt-24">
          <motion.div
            variants={imageAnimation}
            className="relative w-2/3 h-[320px] md:h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src="/explore1.jpg"
              alt="Street Food"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 object-bottom-left"
            />
          </motion.div>

          <div className="flex flex-col gap-4 w-1/3 justify-between">
            <motion.div
              variants={fadeUp}
              className="h-[0px] flex items-center lg:mt-14"
            >
              <DecorativePattern5 />
            </motion.div>

            <motion.div
              variants={imageAnimation}
              className="relative w-full h-[140px] md:h-[160px] lg:h-[200px] rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src="/experience2.jpg"
                alt=" Street Food"
                fill
                priority
                sizes="(min-width: 1024px) 18vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              variants={imageAnimation}
              className="relative w-full h-[140px] md:h-[160px] lg:h-[200px] rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src="/experience1.jpg"
                alt=" Street Food"
                fill
                priority
                sizes="(min-width: 1024px) 18vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import DecorativePattern from './DecorativePattern';
import DecorativePattern1 from './DecorativePattern1';
import DecorativePattern3 from './DecorativePattern3';
import DecorativePattern4 from './DecorativePattern5';
import DecorativePattern5 from './DecorativePattern5';

interface AboutUsProps {
  isArabic?: boolean;
}

export default function AboutUs({ isArabic = false }: AboutUsProps) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="relative py-32 bg-[#f0edea] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="w-[94%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 t items-center"
      >
        {/* LEFT SIDE: IMAGE BLOCK (60% width) */}
        <motion.div
          variants={fadeUp}
          className="lg:w-3/5 w-full flex gap-6"
        >
          {/* Left tall image (bigger) */}
          <div className="relative w-2/3 h-[640px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/food11.jpg"
              alt="Alzal Street Food"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Right two stacked images */}
          <div className="flex flex-col gap-8 w-1/3">
          <div className="h-[50px]">             <DecorativePattern5 />
</div>
            <div className="relative w-full h-[250px] md:h-[255px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/food21.jpg"
                alt="Alzal Street Food"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative w-full h-[250px] md:h-[255px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/food13.jpg"
                alt="Alzal Street Food"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: TEXT (40% width) */}
        <motion.div
          variants={fadeUp}
          className="lg:w-2/5 w-full flex flex-col gap-6"
        >
          {/* Section Header */}
          <SectionHeader
            label={isArabic ? 'عنّا' : 'About Us'}
            title={
              isArabic ? (
                <>
                  قصتنا <br /> وتجربتنا
                </>
              ) : (
                <>
                  Our Story <br /> & Experience
                </>
              )
            }
          />

          {/* Description */}
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
            {isArabic
              ? 'مرحبًا بكم في عالمنا الغذائي! نقدم تجربة طعام فريدة تجمع بين النكهات المميزة وأجواء ممتعة لجميع عشاق الطعام. هدفنا هو تقديم أفضل تجربة ممكنة لزوارنا ومشاركة شغفنا بالطعام.'
              : 'Welcome to our culinary world! We provide a unique dining experience that combines distinctive flavors with a delightful atmosphere for all food lovers. Our goal is to offer the best possible experience to our visitors and share our passion for food.'}
          </p>

          <a href="#" className="main-button mt-6 inline-block w-fit">
            {isArabic ? 'تعرف علينا أكثر' : 'Learn More'}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

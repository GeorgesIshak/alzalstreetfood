'use client';

import { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, Variants } from 'framer-motion'; // Added Variants
import SectionHeader from '@/components/SectionHeader';
import DecorativePattern4 from './DecorativePattern4';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // "Disappearing" variants for text/button as requested previously
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const images = useMemo(
    () => [
      '/food22.jpg', '/food2.jpg', '/food7.jpg',
      '/food18.jpg', '/food9.jpg', '/food10.jpg',
      '/food15.jpg', '/food4.jpg', '/food5.jpg',
    ],
    []
  );

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Calculate horizontal distance
      const distance = track.scrollWidth - window.innerWidth;
      
      // Check if mobile to adjust scroll speed
      const isMobile = window.innerWidth < 768;

      gsap.to(track, {
        x: isArabic ? distance : -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          // FIX: On mobile, we reduce the scroll distance (the "pin" duration)
          // 1.2x for mobile (faster) vs 1.0x for desktop (natural)
          end: () => `+=${isMobile ? distance * 0.8 : distance}`, 
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isArabic, images.length]); // Added dependency

  return (
    <section
      className="relative w-screen bg-[#ffffff] pt-20 overflow-hidden"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={`absolute top-24 w-[500px] h-[300px] pointer-events-none z-10 ${isArabic ? 'left-0' : 'right-0'} hidden md:block`}>
        <DecorativePattern4 />
      </div>

      <SectionHeader
        label={isArabic ? 'استكشف' : 'Explore'}
        title={isArabic ? <>استكشف<br /> سِكّةالأطعمة</> : <>Explore <br /> Street Food</>}
      />

      <div className="w-[94vw] mx-auto mb-12">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-[820px] text-[1.05rem] md:text-[1.2rem] text-[#6b1415]/80 leading-relaxed"
        >
          {isArabic
            ? `استكشف سِكّة الأطعمة واستمتع بتجربة حسيّة بين أكشاك الطعام والحرف المحلية والنكهات المستوحاة من الثقافة والأصالة، حيث تكشف كل زاوية تجربة جديدة وتجعل كل زيارة لحظة تُعاش وتُشارك.`
            : `Engage your senses as you move between food stalls, local crafts, and flavors rooted in culture and authenticity. Every corner reveals something new, turning each visit into a lived and shared moment.`}
        </motion.p>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <a href="#" className="main-button mt-8 inline-block">
            {isArabic ? 'اكتشف المزيد' : 'Explore More'}
          </a>
        </motion.div>
      </div>

      <div
        ref={sectionRef}
        className="relative w-screen overflow-hidden bg-white h-[70vh] md:h-[90vh]"
        // Reduced height on mobile so user isn't "trapped" in the pin for too long
      >
        <div
          ref={trackRef}
          className="flex h-full items-center px-[4vw] gap-[4vw] md:gap-[2vw] w-max will-change-transform"
        >
          {images.map((src, i) => {
            const isBig = i % 3 === 0;
            return (
              <div
                key={i}
                // Reduced mobile width from 40vw to 75vw (to see more of the next image)
                className={`relative h-[50vh] md:h-[70vh] min-w-[75vw] md:min-w-[22vw] ${isBig ? 'md:min-w-[44vw]' : ''}`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 768px) 75vw, 33vw"
                  className="object-cover rounded-[14px]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

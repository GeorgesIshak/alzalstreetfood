'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import DecorativePattern4 from './DecorativePattern4';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollMedia() {
  const container = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const media = [
    { type: 'video' },
    { type: 'image', src: '/img9.jpg' },
    { type: 'image', src: '/img28.jpg' },
    { type: 'image', src: '/img4.jpg' },
    { type: 'image', src: '/img6.jpg' },
    { type: 'image', src: '/img17.jpg' },
    { type: 'image', src: '/img18.jpg' },
  ];

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 7]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 9]),
    useTransform(scrollYProgress, [0, 1], [1, 10]),
  ];

  return (
    <section className="relative w-screen pt-20 bg-[#f0edea]">
      {/* Decorative pattern */}
      <div
        className={`absolute top-26 w-[500px] h-[300px] pointer-events-none z-10 ${
          isArabic ? 'left-0' : 'right-0'
        }`}
      >
        <DecorativePattern4 />
      </div>

      {/* ===== EDITORIAL INTRO ===== */}
      <SectionHeader
        label={isArabic ? 'اكتشف' : 'What’s On'}
        title={
          isArabic ? (
            <>
              قوائم مدروسة <br />
              بجذورٍ أصيلة
            </>
          ) : (
            <>
              Thoughtful menus, <br />
              rooted in tradition
            </>
          )
        }
      />

      {/* ===== IMMERSIVE SCROLL MEDIA ===== */}
      <div ref={container} className="container">
        <div className="sticky">
          {media.map((item, index) => (
            <motion.div
              key={index}
              style={{ scale: scales[index] }}
              className={`el el-${index + 1}`}
            >
              <div className="imageContainer">
                {item.type === 'image' ? (
                  <Image
                    src={item.src!}
                    alt={`media ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    {/* Mobile video */}
                    <source
                      src="/mobile-architecture.webm"
                      type="video/webm"
                      media="(max-width: 768px)"
                    />

                    {/* Desktop video */}
                    <source
                      src="/archtecture-video.webm"
                      type="video/webm"
                      media="(min-width: 769px)"
                    />
                  </video>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

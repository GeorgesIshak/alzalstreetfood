'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
export default function ScrollMedia() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const media = [
    { type: 'video', src: '/video2.webm' },
    { type: 'image', src: '/img9.jpg' },
    { type: 'image', src: '/img28.jpg' },
    { type: 'image', src: '/img4.jpg' },
    { type: 'image', src: '/img6.jpg' },
    { type: 'image', src: '/img17.jpg' },
    { type: 'image', src: '/img21.jpg' },
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
    <section className="relative w-screen bg-white">
<div
  className="
    absolute
    right-0
    top-32
    w-[620px]
    h-[420px]
    opacity-[0.05]
    pointer-events-none
    rotate-[-12deg]
    translate-x-10
    -translate-y-12
  "
>
  <svg
    viewBox="0 0 700 450"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full text-[#6b1415]"
  >
    {/* LEFT DIAMOND */}
    <path
      d="M150 60 L280 200 L150 340 L20 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />

    <path
      d="M150 120 L230 200 L150 280 L70 200 Z"
      fill="currentColor"
      opacity="0.4"
    />

    {/* CENTER DIAMOND (ANCHOR) */}
    <path
      d="M350 40 L520 200 L350 360 L180 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
    />

    <path
      d="M350 110 L450 200 L350 290 L250 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      opacity="0.85"
    />

    <path
      d="M350 150 L420 200 L350 250 L280 200 Z"
      fill="currentColor"
      opacity="0.55"
    />

    {/* RIGHT DIAMOND */}
    <path
      d="M560 70 L680 200 L560 330 L440 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      opacity="0.8"
    />

    <path
      d="M560 130 L620 200 L560 270 L500 200 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.6"
    />

    {/* CONNECTING STEPPED BARS (Najdi masonry feel) */}
    <path d="M280 200 H180" stroke="currentColor" strokeWidth="4" />
    <path d="M520 200 H440" stroke="currentColor" strokeWidth="4" />

    {/* MICRO NAJDI MARKS (handcrafted detail) */}
    <rect x="110" y="30" width="12" height="12" fill="currentColor" />
    <rect x="330" y="20" width="14" height="14" fill="currentColor" />
    <rect x="590" y="40" width="10" height="10" fill="currentColor" />

    <rect x="110" y="380" width="12" height="12" fill="currentColor" />
    <rect x="330" y="390" width="14" height="14" fill="currentColor" />
    <rect x="590" y="360" width="10" height="10" fill="currentColor" />
  </svg>
</div>
      {/* ===== EDITORIAL INTRO ===== */}
  <motion.div 
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-10% 0px" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 pb-24"
>
  <div className="flex items-center gap-6 mb-10">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-[14px] uppercase tracking-[0.3em] text-black"
    >
      What’s On
    </motion.span>
    {/* Animated line that grows from left to right */}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
      className="flex-1 h-[1px] bg-black origin-left" 
    />
  </div>

  <motion.h2 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="max-w-[1100px] text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415]"
  >
    Thoughtful menus, <br />rooted in tradition 
  </motion.h2>
</motion.div>


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
  src={item.src}
  alt={`media ${index + 1}`}
  fill
  style={{ objectFit: 'cover' }}
/>

                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function BecomeVendorSection() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const images = [
    { src: '/img23.jpg', alt: 'Image 1', colStart: 2, colEnd: 5, rowStart: 2, rowEnd: 3, className: '' },
    { src: '/img24.jpg', alt: 'Image 2', colStart: 8, colEnd: 13, rowStart: 1, rowEnd: 2, className: 'mb-8' },
    { src: '/img25.jpg', alt: 'Image 3', colStart: 6, colEnd: 10, rowStart: 3, rowEnd: 4, className: 'mt-4' },
  ];

  return (
    <section
      className="relative w-full py-20 bg-white"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* ===== SECTION HEADER ===== */}
      <SectionHeader
        label={isArabic ? 'انضم إلينا' : 'Join Us'}
        title={
          isArabic ? (
            <>
              كن 
              بائعًا
            </>
          ) : (
            <>
              Become a <br />
              vendor
            </>
          )
        }
      />

      {/* ===== DESCRIPTION + CTA ===== */}
      <div className="w-[94vw] mx-auto">
        <p className="max-w-[620px] text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80">
          {isArabic
            ? `انضم إلى وجهتنا الغذائية النابضة بالحياة وعرّف جمهورًا واسعًا
               بمفهومك المميز. سواء كنت تقدم أطعمة الشارع،
               أطباقًا متخصصة، أو نكهات فريدة،
               فهذه فرصتك لتنمية علامتك التجارية
               والمشاركة في تجربة طعام لا تُنسى.`
            : `Join our vibrant food destination and showcase your culinary concept to a wide
               and engaged audience. Whether you serve street food, specialty dishes, or
               signature flavors, this is your opportunity to grow your brand and be part of
               an unforgettable dining experience.`}
        </p>

        <a
          href="#"
          className="main-button mt-8 inline-block"
        >
          {isArabic ? 'قدّم لتصبح بائعًا' : 'Apply to Become a Vendor'}
        </a>
      </div>

      {/* ===== IMAGE GRID WITH STATIC 3D TRANSFORM ===== */}
      <div
        className="grid grid-cols-12 grid-rows-[min-content] gap-2 w-[94vw] mx-auto mt-12"
        style={{ placeItems: 'start stretch' }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl aspect-[2/3] h-[34em] flex justify-start items-center ${img.className}`}
            style={{
              gridColumnStart: img.colStart,
              gridColumnEnd: img.colEnd,
              gridRowStart: img.rowStart,
              gridRowEnd: img.rowEnd,
              willChange: 'transform',
              transform:
                'translate3d(0px, -19.948%, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import SectionHeader from '@/components/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function BecomeVendorSection() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  return (
    <section
      className="relative w-full py-24 bg-white"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="w-[94%] mx-auto">

        {/* ===== SECTION HEADER ===== */}
        <SectionHeader
          label={isArabic ? 'انضم إلينا' : 'Join Us '}
          title={
            isArabic ? (
              <>كن جزءًا <br /> منا</>
            ) : (
              <>Join Us</>
            )
          }
        />

        {/* ===== DESCRIPTION ===== */}
        <div className="mt-12 max-w-[820px]">
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
            {isArabic
              ? `تقدّم سِكّة الأطعمة منصة لصُنّاع الطعام والعلامات المتخصصة لعرض مفاهيمهم والتواصل مباشرة مع جمهور متنوع في بيئة تحتفي بالإبداع والأصالة وجودة التجربة.
`
              : `Street Food offers culinary creators a platform to showcase their food concepts and connect directly with a diverse audience in an environment that celebrates creativity, authenticity, and quality.
`}
          </p>

          {/* ===== CTA BUTTON ===== */}
          {/* FIXED: Added target="_blank" and rel="noreferrer" to securely launch the registration form in a new browser tab */}
          <a
            href="https://erp.maak.co/vendors-registration-form/new"
            target="_blank"
            rel="noreferrer"
            className="main-button mt-10 inline-block"
          >
            {isArabic ? 'قدّم الآن' : 'Apply Now'}
          </a>
        </div>
      </div>
    </section>
  );
}

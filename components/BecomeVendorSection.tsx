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
              <>كن جزءًا<br />  من الزل</>
            ) : (
              <>Be Part of <br /> Azzal</>
            )
          }
        />

        {/* ===== DESCRIPTION ===== */}
        <div className="mt-12 max-w-[820px]">
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#6b1415]/80 leading-relaxed">
            {isArabic
              ? `يمنح الزل ستريت فود صنّاع الطعام مساحة حقيقية لعرض مفاهيمهم،
                 والتواصل المباشر مع جمهور متفاعل، ضمن بيئة تقدّر الأصالة،
                 وتحتفي بالجودة، وتؤمن بأن التجربة المشتركة تصنع الفرق.
                 سواء كنت تقدّم طعامًا شعبيًا بروح جديدة،
                 أو تجربة عالمية برؤية مختلفة،
                 في الزل تجد المساحة لتنمو وتُكتشف.`
              : `Azzal Street Food offers culinary creators a platform to showcase their concepts
                 and connect directly with an engaged audience.
                 Whether you serve street food with a fresh spirit
                 or global cuisine with a distinctive vision,
                 Azzal provides the space to grow, be discovered,
                 and thrive within an environment that values authenticity,
                 quality, and shared experience.`}
          </p>

          {/* ===== CTA BUTTON ===== */}
          <a
            href="#"
            className="main-button mt-10 inline-block"
          >
            {isArabic ? 'قدّم الآن' : 'Apply Now'}
          </a>
        </div>
      </div>
    </section>
  );
}

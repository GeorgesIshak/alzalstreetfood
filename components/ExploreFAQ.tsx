"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

type FAQItem = { q: string; a: string };

const FAQS_EN: FAQItem[] = [
  {
    q: "What is Street Food?",
    a: "Street Food is a destination in the heart of Riyadh that brings together diverse cuisines and social experiences in one vibrant space.",

  },
  {
    q: "Does the experience change over time?",
    a: "Yes, menus and concepts are regularly refreshed to offer visitors something new.",
  },
  {
    q: "Is Street Food suitable for families?",
    a: "Yes, it is a welcoming destination suitable for families and friends.",
  },
  {
    q: "Are there events?",
    a: "Yes, Street Food hosts seasonal events and social experiences throughout the year.",
  },
];

const FAQS_AR: FAQItem[] = [
  {
    q: "ما هو مشروع سِكّة الأطعمة؟",
    a: "وجهة حضرية في قلب الرياض تجمع المأكولات المتنوعة والتجارب الاجتماعية في مساحة واحدة.",
  },
  {
    q: "هل تتغيّر التجربة مع الوقت؟",
    a: "نعم، يتم تحديث المفاهيم وقوائم الطعام بشكل مستمر لتقديم تجربة مختلفة في كل زيارة.",
  },
  {
    q: "هل المكان مناسب للعائلات؟",
    a: "نعم، سِكّة الأطعمة وجهة مفتوحة ومناسبة للعائلات والأصدقاء.",
  },
  {
    q: "هل توجد فعاليات؟",
    a: "نعم، يستضيف المشروع فعاليات وتجارب موسمية تضيف بُعدًا اجتماعيًا وثقافيًا للمكان.",
  },
];

export default function ExploreFAQ() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const FAQS = useMemo(() => (isArabic ? FAQS_AR : FAQS_EN), [isArabic]);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-20 bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <SectionHeader
        label={isArabic ? "أسئلة تهمّك" : "FAQ"}
        title={
          isArabic ? (
            <>
              الأسئلة 
              الشائعة
            </>
          ) : (
            <>
              Frequently Asked <br />
              Questions
            </>
          )
        }
      />

      <div className="w-[94vw] mx-auto mt-12">
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* LEFT: FAQ LIST */}
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
              {FAQS.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={`${item.q}-${idx}`}
                    className={[
                      "border-b border-black/10",
                      idx === FAQS.length - 1 ? "border-b-0" : "",
                    ].join(" ")}
                  >
                    {/* QUESTION */}
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className={[
                        "w-full flex items-center justify-between gap-6 px-6 md:px-7 py-6",
                        isArabic ? "text-right" : "text-left",
                      ].join(" ")}
                    >
                      <span className="text-[#6b1415] font-medium text-[1.05rem] md:text-[1.15rem]">
                        {item.q}
                      </span>

                      <ChevronDown
                        size={20}
                        className={[
                          "shrink-0 transition-transform duration-300 text-[#6b1415]",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    {/* ANSWER */}
                    <div
                      className={[
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={[
                            "px-6 md:px-7 pb-6 text-[#6b1415]/75 leading-relaxed text-[0.95rem] md:text-[1.05rem]",
                            isArabic ? "text-right" : "text-left",
                          ].join(" ")}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-xl border border-black/10 h-[320px] md:h-[380px] lg:h-[520px]">
                <Image src="/events3.jpg" alt="Azzal moments" fill className="object-cover" />
              </div>

         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

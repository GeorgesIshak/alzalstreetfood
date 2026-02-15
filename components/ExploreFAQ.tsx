"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

type FAQItem = { q: string; a: string };

const FAQS_EN: FAQItem[] = [
  {
    q: "What is Al Zal Street Food?",
    a: "Al Zal Street Food is a destination in the heart of Riyadh that brings together diverse cuisines, cultural experiences, and a variety of concepts within one vibrant space.",
  },
  {
    q: "Does the experience change over time?",
    a: "Yes. Menus and concepts are regularly refreshed to offer visitors a different experience with every visit.",
  },
  {
    q: "Is Al Zal suitable for families and friends?",
    a: "Al Zal is an open and welcoming space designed to suit everyone, regardless of different preferences.",
  },
  {
    q: "Are there events or accompanying activities?",
    a: "Yes. Al Zal hosts unique seasonal events and experiences that add a new social and cultural dimension to the destination.",
  },
];

const FAQS_AR: FAQItem[] = [
  {
    q: "ما هو الزل ستريت فود؟",
    a: "الزل ستريت فود وجهة في قلب الرياض تجمع كل العالم طعام متنوع، تجارب ثقافية، والمفاهيم المتنوعة في مساحة واحدة نابضة بالحياة.",
  },
  {
    q: "هل تتغيّر التجربة مع الوقت؟",
    a: "نعم. تتجدّد القوائم والمفاهيم بشكل دوري لتمنح الزوّار تجربة مختلفة في كل زيارة.",
  },
  {
    q: "هل الزل مناسب للعائلات والأصدقاء؟",
    a: "الزل مساحة مفتوحة ومناسبة للجميع، صُممت لتناسب مختلف الفئات باختلاف تفضيلاتهم.",
  },
  {
    q: "هل توجد فعاليات أو أنشطة مصاحبة؟",
    a: "نعم. يستضيف الزل فعاليات وتجارب موسمية فريدة من نوعها تضيف بُعدًا جديدًا اجتماعيًا وثقافيًا للمكان.",
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

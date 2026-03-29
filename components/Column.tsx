"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SectionHeader from "@/components/SectionHeader";
import DecorativePattern3 from "./DecorativePattern3";
import { useLanguage } from "@/context/LanguageContext";
import { EVENTS } from "@/data/events";

gsap.registerPlugin(ScrollTrigger);

export default function EventsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".event-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=120",
              scrub: 1,
            },
          }
        );

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, duration: 0.35 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.35 });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <section className="pt-24 relative overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      <div
        className={`absolute top-32 w-[110vw] opacity-[0.05] pointer-events-none ${
          isArabic ? "left-0" : "right-0"
        }`}
      >
        <DecorativePattern3 />
      </div>

    <SectionHeader
  label={isArabic ? "الفعاليات" : "Events"}
  title={
    isArabic ? (
      <>لحظات تُعاش</>
    ) : (
      <>Moments to <br /> be Lived</>
    )
  }
/>


      <div className="w-[94vw] mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 pb-20"
        >
          {EVENTS.map((event, idx) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="event-card block"
            >
              {/* IMAGE */}
              <div className="relative h-[280px] rounded-[28px] overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>

              {/* CONTENT */}
              <div className="relative -mt-20 mx-6 bg-white rounded-[24px] p-7 shadow-[0_20px_40px_rgba(107,20,21,0.5)]">
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? event.titleAr : event.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {isArabic ? event.descriptionAr : event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-[#6b1415] text-white text-sm px-4 py-2 rounded-full">
                    <span>{event.dateLabel}</span>
                  </div>

                  <span className="flex items-center gap-2 font-medium text-[#6b1415] hover:underline">
                    {isArabic ? "اقرأ المزيد" : "Read More"} <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

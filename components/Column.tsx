'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SectionHeader from "@/components/SectionHeader";
import DecorativePattern3 from "./DecorativePattern3";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  image: string;
  date: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}

export default function EventsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.event-card');

      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            y: 50 + (i % 4) * 20,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            delay: (i % 4) * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            },
          }
        );

        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            y: -10,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            y: 0,
            scale: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const events: Event[] = [
    {
      image: "/food5.jpg",
      date: "Dec 29, 2025",
      title: "Event One",
      titleAr: "الفعالية الأولى",
      description: "This is the first event.",
      descriptionAr: "هذه هي الفعالية الأولى.",
    },
    {
      image: "/food11.jpg",
      date: "Dec 30, 2025",
      title: "Event Two",
      titleAr: "الفعالية الثانية",
      description: "This is the second event.",
      descriptionAr: "هذه هي الفعالية الثانية.",
    },
    {
      image: "/food2.jpg",
      date: "Jan 01, 2026",
      title: "Event Three",
      titleAr: "الفعالية الثالثة",
      description: "Another amazing event.",
      descriptionAr: "فعالية مذهلة أخرى.",
    },
    {
      image: "/food8.jpg",
      date: "Jan 05, 2026",
      title: "Event Four",
      titleAr: "الفعالية الرابعة",
      description: "Exciting things happening.",
      descriptionAr: "أحداث مثيرة قادمة.",
    },
  ];

  return (
    <section
      className="bg-white pt-20 relative overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* ===== DECORATIVE SVG ===== */}
      <div
        className={`absolute top-32 w-[110vw] opacity-[0.05] pointer-events-none ${
          isArabic ? "left-0" : "right-0"
        }`}
      >
        <DecorativePattern3 />
      </div>

      {/* ===== SECTION HEADER ===== */}
      <SectionHeader
        label={isArabic ? "الفعاليات" : "Events"}
        title={
          isArabic ? (
            <>
              اكتشف <br /> فعالياتنا المميزة
            </>
          ) : (
            <>
              Discover Our <br /> Exciting Events
            </>
          )
        }
      />

      {/* ===== EVENTS GRID ===== */}
      <div className="w-[94vw] mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12"
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer will-change-transform"
            >
              <div className="relative w-full h-56 md:h-48">
                <Image
                  src={event.image}
                  alt={isArabic ? event.titleAr || event.title : event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-start">
                <p className="text-sm text-gray-500">{event.date}</p>
                <h3 className="font-semibold text-lg mt-1">
                  {isArabic ? event.titleAr : event.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  {isArabic ? event.descriptionAr : event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

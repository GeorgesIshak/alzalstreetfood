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

  const events: Event[] = [
    {
      image: "/event1.jpg",
      date: "July 12–14",
      title: "Local Food Fest",
      titleAr: "مهرجان الطعام المحلي",
      description:
        "Join us downtown for three days of amazing food trucks, live music, and family fun.",
      descriptionAr:
        "انضم إلينا في وسط المدينة لثلاثة أيام من شاحنات الطعام والموسيقى والمرح.",
    },
    {
      image: "/events2.jpg",
      date: "August 3",
      title: "Brewery Nights at East Bay",
      titleAr: "ليالي إيست باي",
      description:
        "oin us downtown for three days of amazing food trucks, live music, and family fun.",
      descriptionAr:
        "انضم إلينا في وسط المدينة لثلاثة أيام من شاحنات الطعام والموسيقى والمرح.",
    },
    {
      image: "/events3.jpg",
      date: "August 10–11",
      title: "Summer Farmers Market",
      titleAr: "سوق المزارعين الصيفي",
      description:
        "Special extended hours at Westside Market.",
      descriptionAr:
        "ساعات ممتدة خاصة في سوق ويست سايد.",
    },
  ];

  return (
    <section
      className="pt-24 relative overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
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
            <>
              اكتشف <br /> فعالياتنا
            </>
          ) : (
            <>
              Discover Our <br /> Events
            </>
          )
        }
      />

      <div className="w-[94vw] mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-20"
        >
          {events.map((event, idx) => (
            <div key={idx} className="event-card">
              {/* IMAGE */}
              <div className="relative h-[280px] rounded-[28px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="relative -mt-20 mx-6 bg-white rounded-[24px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-semibold mb-2">
                  {isArabic ? event.titleAr : event.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {isArabic ? event.descriptionAr : event.description}
                </p>

                <div className="flex items-center justify-between">
                  {/* DATE BADGE */}
                  <div className="flex items-center gap-2 bg-[#6b1415] text-[#ffffff] text-sm px-4 py-2 rounded-full">
                    <span>{event.date}</span>
                  </div>

                  {/* READ MORE */}
                  <span className="flex items-center gap-2 font-medium text-[#6b1415] hover:underline cursor-pointer">
                    {isArabic ? "اقرأ المزيد" : "Read More"}
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN BUTTON */}
        {/* <div className="flex justify-center pb-20">
          <button className=" main-button2">
            {isArabic ? "عرض جميع الفعاليات" : "View All Events"}
            <span>→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}

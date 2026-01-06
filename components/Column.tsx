'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SectionHeader from "@/components/SectionHeader"; // ✅ import

gsap.registerPlugin(ScrollTrigger);

interface Event {
  image: string;
  date: string;
  title: string;
  description: string;
}

export default function EventsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    { image: '/3.jpg', date: 'Dec 29, 2025', title: 'Event One', description: 'This is the first event.' },
    { image: '/6.jpg', date: 'Dec 30, 2025', title: 'Event Two', description: 'This is the second event.' },
    { image: '/11.avif', date: 'Jan 01, 2026', title: 'Event Three', description: 'Another amazing event.' },
    { image: '/12.jpg', date: 'Jan 05, 2026', title: 'Event Four', description: 'Exciting things happening.' },
  ];

  return (
    <section className="bg-white pt-32 relative overflow-hidden">
      
      {/* ===== DECORATIVE SVG ===== */}
      <div className="absolute right-0 top-32 w-[620px] h-[420px] opacity-[0.05] pointer-events-none rotate-[-12deg] translate-x-10 -translate-y-12">
        <svg viewBox="0 0 700 450" className="w-full h-full text-[#6b1415]">
          <path d="M150 60 L280 200 L150 340 L20 200 Z" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M150 120 L230 200 L150 280 L70 200 Z" fill="currentColor" opacity="0.4" />

          <path d="M350 40 L520 200 L350 360 L180 200 Z" fill="none" stroke="currentColor" strokeWidth="7" />
          <path d="M350 110 L450 200 L350 290 L250 200 Z" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.85" />
          <path d="M350 150 L420 200 L350 250 L280 200 Z" fill="currentColor" opacity="0.55" />

          <path d="M560 70 L680 200 L560 330 L440 200 Z" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.8" />
          <path d="M560 130 L620 200 L560 270 L500 200 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        </svg>
      </div>

      {/* ===== SECTION HEADER (REUSABLE) ===== */}
      <SectionHeader
        label="Events"
        title={
          <>
            Discover Our <br /> Exciting Events
          </>
        }
      />

      {/* ===== EVENTS GRID ===== */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12"
        >
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer will-change-transform"
            >
              <div className="relative w-full h-56 md:h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500">{event.date}</p>
                <h3 className="font-semibold text-lg mt-1">{event.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25, ...opts }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

function useCountUp(target: number, startWhen: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;
    let raf = 0;
    const start = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, startWhen, durationMs]);

  return value;
}

export default function MapHeroBanner({
  vendorsCount,
  onExplore,
  title,
  subtitle,
}: {
  vendorsCount: number;
  onExplore: () => void;
  title?: string;
  subtitle?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(vendorsCount, inView, 900);

  const t = title ?? "Explore The Street";
  const s = subtitle ?? "Tap a kiosk to open details";

  return (
    <section ref={ref} className="relative w-full">
      <div className="relative w-full h-[380px] md:h-[520px] lg:h-[620px] overflow-hidden rounded-3xl border border-[#E2DFD8] bg-[#E2DFD8] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)]">
        {/* Animated background */}
        <div className="absolute inset-0 map-hero-zoom">
          <Image
            src="/map-alzal.png"
            alt="Street Map"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-[640px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                <span className="text-white/85 text-[10px] font-black uppercase tracking-[0.28em]">
                  Interactive Map
                </span>
              </div>

              <h2 className="mt-5 text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                {t}
              </h2>

              <p className="mt-3 text-white/80 text-sm md:text-base">
                <span className="font-semibold text-white">{count}</span>{" "}
                vendors • {s}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={onExplore}
                  className="h-12 px-7 rounded-2xl bg-[#87212E] text-white text-sm font-bold uppercase tracking-widest hover:opacity-95 transition shadow-xl"
                >
                  Explore Map
                </button>

                <button
                  onClick={onExplore}
                  className="h-12 px-5 rounded-2xl bg-white/10 text-white text-sm font-bold uppercase tracking-widest border border-white/20 hover:bg-white/15 transition"
                >
                  Jump to Map
                </button>
              </div>

              <p className="mt-4 text-white/60 text-xs">
                Tip: On mobile, tap a kiosk then scroll for details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS (global) */}
      <style jsx global>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.06);
          }
        }
        .map-hero-zoom {
          animation: heroZoom 18s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

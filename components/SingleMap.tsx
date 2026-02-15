"use client";

import React, { useMemo, useState, useCallback } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { restaurants } from "@/data/restaurants";
import KioskTopView from "@/components/icons/KioskTopView";

type Vendor = {
  id: number;
  order: number;
  name: string;
  nameAr?: string;
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  image: string;
  x: number;
  y: number;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function ImmersiveMap() {
  const items = useMemo(() => restaurants as Vendor[], []);
  const [activeId, setActiveId] = useState<number | null>(null);

  const triggerHaptic = useCallback(() => {
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
  }, []);

  const activeVendor = useMemo(
    () => items.find((v) => v.id === activeId) || null,
    [items, activeId]
  );

  return (
    <main className="fixed inset-0 bg-[#050505] overflow-hidden touch-none w-screen h-[100svh]">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={6}
        centerOnInit
        wheel={{ step: 0.06 }}
        panning={{ velocityDisabled: false, activationKeys: [] }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* MAP VIEWPORT */}
            <TransformComponent
              wrapperClass="!w-screen !h-[100svh]"
              contentClass="flex items-center justify-center"
            >
              <div className="relative w-screen h-[100svh] flex-shrink-0">
                <Image
                  src="/dark-render.png"
                  alt="Azzal Map"
                  fill
                  priority
                  unoptimized
                  className="object-cover pointer-events-none select-none"
                />

                {/* MARKERS */}
                {items.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic();
                        setActiveId(item.id === activeId ? null : item.id);
                      }}
                      style={{ left: `${item.x}%`, top: `${item.y}%` }}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                      aria-label={`Open ${item.name}`}
                    >
                      <div className="relative">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <KioskTopView active={isActive} size={44} />
                        </div>

                        <span
                          className={[
                            "absolute -top-2 -right-2 flex items-center justify-center",
                            "w-6 h-6 rounded-full text-[11px] font-black shadow",
                            isActive
                              ? "bg-[#87212E] text-white"
                              : "bg-white/95 text-[#222]",
                          ].join(" ")}
                        >
                          {pad2(item.order)}
                        </span>

                        {isActive && (
                          <span className="absolute inset-[-10px] rounded-full bg-[#87212E]/20 blur-md -z-10" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </TransformComponent>

            {/* DETAIL CARD */}
            <AnimatePresence>
              {activeVendor && (
                <motion.div
                  initial={{ y: 120, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 120, opacity: 0, filter: "blur(10px)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[92vw] max-w-[420px] z-50"
                >
                  <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-white flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-100 overflow-hidden relative shrink-0">
                      <Image
                        src={activeVendor.image}
                        alt={activeVendor.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-neutral-900 truncate tracking-tight">
                        {activeVendor.name}
                      </h3>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                        Kiosk #{pad2(activeVendor.order)}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                        {activeVendor.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ZOOM CONTROLS */}
            <div className="absolute right-8 bottom-10 flex flex-col gap-3 z-50">
              <div className="flex flex-col bg-white/10 backdrop-blur-xl border border-white/10 rounded-full overflow-hidden shadow-2xl">
                <button
                  onClick={() => zoomIn(0.5)}
                  className="w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-white/10 transition"
                >
                  +
                </button>
                <div className="h-px bg-white/10 mx-3" />
                <button
                  onClick={() => zoomOut(0.5)}
                  className="w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-white/10 transition"
                >
                  −
                </button>
              </div>

              <button
                onClick={() => resetTransform()}
                className="w-12 h-12 rounded-full bg-white text-black font-black text-[10px] uppercase shadow-xl hover:scale-105 active:scale-95 transition"
              >
                1:1
              </button>
            </div>
          </>
        )}
      </TransformWrapper>
    </main>
  );
}

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
    <main className="fixed inset-0 bg-[#050505] overflow-hidden w-full h-dvh touch-none">
      <TransformWrapper
        initialScale={0.8}
        minScale={0.8}
        maxScale={6}
        centerOnInit
        wheel={{ step: 0.06 }}
        // ✅ better mobile feel: avoid inertial weirdness + avoid click conflicts
        panning={{
          velocityDisabled: true,
          allowLeftClickPan: true,
          allowRightClickPan: true,
          excluded: ["button"],
        }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent
              // ✅ w-full/h-full instead of w-screen + strong touch control
              wrapperClass="!w-full !h-full touch-none"
              contentClass="flex items-center justify-center"
            >
              {/* LARGE CANVAS */}
              <div className="relative w-[1200px] h-[800px] md:w-[2000px] md:h-[1200px] flex-shrink-0">
                <Image
                  src="/dark-render.png"
                  alt="Azzal Map"
                  fill
                  priority
                  unoptimized
                  className="object-contain pointer-events-none select-none"
                />

                {items.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerHaptic();
                        setActiveId(item.id === activeId ? null : item.id);
                      }}
                      style={{ left: `${item.x}%`, top: `${item.y}%` }}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
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
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 120, opacity: 0 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[92vw] max-w-[420px] z-[200]"
                >
                  <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-neutral-100 overflow-hidden relative shrink-0">
                      <Image
                        src={activeVendor.image}
                        alt={activeVendor.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-neutral-900 truncate">
                        {activeVendor.name}
                      </h3>
                      <p className="text-[10px] font-black text-neutral-400 uppercase">
                        Kiosk #{pad2(activeVendor.order)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CONTROLS */}
            <div className="absolute right-6 bottom-10 flex flex-col gap-3 z-[200]">
              <button
                type="button"
                onClick={() => zoomIn(0.5)}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full text-white text-2xl"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => zoomOut(0.5)}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full text-white text-2xl"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => resetTransform()}
                className="w-12 h-12 bg-white rounded-full text-black text-[10px] font-bold"
              >
                RESET
              </button>
            </div>
          </>
        )}
      </TransformWrapper>
    </main>
  );
}

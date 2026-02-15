"use client";

import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import type { EventData } from "@/data/events";
import AboutEventSection from "@/components/AboutEventSection";
import HeaderSolid from "@/components/HeaderSolid";
import Footer from "@/components/Footer";

export default function EventSingleClient({ event }: { event: EventData }) {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  function shareEvent(title: string) {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  }

  return (
    <>
      {/* ================= HEADER ================= */}
      <HeaderSolid />

      <SectionHeader
        label={isArabic ? "الفعاليات" : "Events"}
        className="mt-24"
        title={isArabic ? <>{event.titleAr}</> : <>{event.title}</>}
      />

      {/* ================= MAIN EVENT ================= */}
      <section className="w-full bg-white pb-20 pt-10" dir={isArabic ? "rtl" : "ltr"}>
        <div className="w-[94vw] mx-auto">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* LEFT: DETAILS CARD */}
            <div className="col-span-12 lg:col-span-5 xl:col-span-4">
              <div className="h-full flex flex-col justify-between rounded-[32px] border border-black/[0.06] bg-[#F9F9F9] p-8 lg:p-10">
                <div>
                  {/* BADGE */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#6b1415]/10 text-[10px] font-bold uppercase tracking-widest text-[#6b1415]">
                    {event.type === "daily"
                      ? isArabic
                        ? "فعالية يومية"
                        : "Daily Event"
                      : event.type === "weekly"
                      ? isArabic
                        ? "فعالية أسبوعية"
                        : "Weekly Event"
                      : isArabic
                      ? "فعالية لمرة واحدة"
                      : "One-time Event"}
                  </span>

                  <h2 className="mt-6 text-2xl font-semibold text-[#0B0B0B] leading-tight">
                    {isArabic ? event.titleAr : event.title}
                  </h2>

                  <p className="mt-4 text-[#6b1415]/70 leading-relaxed text-base">
                    {isArabic ? event.descriptionAr : event.description}
                  </p>

                  {/* DATA */}
                  <div className="mt-10 space-y-8">
                    {/* WHEN */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#6b1415]">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                          {isArabic ? "الوقت" : "When"}
                        </p>
                        <p className="font-medium text-black/80">{event.dateLabel}</p>
                        {event.time && <p className="text-sm text-black/50">{event.time}</p>}
                      </div>
                    </div>

                    {/* WHERE */}
                    {event.location && (
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-[#6b1415]">
                          <MapPin size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                            {isArabic ? "الموقع" : "Where"}
                          </p>
                          <p className="font-semibold text-[#0B0B0B]">{event.location.name}</p>
                          {event.location.details && (
                            <p className="text-sm text-black/50 mt-1">{event.location.details}</p>
                          )}

                          {event.location.directionsUrl && (
                            <a
                              href={event.location.directionsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#6b1415] uppercase hover:opacity-70"
                            >
                              {isArabic ? "الاتجاهات" : "Get Directions"}
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="main-button w-full mt-8"
                  onClick={() => shareEvent(isArabic ? event.titleAr || event.title : event.title)}
                >
                  {isArabic ? "مشاركة الفعالية" : "Share this event"}
                </button>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-8">
              <div className="relative h-full min-h-[450px] overflow-hidden rounded-[32px] group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutEventSection event={event} />

      {/* ================= LOCATION ================= */}
      <section
        className="pt-24 pb-20 relative overflow-hidden bg-white selection:bg-[#6b1415]/10"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <SectionHeader
          label={isArabic ? "الموقع" : "Location"}
          title={isArabic ? <span className="leading-tight">اعثر علينا</span> : <span className="leading-tight">Find Us</span>}
        />

        <div className="w-[94vw] mx-auto mt-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* LEFT: INFO */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-[#0B0B0B] text-2xl tracking-tight">Al Zal Street Food</h3>

                <address className="mt-6 text-black/60 leading-[1.8] not-italic text-base lg:text-lg">
                  JAX District – Diriyah, Riyadh
                  <br />
                  <span className="text-black/40 text-sm italic">
                    Studio Youth · Public Programs Building
                  </span>
                  <br />
                  2598 Muhammad Ibn Rashid Al Uraini,
                  <br />
                  Al Diriyah Al Jadidah 7120,
                  <br />
                  Riyadh 13732
                </address>

                <a href="https://goo.gl" target="_blank" rel="noreferrer" className="main-button mt-4">
                  {isArabic ? "فتح في خرائط جوجل" : "Open in Google Maps"}
                </a>
              </div>

              {/* FACILITIES */}
              <div className="mt-12 pt-8 border-t border-black/5">
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-black/40">
                  {isArabic ? "المرافق المتاحة" : "Available Facilities"}
                </p>

                <div className="mt-5 flex flex-wrap gap-4">
                  {["Parking", "Free Admission", "F&B"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-50 border border-black/5 rounded-md text-sm text-black/70"
                    >
                      • {item}
                    </span>
                  ))}
                </div>

                <p className="mt-8 text-xs text-black/40 italic">
                  {isArabic ? "جميع الفعاليات تُقام في موقع واحد." : "All events are hosted at this central location."}
                </p>
              </div>
            </div>

            {/* RIGHT: MAP */}
            <div className="col-span-12 lg:col-span-8">
              <div className="group relative h-[450px] lg:h-full min-h-[400px] rounded-[32px] border border-black/5 overflow-hidden shadow-2xl shadow-black/5">
                <div className="absolute inset-0 bg-transparent z-10 pointer-events-none group-hover:pointer-events-auto" />
                <iframe
                  className="w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  src="https://www.google.com..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {  Music , Instagram, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const XLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);
const TikTokLogo = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
const SnapchatLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2c3.5 0 6 2.5 6 6v2c0 .5.2.9.6 1.2.7.5 1.4.7 1.4 1.3 0 .6-.6.9-1.4 1.1-.5.1-.8.5-.7 1 .2.7.7 1.4.7 2 0 .9-.9 1.3-1.8 1.3-.8 0-1.5-.3-2.2-.3-.6 0-1.3.3-2.6.3s-2-.3-2.6-.3c-.7 0-1.4.3-2.2.3-.9 0-1.8-.4-1.8-1.3 0-.6.5-1.3.7-2 .1-.5-.2-.9-.7-1-.8-.2-1.4-.5-1.4-1.1 0-.6.7-.8 1.4-1.3.4-.3.6-.7.6-1.2V8c0-3.5 2.5-6 6-6z"/>
  </svg>
);
const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/riyadhstfood?igsh=MXMzaXlyYnVxcXZ0aA==", icon: Instagram },
  { name: "X", href: "https://x.com/riyadhstfood?s=21&t=4LoGe2Bo13XdaX8oh3dVLw", icon: XLogo }, // Use the new component here
  { name: "Tiktok ", href: "https://www.tiktok.com/@riyadhstfood?_r=1&_t=ZS-94WS5sir3A4", icon: TikTokLogo  },
  { 
    name: "Snapchat", 
    href: "https://www.snapchat.com/@riyadhstfood", 
    icon: SnapchatLogo 
  },
];


export default function SiteFooter() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <footer
      className="w-full bg-[#FAFAFA] text-[#0B0B0B] pt-20"
      dir={isArabic ? "ltr" : "ltr"}
    >
      <div className="w-[94vw] mx-auto">
        
        {/* ===== MAIN GRID ===== */}
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 text-left items-start">

          {/* LOGO (2 columns) */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Home" className="inline-flex">
              <Image
                src="/street-food.webp"
                alt="Street Food"
                width={340}
                height={120}
                priority
                className="h-[120px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* NAV (1 column) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              {isArabic ? "استكشف" : "Explore"}
            </h4>

            <ul className="space-y-4">
{[
  isArabic ? "استكشف" : "Explore",
  isArabic ? "الفعاليات" : "Events",
  isArabic ? "المأكولات والمشروبات" : "Food & Drinks",
  isArabic ? "موقعنا" : "Find Us"
].map((item) => (                <li key={item}>
                  <Link
                    href={`/${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="text-black/60 hover:text-[#6b1415] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION (1 column) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              {isArabic ? "الزيارة" : "Visit Us"}
            </h4>

            <address className="not-italic text-black/60 leading-relaxed mb-6">
  {isArabic ? (
    <>
      شارع الشيخ محمد بن إبراهيم<br />
      حي الديرة<br />
      الرياض، المملكة العربية السعودية
    </>
  ) : (
    <>
      Sheikh Mohammed bin Ibrahim Street<br />
      Deira District<br />
      Riyadh, Kingdom of Saudi Arabia
    </>
  )}
</address>

            <a
              href="https://www.google.com/maps?q=%D8%B3%D9%83%D8%A9+%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C+%D8%A7%D9%84%D8%B4%D9%8A%D8%AE+%D9%85%D8%AD%D9%85%D8%AF+%D8%A8%D9%86+%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D8%8C+Ad+Dirah+cheikh,+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+12634&ftid=0x3e2f05005945f2cb:0x18b4f093e9a78120&entry=gps&shh=CAE&lucs=,94297699,94284472,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ2LjEuODMwNDc0Nzc1MBgAIIgnKkgsOTQyOTc2OTksOTQyODQ0NzIsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAlNB&skid=f7fe0276-61cd-4f9b-9b01-aff3edcdd990&g_st=ic"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-black/10 text-sm font-semibold hover:bg-[#6b1415] hover:text-white transition-all duration-300"
            >
              {isArabic ? "الاتجاهات" : "Get Directions"}
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform"
              />
            </a>
          </div>

          {/* CONTACT (1 column) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8">
              {isArabic ? "معلومات التواصل" : "Contact Info"}
            </h4>

            <ul className="space-y-4 text-black/60 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-black/50">
                  {isArabic ? "الهاتف:" : "Phone:"}
                </span>{" "}
              <a
  href="tel:+966556018333"
  className="hover:text-[#6b1415] transition"
>
  {isArabic ? "٩٦٦ ٥٥٦٠١٨٣٣٣" : "+966 55 601 8333"}
</a>
              </li>

              <li>
                <span className="font-semibold text-black/50">
                  {isArabic ? "البريد:" : "Email:"}
                </span>{" "}
                <a
                  href="mailto:hello@streeetfood.com"
                  className="hover:text-[#6b1415] transition"
                >
                  hello@streetfood.com
                </a>
              </li>

              <li className="pt-4 border-t border-black/10">
                <p className="font-semibold text-black/50 mb-2">
                  {isArabic ? "ساعات العمل" : "Opening Hours"}
                </p>
           <p className="whitespace-pre-line">
  {isArabic
    ? "السبت – الأربعاء: 7:00 ص – 12:00 ص\nالخميس: 7:00 ص – 1:00 ص\nالجمعة: 12:00 م – 1:00 ص"
    : "Sat – Wed: 7:00 AM – 12:00 AM\nThu: 7:00 AM – 1:00 AM\nFriday: 12:00 PM – 1:00 AM"}
</p>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-black/10 mt-16 py-8 flex flex-col md:flex-row justify-between items-left gap-6">
          <p className="text-[13px] text-black/40">
            © {new Date().getFullYear()} Street Food.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-black/10 text-black/40 hover:text-white hover:bg-[#6b1415] hover:border-[#6b1415] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}

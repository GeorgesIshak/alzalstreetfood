"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import { restaurants } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import { Search, SlidersHorizontal, X, LayoutGrid, Grid2X2 ,Grid3X3} from "lucide-react";
import VendorsHero from "@/components/VendorsHero";
import SiteFooter from "@/components/Footer";

export default function VendorsPage() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [gridCols, setGridCols] = useState(4);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* FIXED: Extracted distinct strings from category.en to safely populate the key lookups */
  const categories = useMemo(() => {
    const cats = restaurants.map((r) => r.category.en);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  /* Filter Logic */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return [...restaurants]
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .filter((r) => {
        // FIXED: Access bilingual sub-properties safely instead of treating object as string
        const matchesSearch =
          r.name.en.toLowerCase().includes(q) ||
          r.name.ar.includes(q) ||
          r.category.en.toLowerCase().includes(q) ||
          r.category.ar.includes(q);
          
        // FIXED: Checks against category string constants accurately
        const matchesCategory = category === "All" || r.category.en === category;
        return matchesSearch && matchesCategory;
      });
  }, [search, category]);

  // Prevent background body scroll when mobile slider panel drawer context triggers
  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  // FIXED: Maps English string identifiers directly into matching UI display properties
  const getCategoryLabel = (catEn: string) => {
    if (catEn === "All") return isArabic ? "الكل" : "All";
    const match = restaurants.find((r) => r.category.en === catEn);
    return match ? match.category[lang] : catEn;
  };

  return (
     <>
    <section dir={isArabic ? "rtl" : "ltr"} className="pb-24 bg-white min-h-screen overflow-hidden">
      <Navbar />
      <VendorsHero/>
      
      {/* FIXED: Swapped out w-[94vw] to w-[94%] to fix horizontal shaking/scrolling on mobile devices */}
      <div className="w-[94%] pt-32 mx-auto">
        
        <SectionHeader
          label={isArabic ? "الطعام والمشروبات" : "Food & Vendors"}
          title={isArabic ? <>اكتشف الباعة</> : <>Discover Our Vendors</>}
        />

        {/* ================= CONTROLS BAR ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 mb-10">
          
          {/* SEARCH BOX */}
          <div className="relative flex-1 max-w-md w-full">
            <Search className={`absolute top-1/2 -translate-y-1/2 text-black/40 w-4 h-4 ${isArabic ? 'right-4' : 'left-4'}`} />
            <input
              type="text"
              placeholder={isArabic ? "ابحث عن بائع..." : "Search vendor..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full py-3 rounded-full border border-black/10 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6b1415]/10 transition-all ${isArabic ? 'pr-11 pl-4' : 'pl-11 pr-4'}`}
            />
          </div>

          {/* DESKTOP CATEGORY PILLS */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                  ${category === cat ? "bg-[#6b1415] text-white shadow-lg shadow-[#6b1415]/20" : "bg-transparent text-black/40 hover:text-black hover:bg-black/5"}`}
              >
                {/* FIXED: Dynamic label lookup replacement avoiding [object Object] printing bug */}
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* GRID & MOBILE FILTER BUTTON */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            {/* Grid Switcher (Desktop Only) */}
            <div className="hidden md:flex bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setGridCols(2)}
                className={`p-2 rounded-lg transition ${gridCols === 2 ? "bg-white text-[#6b1415] shadow-sm" : "text-black/40 hover:text-black"}`}
                aria-label="2 columns"
              >
                <Grid2X2 size={18} strokeWidth={gridCols === 2 ? 2.5 : 1.5} />
              </button>

              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded-lg transition ${gridCols === 3 ? "bg-white text-[#6b1415] shadow-sm" : "text-black/40 hover:text-black"}`}
                aria-label="3 columns"
              >
                <Grid3X3 size={18} strokeWidth={gridCols === 3 ? 2.5 : 1.5} />
              </button>

              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded-lg transition ${gridCols === 4 ? "bg-white text-[#6b1415] shadow-sm" : "text-black/40 hover:text-black"}`}
                aria-label="4 columns"
              >
                <LayoutGrid size={18} strokeWidth={gridCols === 4 ? 2.5 : 1.5} />
              </button>
            </div>

            {/* Mobile Filter Trigger */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex lg:hidden items-center justify-center gap-2 bg-[#6b1415] text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest w-full sm:w-auto"
            >
              <SlidersHorizontal size={16} />
              {isArabic ? "تصفية" : "Filter"}
            </button>
          </div>
        </div>

        {/* ================= MOBILE FILTER SIDEBAR ================= */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              />
              <motion.div 
                initial={{ x: isArabic ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: isArabic ? "100%" : "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 220 }}
                className={`fixed top-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] p-6 shadow-2xl ${isArabic ? 'right-0' : 'left-0'} flex flex-col`}
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-[#6b1415]">{isArabic ? "التصنيفات" : "Categories"}</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2"><X size={22}/></button>
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setIsFilterOpen(false); }}
                      className={`w-full p-4 rounded-xl font-medium transition-all ${
                        category === cat 
                          ? "bg-[#6b1415]/5 text-[#6b1415] font-bold border-l-4 border-[#6b1415]" 
                          : "text-black/60 hover:bg-gray-50"
                      }`}
                      style={isArabic ? { textAlign: 'right' } : { textAlign: 'left' }}
                    >
                      {getCategoryLabel(cat)}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/* ================= GRID WITH ANIMATION ================= */}
        <LayoutGroup>
          <motion.div 
            layout
            className={`grid gap-x-8 gap-y-12 transition-all duration-500 ${
              gridCols === 2 ? "grid-cols-1 md:grid-cols-2" : 
              gridCols === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : 
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
           <AnimatePresence mode="popLayout">
  {filtered.map((r) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      key={r.id}
      className="group cursor-pointer"
    >
      {/* Card Container */}
      <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
        <Image
          src={r.image}
          alt={isArabic ? r.name.ar : r.name.en}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Soft gradient overlay for layout styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Text Details Positioned on the Card Overlay */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          {/* FIXED: Changed from r.category to r.category[lang] to resolve object-to-string rendering crash */}
          <p className="text-[10px] uppercase tracking-widest text-white/70 mb-1 font-bold">
            {isArabic ? r.category.ar : r.category.en}
          </p>
          <h3 className="text-xl font-medium font-serif leading-tight">
            {isArabic ? r.name.ar : r.name.en}
          </h3>
        </div>
      </div>
    </motion.div>
  ))}
</AnimatePresence>

          </motion.div>
        </LayoutGroup>
  


        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="text-black/30 font-medium">{isArabic ? "لا توجد نتائج مطابقة لبحثك." : "No vendors match your search."}</p>
            <button onClick={() => {setSearch(""); setCategory("All");}} className="mt-4 text-[#6b1415] font-bold border-b border-[#6b1415]">
              {isArabic ? "إعادة ضبط الفلاتر" : "Reset all filters"}
            </button>
          </div>
        )}
      </div>
    </section>

   <SiteFooter />      
  </>  

  );
}

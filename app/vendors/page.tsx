"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import { restaurants } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import { Search, SlidersHorizontal, X, LayoutGrid, Grid2X2 ,Grid3X3} from "lucide-react";

export default function VendorsPage() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [gridCols, setGridCols] = useState(4);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* Categories Memo */
  const categories = useMemo(() => {
    const cats = restaurants.map((r) => r.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  /* Filter Logic */
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return [...restaurants]
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .filter((r) => {
        const matchesSearch =
          r.name.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ;
        const matchesCategory = category === "All" || r.category === category;
        return matchesSearch && matchesCategory;
      });
  }, [search, category]);

  // Prevent scroll when mobile filter is open
  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? "hidden" : "unset";
  }, [isFilterOpen]);

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className=" pb-24 bg-white min-h-screen">
      <Navbar />
              <NewHero />
      <div className="w-[94vw] pt-32 mx-auto">
        
        <SectionHeader
          label={isArabic ? "الطعام والمشروبات" : "Food & Vendors"}
          title={isArabic ? <>اكتشف الباعة</> : <>Discover Our Vendors</>}
        />

        {/* ================= CONTROLS BAR ================= */}
        <div className="flex items-center justify-between gap-4 mt-12 mb-10">
          
          {/* SEARCH BOX (Desktop & Mobile) */}
          <div className="relative flex-1 max-w-md">
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
          <div className="hidden lg:flex items-center gap-2">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                  ${category === cat ? "bg-[#6b1415] text-white shadow-lg shadow-[#6b1415]/20" : "bg-transparent text-black/40 hover:text-black hover:bg-black/5"}`}
              >
                {cat === "All" ? (isArabic ? "الكل" : "All") : cat}
              </button>
            ))}
          </div>

          {/* GRID & MOBILE FILTER BUTTON */}
          <div className="flex items-center gap-3">
            {/* Grid Switcher (Desktop Only) */}
           {/* Grid Switcher (Desktop Only) */}
<div className="hidden md:flex bg-gray-100 p-1 rounded-xl">
  
  {/* 2 Columns */}
  <button
    onClick={() => setGridCols(2)}
    className={`p-2 rounded-lg transition ${
      gridCols === 2
        ? "bg-white text-[#6b1415] shadow-sm"
        : "text-black/40 hover:text-black"
    }`}
    aria-label="2 columns"
  >
    <Grid2X2 size={18} strokeWidth={gridCols === 2 ? 2.5 : 1.5} />
  </button>

  {/* 3 Columns */}
  <button
    onClick={() => setGridCols(3)}
    className={`p-2 rounded-lg transition ${
      gridCols === 3
        ? "bg-white text-[#6b1415] shadow-sm"
        : "text-black/40 hover:text-black"
    }`}
    aria-label="3 columns"
  >
    <Grid3X3 size={18} strokeWidth={gridCols === 3 ? 2.5 : 1.5} />
  </button>

  {/* 4 Columns */}
  <button
    onClick={() => setGridCols(4)}
    className={`p-2 rounded-lg transition ${
      gridCols === 4
        ? "bg-white text-[#6b1415] shadow-sm"
        : "text-black/40 hover:text-black"
    }`}
    aria-label="4 columns"
  >
    <LayoutGrid size={18} strokeWidth={gridCols === 4 ? 2.5 : 1.5} />
  </button>

</div>


            {/* Mobile Filter Trigger */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex lg:hidden items-center gap-2 bg-[#6b1415] text-white px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest"
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
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`fixed top-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] p-8 shadow-2xl ${isArabic ? 'right-0' : 'left-0'}`}
              >
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-xl font-serif text-[#6b1415]">{isArabic ? "التصنيفات" : "Categories"}</h2>
                  <button onClick={() => setIsFilterOpen(false)}><X size={24}/></button>
                </div>
                <div className="flex flex-col gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setCategory(cat); setIsFilterOpen(false); }}
                      className={`text-left p-4 rounded-xl font-medium transition ${category === cat ? "bg-[#6b1415]/5 text-[#6b1415] border-r-4 border-[#6b1415]" : "text-black/60"}`}
                    >
                      {cat === "All" ? (isArabic ? "الكل" : "All Categories") : cat}
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
                  <div className="relative h-[340px] rounded-3xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="mt-6 px-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#6b1415] font-black opacity-60">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-xl font-serif text-[#0B0B0B] group-hover:text-[#6b1415] transition-colors">
                      {r.name}
                    </h3>
                    <p className="mt-3 text-sm text-black/50 leading-relaxed line-clamp-2">
                      {r.description}
                    </p>
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
  );
}

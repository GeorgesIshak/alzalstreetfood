'use client';

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import StorySection from "@/components/StorySection";
import TypoAnim from "@/components/TypoAnim";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import ScrollImages from "@/components/ScrollImages";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import Column from "@/components/Column";
import ScrollImageGallery from "@/components/ScrollImageGallery";
import FindUs from "@/components/FindUs";
import BecomeVendorSection from "@/components/BecomeVendorSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during loading to prevent header/video jumps
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <main className="relative">
      {/* 1. PRELOADER OVERLAY */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT (Mounted immediately to prevent layout jumps) */}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <NewHero />
        <StorySection />
        <TypoAnim />
        <RestaurantCarousel />
        <ScrollImages />
        <FoodCategoriesCarousel />
       <ScrollImageGallery />
        <FindUs />
        <BecomeVendorSection />
        <Footer />
      </div>
    </main>
  );
}

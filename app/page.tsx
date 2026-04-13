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
import ScrollImageGallery from "@/components/ScrollImageGallery";
import FindUs from "@/components/FindUs";
import BecomeVendorSection from "@/components/BecomeVendorSection";
import Footer from "@/components/Footer";

export default function Home() {
  // Start as true so it shows immediately on every mount/refresh
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Force scroll lock while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset scroll if user leaves page
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <main className="relative">
      {/* ✅ PRELOADER - Triggers every time Home mounts */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onFinish={() => {
              // Smooth transition delay
              setTimeout(() => setIsLoading(false), 500);
            }}
          />
        )}
      </AnimatePresence>

      {/* ✅ MAIN CONTENT */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
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

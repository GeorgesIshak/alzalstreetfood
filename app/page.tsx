'use client';

import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import StorySection from "@/components/StorySection";
import TypoAnim from "@/components/TypoAnim";
import ScrollImages from "@/components/ScrollImages";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import ScrollImageGallery from "@/components/ScrollImageGallery";
import FindUs from "@/components/FindUs";
import BecomeVendorSection from "@/components/BecomeVendorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <NewHero />
 <div id="story">
        <StorySection />
      </div>      <TypoAnim />
      <div id="whats-on">
        <ScrollImages />
      </div>

<div id="food">
      <FoodCategoriesCarousel />
      </div>
      <ScrollImageGallery />
      <FindUs />
      <BecomeVendorSection />
      <Footer />
    </main>
  );
}
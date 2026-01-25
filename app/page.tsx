'use client'; // 👈 Add this
import NewHero from "@/components/NewHero";

import TypoAnim from "@/components/TypoAnim";
import ScrollImages from "@/components/ScrollImages";
import Column from "@/components/Column";
import ScrollImageGallery from "@/components/ScrollImageGallery";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import BecomeVendorSection from "@/components/BecomeVendorSection";
import Footer from "@/components/Footer";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import FindUs from "@/components/FindUs";
import StorySection from "@/components/StorySection";
export default function Home() {
  

  return (
   
        <>
          <NewHero />
          <StorySection />
                                                            <TypoAnim />
                                                                  <RestaurantCarousel />

{/* / I-23843661 */}

   <ScrollImages />
   <FoodCategoriesCarousel />

      <Column />
   <ScrollImageGallery />
      <FindUs />

   <BecomeVendorSection />


        </>
      )}
 

  
import Footer from "@/components/Footer";
import NewHero from "@/components/NewHero";
import Events from "@/components/Events";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import OurStory from "@/components/OurStory";
import WhatsOn from "@/components/WhatsOn";
export default function Home() {
  return (
   <>
   <NewHero />
   <WelcomeSection />
            <RestaurantCarousel />
                        <FoodCategoriesCarousel />

            <OurStory />
            <WhatsOn />


         <Events />

     

      <Footer />
    </>
  );
}

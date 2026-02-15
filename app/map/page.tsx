import Navbar from "@/components/Navbar";
import SingleMap from "@/components/SingleMap";
// import VendorsMapOnly from "@/components/VendorsMapOnly";

export const metadata = {
  title: "Vendors Map | Al Zal",
  description: "View vendor kiosk locations on the map.",
};

export default function Map() {
  return (
    <>
      <Navbar />
      <main className="w-screen h-[100svh] bg-black overflow-hidden">
        <SingleMap />
      </main>
    </>
  );
}

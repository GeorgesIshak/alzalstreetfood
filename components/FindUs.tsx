'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Flame } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function WhereToFindUs() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

const info = [
    {
      icon: MapPin,
      title: 'Festival Location',
      line1: 'Riyadh – Seasonal Pop-Ups',
      line2: 'Kingdom of Saudi Arabia',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      line1: 'Daily',
      line2: '4:00 PM – 1:00 AM',
    },
    {
      icon: Phone,
      title: 'Contact Number',
      line1: '+966 5X XXX XXXX',
      line2: 'Call or WhatsApp us',
    },
    {
      icon: Mail,
      title: 'Email & Vendors',
      line1: 'hello@alzalstreetfood.com',
      line2: 'Vendor & event inquiries',
    },
  ];

  return (
    <section className="relative pt-16 bg-[#fffdf9] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
        variants={stagger}
        className="w-[94%] mx-auto"
      >
        <SectionHeader
          label="Find Us"
          title={
            <>
              Everything You Need.
              <br />
              One Place.
            </>
          }
        />

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* LEFT — INFO BOXES */}
          <motion.div variants={stagger} className="flex flex-col gap-4">
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="relative bg-white border border-[#6b1415]/20 p-6 rounded-2xl shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6b1415] text-white flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a1a]">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-70 mt-1">{item.line1}</p>
                      <p className="text-sm mt-2 font-medium text-[#6b1415]/80">
                        {item.line2}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CENTER — HERO IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative lg:col-span-1 rounded-[2.5rem] overflow-hidden min-h-[420px] lg:min-h-full group"
          >
            <Image
              src="/food3.jpg"
              alt="Food festival crowd"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6b1415]/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <Flame className="mb-4 text-[#ffb07c]" size={32} />
              <h4 className="text-3xl font-serif leading-tight">
                Street food.
                <br />
                Festival energy.
              </h4>
            </div>
          </motion.div>

          {/* RIGHT — IMAGES */}
          <motion.div
            variants={fadeUp}
            className="grid grid-rows-2 gap-6 h-full"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl border border-gray-100 h-full"
            >
              <Image
                src="/food4.jpg"
                alt="Festival food"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl border border-gray-100 h-full"
            >
              <Image
                src="/food5.jpg"
                alt="Crowd enjoying food"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}




// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, Map as MapIcon, Utensils, Star, Clock, ArrowRight, Navigation, LocateFixed } from 'lucide-react';
// import SectionHeader from './SectionHeader';

// // 1. MOCK DATA
// const CATEGORIES = ['All', 'Najdi', 'Hijazi', 'Modern', 'International', 'Desserts'];
// const VENDORS = [
//   { id: 1, name: "Al-Najd Smokes", cat: "Najdi", rating: 4.9, wait: "15 min", zone: "Zone A", coords: { x: '20%', y: '30%' } },
//   { id: 2, name: "Red Sea Catch", cat: "Hijazi", rating: 4.7, wait: "5 min", zone: "Zone B", coords: { x: '50%', y: '60%' } },
//   { id: 3, name: "Truffle Nomad", cat: "Modern", rating: 4.8, wait: "25 min", zone: "Zone C", coords: { x: '80%', y: '40%' } },
// ];

// export default function FestivalDiscovery() {
//   const [activeTab, setActiveTab] = useState('All');
//   const [search, setSearch] = useState('');

//   const filteredVendors = VENDORS.filter(v => 
//     (activeTab === 'All' || v.cat === activeTab) && 
//     v.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <section className="py-24 bg-[#fffdf9] overflow-hidden">
//       <div className="w-[94%] mx-auto">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//           <SectionHeader
//             label="80+ Culinary Artists"
//             title={<>Explore the <br />Festival Flavors.</>}
//           />
          
//           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
//             <div className="relative group">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#6b1415] transition-colors" size={18} />
//               <input 
//                 type="text" 
//                 placeholder="Search 80+ vendors..." 
//                 className="pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#6b1415]/10 transition-all"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>

//         {/* CATEGORY TABS */}
//         <div className="flex gap-2 overflow-x-auto pb-8 no-scrollbar border-b border-gray-100">
//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
//                 activeTab === cat 
//                   ? 'bg-[#6b1415] text-white shadow-lg shadow-[#6b1415]/20' 
//                   : 'bg-white text-gray-500 hover:bg-gray-50'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* MAIN CONTENT GRID */}
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT: VENDOR LIST (8 Columns) */}
//           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//             <AnimatePresence mode='popLayout'>
//               {filteredVendors.map((vendor) => (
//                 <motion.div
//                   layout
//                   key={vendor.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500"
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="flex items-center gap-1 bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-[10px] font-black">
//                       <Star size={10} className="fill-orange-700" />
//                       {vendor.rating}
//                     </div>
//                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{vendor.zone}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-[#1a1a1a]">{vendor.name}</h3>
//                   <p className="text-xs text-gray-400 mt-1">{vendor.cat} Cuisine</p>
                  
//                   <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-50">
//                     <div className="flex items-center gap-2 text-gray-500">
//                       <Clock size={14} />
//                       <span className="text-xs font-bold">{vendor.wait}</span>
//                     </div>
//                     <button className="text-[#6b1415] text-xs font-black uppercase tracking-tighter flex items-center gap-1 hover:gap-2 transition-all">
//                       View Menu <ArrowRight size={14} />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* RIGHT: INTERACTIVE MAP EXPLORER (4 Columns) */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="lg:col-span-4 sticky top-8 bg-[#1a1a1a] rounded-[2.5rem] p-8 text-white overflow-hidden min-h-[600px] flex flex-col"
//           >
//             {/* Map Header */}
//             <div className="relative z-10 mb-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-[#6b1415] rounded-xl flex items-center justify-center">
//                   <Navigation size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg leading-none">Live Radar</h4>
//                   <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Festival Grounds</p>
//                 </div>
//               </div>
//             </div>

//             {/* Visual Map Representation */}
//             <div className="relative flex-grow bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-8 group">
//               {/* Grid Lines Overlay */}
//               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
//               {/* Dynamic Vendor Pins */}
//               {filteredVendors.map((v) => (
//                 <motion.div
//                   key={v.id}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute cursor-pointer group/pin"
//                   style={{ left: v.coords.x, top: v.coords.y }}
//                 >
//                   <div className="relative">
//                     <span className="absolute -inset-2 bg-[#ffb07c]/20 rounded-full animate-ping" />
//                     <div className="w-3 h-3 bg-[#ffb07c] rounded-full border-2 border-[#1a1a1a] relative z-10" />
                    
//                     {/* Hover Label */}
//                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
//                       {v.name}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}

//               {/* User Location Pulse */}
//               <div className="absolute bottom-1/4 left-1/3">
//                 <LocateFixed size={24} className="text-[#6b1415] animate-pulse" />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
//             </div>

//             {/* Map Footer Action */}
//             <div className="relative z-10">
//               <p className="text-sm text-white/60 mb-6 leading-relaxed">
//                 Found your craving? Use our interactive GPS map to navigate the 80+ stalls across Riyadh Front.
//               </p>
//               <button className="w-full bg-[#ffb07c] text-[#4a1c1b] py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95">
//                 <MapIcon size={20} />
//                 Open Interactive Map
//               </button>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

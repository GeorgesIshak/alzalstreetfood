'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Flame } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function WhereToFindUs() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // Animation for text/cards
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Specific Image Animation: Re-triggers on scroll
  const imageAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30,
      filter: 'blur(4px)' 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
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
      title: isArabic ? 'موقع الفعالية' : 'Festival Location',
      line1: isArabic ? 'الرياض – فعاليات موسمية' : 'Riyadh – Seasonal Pop-Ups',
      line2: isArabic ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia',
    },
    {
      icon: Clock,
      title: isArabic ? 'ساعات العمل' : 'Opening Hours',
      line1: isArabic ? 'يوميًا' : 'Daily',
      line2: isArabic ? '4:00 مساءً – 1:00 صباحًا' : '4:00 PM – 1:00 AM',
    },
    {
      icon: Phone,
      title: isArabic ? 'رقم التواصل' : 'Contact Number',
      line1: '+966 5X XXX XXXX',
      line2: isArabic ? 'اتصل أو عبر واتساب' : 'Call or WhatsApp us',
    },
    {
      icon: Mail,
      title: isArabic ? 'البريد الإلكتروني والتجّار' : 'Email & Vendors',
      line1: 'hello@alzalstreetfood.com',
      line2: isArabic ? 'استفسارات التجّار والفعاليات' : 'Vendor & event inquiries',
    },
  ];

  return (
    <section
      className="relative pt-16 bg-[#fffdf9] overflow-hidden pb-20"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        // key change: once: false ensures it disappears/reappears
        viewport={{ once: false, margin: '-100px' }}
        variants={stagger}
        className="w-[94%] mx-auto"
      >
        <SectionHeader
          label={isArabic ? 'موقعنا' : 'Find Us'}
          title={isArabic ? <>في قلب  <br />الرياض</> : <>At the Heart <br /> of Riyadh</>}
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
                  whileHover={{ x: isArabic ? -8 : 8 }}
                  className="relative bg-white border border-[#6b1415]/20 p-6 rounded-2xl shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6b1415] text-white flex items-center justify-center shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                      <p className="text-sm opacity-70 mt-1">{item.line1}</p>
                      <p className="text-sm mt-2 font-medium text-[#6b1415]/80">{item.line2}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CENTER — HERO IMAGE (Updated with re-triggering animation) */}
          <motion.div
            variants={imageAnimation}
            className="relative lg:col-span-1 rounded-[2.5rem] overflow-hidden min-h-[420px] lg:min-h-full group"
          >
            <Image
              src="/food1.jpg"
              alt={isArabic ? 'جمهور مهرجان الطعام' : 'Food festival crowd'}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6b1415]/80 via-transparent to-transparent" />
            <div className={`absolute bottom-10 text-white ${isArabic ? 'right-10 text-right' : 'left-10 text-left'}`}>
              <Flame className="mb-4 text-[#ffb07c]" size={32} />
              <h4 className="text-3xl font-serif leading-tight">
                {isArabic ? <>طعام شارع.<br />طاقة مهرجان.</> : <>Street food.<br />Festival energy.</>}
              </h4>
            </div>
          </motion.div>

          {/* RIGHT — SIDE IMAGES (Updated with re-triggering animation) */}
          <div className="grid grid-rows-2 gap-6 h-full">
            <motion.div
              variants={imageAnimation}
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl border border-gray-100 h-full"
            >
              <Image
                src="/food2.jpg"
                alt={isArabic ? 'أطباق المهرجان' : 'Festival food'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              variants={imageAnimation}
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl overflow-hidden group shadow-xl border border-gray-100 h-full"
            >
              <Image
                src="/food3.jpg"
                alt={isArabic ? 'زوار يستمتعون' : 'Crowd enjoying food'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

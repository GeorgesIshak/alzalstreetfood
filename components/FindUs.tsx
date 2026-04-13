'use client';

import { motion, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { useLanguage } from '@/context/LanguageContext';

export default function WhereToFindUs() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const info = [
    {
      icon: MapPin,
      title: isArabic ? 'موقع سِكّة الأطعمة' : 'Street Food Location',
      line1: isArabic
        ? 'شارع الشيخ محمد بن إبراهيم\nحي الديرة'
        : 'Sheikh Mohammed bin Ibrahim Street\nDeira District',
      line2: isArabic
        ? 'الرياض، المملكة العربية السعودية'
        : 'Riyadh, Kingdom of Saudi Arabia',
    },
    {
      icon: Clock,
      title: isArabic ? 'ساعات العمل' : 'Opening Hours',
      line1: isArabic
        ? 'السبت – الأربعاء: 7:00 ص – 12:00 ص\nالخميس: 7:00 ص – 1:00 ص'
        : 'Sat – Wed: 7:00 AM – 12:00 AM\nThu: 7:00 AM – 1:00 AM',
      line2: isArabic
        ? 'الجمعة: 12:00 م – 1:00 ص'
        : 'Friday: 12:00 PM – 1:00 AM',
    },
    {
      icon: Phone,
      title: isArabic ? 'رقم التواصل' : 'Contact Number',
      line1: '+966 55 601 8333',
      line2: isArabic ? 'اتصل أو واتساب' : 'Call or WhatsApp',
      link: 'tel:+966556018333',
    },
    {
      icon: Mail,
      title: isArabic ? 'البريد الإلكتروني والتجّار' : 'Email & Vendors',
      line1: 'info@steeetfood.com',
      line2: isArabic ? 'استفسارات التجّار والفعاليات' : 'Vendor & event inquiries',
      link: 'mailto:info@steeetfood.com',
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
        viewport={{ once: false, margin: '-100px' }}
        variants={stagger}
        className="w-[94%] mx-auto"
      >
        <SectionHeader
          label={isArabic ? 'موقعنا' : 'Find Us'}
          title={
            isArabic ? (
              <>في قلب <br /> الرياض</>
            ) : (
              <>At the Heart <br /> of Riyadh</>
            )
          }
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* LEFT */}
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

                      {/* line1 */}
                      {item.link ? (
                        <a href={item.link} className="text-sm opacity-70 mt-1 block whitespace-pre-line hover:underline">
                          {item.line1}
                        </a>
                      ) : (
                        <p className="text-sm opacity-70 mt-1 whitespace-pre-line">
                          {item.line1}
                        </p>
                      )}

                      {/* line2 */}
                      <p className="text-sm mt-2 font-medium text-[#6b1415]/80 whitespace-pre-line">
                        {item.line2}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CENTER IMAGE */}
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
          </motion.div>

          {/* RIGHT IMAGES */}
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
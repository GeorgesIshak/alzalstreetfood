export type EventType = "daily" | "weekly" | "one-time";

export type EventData = {
  slug: string;
  type: EventType;

  image: string;

  dateLabel: string;
  title: string;
  titleAr?: string;

  description: string;
  descriptionAr?: string;

  // NEW: long content for single page
  fullDescription?: string;
  fullDescriptionAr?: string;

  time?: string;
  location?: {
    name: string;
    details?: string;
    directionsUrl?: string;
  };
  priceLabel?: "Free" | "Ticketed";
};


export const EVENTS: EventData[] = [
  // =========================
  // DAILY EVENT
  // =========================
  {
    slug: "daily-street-experience",
    type: "daily",
    image: "/event1.jpg",
    dateLabel: "Every day",
    title: "Daily Street Food Experience",
    titleAr: "تجربة أكل الشارع اليومية",

    description:
      "A daily celebration of street food, culture, and atmosphere at the heart of Al Zal.",
    descriptionAr:
      "تجربة يومية تجمع أكل الشارع والثقافة والأجواء في قلب الزال.",

    fullDescription:
      "The Daily Street Food Experience brings Al Zal to life every evening with a curated selection of street food vendors, open-air seating, and a relaxed social atmosphere. Guests are invited to wander freely between stalls, explore diverse flavors, and enjoy the space at their own pace. This daily experience is designed for casual visits, spontaneous meetups, and anyone looking to enjoy great food in a vibrant setting.",
    fullDescriptionAr:
      "تجربة أكل الشارع اليومية تُحيي «الزال» كل مساء من خلال مجموعة مختارة من أكشاك الطعام، جلسات مفتوحة، وأجواء اجتماعية مريحة. يمكن للزوار التجوّل بحرية بين الأكشاك، استكشاف نكهات متنوعة، والاستمتاع بالمكان على وتيرتهم الخاصة. صُممت هذه التجربة للزيارات العفوية واللقاءات البسيطة ومحبي الطعام.",

    time: "04:00 PM – 12:00 AM",
    location: {
      name: "Al Zal Street Food",
      details: "Main Courtyard",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },

  // =========================
  // WEEKLY EVENT
  // =========================
  {
    slug: "weekend-nights",
    type: "weekly",
    image: "/events2.jpg",
    dateLabel: "Every Fri & Sat",
    title: "Weekend Nights",
    titleAr: "ليالي نهاية الأسبوع",

    description:
      "Weekly night vibes with extended hours, music, and limited menus across vendors.",
    descriptionAr:
      "أجواء أسبوعية ليلية مع ساعات ممتدة وموسيقى وقوائم محدودة لدى الأكشاك.",

    fullDescription:
      "Weekend Nights transform Al Zal into a high-energy night market every Friday and Saturday. With extended opening hours, live DJ performances, and exclusive vendor menus, the space shifts into a lively evening destination. This weekly event is ideal for groups, friends, and visitors looking to experience Al Zal after dark in a more energetic atmosphere.",
    fullDescriptionAr:
      "تحوّل ليالي نهاية الأسبوع «الزال» إلى سوق ليلي نابض بالحياة كل يوم جمعة وسبت. مع ساعات عمل ممتدة، عروض دي جي مباشرة، وقوائم خاصة من الأكشاك، يصبح المكان وجهة مسائية مليئة بالطاقة. هذه الفعالية مثالية للأصدقاء والمجموعات الباحثة عن تجربة مختلفة بعد غروب الشمس.",

    time: "06:00 PM – 01:00 AM",
    location: {
      name: "Al Zal Street Food",
      details: "Central Stage Area",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },

  // =========================
  // ONE-TIME EVENT
  // =========================
  {
    slug: "kids-creative-workshop",
    type: "one-time",
    image: "/events3.jpg",
    dateLabel: "12 Feb 2026",
    title: "Kids Creative Workshop",
    titleAr: "ورشة إبداع للأطفال",

    description:
      "A one-time hands-on workshop designed to inspire creativity in a fun environment.",
    descriptionAr:
      "فعالية لمرة واحدة بنشاطات عملية لتحفيز الإبداع في بيئة ممتعة وآمنة.",

    fullDescription:
      "The Kids Creative Workshop is a special one-day event designed to encourage creativity and imagination through hands-on activities. Children will take part in guided art and craft sessions within a safe and welcoming environment. This workshop offers families a meaningful experience where learning and fun come together in a relaxed setting.",
    fullDescriptionAr:
      "ورشة الإبداع للأطفال هي فعالية خاصة ليوم واحد تهدف إلى تشجيع الإبداع والخيال من خلال أنشطة عملية. يشارك الأطفال في جلسات فنية وحِرفية بإشراف مختصين، ضمن بيئة آمنة ومريحة. تقدم هذه الورشة تجربة قيّمة للعائلات تجمع بين التعلم والمتعة.",

    time: "04:00 PM – 06:00 PM",
    location: {
      name: "JAX District – Diriyah, Riyadh",
      details: "Studio Youth · Public Programs Building",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },
];

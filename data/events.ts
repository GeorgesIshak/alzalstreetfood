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
    slug: "face-painting",
    type: "daily",
    image: "/event1.jpg",
    dateLabel: "Every day",
    title: "Face Painting",
    titleAr: "رسم الوجه",

    description:
      "Enjoy face painting with creative designs and colorful artwork, adding a fun and interactive touch for visitors of all ages.",
    descriptionAr:
      "استمتعوا معنا بتجربة رسم الوجه بتصاميم مبتكرة وألوان مميزة، تضيف أجواءً تفاعلية ممتعة للزوار من جميع الأعمار.",

    fullDescription:
      "Enjoy face painting with creative designs and colorful artwork, adding a fun and interactive touch for visitors of all ages.",
    fullDescriptionAr:
      "استمتعوا معنا بتجربة رسم الوجه بتصاميم مبتكرة وألوان مميزة، تضيف أجواءً تفاعلية ممتعة للزوار من جميع الأعمار.",

    time: "04:00 PM – 10:00 PM",
    location: {
      name: "Al Zal Street Food",
      details: "Kids Activity Area",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },

  // =========================
  // DAILY EVENT
  // =========================
  {
    slug: "best-outfit-competition",
    type: "daily",
    image: "/events2.jpg",
    dateLabel: "Every day",
    title: "Best Outfit Competition",
    titleAr: "مسابقة أجمل زي",

    description:
      "Join the Best Outfit Competition and showcase your unique style, adding a fun and interactive experience within the vibrant atmosphere of Street Food.",
    descriptionAr:
      "شاركوا معنا في مسابقة أجمل زي واستعرضوا أسلوبكم المميز، لتعيشوا تجربة تفاعلية ممتعة ضمن أجواء سِكّة الأطعم.",

    fullDescription:
      "Join the Best Outfit Competition and showcase your unique style, adding a fun and interactive experience within the vibrant atmosphere of Street Food.",
    fullDescriptionAr:
      "شاركوا معنا في مسابقة أجمل زي واستعرضوا أسلوبكم المميز، لتعيشوا تجربة تفاعلية ممتعة ضمن أجواء سِكّة الأطعم.",

    time: "06:00 PM – 11:00 PM",
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
    slug: "oud-performance",
    type: "weekly",
    image: "/events3.jpg",
    dateLabel: "Every Weekend",
    title: "Oud Performance",
    titleAr: "عزف العود",

    description:
      "Experience the timeless sound of the oud through a live performance that celebrates the beauty of traditional Arabic music in a warm and authentic atmosphere.",
    descriptionAr:
      "استمتعوا بعزف حي لآلة العود يجسد جمال الموسيقى العربية الأصيلة ويضفي أجواءً دافئة تعكس روح التراث.",

    fullDescription:
      "Experience the timeless sound of the oud through a live performance that celebrates the beauty of traditional Arabic music in a warm and authentic atmosphere.",
    fullDescriptionAr:
      "استمتعوا بعزف حي لآلة العود يجسد جمال الموسيقى العربية الأصيلة ويضفي أجواءً دافئة تعكس روح التراث.",

    time: "08:00 PM – 10:00 PM",
    location: {
      name: "Al Zal Street Food",
      details: "Central Stage",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },

  // =========================
  // DAILY EVENT
  // =========================
  {
    slug: "henna-art",
    type: "daily",
    image: "/events2.jpg",
    dateLabel: "Every day",
    title: "Henna Art",
    titleAr: "فن الحناء",

    description:
      "Discover the art of traditional henna with intricate designs inspired by heritage, offering visitors a cultural experience and a unique artistic touch.",
    descriptionAr:
      "اكتشفوا فن الحناء التقليدي بتصاميم مستوحاة من التراث، لتعيشوا تجربة ثقافية تضيف لمسة فنية مميزة لزيارتكم.",

    fullDescription:
      "Discover the art of traditional henna with intricate designs inspired by heritage, offering visitors a cultural experience and a unique artistic touch.",
    fullDescriptionAr:
      "اكتشفوا فن الحناء التقليدي بتصاميم مستوحاة من التراث، لتعيشوا تجربة ثقافية تضيف لمسة فنية مميزة لزيارتكم.",

    time: "04:00 PM – 10:00 PM",
    location: {
      name: "Al Zal Street Food",
      details: "Cultural Corner",
      directionsUrl: "https://maps.google.com",
    },
    priceLabel: "Free",
  },
];
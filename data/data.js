import { Flame, Leaf, Bike } from "lucide-react";

export const categories = [
  "Shawarma",
  " Chicken",
  "Falafel",
  "Street ",
  "Fresh ",
  "Burgers",
  "Fries",
  "BBQ ",
  "Wraps",
  "Manakish",
  "Karāk ",
  "Desserts",
  "Cold ",
  "Plates ",
  "Family "
];


export const ourSpecsData = [
    { 
        title: "Fresh Ingredients Daily", 
        description: "Every dish is made using fresh, locally sourced ingredients for real street-food flavor.",
        icon: Leaf,
        accent: "#4CAF50"
    },
    { 
        title: "Authentic Street Food Taste", 
        description: "Traditional recipes prepared the same way they’re made on the streets of Saudi Arabia.",
        icon: Flame,
        accent: "#FF5722"
    },
    { 
        title: "Fast Delivery & Pickup", 
        description: "Hot meals delivered quickly — or pick up your order without waiting.",
        icon: Bike,
        accent: "#FFC107"
    }
];


export const restaurants = [
    {
        id: 1,
        name: "Al Zal Street Grill",
        category: "Grill & BBQ",
        logo: "/image.png",
        location: "Riyadh, Saudi Arabia",
        rating: 4.8,
        menuImage: "/menu2jpg.jpg"
    },
    {
        id: 2,
        name: "Shawarma Express",
        category: "Shawarma",
        logo: "/image.png",
        location: "Jeddah, Saudi Arabia",
        rating: 4.6,
        menuImage: "/menu1.jpg"
    },
    {
        id: 3,
        name: "Falafel Corner",
        category: "Falafel",
        logo: "/image.png",
        location: "Dammam, Saudi Arabia",
        rating: 4.3,
        menuImage: "/menu.avif"
    }
];

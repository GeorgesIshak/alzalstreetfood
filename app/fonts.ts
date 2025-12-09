import localFont from "next/font/local";

export const alZalFont = localFont({
  src: [
    {
      path: "../public/fonts/AlZal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AlZal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/AlZal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alzal",
  display: "swap",
});

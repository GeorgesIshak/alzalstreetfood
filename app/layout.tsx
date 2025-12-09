import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { alZalFont } from "./fonts"; // 👈 import font

export const metadata: Metadata = {
  title: "Al Zal Street Food",
  description: "Delicious street food crafted with passion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${alZalFont.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

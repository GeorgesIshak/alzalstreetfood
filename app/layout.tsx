import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { alZalFont } from "./fonts"; // 👈 your font
import { LanguageProvider } from "@/context/LanguageContext"; // 👈 import your context

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
        suppressHydrationWarning
        className={`${alZalFont.variable} antialiased`}
      >
        {/* Wrap everything in LanguageProvider */}
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

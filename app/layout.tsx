import type { Metadata } from "next";
import "./globals.css";
import { alZalFont } from "./fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import LayoutLoaderWrapper from "@/components/LayoutLoaderWrapper";

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
        <LanguageProvider>
          <LayoutLoaderWrapper>
            {children}
          </LayoutLoaderWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
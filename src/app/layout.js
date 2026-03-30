import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Durga Ambica Textiles | Premium Suiting & Shirting Atelier",
  description: "Experience world-class luxury textiles and bespoke tailoring foundations. 25 years of excellence in premium fabrics for wholesale and retail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body bg-cream text-navy min-h-screen flex flex-col antialiased selection:bg-gold selection:text-navy overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-20 lg:pt-24">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

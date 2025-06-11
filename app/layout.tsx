import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/Components/Navbar/ResponsiveNavbar";
import Footer from "@/Components/Footer/Footer";
import ScrollToTop from "@/Components/Healper/ScrollToTop";
import SplashCursor from "@/Components/Healper/ScrollFloat";


const fonts = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baljeet Gunghas @ Portfolio",
  description: "Protfolio of my as an softerwer developer!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts} antialiased bg-black custom-scrollbar`}
      >
        <div style={{ position: 'relative', overflow: 'hidden', zIndex: 10000 }}>
          <SplashCursor />
            <ResponsiveNavbar />
            {children}
            <Footer />
            <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

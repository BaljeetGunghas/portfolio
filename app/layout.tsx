import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/Components/Navbar/ResponsiveNavbar";
import Footer from "@/Components/Footer/Footer";
import ScrollToTop from "@/Components/Healper/ScrollToTop";
import SplashCursorWrapper from "@/Components/Healper/SplashCursorWrapper";

const fonts = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baljeet Singh | Senior Software Engineer | React, Node.js, System Design",
  description: "Senior Software Engineer with 4+ years building scalable SaaS applications. Expertise in React, Node.js, system design. 62% performance improvement, 100k+ users served.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "System Design",
    "Next.js Developer",
    "TypeScript Expert",
    "Performance Engineering",
    "Backend Architecture",
  ],
  authors: [{ name: "Baljeet Singh" }],
  creator: "Baljeet Singh",
  metadataBase: new URL("https://baljeetgunghasportfolio.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baljeetgunghasportfolio.netlify.app",
    title: "Baljeet Singh | Senior Software Engineer",
    description: "4+ years shipping scalable applications. React, Node.js, system design. Check out my case studies on performance optimization and architecture.",
    siteName: "Baljeet Singh - Senior Software Engineer",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Baljeet Singh - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baljeet Singh | Senior Software Engineer",
    description: "4+ years shipping scalable applications. React, Node.js, system design.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Baljeet Singh",
    url: "https://baljeetgunghasportfolio.netlify.app",
    image: "https://baljeetgunghasportfolio.netlify.app/images/hero.png",
    sameAs: [
      "https://www.linkedin.com/in/dev-baljeet-gunghas-b6698421b/",
      "https://github.com/BaljeetGunghas",
    ],
    jobTitle: "Senior Software Engineer",
    description: "Senior Software Engineer with 4+ years experience building scalable web applications and system architecture",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://baljeetgunghasportfolio.netlify.app" />
      </head>
      <body
        className={`${fonts} antialiased bg-black custom-scrollbar scroll-smooth`}
      >
        <div style={{ position: 'relative', overflow: 'hidden', zIndex: 10000 }}>
          <SplashCursorWrapper />
          <ResponsiveNavbar />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

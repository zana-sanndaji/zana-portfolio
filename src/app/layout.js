// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "@/components/Cursor";

export const metadata = {
  title: "Zana | Junior JavaScript Developer",
  description: "React, Next.js, Tailwind CSS Developer | Full-Stack Portfolio",
  keywords:
    "javascript developer, react developer, nextjs, portfolio, frontend developer, iran",
  authors: [{ name: "Zana" }],
  creator: "Zana Sanndaji",
  publisher: "Zana Sanndaji",
  metadataBase: new URL("https://zana-portfolio.vercel.app"),
  openGraph: {
    title: "Zana — Junior JavaScript Developer",
    description:
      "Passionate about building modern web experiences with React & Next.js",
    url: "https://zana-portfolio.vercel.app",
    siteName: "Zana Portfolio",
    images: [
      {
        url: "/og-image.jpg", // یه عکس 1200x630 تو public بذار
        width: 1200,
        height: 630,
        alt: "Zana Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zana — Junior JS Developer",
    description: "React • Next.js • Tailwind Portfolio",
    images: ["/og-image.jpg"],
    creator: "@zana_dev", // اگر توییتر داری
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Cursor />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

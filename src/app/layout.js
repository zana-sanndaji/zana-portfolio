// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://zana-portfolio.vercel.app"), // این خط رو اضافه کن!
  title: {
    default: "Zana | Junior JavaScript Developer",
    template: "%s | Zana",
  },
  description: "React, Next.js, Tailwind CSS Developer | Full-Stack Portfolio",
  openGraph: {
    title: "Zana | Junior JavaScript Developer",
    description:
      "React, Next.js, Tailwind CSS Developer | Full-Stack Portfolio",
    images: ["/og-image.jpg"], // الان می‌شه: https://zana-portfolio.vercel.app/og-image.jpg
    url: "https://zana-portfolio.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zana | Junior JavaScript Developer",
    description:
      "React, Next.js, Tailwind CSS Developer | Full-Stack Portfolio",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

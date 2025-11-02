// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Zana | Junior JavaScript Developer",
  description: "React, Next.js, Tailwind CSS Developer | Full-Stack Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        {/* فاصله pt-16 */}
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

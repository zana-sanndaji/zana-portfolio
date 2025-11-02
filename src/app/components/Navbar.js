// src/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Code2, Briefcase, User, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const isDark = saved === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    localStorage.setItem("darkMode", newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // فقط صفحات جدا — بدون #!
  const navItems = [
    { name: "Skills", href: "/skills", icon: Code2 },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* لوگو */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-black text-2xl tracking-tight"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold">Z</span>
            </div>
            Zana
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform text-cyan-400" />
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={toggleDarkMode}
              className="ml-3 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:shadow-lg border border-white/20"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-300" />
              )}
            </button>
          </div>

          {/* منوی موبایل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg text-white hover:bg-white/10 transition backdrop-blur-sm"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-gradient-to-b from-gray-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10"
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">{item.name}</span>
                </Link>
              );
            })}

            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10"
            >
              <span className="font-semibold">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-300" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

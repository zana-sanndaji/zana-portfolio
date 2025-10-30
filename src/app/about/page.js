// src/app/about/page.js
"use client"; // نگه دار!

import { motion } from "framer-motion";
import { Download } from "lucide-react";

// metadata رو حذف کن!
// export const metadata = { ... }

export default function AboutPage() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl rotate-6" />
              <img
                src="/profile.jpg"
                alt="Zana"
                className="absolute top-4 left-4 w-80 h-80 object-cover rounded-3xl shadow-2xl -rotate-6"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I&apos;m Zana
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A passionate{" "}
              <span className="font-bold text-purple-600">
                Junior JavaScript Developer
              </span>{" "}
              focused on building modern, fast, and beautiful web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I love React, Next.js, Tailwind CSS, and turning ideas into
              reality. Currently learning Node.js and exploring backend
              development.
            </p>
            <div className="flex gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

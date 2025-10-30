// src/app/not-found.js
"use client"; // این خط رو اضافه کن!

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <h1 className="text-9xl font-black mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found.</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-lg transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-lg transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-lg transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Zana. All rights reserved.
        </p>
        <p className="text-xs mt-1">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}

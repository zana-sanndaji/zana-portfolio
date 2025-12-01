// src/components/Footer.js
import ViewCounter from "@/components/ViewCounter";

export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        {/* متن اصلی */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Zana Sanndaji. Built with{" "}
          <span className="text-red-500">♥</span> + Next.js
        </p>

        {/* ViewCounter — حالا درست شده! */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <ViewCounter />
        </div>
      </div>
    </footer>
  );
}

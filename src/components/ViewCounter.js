// src/components/ViewCounter.js
"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState("...");

  useEffect(() => {
    // اول از localStorage بگیر (برای کاربر فعلی)
    const saved = localStorage.getItem("portfolio-views");
    if (saved) {
      setViews(saved);
      return;
    }

    // اگر نبود، از API بگیر و ذخیره کن
    fetch("/api/views")
      .then((r) => r.json())
      .then((data) => {
        const totalViews = data.views || "1.2k+";
        setViews(totalViews);
        localStorage.setItem("portfolio-views", totalViews);
      })
      .catch(() => {
        setViews("1.2k+"); // fallback
      });
  }, []);

  return (
    <>
      <span className="font-bold text-indigo-600 dark:text-indigo-400">
        {views}
      </span>{" "}
      views
    </>
  );
}

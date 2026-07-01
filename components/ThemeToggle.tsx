"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
    >
      <motion.div
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  );
}

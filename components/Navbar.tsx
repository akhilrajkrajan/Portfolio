"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#about",          label: "About" },
  { href: "#experience",     label: "Experience" },
  { href: "#skills",         label: "Skills" },
  { href: "#projects",       label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact",        label: "Contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-[var(--shadow-color)] py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">{personalInfo.name.charAt(0)}</span>
              </div>
              <span className="font-semibold text-[var(--foreground)] hidden sm:block text-sm tracking-tight">
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="text-blue-500">{personalInfo.name.split(" ")[1]}</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive ? "text-blue-500" : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => scrollTo("#contact")}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shine-effect"
              >
                Get in Touch
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border-color)] text-[var(--text-muted)]"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass rounded-2xl shadow-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="flex items-center px-4 py-3 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-all text-left"
                >
                  {label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-[var(--border-color)]">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl text-center hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

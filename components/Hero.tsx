"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown, MapPin } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const tags = [
  "ESG", "CSRD", "EU Taxonomy", "Power BI", "ESRS", "Financial Controlling"
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #1e40af 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #0f2040 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-200/30 text-sm text-[var(--text-muted)] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <MapPin size={13} />
              <span>{personalInfo.location}</span>
              <span className="w-px h-3 bg-[var(--border-color)]" />
              <span className="text-blue-500 font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4"
            >
              <span className="text-[var(--foreground)]">{personalInfo.name.split(" ")[0]} </span>
              <span className="gradient-text">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl font-medium text-[var(--text-muted)] mb-6"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full border border-blue-200/40 bg-blue-50/50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 uppercase tracking-wider"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={personalInfo.resumeUrl}
                download
                className="shine-effect inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[var(--border-color)] hover:border-blue-300 text-[var(--foreground)] font-semibold rounded-xl transition-all duration-200 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-sm"
              >
                <Mail size={16} />
                Get In Touch
              </button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[var(--border-color)] hover:border-blue-400 text-[var(--foreground)] font-semibold rounded-xl transition-all duration-200 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-sm"
              >
                <LinkedInIcon size={16} className="text-blue-500" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/30 dark:border-blue-800/30 scale-110 animate-spin [animation-duration:20s]" />
            <div className="absolute inset-0 rounded-full border border-blue-100/20 dark:border-blue-900/20 scale-125" />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl scale-150" />

            {/* Image container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-blue-200/40 dark:border-blue-700/30 shadow-2xl shadow-blue-600/20">
              {/* Fallback initials — behind the image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-600 z-0">
                <span className="text-7xl font-bold text-white/20">
                  {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              {/* Profile image — on top */}
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover z-10"
              />
            </div>

            {/* Floating badge cards */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-8 glass rounded-2xl px-4 py-3 shadow-xl border border-[var(--glass-border)]"
            >
              <div className="text-xs text-[var(--text-muted)] font-medium">ESG Experience</div>
              <div className="text-xl font-bold text-[var(--foreground)]">{personalInfo.yearsExperience}+ Years</div>
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-2 -right-8 glass rounded-2xl px-4 py-3 shadow-xl border border-[var(--glass-border)]"
            >
              <div className="text-xs text-[var(--text-muted)] font-medium">Projects</div>
              <div className="text-xl font-bold text-blue-500">{personalInfo.projectsCompleted}+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}

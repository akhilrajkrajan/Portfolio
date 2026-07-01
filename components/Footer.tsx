"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — branding */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-navy-800 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">
                  {personalInfo.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-[var(--foreground)] text-sm">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">{personalInfo.tagline}</p>
          </div>

          {/* Center — links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-300 transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-blue-500 hover:border-blue-300 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={15} />
            </a>
          </div>

          {/* Right — back to top + copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-blue-500 transition-colors font-medium"
            >
              <ArrowUp size={13} />
              Back to top
            </motion.button>
            <p className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

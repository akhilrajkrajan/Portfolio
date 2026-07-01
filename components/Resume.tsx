"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye, FileText, Briefcase, GraduationCap, Award } from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  { icon: <Briefcase size={16} />, label: "Experience", value: `${personalInfo.yearsExperience}+ years in ESG & Finance` },
  { icon: <GraduationCap size={16} />, label: "Education", value: "MSc Sustainable Finance" },
  { icon: <Award size={16} />, label: "Certifications", value: `${personalInfo.certificationsCount} professional certifications` },
  { icon: <FileText size={16} />, label: "Projects", value: `${personalInfo.projectsCompleted}+ delivered projects` },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" className="section-padding bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Documents
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Resume &{" "}
            <span className="gradient-text">CV</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — preview card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Mock CV card */}
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl shadow-[var(--shadow-color)] bg-[var(--card-bg)]">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-navy-900 to-navy-700 p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/30 border border-blue-400/30 flex items-center justify-center text-2xl font-bold">
                    {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{personalInfo.name}</div>
                    <div className="text-blue-200 text-sm">ESG & Sustainability Professional</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["CSRD", "EU Taxonomy", "Power BI", "Financial Controlling"].map((tag) => (
                    <div key={tag} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-blue-100 text-center">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body mockup */}
              <div className="p-6 space-y-4">
                {[
                  { label: "Experience", lines: 3 },
                  { label: "Education", lines: 2 },
                  { label: "Skills", lines: 2 },
                ].map((section) => (
                  <div key={section.label}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">{section.label}</span>
                    </div>
                    <div className="space-y-1.5 pl-5">
                      {Array.from({ length: section.lines }).map((_, i) => (
                        <div
                          key={i}
                          className="h-2 rounded-full bg-[var(--border-color)]"
                          style={{ width: `${85 - i * 15}%` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Blur overlay with download CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-[var(--card-bg)]/60 to-transparent flex items-end justify-center pb-8">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-blue-300 transition-all shadow-lg"
                >
                  <Eye size={16} />
                  Preview CV
                </a>
              </div>
            </div>

            {/* Shadow decoration */}
            <div className="absolute -bottom-6 left-6 right-6 h-12 bg-blue-600/10 rounded-full blur-xl" />
          </motion.div>

          {/* Right — highlights + download */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
              Download My CV
            </h3>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              A comprehensive overview of my experience in ESG consulting, sustainability reporting,
              financial controlling, and Power BI development. Available in PDF format.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-medium">{h.label}</p>
                    <p className="text-sm font-semibold text-[var(--foreground)]">{h.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="shine-effect flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25"
              >
                <Download size={18} />
                Download PDF
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 border border-[var(--border-color)] hover:border-blue-300 text-[var(--foreground)] font-semibold rounded-xl transition-all hover:bg-blue-50/50 dark:hover:bg-blue-950/20"
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Check } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Career Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative sm:pl-20"
              >
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-2 border-blue-500 bg-[var(--background)] shadow-md hidden sm:flex items-center justify-center -translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                <div className={`rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-sm overflow-hidden transition-all duration-300 ${expanded === i ? "shadow-md" : ""}`}>
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="w-full text-left p-6 sm:p-7 flex items-start gap-4"
                  >
                    <div className="w-1 self-stretch rounded-full flex-shrink-0 min-h-14" style={{ backgroundColor: exp.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-[var(--foreground)] leading-tight">{exp.position}</h3>
                          <p className="text-blue-500 font-semibold text-sm mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                            <Calendar size={12} /><span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                            <MapPin size={12} /><span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">{exp.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-[var(--text-muted)] mt-1"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-[var(--border-color)]">
                      <div className="grid sm:grid-cols-2 gap-8 mt-4">
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">Responsibilities</h4>
                          <ul className="space-y-2.5">
                            {exp.responsibilities.map((r, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                                <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: `${exp.color}22` }}>
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
                                </div>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">Key Achievements</h4>
                          <ul className="space-y-2.5 mb-6">
                            {exp.achievements.map((a, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                                <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 mt-0.5 flex items-center justify-center">
                                  <Check size={10} className="text-green-600 dark:text-green-400" />
                                </div>
                                {a}
                              </li>
                            ))}
                          </ul>
                          <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((t) => (
                              <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)]">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

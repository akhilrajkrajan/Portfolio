"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Leaf, Cpu, Award } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase size={22} />,
  leaf:      <Leaf size={22} />,
  cpu:       <Cpu size={22} />,
  award:     <Award size={22} />,
};

const expertise = [
  "CSRD & ESRS Standards", "EU Taxonomy Assessment", "GRI & TCFD Reporting",
  "Power BI Architecture", "Financial Controlling",  "ESG Strategy Design",
  "Carbon Accounting",     "Stakeholder Engagement",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Professional <span className="gradient-text">Overview</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-lift glass rounded-2xl p-6 text-center border border-[var(--glass-border)] shadow-md shadow-[var(--shadow-color)]"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-4">
                {iconMap[stat.icon]}
              </div>
              <div className="text-3xl font-bold text-[var(--foreground)] mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Sustainability × Finance × Data</h3>
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-base">
              {personalInfo.bio.split("\n").map((para, i) => <p key={i}>{para.trim()}</p>)}
            </div>
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-blue-900/10 border border-blue-100/50 dark:border-blue-900/30">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Mission</p>
              <p className="text-[var(--foreground)] font-medium italic leading-relaxed">
                &ldquo;Turning sustainability complexity into clear, data-driven insights that accelerate the transition to a low-carbon economy.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Core Expertise</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {expertise.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-4 py-2 glass rounded-xl text-sm font-medium text-[var(--foreground)] border border-[var(--border-color)] hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[var(--foreground)] mb-5">Industries</h3>
            <div className="space-y-3">
              {[
                { label: "Energy & Utilities",            pct: 35 },
                { label: "Manufacturing & Industry",      pct: 30 },
                { label: "Financial Services",            pct: 20 },
                { label: "Real Estate & Infrastructure",  pct: 15 },
              ].map((ind, i) => (
                <div key={ind.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[var(--foreground)] font-medium">{ind.label}</span>
                    <span className="text-[var(--text-muted)]">{ind.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border-color)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${ind.pct}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

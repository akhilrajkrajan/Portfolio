"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Leaf, BarChart2, TrendingUp, Globe, ShieldCheck, Server, Zap } from "lucide-react";
import { certifications } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={22} />,
  leaf: <Leaf size={22} />,
  "bar-chart": <BarChart2 size={22} />,
  "trending-up": <TrendingUp size={22} />,
  globe: <Globe size={22} />,
  "shield-check": <ShieldCheck size={22} />,
  server: <Server size={22} />,
  zap: <Zap size={22} />,
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Certifications &{" "}
            <span className="gradient-text">Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="card-lift group relative bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] p-6 shadow-sm shadow-[var(--shadow-color)] overflow-hidden"
            >
              {/* BG accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-8 group-hover:opacity-15 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Year badge */}
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold border border-[var(--border-color)] text-[var(--text-muted)]">
                {cert.year}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${cert.color}bb, ${cert.color})` }}
              >
                {iconMap[cert.icon]}
              </div>

              <h3 className="text-sm font-bold text-[var(--foreground)] leading-snug mb-2 pr-8">
                {cert.name}
              </h3>
              <p className="text-xs font-semibold text-blue-500 mb-3">
                {cert.organization}
              </p>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {cert.description}
              </p>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Education note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 glass rounded-2xl p-8 border border-[var(--glass-border)] text-center"
        >
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
            Education
          </p>
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
            Master of Science in Sustainable Finance & Management
            {/* [REPLACE_EDUCATION_DEGREE] */}
          </h3>
          <p className="text-blue-500 font-medium mb-1">
            [REPLACE_UNIVERSITY_NAME] · [REPLACE_GRADUATION_YEAR]
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Thesis: Integrating EU Taxonomy into Corporate Capital Allocation Frameworks
            {/* [REPLACE_THESIS_TITLE] */}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

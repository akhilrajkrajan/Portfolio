"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, BarChart2, TrendingUp, Server } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  leaf:          <Leaf size={20} />,
  "bar-chart":   <BarChart2 size={20} />,
  "trending-up": <TrendingUp size={20} />,
  server:        <Server size={20} />,
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[var(--foreground)]">{name}</span>
        <span className="text-xs font-semibold tabular-nums" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--border-color)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(to right, ${color}bb, ${color})` }}
        >
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: delay + 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
              className="card-lift bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] p-7 shadow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5" style={{ background: cat.color }} />
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${cat.color}cc, ${cat.color})` }}
                >
                  {iconMap[cat.icon]}
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)]">{cat.category}</h3>
              </div>
              <div className="space-y-5">
                {cat.items.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name} name={skill.name} level={skill.level} color={cat.color}
                    delay={0.2 + catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--text-muted)] mb-5 uppercase tracking-wider font-medium">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "ESRS", "GRI", "TCFD", "TNFD", "CDP", "SBTi", "ISO 14001",
              "Python (Basic)", "Tableau", "Google Data Studio", "Bloomberg ESG",
              "Refinitiv Eikon", "PowerPoint", "Word", "Copilot AI",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

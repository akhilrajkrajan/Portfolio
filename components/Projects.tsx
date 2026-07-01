"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Leaf, BarChart2, TrendingUp, Zap, Globe, ShieldCheck, X, Check } from "lucide-react";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf size={20} />,
  "bar-chart": <BarChart2 size={20} />,
  "trending-up": <TrendingUp size={20} />,
  zap: <Zap size={20} />,
  globe: <Globe size={20} />,
  "shield-check": <ShieldCheck size={20} />,
};

const badgeColors: Record<string, string> = {
  Featured: "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300",
  Impact: "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300",
  Scale: "bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300",
  Finance: "bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300",
  Automation: "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300",
  Climate: "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <section id="projects" className="section-padding bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-5">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-8" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "glass border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-blue-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onClick={() => setSelected(project.id)}
                className="group card-lift bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[var(--shadow-color)] hover:border-blue-200/50 dark:hover:border-blue-800/50"
              >
                {/* Project header */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
                  }}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${project.color}cc, ${project.color})` }}
                  >
                    {iconMap[project.icon]}
                  </motion.div>

                  {/* Badge */}
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold ${badgeColors[project.badge]}`}>
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base font-bold text-[var(--foreground)] mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4 p-3 rounded-xl bg-green-50/70 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-1">
                      Business Impact
                    </p>
                    <p className="text-xs text-green-800 dark:text-green-300">{project.impact}</p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md border border-[var(--border-color)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-md border border-[var(--border-color)] text-[var(--text-muted)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected !== null && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--card-bg)] rounded-3xl shadow-2xl border border-[var(--border-color)]"
              >
                {/* Modal header */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden rounded-t-3xl"
                  style={{ background: `linear-gradient(135deg, ${selectedProject.color}20, ${selectedProject.color}40)` }}
                >
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl"
                    style={{ background: `linear-gradient(135deg, ${selectedProject.color}cc, ${selectedProject.color})` }}
                  >
                    <span className="scale-150">{iconMap[selectedProject.icon]}</span>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal content */}
                <div className="p-8">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </p>
                  <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-3">
                    Key Results
                  </h3>
                  <ul className="space-y-2.5 mb-6">
                    {selectedProject.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <Check size={11} className="text-green-600 dark:text-green-400" />
                        </div>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--border-color)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

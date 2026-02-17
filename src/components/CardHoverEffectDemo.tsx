"use client";

import { useEffect, useMemo, useState } from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import { projects } from "@/data";

const INITIAL_PROJECTS = 6;

const inferCategory = (title: string, description: string) => {
  const source = `${title} ${description}`.toLowerCase();

  if (source.includes("landing page") || source.includes("landing pages")) {
    return "Web";
  }
  if (source.includes("mobile") || source.includes("flutter")) return "Mobile";
  if (source.includes("frontend")) return "Frontend";
  if (source.includes("fullstack")) return "Fullstack";
  if (source.includes("devops") || source.includes("docker")) return "DevOps";
  if (source.includes("desktop") || source.includes("c#")) return "Desktop";
  return "Web";
};

export function CardHoverEffectDemo() {
  const enhancedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        category: inferCategory(project.title, project.description),
      })),
    []
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(enhancedProjects.map((p) => p.category)))],
    [enhancedProjects]
  );

  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return enhancedProjects;
    return enhancedProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory, enhancedProjects]);

  useEffect(() => {
    setVisibleCount(INITIAL_PROJECTS);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-indigo-700 dark:text-cyan-300 text-xs tracking-[0.25em] uppercase">
            Portfolio
          </p>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mt-3">
            Project Highlights
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            A curated list of products and experiments across mobile, frontend,
            fullstack, and DevOps work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-700 dark:text-cyan-200 border-indigo-400/50 dark:border-cyan-300/40"
                    : "bg-white/80 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-indigo-400/50 dark:hover:border-cyan-300/30 hover:text-indigo-700 dark:hover:text-cyan-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
          Showing {visibleProjects.length} of {filteredProjects.length} projects
        </p>

        <HoverEffect items={visibleProjects} />

        {filteredProjects.length > INITIAL_PROJECTS && (
          <div className="mt-6 flex justify-center">
            {hasMore ? (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + INITIAL_PROJECTS)}
                className="px-6 py-2 rounded-full text-sm border border-indigo-400/50 dark:border-cyan-300/40 bg-indigo-500/15 text-indigo-700 dark:text-cyan-200 hover:bg-indigo-500/25"
              >
                Show More Projects
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCount(INITIAL_PROJECTS)}
                className="px-6 py-2 rounded-full text-sm border border-slate-300 dark:border-white/20 bg-white/90 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-indigo-400/50 dark:hover:border-cyan-300/30"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

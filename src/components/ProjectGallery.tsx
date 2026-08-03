"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  projects,
  projectFilters,
  type FilterId,
} from "@/data/projects";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="mb-8 text-sm text-slate-600 dark:text-slate-400">
        All stores are fully designed based on client requirements and
        references. Over 50+ projects completed.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

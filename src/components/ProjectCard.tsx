import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-500/30">
      {project.imageUrl ? (
        <img src={project.imageUrl} alt={project.name} className="h-40 w-full object-cover" />
      ) : (
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-emerald-500/20 to-slate-900/10 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {project.name}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {project.name}
          </h3>
          {project.password && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <Lock size={10} />
              {project.password}
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        {project.passwordNote && (
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            {project.passwordNote}
          </p>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
        >
          Visit Store
          <ExternalLink
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}

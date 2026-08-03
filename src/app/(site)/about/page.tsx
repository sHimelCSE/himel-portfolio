import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import {
  professionalSummary,
  careerHistory,
  education,
  skillGroups,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MD. SHAHIDUZZAMAN — Full Stack Shopify Developer with expertise in Liquid, theme customization, and e-commerce solutions.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-4xl font-bold text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          About Me & Career Background
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Passionate about building high-converting Shopify stores.
        </p>
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Professional Summary
        </h2>
        <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400">
          {professionalSummary.split("\n\n").map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-8 text-xl font-bold text-slate-900 dark:text-white">
          Career History
        </h2>
        <Timeline items={careerHistory} />
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-8 text-xl font-bold text-slate-900 dark:text-white">
          Education
        </h2>
        <div className="grid gap-4">
          {education.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-500/50 dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">
                    {item.institution}, {item.location}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {item.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {item.gpa}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="mb-8 text-center text-xl font-bold text-slate-900 dark:text-white">
          Technical & Professional Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50"
            >
              <h3 className="font-semibold text-emerald-600 dark:text-emerald-400">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

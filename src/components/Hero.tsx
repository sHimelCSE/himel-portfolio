"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import type { SiteConfig } from "@/lib/types";

const badgeIcons = [Briefcase, Layers, Sparkles];

export default function Hero({ site }: { site: SiteConfig }) {

  const siteName = site.name || "MD. SHAHIDUZZAMAN";
  const tagline = site.tagline || "Building High-Performing, Conversion-Focused Shopify & Web Solutions";
  const resumeUrl = site.resumeUrl || "/resume.pdf";
  const badges = [site.stats.projects || "50+ Projects Completed", site.stats.liquid || "Liquid & Theme Customization", site.stats.figma || "Figma to Shopify Expert"];
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {site.heroImageUrl ? (
          <img src={site.heroImageUrl} alt="Hero background" className="h-full w-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/70" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Sparkles size={16} />
            Full Stack Shopify Developer
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {tagline}
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {siteName}
            </span>{" "}
            — Full Stack Shopify & Web Developer with 1+ years of experience
            and 50+ completed e-commerce projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Explore Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              View Services
            </Link>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {badges.map((badge, i) => {
              const Icon = badgeIcons[i];
              return (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
                >
                  <Icon size={14} className="text-emerald-500" />
                  {badge}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

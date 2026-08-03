import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured }: ServiceCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-500/30 ${
        featured ? "lg:p-8" : ""
      }`}
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {service.description}
      </p>
      <ul className="mt-4 space-y-2">
        {service.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {bullet}
          </li>
        ))}
      </ul>
      {featured && (
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}

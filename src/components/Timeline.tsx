import type { TimelineItem } from "@/data/about";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-emerald-200 dark:before:bg-emerald-900">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8">
          <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-950" />
          <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {item.company}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {item.location}
            </p>
            {item.responsibilities && (
              <ul className="mt-3 space-y-1">
                {item.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {r}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

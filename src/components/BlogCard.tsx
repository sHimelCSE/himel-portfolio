import { Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-500/30">
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
          <Tag size={12} />
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} />
          {post.readTime} read
        </span>
        <span>{post.date}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
        {post.excerpt}
      </p>
      <button className="mt-4 self-start text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400">
        Read Article →
      </button>
    </article>
  );
}

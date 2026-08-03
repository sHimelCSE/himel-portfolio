"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Settings,
  Briefcase,
  FolderKanban,
  FileText,
  User,
  Mail,
} from "lucide-react";

interface AdminStats {
  services: number;
  projects: number;
  blogPosts: number;
  unreadMessages: number;
}

const cards = [
  { href: "/admin/site", label: "Site Settings", icon: Settings, key: "site" },
  { href: "/admin/services", label: "Services", icon: Briefcase, key: "services" },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban, key: "projects" },
  { href: "/admin/blog", label: "Blog", icon: FileText, key: "blog" },
  { href: "/admin/about", label: "About", icon: User, key: "about" },
  { href: "/admin/messages", label: "Messages", icon: Mail, key: "messages" },
] as const;

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    async function loadStats() {
      const res = await fetch("/api/auth/session");
      if (!res.ok) return;
      const data = await res.json();
      setStats(data.stats ?? null);
    }

    void loadStats();
  }, []);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-600/20 p-2.5 text-emerald-400">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-slate-400">
              Manage the portfolio content and keep the website fresh from one place.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Services</p>
          <p className="mt-2 text-3xl font-semibold text-white">{stats?.services ?? 0}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Projects</p>
          <p className="mt-2 text-3xl font-semibold text-white">{stats?.projects ?? 0}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Blog posts</p>
          <p className="mt-2 text-3xl font-semibold text-white">{stats?.blogPosts ?? 0}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-sm text-slate-400">Unread messages</p>
          <p className="mt-2 text-3xl font-semibold text-white">{stats?.unreadMessages ?? 0}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-colors hover:border-emerald-500/50"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-600/20 p-2.5 text-emerald-400">
                <Icon size={18} />
              </div>
              <div>
                <h2 className="font-semibold text-white">{label}</h2>
                <p className="text-sm text-slate-400">Edit and publish changes instantly</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

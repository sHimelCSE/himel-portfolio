"use client";

import { useEffect, useState } from "react";
import { FormField, inputClass, textareaClass } from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { adminFetch } from "@/lib/admin-api";
import type { SiteConfig } from "@/lib/types";

const emptySite: SiteConfig = {
  name: "",
  title: "",
  tagline: "",
  email: "",
  phone: "",
  address: "",
  availability: "",
  resumeUrl: "",
  logoUrl: "",
  heroImageUrl: "",
  stats: {
    projects: "",
    liquid: "",
    figma: "",
  },
};

export default function AdminSitePage() {
  const [site, setSite] = useState<SiteConfig>(emptySite);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSite() {
      try {
        const res = await adminFetch<{ data: SiteConfig }>('/api/admin/content?section=site');
        setSite(res.data);
      } catch {
        setSite(emptySite);
      } finally {
        setLoading(false);
      }
    }

    void loadSite();
  }, []);

  const handleSave = async () => {
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'site', data: site }),
    });
  };

  if (loading) {
    return <p className="text-slate-400">Loading site settings…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Site Settings</h1>
          <p className="mt-1 text-sm text-slate-400">Update the content shown across the portfolio.</p>
        </div>
        <SaveButton onSave={handleSave} label="Save Site Settings" />
      </div>

      <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 lg:grid-cols-2">
        <FormField label="Name">
          <input value={site.name} onChange={(e) => setSite({ ...site, name: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Title">
          <input value={site.title} onChange={(e) => setSite({ ...site, title: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Tagline" hint="Shown in the hero section">
          <textarea value={site.tagline} onChange={(e) => setSite({ ...site, tagline: e.target.value })} rows={3} className={textareaClass} />
        </FormField>
        <FormField label="Resume URL">
          <input value={site.resumeUrl} onChange={(e) => setSite({ ...site, resumeUrl: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Logo image URL" hint="Leave blank to show initials">
          <input value={site.logoUrl ?? ""} onChange={(e) => setSite({ ...site, logoUrl: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Hero background image URL" hint="Leave blank to show the default gradient background">
          <input value={site.heroImageUrl ?? ""} onChange={(e) => setSite({ ...site, heroImageUrl: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Email">
          <input value={site.email} onChange={(e) => setSite({ ...site, email: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Phone">
          <input value={site.phone} onChange={(e) => setSite({ ...site, phone: e.target.value })} className={inputClass} />
        </FormField>
        <FormField label="Address">
          <textarea value={site.address} onChange={(e) => setSite({ ...site, address: e.target.value })} rows={3} className={textareaClass} />
        </FormField>
        <FormField label="Availability">
          <textarea value={site.availability} onChange={(e) => setSite({ ...site, availability: e.target.value })} rows={3} className={textareaClass} />
        </FormField>
        <FormField label="Projects stat">
          <input value={site.stats.projects} onChange={(e) => setSite({ ...site, stats: { ...site.stats, projects: e.target.value } })} className={inputClass} />
        </FormField>
        <FormField label="Liquid stat">
          <input value={site.stats.liquid} onChange={(e) => setSite({ ...site, stats: { ...site.stats, liquid: e.target.value } })} className={inputClass} />
        </FormField>
        <FormField label="Figma stat">
          <input value={site.stats.figma} onChange={(e) => setSite({ ...site, stats: { ...site.stats, figma: e.target.value } })} className={inputClass} />
        </FormField>
      </div>
    </div>
  );
}

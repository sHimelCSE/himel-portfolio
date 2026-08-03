"use client";

import { useEffect, useState } from "react";
import { FormField, inputClass, textareaClass } from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { adminFetch } from "@/lib/admin-api";
import type { AboutContent } from "@/lib/types";

const emptyAbout: AboutContent = {
  professionalSummary: "",
  careerHistory: [],
  education: [],
  skillGroups: [],
};

export default function AdminAboutPage() {
  const [about, setAbout] = useState<AboutContent>(emptyAbout);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAbout() {
      try {
        const res = await adminFetch<{ data: AboutContent }>('/api/admin/content?section=about');
        setAbout(res.data);
      } catch {
        setAbout(emptyAbout);
      } finally {
        setLoading(false);
      }
    }

    void loadAbout();
  }, []);

  const handleSave = async () => {
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'about', data: about }),
    });
  };

  if (loading) {
    return <p className="text-slate-400">Loading about content…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">About Content</h1>
          <p className="mt-1 text-sm text-slate-400">Edit your professional summary, background, and skills.</p>
        </div>
        <SaveButton onSave={handleSave} label="Save About" />
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <FormField label="Professional summary">
          <textarea value={about.professionalSummary} onChange={(e) => setAbout({ ...about, professionalSummary: e.target.value })} rows={6} className={textareaClass} />
        </FormField>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Career history</h2>
        {about.careerHistory.map((item, index) => (
          <div key={`${item.title}-${index}`} className="mb-4 rounded-xl border border-slate-800 p-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField label="Title">
                <input value={item.title} onChange={(e) => setAbout({ ...about, careerHistory: about.careerHistory.map((entry, entryIndex) => entryIndex === index ? { ...entry, title: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Company">
                <input value={item.company} onChange={(e) => setAbout({ ...about, careerHistory: about.careerHistory.map((entry, entryIndex) => entryIndex === index ? { ...entry, company: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Period">
                <input value={item.period} onChange={(e) => setAbout({ ...about, careerHistory: about.careerHistory.map((entry, entryIndex) => entryIndex === index ? { ...entry, period: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Location">
                <input value={item.location} onChange={(e) => setAbout({ ...about, careerHistory: about.careerHistory.map((entry, entryIndex) => entryIndex === index ? { ...entry, location: e.target.value } : entry) })} className={inputClass} />
              </FormField>
            </div>
            <div className="mt-4">
              <FormField label="Responsibilities" hint="One per line">
                <textarea value={(item.responsibilities ?? []).join("\n")} onChange={(e) => setAbout({ ...about, careerHistory: about.careerHistory.map((entry, entryIndex) => entryIndex === index ? { ...entry, responsibilities: e.target.value.split(/\n+/).filter(Boolean) } : entry) })} rows={4} className={textareaClass} />
              </FormField>
            </div>
          </div>
        ))}
        <button onClick={() => setAbout({ ...about, careerHistory: [...about.careerHistory, { title: "", company: "", period: "", location: "", responsibilities: [] }] })} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
          Add career item
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Education</h2>
        {about.education.map((item, index) => (
          <div key={`${item.degree}-${index}`} className="mb-4 rounded-xl border border-slate-800 p-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField label="Degree">
                <input value={item.degree} onChange={(e) => setAbout({ ...about, education: about.education.map((entry, entryIndex) => entryIndex === index ? { ...entry, degree: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Year">
                <input value={item.year} onChange={(e) => setAbout({ ...about, education: about.education.map((entry, entryIndex) => entryIndex === index ? { ...entry, year: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Institution">
                <input value={item.institution} onChange={(e) => setAbout({ ...about, education: about.education.map((entry, entryIndex) => entryIndex === index ? { ...entry, institution: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="Location">
                <input value={item.location} onChange={(e) => setAbout({ ...about, education: about.education.map((entry, entryIndex) => entryIndex === index ? { ...entry, location: e.target.value } : entry) })} className={inputClass} />
              </FormField>
              <FormField label="GPA/Score">
                <input value={item.gpa} onChange={(e) => setAbout({ ...about, education: about.education.map((entry, entryIndex) => entryIndex === index ? { ...entry, gpa: e.target.value } : entry) })} className={inputClass} />
              </FormField>
            </div>
          </div>
        ))}
        <button onClick={() => setAbout({ ...about, education: [...about.education, { degree: "", year: "", institution: "", location: "", gpa: "" }] })} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
          Add education item
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">Skill groups</h2>
        {about.skillGroups.map((group, index) => (
          <div key={`${group.category}-${index}`} className="mb-4 rounded-xl border border-slate-800 p-4">
            <FormField label="Category">
              <input value={group.category} onChange={(e) => setAbout({ ...about, skillGroups: about.skillGroups.map((entry, entryIndex) => entryIndex === index ? { ...entry, category: e.target.value } : entry) })} className={inputClass} />
            </FormField>
            <div className="mt-4">
              <FormField label="Skills" hint="One skill per line">
                <textarea value={group.skills.join("\n")} onChange={(e) => setAbout({ ...about, skillGroups: about.skillGroups.map((entry, entryIndex) => entryIndex === index ? { ...entry, skills: e.target.value.split(/\n+/).filter(Boolean) } : entry) })} rows={4} className={textareaClass} />
              </FormField>
            </div>
          </div>
        ))}
        <button onClick={() => setAbout({ ...about, skillGroups: [...about.skillGroups, { category: "", skills: [] }] })} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
          Add skill group
        </button>
      </div>
    </div>
  );
}

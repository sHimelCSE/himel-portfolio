"use client";

import { useEffect, useState } from "react";
import { FormField, inputClass, textareaClass } from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { adminFetch } from "@/lib/admin-api";
import type { Project } from "@/lib/types";

const emptyProject = (): Project => ({
  id: `project-${Date.now()}`,
  name: "",
  description: "",
  url: "",
  category: "advanced",
  password: "",
  passwordNote: "",
  imageUrl: "",
});

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await adminFetch<{ data: Project[] }>('/api/admin/content?section=projects');
        setProjects(res.data);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    void loadProjects();
  }, []);

  const handleSave = async () => {
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'projects', data: projects }),
    });
  };

  if (loading) {
    return <p className="text-slate-400">Loading projects…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Projects</h1>
          <p className="mt-1 text-sm text-slate-400">Showcase your favorite work and client results.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setProjects((prev) => [...prev, emptyProject()])} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
            Add project
          </button>
          <SaveButton onSave={handleSave} label="Save Projects" />
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={project.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-white">Project #{index + 1}</h2>
              <button onClick={() => setProjects((prev) => prev.filter((item) => item.id !== project.id))} className="text-sm text-red-400">Remove</button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField label="ID">
                <input value={project.id} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, id: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Name">
                <input value={project.name} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, name: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="URL">
                <input value={project.url} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, url: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Category">
                <select value={project.category} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, category: e.target.value as Project['category'] } : item)))} className={inputClass}>
                  <option value="advanced">Advanced</option>
                  <option value="other">Other</option>
                </select>
              </FormField>
            </div>
            <div className="mt-4">
              <FormField label="Description">
                <textarea value={project.description} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, description: e.target.value } : item)))} rows={4} className={textareaClass} />
              </FormField>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <FormField label="Password (optional)">
                <input value={project.password ?? ""} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, password: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Password note">
                <input value={project.passwordNote ?? ""} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, passwordNote: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Project image URL" hint="Leave blank for fallback artwork">
                <input value={project.imageUrl ?? ""} onChange={(e) => setProjects((prev) => prev.map((item) => (item.id === project.id ? { ...item, imageUrl: e.target.value } : item)))} className={inputClass} />
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

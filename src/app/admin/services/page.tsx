"use client";

import { useEffect, useState } from "react";
import { FormField, inputClass, textareaClass } from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { adminFetch } from "@/lib/admin-api";
import type { Service } from "@/lib/types";

const emptyService = (): Service => ({
  id: `service-${Date.now()}`,
  icon: "",
  title: "",
  description: "",
  bullets: [],
});

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await adminFetch<{ data: Service[] }>('/api/admin/content?section=services');
        setServices(res.data);
      } catch {
        setServices([]);
      } finally {
        setLoading(false);
      }
    }

    void loadServices();
  }, []);

  const handleSave = async () => {
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'services', data: services }),
    });
  };

  if (loading) {
    return <p className="text-slate-400">Loading services…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Services</h1>
          <p className="mt-1 text-sm text-slate-400">Publish your available services and highlights.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setServices((prev) => [...prev, emptyService()])} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
            Add service
          </button>
          <SaveButton onSave={handleSave} label="Save Services" />
        </div>
      </div>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={service.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-white">Service #{index + 1}</h2>
              <button onClick={() => setServices((prev) => prev.filter((item) => item.id !== service.id))} className="text-sm text-red-400">Remove</button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField label="ID">
                <input value={service.id} onChange={(e) => setServices((prev) => prev.map((item) => (item.id === service.id ? { ...item, id: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Icon">
                <input value={service.icon} onChange={(e) => setServices((prev) => prev.map((item) => (item.id === service.id ? { ...item, icon: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Title">
                <input value={service.title} onChange={(e) => setServices((prev) => prev.map((item) => (item.id === service.id ? { ...item, title: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Description">
                <input value={service.description} onChange={(e) => setServices((prev) => prev.map((item) => (item.id === service.id ? { ...item, description: e.target.value } : item)))} className={inputClass} />
              </FormField>
            </div>
            <div className="mt-4">
              <FormField label="Bullet points" hint="One bullet per line">
                <textarea value={service.bullets.join("\n")} onChange={(e) => setServices((prev) => prev.map((item) => (item.id === service.id ? { ...item, bullets: e.target.value.split(/\n+/).filter(Boolean) } : item)))} rows={5} className={textareaClass} />
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

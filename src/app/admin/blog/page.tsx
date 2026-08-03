"use client";

import { useEffect, useState } from "react";
import { FormField, inputClass, textareaClass } from "@/components/admin/FormField";
import SaveButton from "@/components/admin/SaveButton";
import { adminFetch } from "@/lib/admin-api";
import type { BlogPost } from "@/lib/types";

const emptyPost = (): BlogPost => ({
  id: `post-${Date.now()}`,
  title: "",
  excerpt: "",
  category: "",
  readTime: "",
  date: "",
});

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      try {
        const res = await adminFetch<{ data: { blogPosts: BlogPost[]; blogCategories: string[] } }>('/api/admin/content');
        setPosts(res.data.blogPosts);
        setCategories(res.data.blogCategories);
      } catch {
        setPosts([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    void loadBlog();
  }, []);

  const handleSave = async () => {
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'blogPosts', data: posts }),
    });
    await adminFetch('/api/admin/content', {
      method: 'PUT',
      body: JSON.stringify({ section: 'blogCategories', data: categories }),
    });
  };

  if (loading) {
    return <p className="text-slate-400">Loading blog content…</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Blog</h1>
          <p className="mt-1 text-sm text-slate-400">Manage blog posts and category filters.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setPosts((prev) => [...prev, emptyPost()])} className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-emerald-500">
            Add post
          </button>
          <SaveButton onSave={handleSave} label="Save Blog" />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
        <FormField label="Categories" hint="One category per line">
          <textarea value={categories.join("\n")} onChange={(e) => setCategories(e.target.value.split(/\n+/).filter(Boolean))} rows={5} className={textareaClass} />
        </FormField>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={post.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-white">Post #{index + 1}</h2>
              <button onClick={() => setPosts((prev) => prev.filter((item) => item.id !== post.id))} className="text-sm text-red-400">Remove</button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField label="ID">
                <input value={post.id} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, id: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Title">
                <input value={post.title} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, title: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Category">
                <input value={post.category} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, category: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Read time">
                <input value={post.readTime} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, readTime: e.target.value } : item)))} className={inputClass} />
              </FormField>
              <FormField label="Date">
                <input value={post.date} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, date: e.target.value } : item)))} className={inputClass} />
              </FormField>
            </div>
            <div className="mt-4">
              <FormField label="Excerpt">
                <textarea value={post.excerpt} onChange={(e) => setPosts((prev) => prev.map((item) => (item.id === post.id ? { ...item, excerpt: e.target.value } : item)))} rows={4} className={textareaClass} />
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

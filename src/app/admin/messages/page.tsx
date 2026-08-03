"use client";

import { useEffect, useState } from "react";
import { Mail, Trash2, CheckCircle2 } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";
import type { ContactMessage } from "@/lib/types";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    try {
      const res = await adminFetch<{ data: ContactMessage[] }>('/api/admin/messages');
      setMessages(res.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadMessages();
  }, []);

  const markRead = async (id: string) => {
    await adminFetch('/api/admin/messages', {
      method: 'PATCH',
      body: JSON.stringify({ id, action: 'read' }),
    });
    setMessages((prev) => prev.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)));
  };

  const deleteMessage = async (id: string) => {
    await adminFetch(`/api/admin/messages?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  if (loading) {
    return <p className="text-slate-400">Loading messages…</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Messages</h1>
        <p className="mt-1 text-sm text-slate-400">Review contact form submissions and keep your inbox organized.</p>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-10 text-center text-slate-400">
          No messages yet.
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`rounded-2xl border p-5 ${message.read ? 'border-slate-800 bg-slate-950/70' : 'border-emerald-500/40 bg-emerald-950/20'}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-emerald-400" />
                    <h2 className="font-semibold text-white">{message.name}</h2>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{message.email} • {message.service}</p>
                </div>
                <div className="flex gap-2">
                  {!message.read && (
                    <button onClick={() => void markRead(message.id)} className="rounded-lg border border-emerald-700 px-3 py-1.5 text-sm text-emerald-300 hover:bg-emerald-900/30">
                      <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} />Mark read</span>
                    </button>
                  )}
                  <button onClick={() => void deleteMessage(message.id)} className="rounded-lg border border-red-700 px-3 py-1.5 text-sm text-red-300 hover:bg-red-900/20">
                    <span className="inline-flex items-center gap-2"><Trash2 size={16} />Delete</span>
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p><span className="font-medium text-slate-200">Subject:</span> {message.subject}</p>
                <p><span className="font-medium text-slate-200">Budget:</span> {message.budget || 'Not provided'}</p>
                <p className="leading-6">{message.message}</p>
              </div>
              <p className="mt-4 text-xs text-slate-500">Received {message.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

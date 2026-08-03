"use client";

import { useState } from "react";
import { Save, Loader2, Check } from "lucide-react";

interface SaveButtonProps {
  onSave: () => Promise<void>;
  label?: string;
}

export default function SaveButton({
  onSave,
  label = "Save Changes",
}: SaveButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleClick = async () => {
    setStatus("loading");
    try {
      await onSave();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={status === "loading"}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all disabled:opacity-60 ${
        status === "success"
          ? "bg-emerald-600 text-white"
          : status === "error"
            ? "bg-red-600 text-white"
            : "bg-emerald-600 text-white hover:bg-emerald-500"
      }`}
    >
      {status === "loading" && <Loader2 size={16} className="animate-spin" />}
      {status === "success" && <Check size={16} />}
      {status === "idle" && <Save size={16} />}
      {status === "loading"
        ? "Saving..."
        : status === "success"
          ? "Saved!"
          : status === "error"
            ? "Failed — try again"
            : label}
    </button>
  );
}

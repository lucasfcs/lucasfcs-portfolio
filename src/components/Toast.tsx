"use client";

import { useBugHunt } from "@/components/BugHuntProvider";

export function Toast() {
  const { toast } = useBugHunt();
  if (!toast) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-xl bg-emerald-500/90 px-5 py-3 text-sm font-medium text-[#0a0d12] shadow-lg shadow-emerald-500/20"
      role="status"
    >
      {toast}
    </div>
  );
}

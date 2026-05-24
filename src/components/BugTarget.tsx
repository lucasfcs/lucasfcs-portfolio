"use client";

import { useBugHunt } from "@/components/BugHuntProvider";
import type { BugId } from "@/lib/bugs";

type BugTargetProps = {
  id: BugId;
  children: React.ReactNode;
  className?: string;
};

export function BugTarget({ id, children, className = "" }: BugTargetProps) {
  const { huntMode, found, markFound } = useBugHunt();
  const isFound = found.has(id);

  return (
    <span
      role={huntMode && !isFound ? "button" : undefined}
      tabIndex={huntMode && !isFound ? 0 : undefined}
      onClick={() => {
        if (huntMode && !isFound) markFound(id);
      }}
      onKeyDown={(e) => {
        if (huntMode && !isFound && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          markFound(id);
        }
      }}
      className={[
        className,
        huntMode && !isFound
          ? "cursor-crosshair rounded-sm ring-1 ring-amber-400/30 transition hover:ring-amber-400/70"
          : "",
        isFound ? "ring-2 ring-emerald-400/60" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-bug-id={id}
      data-bug-found={isFound || undefined}
    >
      {children}
    </span>
  );
}

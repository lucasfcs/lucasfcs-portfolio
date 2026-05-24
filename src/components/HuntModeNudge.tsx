"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBugHunt } from "@/components/BugHuntProvider";

export function HuntModeNudge() {
  const pathname = usePathname();
  const { huntMode, setHuntMode } = useBugHunt();

  if (huntMode || pathname === "/bug-hunt") {
    return null;
  }

  return (
    <div className="border-b border-cyan-500/15 bg-cyan-950/40 px-5 py-2 text-center text-xs text-cyan-100/75">
      Easter egg de QA —{" "}
      <button
        type="button"
        onClick={() => setHuntMode(true)}
        className="font-medium text-cyan-300 underline-offset-2 hover:underline"
      >
        ativar modo caça
      </button>{" "}
      ou{" "}
      <Link
        href="/bug-hunt"
        className="font-medium text-cyan-300 underline-offset-2 hover:underline"
      >
        ver como funciona
      </Link>
    </div>
  );
}

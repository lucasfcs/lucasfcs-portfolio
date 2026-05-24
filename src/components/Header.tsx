"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBugHunt } from "@/components/BugHuntProvider";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/stack", label: "Stack" },
  { href: "/bug-hunt", label: "Caça ao Bug" },
] as const;

export function Header() {
  const pathname = usePathname();
  const { huntMode, setHuntMode, progress, total } = useBugHunt();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d12]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-mono text-xs text-cyan-400/90">lucasfcs</span>
          <span className="text-sm text-white/50 group-hover:text-white/70">
            .dev
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 text-sm">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-lg px-3 py-1.5 transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {huntMode && (
            <span className="hidden font-mono text-xs text-amber-300 sm:inline">
              {progress}/{total} bugs
            </span>
          )}
          <button
            type="button"
            onClick={() => setHuntMode(!huntMode)}
            className={[
              "rounded-lg px-3 py-1.5 text-xs font-medium transition",
              huntMode
                ? "bg-amber-400/20 text-amber-200 ring-1 ring-amber-400/40"
                : "bg-cyan-500/15 text-cyan-200 hover:bg-cyan-500/25",
            ].join(" ")}
          >
            {huntMode ? "Modo QA: ON" : "Ativar caça"}
          </button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { FooterCopyright } from "@/components/FooterCopyright";
import { LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white/90">{SITE.name}</p>
          <p className="text-sm text-white/50">QA Engineer · São Paulo</p>
        </div>
        <div className="flex gap-4 text-sm">
          <Link
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-cyan-300"
          >
            GitHub
          </Link>
          <Link
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-cyan-300"
          >
            LinkedIn
          </Link>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}

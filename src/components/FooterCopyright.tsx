"use client";

import { PlantedBug } from "@/components/PlantedBug";
import { SITE } from "@/lib/constants";

export function FooterCopyright() {
  return (
    <p className="font-mono text-xs text-white/40">
      ©{" "}
      <PlantedBug
        id="footer-year"
        correct={<>2026</>}
        buggy={<>2024</>}
        className="inline"
      />{" "}
      {SITE.name}
    </p>
  );
}

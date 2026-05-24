"use client";

import { PlantedBug } from "@/components/PlantedBug";
import { skills } from "@/lib/content";

export function StackGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <div key={skill.name} className="card flex flex-col p-5">
          <span className="text-xs uppercase tracking-wide text-white/40">
            {skill.category}
          </span>
          <span className="mt-2 text-lg font-medium text-white">
            {skill.name === "Playwright" ? (
              <PlantedBug
                id="stack-typo"
                correct={<>Playwright</>}
                buggy={<>Playwrite</>}
              />
            ) : (
              skill.name
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

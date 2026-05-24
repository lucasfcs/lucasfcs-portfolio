"use client";

import { BugTarget } from "@/components/BugTarget";
import { useBugHunt } from "@/components/BugHuntProvider";
import type { BugId } from "@/lib/bugs";

type PlantedBugProps = {
  id: BugId;
  correct: React.ReactNode;
  buggy: React.ReactNode;
  className?: string;
};

/**
 * Conteúdo correto por padrão. O defeito só aparece com o modo caça ativado.
 */
export function PlantedBug({
  id,
  correct,
  buggy,
  className = "",
}: PlantedBugProps) {
  const { huntMode } = useBugHunt();

  if (!huntMode) {
    return <>{correct}</>;
  }

  return (
    <BugTarget id={id} className={className}>
      {buggy}
    </BugTarget>
  );
}

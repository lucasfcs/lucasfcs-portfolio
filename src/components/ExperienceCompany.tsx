"use client";

import { PlantedBug } from "@/components/PlantedBug";

export function ExperienceCompany({ suffix }: { suffix: string }) {
  return (
    <>
      <PlantedBug
        id="job-company"
        correct={<>EvoluServices</>}
        buggy={<>EvoluService</>}
      />{" "}
      {suffix}
    </>
  );
}

import type { Language } from "../_schema/types";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { Project } from "../../en/projects";
import { buildProjectFromManifest } from "./build-project";
import { seeingUnseenManifest } from "./seeing-unseen.data";
import { interactiveArchiveManifest } from "./interactive-archive.data";
import { dragonMountainManifest } from "./dragon-mountain.data";
import { aquasWillManifest } from "./aquas-will.data";
import { mixingHappinessManifest } from "./mixing-happiness.data";
import { emotionalTrapManifest } from "./emotional-trap.data";
import { lifeBegetsLifeManifest } from "./life-begets-life.data";
import { yuliuTeaCeremonyManifest } from "./yuliu-tea-ceremony.data";
import { montageManifest } from "./montage.data";
import { futureDesignProjectManifest } from "./future-design-project.data";

export const projectManifestRegistry = {
  "seeing-unseen": seeingUnseenManifest,
  "interactive-archive": interactiveArchiveManifest,
  "dragon-mountain": dragonMountainManifest,
  "aquas-will": aquasWillManifest,
  "mixing-happiness": mixingHappinessManifest,
  "emotional-trap": emotionalTrapManifest,
  "life-begets-life": lifeBegetsLifeManifest,
  "yuliu-tea-ceremony": yuliuTeaCeremonyManifest,
  montage: montageManifest,
  "future-design-project": futureDesignProjectManifest,
} as const satisfies Record<string, ProjectManifestEntry>;

export type MinimalProjectId = keyof typeof projectManifestRegistry;

export function buildProject(
  id: MinimalProjectId,
  language: Language,
): Project {
  return buildProjectFromManifest(projectManifestRegistry[id], language);
}

/** Card-level projects grouped as in `content/en|zh/projects.ts`. */
export function buildInteractiveInstallation(language: Language): Project[] {
  return [
    buildProject("seeing-unseen", language),
    buildProject("interactive-archive", language),
  ];
}

export function buildImmersiveGaming(language: Language): Project[] {
  return [
    buildProject("dragon-mountain", language),
    buildProject("aquas-will", language),
    buildProject("mixing-happiness", language),
    buildProject("emotional-trap", language),
  ];
}

export function buildAnimationFilm(language: Language): Project[] {
  return [
    buildProject("life-begets-life", language),
    buildProject("yuliu-tea-ceremony", language),
    buildProject("montage", language),
  ];
}

export function buildFutureDesign(language: Language): Project[] {
  return [buildProject("future-design-project", language)];
}

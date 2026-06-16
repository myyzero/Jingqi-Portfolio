import type { Language } from "../_schema/types";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { Project } from "../../en/projects";
import { buildProjectFromManifest } from "./build-project";
import { buildSeeingUnseenProject } from "./build-seeing-unseen";
import { seeingUnseenManifest } from "./seeing-unseen.data";
import { interactiveArchiveManifest } from "./interactive-archive.data";
import { buildDragonMountainProject } from "./build-dragon-mountain";
import { dragonMountainManifest } from "./dragon-mountain.data";
import { mixingHappinessManifest } from "./mixing-happiness.data";
import { emotionalTrapManifest } from "./emotional-trap.data";
import { buildLifeBegetsLifeProject } from "./build-life-begets-life";
import { lifeBegetsLifeManifest } from "./life-begets-life.data";
import { buildAquasWillProject } from "./build-aquas-will";
import { aquasWillManifest } from "./aquas-will.data";
import { montageManifest } from "./montage.data";

export const projectManifestRegistry = {
  "seeing-unseen": seeingUnseenManifest,
  "interactive-archive": interactiveArchiveManifest,
  "dragon-mountain": dragonMountainManifest,
  "mixing-happiness": mixingHappinessManifest,
  "emotional-trap": emotionalTrapManifest,
  "aquas-will": aquasWillManifest,
  "life-begets-life": lifeBegetsLifeManifest,
  montage: montageManifest,
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
    buildSeeingUnseenProject(language),
    buildProject("interactive-archive", language),
  ];
}

export function buildImmersiveGaming(language: Language): Project[] {
  return [
    buildDragonMountainProject(language),
    buildAquasWillProject(language),
    buildProject("mixing-happiness", language),
    buildProject("emotional-trap", language),
  ];
}

export function buildAnimationFilm(language: Language): Project[] {
  return [
    buildLifeBegetsLifeProject(language),
    buildProject("montage", language),
  ];
}

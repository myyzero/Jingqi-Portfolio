import type { Project } from "../en/projects";
import { buildPopupMuseumProject } from "../manifests/projects/popup-museum";
import {
  buildAnimationFilm,
  buildImmersiveGaming,
  buildInteractiveInstallation,
} from "../manifests/projects/registry";

export const interactiveInstallation: Project[] = [
  buildPopupMuseumProject("zh"),
  ...buildInteractiveInstallation("zh"),
];

export const immersiveGaming: Project[] = buildImmersiveGaming("zh");

export const animationFilm: Project[] = buildAnimationFilm("zh");

/** Reserved for future projects; empty while Future Design is unpublished. */
export const futureDesign: Project[] = [];

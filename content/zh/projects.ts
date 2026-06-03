import type { Project } from "../en/projects";
import { buildPopupMuseumProject } from "../manifests/projects/popup-museum";
import {
  buildAnimationFilm,
  buildFutureDesign,
  buildImmersiveGaming,
  buildInteractiveInstallation,
} from "../manifests/projects/registry";

export const interactiveInstallation: Project[] = [
  buildPopupMuseumProject("zh"),
  ...buildInteractiveInstallation("zh"),
];

export const immersiveGaming: Project[] = buildImmersiveGaming("zh");

export const animationFilm: Project[] = buildAnimationFilm("zh");

export const futureDesign: Project[] = buildFutureDesign("zh");

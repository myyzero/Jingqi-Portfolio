import { siteLabelsManifest } from "./site/labels";
import { getLandingContent } from "./site/landing";
import { getAboutContent } from "./site/about";
import { getAboutMeContent } from "./site/about-me";
import { getContactContent } from "./site/contact";
import {
  getWorksInfoOverride,
  getWorksPageLabels,
  getWorksTypeLabel,
  worksCatalog,
} from "./site/works-index";
import type { Language, SiteLabels, WorkDetailLabels } from "./_schema/types";

export type {
  Language,
  MediaRef,
  LocalizedCopy,
  LocalizedStringList,
  WorkDetailLabels,
  SiteLabels,
  ProcessStepLabels,
  NavItemLabels,
  HowBlockLayout,
  WorksCategory,
} from "./_schema/types";

export type {
  AnimationCategory,
  CarouselSlide,
  ShaderMediaItem,
  ShaderSection,
  UiUxMediaPair,
  ToolDevelopmentRow,
} from "./_schema/workDetailBlocks";

export type {
  LandingContent,
  AboutContent,
  AboutMeContent,
  ContactContent,
  WorksFilterType,
  WorksPageLabels,
  WorksInfoOverride,
} from "./_schema/siteContent";

export { resolveMedia, resolveMediaOptional, resolveMediaList } from "./_schema/resolveMedia";
export {
  buildMaterialRegistry,
  resolveMaterialFile,
  MATERIAL_PLACEHOLDER_IMAGE,
  getMaterialRegistryPlaceholders,
} from "./_schema/localMaterialAssets";
export type { MaterialResolveContext } from "./_schema/localMaterialAssets";
export { buildPopupMuseumProject } from "./projects/popup-museum";
export {
  buildProject,
  buildInteractiveInstallation,
  buildImmersiveGaming,
  buildAnimationFilm,
  projectManifestRegistry,
} from "./projects/registry";
export { buildProjectFromManifest } from "./projects/build-project";
export type {
  ProjectManifestEntry,
  ProjectDetailLayout,
  LocalizedMediaRef,
  LocalizedMediaList,
} from "./_schema/projectManifest";
export type { MinimalProjectId } from "./projects/registry";
export { siteLabelsManifest } from "./site/labels";
export { worksCatalog } from "./site/works-index";

export function getSiteLabels(language: Language): SiteLabels {
  return siteLabelsManifest[language];
}

export function getWorkDetailLabels(language: Language): WorkDetailLabels {
  return siteLabelsManifest[language].workDetail;
}

export function getNavLabels(language: Language) {
  return siteLabelsManifest[language].nav;
}

export {
  getLandingContent,
  getAboutContent,
  getAboutMeContent,
  getContactContent,
  getWorksPageLabels,
  getWorksTypeLabel,
  getWorksInfoOverride,
};

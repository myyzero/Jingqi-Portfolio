import * as enProjects from "./en/projects";
import * as zhProjects from "./zh/projects";
import { visualPracticeEn } from "./en/visualPractice";
import { visualPracticeZh } from "./zh/visualPractice";

import type { Language } from "./manifests/_schema/types";

export type { Language };

export type {
  Project,
  ProjectDetailContent,
  DetailBullet,
  AnimationCategory,
  CarouselSlide,
} from "./en/projects";
export type {
  ShaderMediaItem,
  ShaderSection,
  UiUxMediaPair,
  ToolDevelopmentRow,
} from "./manifests/_schema/workDetailBlocks";
export type { MediaItemContent } from "./en/visualPractice";

export type {
  LandingContent,
  AboutContent,
  AboutMeContent,
  ContactContent,
  WorksFilterType,
  WorksPageLabels,
} from "./manifests";

export {
  getSiteLabels,
  getWorkDetailLabels,
  getNavLabels,
  getLandingContent,
  getAboutContent,
  getAboutMeContent,
  getContactContent,
  getWorksPageLabels,
  getWorksTypeLabel,
  getWorksInfoOverride,
  worksCatalog,
  resolveMedia,
  resolveMediaOptional,
  siteLabelsManifest,
} from "./manifests";

export type {
  MediaRef,
  LocalizedCopy,
  LocalizedStringList,
  WorkDetailLabels,
  SiteLabels,
  HowBlockLayout,
  WorksCategory,
} from "./manifests";

export function getProjectContent(language: Language) {
  if (language === "zh") {
    return {
      interactiveInstallation: zhProjects.interactiveInstallation,
      immersiveGaming: zhProjects.immersiveGaming,
    };
  }

  return {
    interactiveInstallation: enProjects.interactiveInstallation,
    immersiveGaming: enProjects.immersiveGaming,
  };
}

export function getAllWorksContent(language: Language) {
  if (language === "zh") {
    return [
      ...zhProjects.interactiveInstallation,
      ...zhProjects.immersiveGaming,
      ...zhProjects.animationFilm,
      ...zhProjects.futureDesign,
    ];
  }

  return [
    ...enProjects.interactiveInstallation,
    ...enProjects.immersiveGaming,
    ...enProjects.animationFilm,
    ...enProjects.futureDesign,
  ];
}

export function getVisualPracticeContent(language: Language) {
  return language === "zh" ? visualPracticeZh : visualPracticeEn;
}

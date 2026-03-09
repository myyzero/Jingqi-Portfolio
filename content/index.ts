import * as enProjects from "./en/projects";
import * as zhProjects from "./zh/projects";
import { landingContentEn } from "./en/landing";
import { landingContentZh } from "./zh/landing";
import { aboutContentEn } from "./en/about";
import { aboutContentZh } from "./zh/about";
import { contactContentEn } from "./en/contact";
import { contactContentZh } from "./zh/contact";
import { visualPracticeEn } from "./en/visualPractice";
import { visualPracticeZh } from "./zh/visualPractice";

export type Language = "en" | "zh";

export type { Project } from "./en/projects";
export type { LandingContent } from "./en/landing";
export type { AboutContent } from "./en/about";
export type { ContactContent } from "./en/contact";
export type { MediaItemContent } from "./en/visualPractice";

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

export function getLandingContent(language: Language) {
  return language === "zh" ? landingContentZh : landingContentEn;
}

export function getAboutContent(language: Language) {
  return language === "zh" ? aboutContentZh : aboutContentEn;
}

export function getContactContent(language: Language) {
  return language === "zh" ? contactContentZh : contactContentEn;
}

export function getVisualPracticeContent(language: Language) {
  return language === "zh" ? visualPracticeZh : visualPracticeEn;
}


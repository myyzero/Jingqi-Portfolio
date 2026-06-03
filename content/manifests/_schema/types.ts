/** Shared manifest types — extended in later phases (projects, media, how blocks). */

export type Language = "en" | "zh";

export type MediaRef =
  | { kind: "local"; assetKey: string; path?: string }
  | { kind: "remote"; url: string };

export type LocalizedCopy = {
  en: string;
  zh: string;
};

export type LocalizedStringList = {
  en: string[];
  zh: string[];
};

export type ProcessStepLabels = {
  research: string;
  tasks: string;
  how: string;
  output: string;
};

export type WorkDetailLabels = {
  backToWorks: string;
  home: string;
  notFound: string;
  notFoundDesc: string;
  backHome: string;
  moreDetails: string;
  pdfCta: string;
  whatWhy: string;
  problem: string;
  insight: string;
  approach: string;
  process: string;
  resultImpact: string;
  impactPlaceholder: string;
  processSteps: ProcessStepLabels;
  processTexts: ProcessStepLabels;
  whatWhyTexts: {
    problem: string;
    insight: string;
    approach: string;
  };
};

export type NavItemLabels = {
  id: string;
  label: string;
};

export type SiteLabels = {
  nav: NavItemLabels[];
  workDetail: WorkDetailLabels;
};

export type SiteLabelsManifest = {
  en: SiteLabels;
  zh: SiteLabels;
};

/** How block layouts — used when project manifests are added (phase 3+). */
export type HowBlockLayout =
  | "default"
  | "step-images-row"
  | "env-carousel"
  | "animation-grid"
  | "shader-sections"
  | "ui-ux-triple"
  | "tool-development-rows"
  | "integration-gallery";

export type WorksCategory =
  | "interaction-design"
  | "game-digital-experience"
  | "animation-film"
  | "future-design";

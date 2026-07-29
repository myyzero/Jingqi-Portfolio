export interface LandingContent {
  name: string;
  subtitle: string;
  scrollLabel: string;
}

export interface AboutContent {
  heading: string;
  intro: string;
  paragraph: string;
  focusTitle: string;
  focusText: string;
  methodTitle: string;
  methodText: string;
  backgroundTitle: string;
  backgroundText: string;
}

export interface AboutMeContent {
  heading: string;
  summaryTitle: string;
  summaryText: string;
  skillsTitle: string;
  skillsText: string;
}

export interface ContactContent {
  heading: string;
  email: string;
  footer: string;
}

export type WorksFilterType =
  | "all"
  | "interaction-design"
  | "game-digital-experience"
  | "animation-film"
  | "future-design";

export type WorksPageLabels = {
  heading: string;
  allWorks: string;
  type: string;
  role: string;
  tools: string;
  summary: string;
};

export type WorksInfoOverride = {
  infoType: string;
  infoRole: string;
  infoTools: string;
};

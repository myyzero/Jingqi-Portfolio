import { buildPopupMuseumProject } from "../manifests/projects/popup-museum";
import {
  buildAnimationFilm,
  buildFutureDesign,
  buildImmersiveGaming,
  buildInteractiveInstallation,
} from "../manifests/projects/registry";

export type {
  AnimationCategory,
  CarouselSlide,
  ShaderMediaItem,
  ShaderSection,
  UiUxMediaPair,
  ToolDevelopmentRow,
} from "../manifests/_schema/workDetailBlocks";

import type {
  AnimationCategory,
  CarouselSlide,
  ShaderSection,
  ToolDevelopmentRow,
  UiUxMediaPair,
} from "../manifests/_schema/workDetailBlocks";

export type DetailBullet = {
  title: string;
  text: string | string[];
  image?: string;
  stepImages?: string[];
  animationCategories?: AnimationCategory[];
  carouselSlides?: CarouselSlide[];
  shaderSections?: ShaderSection[];
  uiUxMedia?: UiUxMediaPair;
  toolDevelopment?: ToolDevelopmentRow[];
};

export type ProjectDetailContent = {
  problem: string | string[];
  insight: string | string[];
  approachItems: DetailBullet[];
  process: {
    research: string;
    tasks: string;
    howItems: DetailBullet[];
    output: string;
    integrationImages?: readonly string[];
  };
  resultImpact: string;
  resultGalleryImages?: readonly string[];
  processImages?: {
    research?: string;
    tasks?: string;
    output?: string;
  };
};

export interface Project {
  id: string;
  name: string;
  keyword: string;
  summary: string;
  role: string;
  type: string;
  tools?: string;
  details?: string;
  website?: string;
  moreDetails?: string;
  previewImage: string;
  images: string[];
  videoUrl?: string;
  detail?: ProjectDetailContent;
}

export const interactiveInstallation: Project[] = [
  buildPopupMuseumProject("en"),
  ...buildInteractiveInstallation("en"),
];

export const immersiveGaming: Project[] = buildImmersiveGaming("en");

export const animationFilm: Project[] = buildAnimationFilm("en");

export const futureDesign: Project[] = buildFutureDesign("en");


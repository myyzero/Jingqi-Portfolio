import { buildPopupMuseumProject } from "../manifests/projects/popup-museum";
import {
  buildAnimationFilm,
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
  ProcessTriptychLayout,
  ProcessThreePanelRow,
  ProcessRenderQuadLayout,
  ProcessResearchSubsection,
  ProcessResearchSplitLayout,
  ProcessTaskGroup,
  ProcessTaskRow,
  ProcessTasksOutlineItem,
} from "../manifests/_schema/workDetailBlocks";

export type {
  ProcessTriptychLayout,
  ProcessThreePanelRow,
  ProcessRenderQuadLayout,
  ProcessResearchSubsection,
  ProcessResearchSplitLayout,
  ProcessTaskGroup,
  ProcessTaskRow,
  ProcessTasksOutlineItem,
};

export type DetailBullet = {
  title: string;
  text: string | string[];
  image?: string;
  stepImages?: string[];
  /** Shape for `stepImages` row. Default: circle. */
  stepImageShape?: "circle" | "roundedSquare";
  processTriptych?: ProcessTriptychLayout;
  processThreePanelRow?: ProcessThreePanelRow;
  processRenderQuad?: ProcessRenderQuadLayout;
  animationCategories?: AnimationCategory[];
  carouselSlides?: CarouselSlide[];
  shaderSections?: ShaderSection[];
  uiUxMedia?: UiUxMediaPair;
  toolDevelopment?: ToolDevelopmentRow[];
};

export type ProjectDetailContent = {
  problem: string | string[];
  insight: string | string[];
  /** When set, rendered as a third block inside What & Why (not a separate Approach section). */
  approach?: string | string[];
  approachItems: DetailBullet[];
  process: {
    /** When `pipeline`, `pipeline` replaces Research / Tasks / How / Integration steps. */
    layout?: "standard" | "pipeline";
    pipeline?: DetailBullet[];
    research: string;
    tasks: string;
    howItems: DetailBullet[];
    output: string;
    integrationImages?: readonly string[];
    /** INTEGRATION step — looping videos in a horizontal row. */
    integrationVideos?: readonly string[];
    /** HOW step — looping videos in a horizontal row (replaces default howItems layout). */
    howVideoRow?: readonly string[];
    /** Replaces default Research sidebar layout with split subsections. */
    researchSections?: ProcessResearchSubsection[];
    /** Rendered under How to do it (left text / right image groups). */
    howTaskSections?: ProcessTaskGroup[];
    /** Rendered under the Tasks step (subsection galleries). */
    tasksSections?: ProcessTaskGroup[];
    /** Full-width flowchart image for the Tasks step. */
    tasksFlowchart?: string;
    /** Outline bullets for the Tasks step (replaces flowchart when set). */
    tasksOutline?: ProcessTasksOutlineItem[];
    /** Override default process step labels (e.g. Tasks → TASKS). */
    stepLabels?: { tasks?: string; how?: string; output?: string };
    /** When true, omit the Integration / Output process step. */
    hideOutputStep?: boolean;
  };
  resultImpact: string;
  resultGalleryImages?: readonly string[];
  /** `leftOneRightTwo`: one image left, remaining images stacked right (1:1 columns). */
  resultGalleryLayout?: "default" | "leftOneRightTwo";
  /** Optional video for Result & Impact (falls back to project.videoUrl). */
  resultVideoUrl?: string;
  processImages?: {
    research?: string;
    tasks?: string;
    output?: string;
  };
};

export type ProjectDetailLayout = "default" | "fullscreen-video";

/** Life Begets Life — replaces default What & Why with Story + Idea two-column layout. */
export type ProjectStorySection = {
  heading: string;
  image: string;
  storyTitle: string;
  storyText: string;
  ideaTitle: string;
  ideaText: string;
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
  layout?: ProjectDetailLayout;
  detail?: ProjectDetailContent;
  storySection?: ProjectStorySection;
}

export const interactiveInstallation: Project[] = [
  buildPopupMuseumProject("en"),
  ...buildInteractiveInstallation("en"),
];

export const immersiveGaming: Project[] = buildImmersiveGaming("en");

export const animationFilm: Project[] = buildAnimationFilm("en");

/** Reserved for future projects; empty while Future Design is unpublished. */
export const futureDesign: Project[] = [];


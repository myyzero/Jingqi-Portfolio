import type { Language } from "../_schema/types";
import { resolveMedia, resolveMediaList } from "../_schema/resolveMedia";
import type {
  AnimationCategory,
  CarouselSlide,
  Project,
  ProjectDetailContent,
} from "../../en/projects";
import type {
  ShaderSection,
  ToolDevelopmentRow,
  UiUxMediaPair,
} from "../_schema/workDetailBlocks";
import { popupMuseumCopy, popupMuseumRemote } from "./popup-museum.data";
import {
  popupMuseumAssetRegistry,
  resolvePopupMuseumAsset,
} from "./popup-museum-assets";

const assets = Object.fromEntries(
  Object.entries(popupMuseumAssetRegistry).map(([k, v]) => [k, v as string]),
) as Record<string, string>;

function pick<T extends { en: string; zh: string }>(
  lang: Language,
  copy: T,
): string {
  return copy[lang];
}

function pickList(
  lang: Language,
  list: { en: string[]; zh: string[] },
): string[] {
  return list[lang];
}

function resolve(ref: Parameters<typeof resolveMedia>[0]): string {
  return resolveMedia(ref, assets);
}

function resolveList(
  refs: readonly Parameters<typeof resolveMedia>[0][],
): string[] {
  return resolveMediaList(refs, assets);
}

function buildShaderSections(lang: Language): ShaderSection[] {
  const { shader } = popupMuseumCopy.process;
  return [
    {
      title: lang === "zh" ? "溶解 Shader" : "Dissolve Shader",
      layout: "dissolve",
      description: pick(lang, shader.dissolveDescription),
      media: [
        {
          caption: "Shader graph",
          image: resolvePopupMuseumAsset("shaderDissolveGraph"),
          aspect: "1920/1080",
        },
        {
          caption: "Output",
          image: resolvePopupMuseumAsset("shaderDissolveOutput"),
          aspect: "1920/1080",
          kind: "video",
        },
      ],
    },
    {
      title: lang === "zh" ? "三渲二 Shader" : "Toon Shader",
      layout: "toon",
      description: pick(lang, shader.toonDescription),
      media: [
        {
          caption: "Logic diagram",
          image: resolvePopupMuseumAsset("logicToon"),
          aspect: "960/1080",
        },
        {
          caption: "Shader graph",
          image: resolvePopupMuseumAsset("shaderToon"),
          aspect: "1920/1080",
        },
        {
          caption: "Output",
          image: resolvePopupMuseumAsset("aniToonShader"),
          aspect: "1920/1080",
          kind: "video",
        },
      ],
    },
  ];
}

function buildToolRows(lang: Language): ToolDevelopmentRow[] {
  const { tools } = popupMuseumCopy.process;
  return tools.rows.map((row) => ({
    text: pickList(lang, row.text),
    images: resolveList(row.images) as [string, string],
  }));
}

function buildUiUx(): UiUxMediaPair {
  const { uiUx } = popupMuseumCopy.process;
  return {
    logicImage: resolve(uiUx.logicImage),
    storyboardImage: resolve(uiUx.storyboardImage),
    video: resolve(uiUx.video),
  };
}

function buildAnimationCategories(lang: Language): AnimationCategory[] {
  const { animation } = popupMuseumCopy.process;
  return animation.categories.map((cat) => ({
    title: pick(lang, cat.title),
    layout: cat.layout,
    videos: resolveList(cat.videos),
  }));
}

function buildCarouselSlides(): CarouselSlide[] {
  const { modelling } = popupMuseumCopy.process;
  return modelling.carouselSlides.map((slide) => ({
    title: slide.title,
    image: resolve(slide.image),
  }));
}

function buildGalleryImages(): string[] {
  const head = [
    resolvePopupMuseumAsset("problem"),
    resolvePopupMuseumAsset("insight"),
    resolvePopupMuseumAsset("approach1"),
    resolvePopupMuseumAsset("approach2"),
    resolvePopupMuseumAsset("approach3"),
  ];
  const legacyTail = resolveMediaList(
    [...popupMuseumRemote.legacy],
    assets,
  ).slice(5);
  return [...head, ...legacyTail];
}

export function buildPopupMuseumProject(language: Language): Project {
  const { meta, whatWhy, approach, process, result } = popupMuseumCopy;
  const galleryImages = buildGalleryImages();

  const detail: ProjectDetailContent = {
    problem: pickList(language, whatWhy.problem),
    insight: pickList(language, whatWhy.insight),
    approachItems: approach.map((item) => ({
      title: pick(language, item.title),
      text: pickList(language, item.text),
    })),
    process: {
      research: pick(language, process.research),
      tasks: pick(language, process.tasks),
      howItems: [
        {
          title: pick(language, process.modelling.title),
          text: pick(language, process.modelling.text),
          stepImages: resolveMediaList(process.modelling.stepImages, assets),
          carouselSlides: buildCarouselSlides(),
        },
        {
          title: pick(language, process.animation.title),
          text: pick(language, process.animation.text),
          animationCategories: buildAnimationCategories(language),
        },
        {
          title: pick(language, process.shader.title),
          text: "",
          shaderSections: buildShaderSections(language),
        },
        {
          title: pick(language, process.uiUx.title),
          text: "",
          uiUxMedia: buildUiUx(),
        },
        {
          title: pick(language, process.tools.title),
          text: "",
          toolDevelopment: buildToolRows(language),
        },
      ],
      output: "",
      integrationImages: resolveList(process.integrationImages),
    },
    resultImpact: pick(language, result.impact),
    resultGalleryImages: resolveList(result.gallery),
    processImages: {
      research: resolvePopupMuseumAsset("researchEn"),
      tasks: resolvePopupMuseumAsset("whatEn"),
      output: resolve(popupMuseumRemote.processDiorama),
    },
  };

  return {
    id: "popup-museum",
    name: pick(language, meta.name),
    keyword: pick(language, meta.keyword),
    summary: pick(language, meta.summary),
    role: pick(language, meta.role),
    type: pick(language, meta.type),
    tools: pick(language, meta.tools),
    details: pick(language, meta.details),
    website: pick(language, meta.website),
    moreDetails: pick(language, meta.moreDetails),
    previewImage: resolve(meta.previewImage[language]),
    images: galleryImages,
    videoUrl: resolve(meta.heroVideo[language]),
    detail,
  };
}

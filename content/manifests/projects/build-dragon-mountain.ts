import type { Language } from "../_schema/types";
import type {
  ProcessResearchSubsection,
  ProcessTaskGroup,
  ProcessTasksOutlineItem,
} from "../_schema/workDetailBlocks";
import { MATERIAL_PLACEHOLDER_IMAGE } from "../_schema/localMaterialAssets";
import { buildProjectFromManifest } from "./build-project";
import type { Project, ProjectDetailContent } from "../../en/projects";
import {
  dragonMountainManifest,
  dragonMountainResearchCopy,
  dragonMountainResultCopy,
  dragonMountainTasksCopy,
  dragonMountainTasksOutlineCopy,
  dragonMountainWhatWhyCopy,
} from "./dragon-mountain.data";
import {
  resolveDragonMountainAsset,
  type DragonMountainAssetKey,
} from "./dragon-mountain-assets";

/** Cloudinary fallbacks until matching files exist under `materials/dragon-mountain/tasks/`. */
const taskImageFallbacks: Partial<
  Record<DragonMountainAssetKey, { en: string; zh: string }>
> = {
  modelling3d: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
  },
  model1: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
  },
  model2: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587242/8_vq8ctw.jpg",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587242/8_vq8ctw.jpg",
  },
  model3: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587241/6_gr9rqc.jpg",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587241/6_gr9rqc.jpg",
  },
  dialogueSystem: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_dialogueSystem_xa7eri.png",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195761/HL_diologue_xv5bun.png",
  },
  navigationSystem: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_NavigationSystem_td2gj2.png",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195761/HL_map_wlh6rc.png",
  },
  soaringBird: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_BirdRideEventpng_tq9djx.png",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195762/HL_BIRD_ofckdo.png",
  },
  weatherSystem: {
    en: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_WeatherSystem_t0xenk.png",
    zh: "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195764/HL_WEATHER_wwkc6r.png",
  },
};

function pick<T extends { en: string; zh: string }>(
  lang: Language,
  copy: T,
): string {
  return copy[lang];
}

function pickList(
  lang: Language,
  list: { en: readonly string[]; zh: readonly string[] },
): string[] {
  return [...list[lang]];
}

function resolveKeys(keys: readonly DragonMountainAssetKey[]): string[] {
  return keys.map((key) => resolveDragonMountainAsset(key));
}

function resolveTaskImage(
  language: Language,
  key: DragonMountainAssetKey,
): string {
  const local = resolveDragonMountainAsset(key);
  if (local !== MATERIAL_PLACEHOLDER_IMAGE) return local;
  return taskImageFallbacks[key]?.[language] ?? local;
}

function buildResearchSections(language: Language): ProcessResearchSubsection[] {
  return dragonMountainResearchCopy.map((section) => ({
    title: pick(language, section.title),
    titleSubtitle:
      "titleSubtitle" in section && section.titleSubtitle
        ? pick(language, section.titleSubtitle)
        : undefined,
    text: pickList(language, section.text),
    images: resolveKeys(section.imageKeys),
    imageLayout: section.imageLayout,
  }));
}

function buildTaskSections(language: Language): ProcessTaskGroup[] {
  const { modelling3d, interactionDesign, uiDesign, postcardBookmark } =
    dragonMountainTasksCopy;

  return [
    {
      title: pick(language, modelling3d.title),
      text: pickList(language, modelling3d.text),
      layout: modelling3d.layout,
      stackImages: modelling3d.stackImageKeys.map((key) =>
        resolveDragonMountainAsset(key),
      ),
      images: modelling3d.imageKeys.map((key) =>
        resolveTaskImage(language, key),
      ),
    },
    {
      title: pick(language, interactionDesign.title),
      rowLayout: interactionDesign.rowLayout,
      rows: interactionDesign.rows.map((row) => ({
        title: pick(language, row.title),
        image: resolveDragonMountainAsset(row.imageKey),
        video: resolveDragonMountainAsset(row.videoKey),
      })),
    },
    {
      title: pick(language, uiDesign.title),
      image: resolveDragonMountainAsset(uiDesign.imageKey),
    },
    {
      title: pick(language, postcardBookmark.title),
      image: resolveDragonMountainAsset(postcardBookmark.imageKey),
    },
  ];
}

function buildTasksOutline(language: Language): ProcessTasksOutlineItem[] {
  return dragonMountainTasksOutlineCopy.map((item) => ({
    title: pick(language, item.title),
    image: resolveDragonMountainAsset(item.imageKey),
    ...(item.subItems
      ? { subItems: pickList(language, item.subItems) }
      : {}),
  }));
}

function buildDetail(language: Language): ProjectDetailContent {
  return {
    problem: pickList(language, dragonMountainWhatWhyCopy.problem),
    insight: pickList(language, dragonMountainWhatWhyCopy.insight),
    approach: pickList(language, dragonMountainWhatWhyCopy.approach),
    approachItems: [],
    process: {
      research: "",
      researchSections: buildResearchSections(language),
      tasks: "",
      tasksOutline: buildTasksOutline(language),
      stepLabels: { tasks: "TASKS" },
      howTaskSections: buildTaskSections(language),
      howItems: [],
      output: "",
      hideOutputStep: true,
    },
    resultImpact: "",
    resultGalleryImages: dragonMountainResultCopy.resultGalleryKeys.map((key) =>
      resolveDragonMountainAsset(key),
    ),
    resultVideoUrl: pick(language, dragonMountainResultCopy.resultVideo),
  };
}

export function buildDragonMountainProject(language: Language): Project {
  const project = buildProjectFromManifest(dragonMountainManifest, language);
  const detail = buildDetail(language);

  const galleryHead = [
    resolveDragonMountainAsset("problem"),
    resolveDragonMountainAsset("insight"),
    resolveDragonMountainAsset("approach"),
  ];

  return {
    ...project,
    images: [...galleryHead, ...project.images.slice(4)],
    detail,
  };
}

import type { Language } from "../_schema/types";
import type { ProcessTaskGroup } from "../_schema/workDetailBlocks";
import { buildProjectFromManifest } from "./build-project";
import type { Project, ProjectDetailContent } from "../../en/projects";
import {
  aquasWillDetailCopy,
  aquasWillManifest,
  aquasWillWhatIsItCopy,
} from "./aquas-will.data";
import {
  resolveAquasWillAsset,
  type AquasWillAssetKey,
} from "./aquas-will-assets";

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

function resolveKeys(keys: readonly AquasWillAssetKey[]): string[] {
  return keys.map((key) => resolveAquasWillAsset(key));
}

function buildTaskSections(
  language: Language,
  sections: (typeof aquasWillDetailCopy.process.pipeline)[number]["taskSections"],
): ProcessTaskGroup[] | undefined {
  if (!sections) return undefined;

  return sections.map((section) => {
    const base: ProcessTaskGroup = {
      title: pick(language, section.title),
    };

    if ("text" in section && section.text) {
      base.text = pick(language, section.text);
    }

    if ("layout" in section && section.layout === "twinImagesHeightAligned" && "imageKeys" in section) {
      base.layout = "twinImagesHeightAligned";
      base.images = resolveKeys(section.imageKeys);
      return base;
    }

    if ("layout" in section && section.layout === "twinImages" && "imageKeys" in section) {
      base.layout = "twinImages";
      base.images = resolveKeys(section.imageKeys);
      return base;
    }

    if (
      "layout" in section &&
      section.layout === "imageLevelSplit" &&
      "imageKey" in section &&
      "levelItems" in section
    ) {
      base.layout = "imageLevelSplit";
      base.image = resolveAquasWillAsset(section.imageKey);
      base.levelItems = section.levelItems.map((item) => ({
        title: pick(language, item.title),
        text: pick(language, item.text),
      }));
      if ("levelHeader" in section && section.levelHeader) {
        base.levelHeader = {
          left: pick(language, section.levelHeader.left),
          right: pick(language, section.levelHeader.right),
        };
      }
      return base;
    }

    if (
      "layout" in section &&
      section.layout === "imageTextSplit" &&
      "imageKey" in section &&
      "text" in section
    ) {
      base.layout = "imageTextSplit";
      base.image = resolveAquasWillAsset(section.imageKey);
      base.text = pick(language, section.text);
      return base;
    }

    if ("videoTriptych" in section && section.videoTriptych) {
      const triptych = section.videoTriptych;
      base.processVideoTriptych = {
        image: resolveAquasWillAsset(triptych.imageKey),
        leftVideos: resolveKeys(triptych.leftVideoKeys),
        rightVideos: resolveKeys(triptych.rightVideoKeys),
      };
      return base;
    }

    if ("rows" in section && section.rows) {
      base.rowLayout = section.rowLayout;
      base.rows = section.rows.map((row) => ({
        title: pick(language, row.title),
        text: pick(language, row.text),
        images: resolveKeys(row.imageKeys),
      }));
      return base;
    }

    return base;
  });
}

function buildDetail(language: Language): ProjectDetailContent {
  const { process, resultGalleryKeys } = aquasWillDetailCopy;

  return {
    problem: pickList(language, aquasWillDetailCopy.problem),
    insight: pickList(language, aquasWillDetailCopy.insight),
    approachItems: [],
    process: {
      layout: process.layout,
      research: pick(language, process.research),
      tasks: pick(language, process.tasks),
      howItems: [],
      output: pick(language, process.output),
      pipeline: process.pipeline.map((item) => {
        const base = {
          title: pick(language, item.title),
          text: pick(language, item.text),
        };

        if ("flowchartKey" in item && item.flowchartKey) {
          return {
            ...base,
            flowchartImage: resolveAquasWillAsset(item.flowchartKey),
            flowchartImageScale:
              "flowchartScale" in item ? item.flowchartScale : undefined,
          };
        }

        if ("taskSections" in item && item.taskSections) {
          return {
            ...base,
            taskSections: buildTaskSections(language, item.taskSections),
          };
        }

        if ("outputImageKeys" in item && item.outputImageKeys) {
          return {
            ...base,
            integrationImages: resolveKeys(item.outputImageKeys),
          };
        }

        return base;
      }),
    },
    resultImpact: pick(language, aquasWillDetailCopy.resultImpact),
    resultGalleryImages:
      resultGalleryKeys.length > 0 ? resolveKeys(resultGalleryKeys) : [],
    resultVideoUrl: pick(language, aquasWillDetailCopy.resultVideo),
  };
}

export function buildAquasWillProject(language: Language): Project {
  const project = buildProjectFromManifest(aquasWillManifest, language);
  const detail = buildDetail(language);

  return {
    ...project,
    previewImage: resolveAquasWillAsset("cover"),
    images: [resolveAquasWillAsset("cover")],
    whatIsItSection: {
      heading: pick(language, aquasWillWhatIsItCopy.heading),
      subsections: aquasWillWhatIsItCopy.subsections.map((subsection) => ({
        title: pick(language, subsection.title),
        image: resolveAquasWillAsset(subsection.imageKey),
        text: pick(language, subsection.text),
      })),
    },
    detail,
  };
}

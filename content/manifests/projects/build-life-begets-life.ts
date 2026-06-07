import type { Language } from "../_schema/types";
import { buildProjectFromManifest } from "./build-project";
import type { Project, ProjectDetailContent } from "../../en/projects";
import {
  lifeBegetsLifeDetailCopy,
  lifeBegetsLifeManifest,
  lifeBegetsLifeStoryCopy,
} from "./life-begets-life.data";
import {
  resolveLifeBegetsLifeAsset,
  type LifeBegetsLifeAssetKey,
} from "./life-begets-life-assets";

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

function resolveKeys(keys: readonly LifeBegetsLifeAssetKey[]): string[] {
  return keys.map((key) => resolveLifeBegetsLifeAsset(key));
}

function buildDetail(language: Language): ProjectDetailContent {
  const { process, resultGalleryKeys } = lifeBegetsLifeDetailCopy;

  return {
    problem: pickList(language, lifeBegetsLifeDetailCopy.problem),
    insight: pickList(language, lifeBegetsLifeDetailCopy.insight),
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

        if ("triptych" in item && item.triptych) {
          return {
            ...base,
            processTriptych: {
              left: {
                title: pick(language, item.triptych.left.title),
                images: resolveKeys(item.triptych.left.imageKeys),
              },
              center: {
                title: pick(language, item.triptych.center.title),
                image: resolveLifeBegetsLifeAsset(item.triptych.center.imageKey),
              },
              right: {
                title: pick(language, item.triptych.right.title),
                images: resolveKeys(item.triptych.right.imageKeys),
              },
            },
          };
        }

        if ("threePanelRow" in item && item.threePanelRow) {
          const [first, second] = item.threePanelRow.imageKeys;
          const row = item.threePanelRow;
          return {
            ...base,
            processThreePanelRow: {
              images: [
                resolveLifeBegetsLifeAsset(first),
                resolveLifeBegetsLifeAsset(second),
              ],
              carouselImages: resolveKeys(row.carouselKeys),
              introText: row.introText
                ? pick(language, row.introText)
                : undefined,
              footer: row.footer
                ? {
                    text: pick(language, row.footer.text),
                    video: resolveLifeBegetsLifeAsset(row.footer.videoKey),
                    image: resolveLifeBegetsLifeAsset(row.footer.imageKey),
                  }
                : undefined,
            },
          };
        }

        if ("renderQuad" in item && item.renderQuad) {
          const [sq1, sq2] = item.renderQuad.squareKeys;
          const [rect1, rect2] = item.renderQuad.rectangleKeys;
          return {
            ...base,
            processRenderQuad: {
              squares: [
                resolveLifeBegetsLifeAsset(sq1),
                resolveLifeBegetsLifeAsset(sq2),
              ],
              rectangles: [
                resolveLifeBegetsLifeAsset(rect1),
                resolveLifeBegetsLifeAsset(rect2),
              ],
            },
          };
        }

        return {
          ...base,
          image: resolveLifeBegetsLifeAsset(item.heroKey),
          stepImages: resolveKeys(item.stepKeys),
        };
      }),
    },
    resultImpact: pick(language, lifeBegetsLifeDetailCopy.resultImpact),
    resultGalleryImages:
      resultGalleryKeys.length > 0
        ? resolveKeys(resultGalleryKeys)
        : [],
    resultVideoUrl: pick(language, lifeBegetsLifeDetailCopy.resultVideo),
  };
}

export function buildLifeBegetsLifeProject(language: Language): Project {
  const project = buildProjectFromManifest(lifeBegetsLifeManifest, language);
  const detail = buildDetail(language);

  const galleryHead = [
    resolveLifeBegetsLifeAsset("storyboard1"),
    resolveLifeBegetsLifeAsset("environment"),
    resolveLifeBegetsLifeAsset("rigging1"),
    resolveLifeBegetsLifeAsset("growing2"),
    resolveLifeBegetsLifeAsset("isometricRender"),
  ];

  return {
    ...project,
    previewImage: resolveLifeBegetsLifeAsset("cover"),
    images: galleryHead,
    storySection: {
      heading: pick(language, lifeBegetsLifeStoryCopy.heading),
      image: resolveLifeBegetsLifeAsset("story"),
      storyTitle: pick(language, lifeBegetsLifeStoryCopy.storyTitle),
      storyText: pick(language, lifeBegetsLifeStoryCopy.storyText),
      ideaTitle: pick(language, lifeBegetsLifeStoryCopy.ideaTitle),
      ideaText: pick(language, lifeBegetsLifeStoryCopy.ideaText),
    },
    detail,
  };
}

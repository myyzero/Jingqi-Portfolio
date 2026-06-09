import type { Language } from "../_schema/types";
import type {
  ProcessResearchSubsection,
  ProcessTaskGroup,
} from "../_schema/workDetailBlocks";
import { buildProjectFromManifest } from "./build-project";
import type { Project, ProjectDetailContent } from "../../en/projects";
import {
  seeingUnseenManifest,
  seeingUnseenHowCopy,
  seeingUnseenIntegrationCopy,
  seeingUnseenResearchCopy,
  seeingUnseenResultCopy,
  seeingUnseenTasksCopy,
  seeingUnseenWhatWhyCopy,
} from "./seeing-unseen.data";
import { resolveSeeingUnseenAsset } from "./seeing-unseen-assets";

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

function buildResearchSections(language: Language): ProcessResearchSubsection[] {
  return seeingUnseenResearchCopy.map((section) => ({
    title: pick(language, section.title),
    intro:
      "intro" in section && section.intro
        ? pick(language, section.intro)
        : undefined,
    text: [],
    rowGroups: section.rowGroups.map((group) => ({
      heading:
        "heading" in group && group.heading
          ? pick(language, group.heading)
          : undefined,
      groupLayout: "groupLayout" in group ? group.groupLayout : undefined,
      sharedImage:
        "sharedImageKey" in group && group.sharedImageKey
          ? resolveSeeingUnseenAsset(group.sharedImageKey)
          : undefined,
      sharedImageScale:
        "sharedImageScale" in group ? group.sharedImageScale : undefined,
      splitRatio: "splitRatio" in group ? group.splitRatio : undefined,
      prose:
        "prose" in group && group.prose
          ? pick(language, group.prose)
          : undefined,
      images:
        "imageKeys" in group && group.imageKeys
          ? group.imageKeys.map((key) => resolveSeeingUnseenAsset(key))
          : undefined,
      items:
        "items" in group && group.items
          ? pickList(language, group.items)
          : undefined,
      rows:
        "rows" in group && group.rows
          ? group.rows.map((row) => ({
              label:
                "label" in row && row.label
                  ? pick(language, row.label)
                  : undefined,
              text:
                "text" in row && row.text
                  ? pick(language, row.text)
                  : undefined,
              layout: "layout" in row ? row.layout : undefined,
              image:
                "imageKey" in row && row.imageKey
                  ? resolveSeeingUnseenAsset(row.imageKey)
                  : undefined,
              imageScale:
                "imageScale" in row ? row.imageScale : undefined,
              splitRatio: "splitRatio" in row ? row.splitRatio : undefined,
              images:
                "imageKeys" in row && row.imageKeys
                  ? row.imageKeys.map((key) => resolveSeeingUnseenAsset(key))
                  : undefined,
            }))
          : undefined,
    })),
    images:
      "imageKeys" in section && section.imageKeys
        ? section.imageKeys.map((key) => resolveSeeingUnseenAsset(key))
        : [],
    imageLayout: section.imageLayout,
  }));
}

function buildTasksSections(language: Language): ProcessTaskGroup[] {
  const { userJourney, hardwareDevelopment } = seeingUnseenTasksCopy;

  return [
    {
      title: pick(language, userJourney.title),
      image: resolveSeeingUnseenAsset(userJourney.imageKey),
    },
    {
      title: pick(language, hardwareDevelopment.title),
      layout: hardwareDevelopment.layout,
      images: hardwareDevelopment.imageKeys.map((key) =>
        resolveSeeingUnseenAsset(key),
      ),
    },
  ];
}

function buildDetail(language: Language): ProjectDetailContent {
  return {
    problem: pickList(language, seeingUnseenWhatWhyCopy.problem),
    insight: pickList(language, seeingUnseenWhatWhyCopy.insight),
    approach: pickList(language, seeingUnseenWhatWhyCopy.approach),
    approachItems: [],
    process: {
      research: "",
      researchSections: buildResearchSections(language),
      tasks: "",
      tasksSections: buildTasksSections(language),
      stepLabels: {
        tasks: "HARDWARE SYSTEM DESIGN",
        how: "WEARABLE DESIGN",
        output: "OUTPUT",
      },
      howVideoRow: seeingUnseenHowCopy.videoKeys.map((key) =>
        resolveSeeingUnseenAsset(key),
      ),
      howItems: [],
      output: "",
      integrationImages: seeingUnseenIntegrationCopy.imageKeys.map((key) =>
        resolveSeeingUnseenAsset(key),
      ),
      integrationVideos: seeingUnseenIntegrationCopy.videoKeys.map((key) =>
        resolveSeeingUnseenAsset(key),
      ),
    },
    resultImpact: pick(language, seeingUnseenResultCopy.impact),
    resultGalleryLayout: seeingUnseenResultCopy.galleryLayout,
    resultGalleryImages: seeingUnseenResultCopy.galleryKeys.map((key) =>
      resolveSeeingUnseenAsset(key),
    ),
    resultVideoUrl: pick(language, seeingUnseenResultCopy.video),
  };
}

export function buildSeeingUnseenProject(language: Language): Project {
  const project = buildProjectFromManifest(seeingUnseenManifest, language);
  const detail = buildDetail(language);

  const galleryHead = [
    resolveSeeingUnseenAsset("problem"),
    resolveSeeingUnseenAsset("insight"),
    resolveSeeingUnseenAsset("approach"),
  ];

  return {
    ...project,
    images: [...galleryHead, ...project.images.slice(3)],
    detail,
  };
}

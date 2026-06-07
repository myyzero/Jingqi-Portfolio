import type { Language } from "../_schema/types";
import { resolveMedia, resolveMediaList } from "../_schema/resolveMedia";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { Project } from "../../en/projects";

function pick(lang: Language, copy: { en: string; zh: string }): string {
  return copy[lang];
}

function pickOptional(
  lang: Language,
  copy?: { en: string; zh: string },
): string | undefined {
  if (!copy) return undefined;
  const value = copy[lang].trim();
  return value.length > 0 ? value : undefined;
}

export function buildProjectFromManifest(
  manifest: ProjectManifestEntry,
  language: Language,
): Project {
  const { meta, previewImage, images, heroVideo } = manifest;

  const project: Project = {
    id: manifest.id,
    layout: manifest.layout,
    name: pick(language, meta.name),
    keyword: pick(language, meta.keyword),
    summary: pick(language, meta.summary),
    role: pick(language, meta.role),
    type: pick(language, meta.type),
    previewImage: resolveMedia(previewImage[language]),
    images: resolveMediaList(images[language]),
  };

  const tools = pickOptional(language, meta.tools);
  if (tools) project.tools = tools;

  const details = pickOptional(language, meta.details);
  if (details) project.details = details;

  const website = pickOptional(language, meta.website);
  if (website) project.website = website;

  const moreDetails = pickOptional(language, meta.moreDetails);
  if (moreDetails) project.moreDetails = moreDetails;

  if (heroVideo) {
    const url = resolveMedia(heroVideo[language]);
    if (url && !url.startsWith("TODO")) {
      project.videoUrl = url;
    }
  }

  return project;
}

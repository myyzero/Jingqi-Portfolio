import type { LocalizedCopy, MediaRef } from "./types";

/** Per-language media — en/zh may use different CDNs or embeds. */
export type LocalizedMediaRef = {
  en: MediaRef;
  zh: MediaRef;
};

export type LocalizedMediaList = {
  en: readonly MediaRef[];
  zh: readonly MediaRef[];
};

/** Work detail page layout — default is full case-study template. */
export type ProjectDetailLayout = "default" | "fullscreen-video";

/**
 * Card-level project manifest (no WorkDetail yet).
 * Add `detail` in a later phase when the full case study is ready.
 */
export type ProjectManifestEntry = {
  id: string;
  /** When `fullscreen-video`, detail page shows only a controllable hero embed. */
  layout?: ProjectDetailLayout;
  meta: {
    name: LocalizedCopy;
    keyword: LocalizedCopy;
    summary: LocalizedCopy;
    role: LocalizedCopy;
    type: LocalizedCopy;
    tools?: LocalizedCopy;
    details?: LocalizedCopy;
    website?: LocalizedCopy;
    moreDetails?: LocalizedCopy;
  };
  previewImage: LocalizedMediaRef;
  images: LocalizedMediaList;
  /** Hero embed on project page; omit when not set. */
  heroVideo?: LocalizedMediaRef;
};

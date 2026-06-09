import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { LocalizedCopy } from "../_schema/types";
import coverImage from "../../../materials/montage/cover.png";
import { remote } from "./_media";

const cover = remote(coverImage);

export const montageManifest: ProjectManifestEntry = {
  id: "montage",
  layout: "fullscreen-video",
  meta: {
    name: { en: "Montage (2023)", zh: "混剪（2023）" },
    keyword: { en: "Film montage", zh: "影像混剪" },
    summary: {
      en: "A five-chapter montage spanning nearly fifty films. Edited from existing moving-image sources, the piece shapes rhythm and emotional through-lines through juxtaposition of scale, motion, and sound.",
      zh: "一部由五个章节构成的混剪作品，素材涵盖近五十部影片。通过镜头取舍、顺序与时长控制，在尺度、运动与声音的并置中塑造节奏与情感主线。",
    } satisfies LocalizedCopy,
    role: { en: "Editor", zh: "剪辑" } satisfies LocalizedCopy,
    type: { en: "Personal Project", zh: "个人项目" } satisfies LocalizedCopy,
    tools: {
      en: "Adobe Premiere Pro",
      zh: "Adobe Premiere Pro",
    } satisfies LocalizedCopy,
    details: {
      en: "Montage with 5 chapters",
      zh: "五个章节的混剪作品",
    } satisfies LocalizedCopy,
    moreDetails: {
      en: "",
      zh: "",
    } satisfies LocalizedCopy,
  },
  previewImage: { en: cover, zh: cover },
  images: {
    en: [cover],
    zh: [cover],
  },
  heroVideo: {
    en: remote("https://youtu.be/N8GMI1KpAhw"),
    zh: remote("https://youtu.be/N8GMI1KpAhw"),
  },
};

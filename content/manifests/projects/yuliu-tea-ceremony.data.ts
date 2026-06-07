import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";

const placeholderEn = remote(
  "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
);
const placeholderZh = remote(
  "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Visual-square%20images/%E5%9B%BE%E5%B1%82_7_rmyjo9.png",
);

export const yuliuTeaCeremonyManifest: ProjectManifestEntry = {
  id: "yuliu-tea-ceremony",
  meta: {
    name: { en: "Yuliu Tea Ceremony", zh: "羽流茶道" },
    keyword: { en: "3D character animation", zh: "三维角色动画" },
    summary: {
      en: "TODO: Replace with the real project summary (2–3 sentences).",
      zh: "TODO：替换为真实的项目概述（2–3 句话）。",
    },
    role: {
      en: "TODO: Replace with your role",
      zh: "TODO：替换为你的职责",
    },
    type: {
      en: "TODO: Personal / Team / Commercial",
      zh: "TODO：个人 / 团队 / 商业",
    },
    tools: {
      en: "TODO: Tools used",
      zh: "TODO：使用的工具",
    },
    details: {
      en: "TODO: Optional short context",
      zh: "TODO：可选的简短背景说明",
    },
    moreDetails: {
      en: "TODO: PDF link (optional)",
      zh: "TODO：PDF 链接（可选）",
    },
  },
  previewImage: { en: placeholderEn, zh: placeholderZh },
  images: {
    en: [placeholderEn],
    zh: [placeholderZh],
  },
  heroVideo: {
    en: remote("https://youtu.be/AEXkZEiB_Wk"),
    zh: remote("TODO：Bilibili 或 .mp4 链接（可选）"),
  },
};

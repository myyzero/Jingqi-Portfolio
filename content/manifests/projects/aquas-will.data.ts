import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";

export const aquasWillManifest: ProjectManifestEntry = {
  id: "aquas-will",
  meta: {
    name: { en: "Aqua's Will (2023)", zh: "Aqua 的意志（2023）" },
    keyword: { en: "2D RPG game", zh: "2D RPG 游戏" },
    summary: {
      en: "A 2D side-scrolling RPG about Aqua, a sea spirit who ventures into a polluted underwater cave to save her mutated whale shark companion and restore balance to the ocean.",
      zh: "一款 2D 横版 RPG游戏，讲述海之精灵 Aqua 潜入被污染的海底洞穴，拯救已变异的鲸鲨伙伴，并试图恢复海洋生态平衡的故事。",
    },
    role: {
      en: "2D Animation system, Narrative and Level Design",
      zh: "2D 动画系统，叙事与关卡设计",
    },
    type: { en: "Team Project with 6 members", zh: "团队项目" },
    tools: { en: "Unity, Midjourney, Adobe CS", zh: "Unity, Midjourney, Adobe CS" },
    moreDetails: {
      en: "",
      zh: "https://pub-bea146db2f744e7a8ade7c6af6a38bae.r2.dev/Aqua's%20Will_%E4%BD%9C%E5%93%81%E9%9B%86.pdf",
    },
  },
  previewImage: {
    en: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587042/%E5%9B%BE%E7%89%871_xcgsiz.png",
    ),
    zh: remote(
      "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E7%89%871_xcgsiz.png",
    ),
  },
  images: {
    en: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193892/AW_Map_nct1k3.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587059/%E5%9B%BE%E7%89%87l1_yrfuo5.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/AW_Animation_lgdli3.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636562/ScreenShot_2026-03-04_150142_226_vh9sr4.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150049_468_hpc9ib.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150128_240_zfg6dg.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150108_031_aqndkc.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150208_935_x5issz.jpg",
      ),
    ],
    zh: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193892/AW_Map_nct1k3.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587059/%E5%9B%BE%E7%89%87l1_yrfuo5.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/AW_Animation_lgdli3.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636562/ScreenShot_2026-03-04_150142_226_vh9sr4.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150049_468_hpc9ib.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150128_240_zfg6dg.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150108_031_aqndkc.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150208_935_x5issz.jpg",
      ),
    ],
  },
  heroVideo: {
    en: remote("https://youtu.be/9QSlb-fNXos"),
    zh: remote(
      "https://pub-3f7c602e953f4339a45704b35dffefb6.r2.dev/AquasWill.mp4",
    ),
  },
};

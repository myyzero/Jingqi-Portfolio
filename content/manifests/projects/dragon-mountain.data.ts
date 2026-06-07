import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";

export const dragonMountainManifest: ProjectManifestEntry = {
  id: "dragon-mountain",
  meta: {
    name: { en: "Dragon Mountain (2024)", zh: "绘旅（2024）" },
    keyword: { en: "Digital experience design", zh: "数字体验设计" },
    summary: {
      en: "An immersive interactive experience set in a traditional Chinese painting converted from 2D to 3D, where players navigate ancient temples and solve environmental puzzles under different weather conditions. This project was developed in Unreal Engine to explore cultural narratives through digital media.",
      zh: "一个以传统中国山水画为原型、从 2D 转换为 3D 空间的沉浸式互动体验。玩家可以在山峦与庙宇间穿行，在不同天气条件下解开环境谜题。本项目基于虚幻引擎开发，探索如何通过数字媒体讲述和延展文化叙事。",
    },
    role: {
      en: "Technical Artist, Interaction Design",
      zh: "技术美术，交互设计",
    },
    type: { en: "Team Project with 2 members", zh: "团队项目" },
    tools: { en: "UE, Maya, Adobe CS", zh: "UE, Maya, Adobe CS" },
    details: {
      en: "Designed for Museum",
      zh: "为中国传统山水画创作的互动体验，促进人们对于绘画的理解与欣赏，打造沉浸式博物馆体验",
    },
    moreDetails: {
      en: "https://drive.google.com/file/d/1DIEezLARhdBBU6KE5yDaVFND-64FcQ6B/view?usp=sharing",
      zh: "https://pub-bea146db2f744e7a8ade7c6af6a38bae.r2.dev/%E7%BB%98%E6%97%85_%E4%BD%9C%E5%93%81%E9%9B%86.pdf",
    },
  },
  previewImage: {
    en: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772586323/cover_en_qmsr2t.jpg",
    ),
    zh: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195951/HL_COVER_ne01re.png",
    ),
  },
  images: {
    en: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587242/8_vq8ctw.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587241/6_gr9rqc.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587243/1_giefhu.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_flowChart_dlke5e.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_BirdRideEventpng_tq9djx.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_dialogueSystem_xa7eri.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_NavigationSystem_td2gj2.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_shader_lir69z.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_WeatherSystem_t0xenk.png",
      ),
    ],
    zh: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587242/8_vq8ctw.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587241/6_gr9rqc.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587243/1_giefhu.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195761/HL_Flowchart_fk9zbk.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195761/HL_map_wlh6rc.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195761/HL_diologue_xv5bun.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195762/HL_SHADER_ideb4y.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195762/HL_BIRD_ofckdo.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1773195764/HL_WEATHER_wwkc6r.png",
      ),
    ],
  },
  heroVideo: {
    en: remote("https://youtu.be/CPF2gNgYsvQ"),
    zh: remote("//player.bilibili.com/player.html?bvid=BV1NmP9zREXV&page=1"),
  },
};

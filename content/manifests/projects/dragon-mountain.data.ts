import type { LocalizedCopy, LocalizedStringList } from "../_schema/types";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { DragonMountainAssetKey } from "./dragon-mountain-assets";
import { remote } from "./_media";
import heroVideoZh from "../../../materials/dragon-mountain/HV_DM.mp4";

export const dragonMountainWhatWhyCopy = {
  problem: {
    en: [
      "Limited Dwell Time & Shallow Cultural Engagement.",
      "Static Displays Failing Traditional Artwork Value.",
      "Low Audience Retention in Conventional Formats.",
    ],
    zh: [
      "停留时间短导致文化理解浅显",
      "静态展示难以传递传统画作的丰富内涵。",
      "传统展陈形式难以持久吸引观众注意力。",
    ],
  } satisfies LocalizedStringList,
  insight: {
    en: [
      "Interactive Experiences Foster Deeper Appreciation.",
      "Digital Tech Enhances Accessibility & Engagement.",
    ],
    zh: [
      "互动体验能深化对传统文化遗存的理解。",
      "数字技术提升文化传承的易懂性与沉浸感。",
    ],
  } satisfies LocalizedStringList,
  approach: {
    en: [
      "Symbolism & Narrative Research in Artwork.",
      "3D Unreal Engine Interactive Environment.",
      "Immersive Gamified Cultural Exploration.",
    ],
    zh: [
      "《江山秋色图》的画作意象、叙事与艺术意图研究",
      "基于虚幻引擎构建 3D 交互场景。",
      "沉浸式游戏化文化探索体验。",
    ],
  } satisfies LocalizedStringList,
} as const;

export const dragonMountainResearchCopy = [
  {
    title: {
      en: "Theory Study",
      zh: "理论研读",
    } satisfies LocalizedCopy,
    text: {
      en: [
        "Investigated Wang Yuanqi's Theory of the Dragon Vein, which emphasizes the interconnected flow and structure underlying Chinese landscape paintings.",
        "Identified how spatial relationships between mountains, rivers, trees, architecture, and figures guide visual navigation and narrative progression.",
      ],
      zh: [
        "研究王原祁的龙脉论，强调中国山水画内在的连贯流动与结构。",
        "梳理山峦、河流、树木、建筑与人物之间的空间关系，如何引导视觉动线与叙事推进。",
      ],
    } satisfies LocalizedStringList,
    imageKeys: ["theory1", "theory2"] as const satisfies readonly DragonMountainAssetKey[],
    imageLayout: "rows" as const,
  },
  {
    title: {
      en: "Painting Analysis",
      zh: "画作分析",
    } satisfies LocalizedCopy,
    text: {
      en: [
        "Analyzed key visual elements, symbolism, and compositional structures within Autumn Colors Across Rivers and Mountains.",
        "Defined interactive opportunities and prioritized components for 3D reconstruction based on the Dragon Vein framework.",
      ],
      zh: [
        "分析《江山秋色图》的关键视觉元素、象征意义与构图结构。",
        "基于龙脉框架界定互动机会，并确定三维重建的优先组件。",
      ],
    } satisfies LocalizedStringList,
    imageKeys: ["paintingAnalysis1", "paintingAnalysis2"] as const satisfies readonly DragonMountainAssetKey[],
    imageLayout: "rows" as const,
  },
  {
    title: {
      en: "UX Design - Experience Logic Wireframe Deck",
      zh: "UX 设计 · 体验逻辑线框",
    } satisfies LocalizedCopy,
    text: {
      en: [] as const,
      zh: [] as const,
    } satisfies LocalizedStringList,
    imageKeys: ["experienceMapping"] as const satisfies readonly DragonMountainAssetKey[],
    imageLayout: "vertical" as const,
  },
] as const;

export const dragonMountainTasksCopy = {
  modelling3d: {
    title: {
      en: "3D Modelling & Environment Design",
      zh: "三维建模与环境设计",
    } satisfies LocalizedCopy,
    text: {
      en: [
        "In Unreal Engine, sculpted mountain terrain with landscape tools to follow the painting's forms and developed custom ink-wash style materials.",
        "In Maya, modelled architectural elements from the painting and imported them into Unreal Engine with tailored surface materials.",
      ],
      zh: [
        "在虚幻引擎中使用 Landscape 工具雕刻山体地形，贴合画作品形，并开发定制水墨风格材质。",
        "在 Maya 中建模画中的建筑元素，导入虚幻引擎并配置表面材质。",
      ],
    } satisfies LocalizedStringList,
    imageKeys: ["model1", "model2", "model3"] as const satisfies readonly DragonMountainAssetKey[],
    stackImageKeys: ["modelWhole2", "modelWhole1"] as const satisfies readonly DragonMountainAssetKey[],
    layout: "verticalTriple" as const,
  },
  interactionDesign: {
    title: {
      en: "Interaction Design",
      zh: "交互设计",
    } satisfies LocalizedCopy,
    rowLayout: "stack" as const,
    rows: [
      {
        title: {
          en: "Dialogue System",
          zh: "对话系统",
        } satisfies LocalizedCopy,
        imageKey: "dialogueSystem" as const satisfies DragonMountainAssetKey,
        videoKey: "dialogueSystemVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Navigation System",
          zh: "导航系统",
        } satisfies LocalizedCopy,
        imageKey: "navigationSystem" as const satisfies DragonMountainAssetKey,
        videoKey: "navigationSystemVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Soaring on a Giant Bird",
          zh: "巨鸟翱翔",
        } satisfies LocalizedCopy,
        imageKey: "soaringBird" as const satisfies DragonMountainAssetKey,
        videoKey: "soaringBirdVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Navigating by boat",
          zh: "扁舟行舟",
        } satisfies LocalizedCopy,
        imageKey: "navigatingBoat" as const satisfies DragonMountainAssetKey,
        videoKey: "navigatingBoatVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Withered Tree Regrowth",
          zh: "枯木复生",
        } satisfies LocalizedCopy,
        imageKey: "witheredTree" as const satisfies DragonMountainAssetKey,
        videoKey: "witheredTreeVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Weather System",
          zh: "天气系统",
        } satisfies LocalizedCopy,
        imageKey: "weatherSystem" as const satisfies DragonMountainAssetKey,
        videoKey: "weatherSystemVideo" as const satisfies DragonMountainAssetKey,
      },
      {
        title: {
          en: "Collection System",
          zh: "收集系统",
        } satisfies LocalizedCopy,
        imageKey: "collectionSystem" as const satisfies DragonMountainAssetKey,
        videoKey: "collectionSystemVideo" as const satisfies DragonMountainAssetKey,
      },
    ],
  },
  uiDesign: {
    title: {
      en: "UI Design",
      zh: "UI 设计",
    } satisfies LocalizedCopy,
    imageKey: "uiDesign" as const satisfies DragonMountainAssetKey,
  },
  postcardBookmark: {
    title: {
      en: "Postcard & Bookmark Design",
      zh: "明信片与书签设计",
    } satisfies LocalizedCopy,
    imageKey: "postcardBookmark" as const satisfies DragonMountainAssetKey,
  },
} as const;

export const dragonMountainTasksOutlineCopy = [
  {
    title: {
      en: "3D Modelling & Environment Design",
      zh: "三维建模与环境设计",
    } satisfies LocalizedCopy,
    subItems: {
      en: ["Architecture in Maya", "Terrains and Mountains in UE"],
      zh: ["Maya 建筑建模", "UE 地形与山脉"],
    } satisfies LocalizedStringList,
    imageKey: "taskCol1" as const satisfies DragonMountainAssetKey,
  },
  {
    title: {
      en: "Interaction Design",
      zh: "交互设计",
    } satisfies LocalizedCopy,
    subItems: {
      en: [
        "Dialogue System",
        "Navigation System",
        "Soaring on a Giant Bird",
        "Navigating by boat",
        "Withered Tree Regrowth",
        "Weather System",
        "Collection System",
      ],
      zh: [
        "对话系统",
        "导航系统",
        "巨鸟翱翔",
        "扁舟行舟",
        "枯木复生",
        "天气系统",
        "收集系统",
      ],
    } satisfies LocalizedStringList,
    imageKey: "taskCol2" as const satisfies DragonMountainAssetKey,
  },
  {
    title: {
      en: "UI Design",
      zh: "UI 设计",
    } satisfies LocalizedCopy,
    imageKey: "taskCol3" as const satisfies DragonMountainAssetKey,
  },
  {
    title: {
      en: "Postcard & Bookmark Design",
      zh: "明信片与书签设计",
    } satisfies LocalizedCopy,
    imageKey: "taskCol4" as const satisfies DragonMountainAssetKey,
  },
] as const;

export const dragonMountainResultCopy = {
  resultGalleryKeys: [
    "result1",
    "result2",
    "result3",
    "result4",
    "result5",
    "result6",
  ] as const satisfies readonly DragonMountainAssetKey[],
  resultVideo: {
    en: "https://youtu.be/jrOYWVOa4_k",
    zh: "//player.bilibili.com/player.html?bvid=BV1NmP9zREXV&page=1",
  },
} as const;

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
    type: { en: "Team Project", zh: "团队项目" },
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
    zh: remote(heroVideoZh),
  },
};

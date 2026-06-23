import type { LocalizedCopy } from "../_schema/types";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";
import heroVideoZh from "../../../materials/life-begets-life/HV_LBL.mp4";

const placeholderEn = remote(
  "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
);
const placeholderZh = remote(
  "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Visual-square%20images/%E5%9B%BE%E5%B1%82_1_bzg7mm.png",
);

export const lifeBegetsLifeStoryCopy = {
  heading: { en: "Story", zh: "故事" } satisfies LocalizedCopy,
  storyTitle: { en: "Story", zh: "故事" } satisfies LocalizedCopy,
  storyText: {
    en: "A whale lives and dies, becoming pure energy. It rebuilds as a mechanical submarine that supports a fantastical city—home to mystical creatures called Aqua. As they absorb the whale's energy and merge with the city, a new whale is born, and the cycle begins again.",
    zh: "一只鲸鱼经历诞生与消逝，化为纯粹的能量。它重构为机械潜艇，承载一座奇幻的水下城市——居住着名为 Aqua 的神秘生物。当它们吸收鲸鱼的能量并与城市融合，新的鲸鱼便会诞生，循环再次开始。",
  } satisfies LocalizedCopy,
  ideaTitle: { en: "Idea", zh: "理念" } satisfies LocalizedCopy,
  ideaText: {
    en: "The narrative expresses how all life is interconnected—each form nurtures and gives rise to the next. Through endless cycles of transformation, nature and technology, energy and matter, life and rebirth remain intertwined: a vision of creation as continuous renewal.",
    zh: "叙事表达万物彼此联结——每一种形态滋养并催生下一种。在无尽转化循环中，自然与技术、能量与物质、生命与重生交织共存：创造即持续更新。",
  } satisfies LocalizedCopy,
} as const;

export const lifeBegetsLifeDetailCopy = {
  problem: {
    en: ["Placeholder — Story section replaces What & Why on page."],
    zh: ["占位 — 详情页以「故事」区块替代项目背景。"],
  },
  insight: {
    en: ["Placeholder."],
    zh: ["占位。"],
  },
  approachItems: [] as const,
  process: {
    layout: "pipeline" as const,
    research: { en: "", zh: "" },
    tasks: { en: "", zh: "" },
    howItems: [] as const,
    output: { en: "", zh: "" },
    pipeline: [
      {
        key: "modelling" as const,
        title: {
          en: "Modelling & environment setup",
          zh: "建模与环境搭建",
        },
        text: {
          en: "Modelled the whale, coral environments, and city-scale structures in Cinema 4D—blocking readable scale shifts between organic, mechanical, and habitat phases.",
          zh: "在 Cinema 4D 中建模鲸鱼、珊瑚环境与城市尺度结构，在有机、机械与栖息地阶段之间建立清晰可读的比例转换。",
        },
        triptych: {
          left: {
            title: { en: "Character-Aqua", zh: "角色 · Aqua" },
            imageKeys: ["character1", "character2", "character3"] as const,
          },
          center: {
            title: { en: "Environment Setup", zh: "环境搭建" },
            imageKey: "environmentSetup" as const,
          },
          right: {
            title: { en: "Details", zh: "细节" },
            imageKeys: ["detail1", "detail2", "detail3"] as const,
          },
        },
      },
      {
        key: "rigging" as const,
        title: {
          en: "Rigging and binding",
          zh: "绑定与蒙皮",
        },
        text: {
          en: "Built rigs and skin weights for the whale and Aqua creatures; tuned controllers for stable deformation through transformation beats.",
          zh: "为鲸鱼与 Aqua 生物搭建骨骼与权重，调整控制器，确保变形阶段稳定可靠。",
        },
        triptych: {
          left: {
            title: { en: "Aqua", zh: "Aqua" },
            imageKeys: ["aqua1", "aqua2", "aqua3"] as const,
          },
          center: {
            title: { en: "Rigging", zh: "绑定" },
            imageKey: "rigging3" as const,
          },
          right: {
            title: { en: "Whale", zh: "鲸鱼" },
            imageKeys: ["whale1", "whale2", "whale3"] as const,
          },
        },
      },
      {
        key: "animation" as const,
        title: {
          en: "Animation",
          zh: "动画",
        },
        text: {
          en: "",
          zh: "",
        },
        threePanelRow: {
          introText: {
            en: "Built environment dissolution animation in Cinema 4D using Volume Remesh to retopologise volumetric meshes—reorganising mesh volumes to drive organic dissolve and breakup motion across the habitat geometry.",
            zh: "在 Cinema 4D 中使用 Volume Remesh 构建环境消解动画，对体积网格重新拓扑，重组网格体积以驱动栖息地几何体的有机溶解与碎裂运动。",
          },
          imageKeys: ["growing1", "growing2"] as const,
          carouselKeys: ["growing31", "growing32", "growing33"] as const,
          footer: {
            text: {
              en: "Built the interactive flower roads using MoGraph Cloners, Field-based procedural animation, and XPresso-driven User Data for real-time layout control. Two cloner systems (holes + raised elements) tile across a 50 cm grid, while Formula, Capsule, and Helix Fields create spatial wave motion and colour/light variation. Custom sliders control size, count, spacing, and surface area—making the wall fully parametric and interactive during production.",
              zh: "使用 MoGraph Cloner、基于 Field 的程序化动画，以及 XPresso 驱动的 User Data 构建交互式花路，实现实时布局控制。两套克隆系统（孔洞 + 凸起元素）在 50 cm 网格上平铺，Formula、Capsule 与 Helix Field 创造空间波浪运动与色彩/光照变化。自定义滑块控制尺寸、数量、间距与表面积——使墙面在制作过程中完全参数化、可交互。",
            },
            videoKey: "xpressoTag1" as const,
            imageKey: "xpressoTag2" as const,
          },
        },
      },
      {
        key: "render" as const,
        title: {
          en: "Render",
          zh: "渲染",
        },
        text: {
          en: "Rendered with Redshift—tuning light rigs and render settings to achieve a mysterious, dreamlike underwater atmosphere.",
          zh: "使用 Redshift 渲染，调整灯光与渲染设置，营造神秘、梦幻的水下氛围。",
        },
        renderQuad: {
          squareKeys: ["render1", "render2"] as const,
          rectangleKeys: ["render3", "render4"] as const,
        },
      },
    ],
  },
  resultImpact: {
    en: "Demonstrates 3D storytelling and symbolic structure for animation and film direction—cyclical ecology told through sequential metamorphosis without dialogue.",
    zh: "展现了三维叙事与象征结构在动画与影像方向上的潜力——以连续的形态转化、无对白地讲述循环生态。",
  },
  resultGalleryKeys: [] as const,
  resultVideo: {
    en: "https://youtu.be/95UGfGbdLOM",
    zh: "//player.bilibili.com/player.html?bvid=BV189jP66EBr&page=1",
  },
} as const;

export const lifeBegetsLifeManifest: ProjectManifestEntry = {
  id: "life-begets-life",
  meta: {
    name: { en: "Life Begets Life (2025)", zh: "万物生（2025）" },
    keyword: { en: "3D animation", zh: "三维动画" },
    summary: {
      en: "A short 3D animated film tracing a whale's life cycle from birth to dissolution, re-emergence as a core of energy, and transformation into a mechanical submarine that carries an entire underwater city—symbolising that all life is connected through continuous cycles of matter and meaning.",
      zh: "一部三维动画短片，追踪鲸鱼从诞生、消解到重新凝聚为能量核心，再转化为承载整座城市的水下机械潜艇——象征万物通过物质与意义的连续循环彼此联结。",
    },
    role: { en: "Animator", zh: "动画师" },
    type: { en: "Personal Project", zh: "个人项目" },
    tools: { en: "Cinema 4D", zh: "Cinema 4D" },
    details: { en: "3D Animation", zh: "三维动画" },
    moreDetails: {
      en: "",
      zh: "",
    },
  },
  previewImage: { en: placeholderEn, zh: placeholderZh },
  images: {
    en: [placeholderEn],
    zh: [placeholderZh],
  },
  heroVideo: {
    en: remote("https://youtu.be/wU2xjlGVz-Q"),
    zh: remote(heroVideoZh),
  },
};

import type { LocalizedCopy } from "../_schema/types";
import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";
import heroVideoZh from "../../../materials/aquas-will/HV_AW.mp4";

const summaryCopy = {
  en: "A 2D side-scrolling RPG following Aqua, a sea spirit who enters a polluted underwater cave to rescue a mutated whale-shark companion and restore ecological balance. I designed the level flow, narrative beats and implemented the 2D animation system in Unity, also developed an AI-enhanced image generation workflow through Midjourney to Photoshop and After Effects, which can be reused in future design prototypes.",
  zh: "一款 2D 横版 RPG 游戏，讲述海之精灵 Aqua 潜入被污染的海底洞穴，拯救已变异的鲸鲨伙伴，并试图恢复海洋生态平衡的故事。我负责关卡流程与叙事节奏设计，并在 Unity 中实现 2D 动画系统；同时搭建了经 Midjourney 生成、在 Photoshop 与 After Effects 中精修与动画化的 AI 增强图像工作流，可在未来设计原型中复用。",
} satisfies LocalizedCopy;

export const aquasWillWhatIsItCopy = {
  heading: { en: "What is it", zh: "这是什么" } satisfies LocalizedCopy,
  subsections: [
    {
      title: { en: "Background Research", zh: "背景调研" } satisfies LocalizedCopy,
      imageKey: "research" as const,
      text: {
        en: "The ocean is the cradle of life on Earth, brimming with abundant natural resources. However, today, 40% of the world's oceans are severely impacted by human activity, and more than half of coastal habitats are degrading. While enjoying the ocean's natural gifts, humanity must never forget the pain it has endured.",
        zh: "海洋是地球生命的摇篮，蕴藏着丰富的自然资源。然而如今，全球 40% 的海域已受到人类活动的严重影响，超过一半的海岸栖息地正在退化。在享受海洋馈赠的同时，人类不应忘记海洋所承受的痛苦。",
      } satisfies LocalizedCopy,
    },
    {
      title: { en: "Story", zh: "故事" } satisfies LocalizedCopy,
      imageKey: "story" as const,
      text: {
        en: "Aqua, the Sea Spirit, is a gentle guardian of the ocean, carrying its whispers across the endless blue.\n\nBy her side swims a whale shark, her closest friend and lifelong companion. Together, they roam the vast seas, gliding through coral forests and drifting peacefully beneath the waves.\n\nFor years, their world remained untouched.\n\nBut as human pollution spread through the ocean, darkness began to seep into the depths. The whale shark, dwelling within an ancient underwater cave, was slowly poisoned by the contaminated waters. The corruption twisted its body and clouded its mind. Consumed by agony, it thrashed violently against the cave walls, shaking the ocean with its suffering.\n\nWhen Aqua hears her friend's desperate cries echoing through the deep, she embarks on a journey into the heart of the corrupted cave. There, she must purify the spreading pollution, heal the whale shark, and restore the harmony that once united them.",
        zh: "海之精灵 Aqua 是海洋温柔的守护者，将海洋的低语带向无尽的蔚蓝。\n\n她身旁游着一条鲸鲨——她最亲密的朋友与一生的伙伴。她们一同漫游广阔海域，穿过珊瑚森林，在波浪之下安然漂流。\n\n多年来，她们的世界未曾被侵扰。\n\n但随着人类污染在海洋中蔓延，黑暗开始渗入深海。栖息在古老海底洞穴中的鲸鲨，逐渐被受污染的海水侵蚀。腐化扭曲了它的身躯，也蒙蔽了它的神志。在剧痛中，它猛烈撞击洞壁，让整个海洋都为之震颤。\n\n当 Aqua 听见伙伴绝望的呼喊从深海传来，她踏上前往腐化洞穴核心的旅程。在那里，她必须净化蔓延的污染，治愈鲸鲨，并恢复曾经将她们联结在一起的和谐。",
      } satisfies LocalizedCopy,
    },
  ],
} as const;

export const aquasWillDetailCopy = {
  problem: {
    en: ["Placeholder — What is it section replaces What & Why on page."],
    zh: ["占位 — 详情页以「这是什么」区块替代 What & Why。"],
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
        key: "flowchart" as const,
        title: {
          en: "Flowchart of Gameplay",
          zh: "玩法流程图",
        },
        text: { en: "", zh: "" },
        flowchartKey: "mechanism" as const,
        flowchartScale: 0.5 as const,
      },
      {
        key: "character" as const,
        title: {
          en: "Character & Animation Design",
          zh: "角色与动画设计",
        },
        text: { en: "", zh: "" },
        taskSections: [
          {
            title: {
              en: "AI-enhanced Animation Workflow",
              zh: "AI 增强动画工作流",
            },
            text: {
              en: "Animation development workflows including AI-enhanced image generation through Midjourney, polished in Photoshop and animated in After Effects through plugins like autosway and 2D Spline.",
              zh: "动画开发流程涵盖经 Midjourney 的 AI 增强图像生成，在 Photoshop 中精修，并通过 autosway、2D Spline 等插件在 After Effects 中完成动画。",
            },
            videoTriptych: {
              imageKey: "character" as const,
              leftVideoKeys: ["aniIdle", "aniSmaller", "aniSwim"] as const,
              rightVideoKeys: [
                "aniBossIdle",
                "aniBossAttack",
                "aniBossIdle2",
              ] as const,
            },
          },
          {
            title: { en: "Aqua Skills", zh: "Aqua 技能" },
            rowLayout: "textTripleSquares" as const,
            rows: [
              {
                title: { en: "Shot", zh: "光球射击" },
                text: {
                  en: "(1) Hold the left mouse button to charge the light orb.\n(2) Move the mouse to determine the firing direction.\n(3) Release the mouse button to launch the light orb.",
                  zh: "（1）按住鼠标左键为光球蓄力。\n（2）移动鼠标确定发射方向。\n（3）松开鼠标左键发射光球。",
                },
                imageKeys: ["shot1", "shot2", "shot3"] as const,
              },
              {
                title: { en: "Dash", zh: "冲刺" },
                text: {
                  en: "Press the Spacebar to perform a dash (with a simple cooldown).",
                  zh: "按空格键进行冲刺（带有简单冷却时间）。",
                },
                imageKeys: ["dash1", "dash2", "dash3"] as const,
              },
              {
                title: { en: "Compress", zh: "压缩" },
                text: {
                  en: "Press T to compress the body, reducing the Sea Spirit's size.",
                  zh: "按 T 键压缩身体，缩小海之精灵的体型。",
                },
                imageKeys: ["compress1", "compress2", "compress3"] as const,
              },
            ],
          },
        ],
      },
      {
        key: "level" as const,
        title: {
          en: "Map & Level Design",
          zh: "地图与关卡设计",
        },
        text: { en: "", zh: "" },
        taskSections: [
          {
            title: { en: "Map Design", zh: "地图设计" },
            layout: "twinImagesHeightAligned" as const,
            imageKeys: ["map", "map2"] as const,
          },
          {
            title: { en: "Level Design", zh: "关卡设计" },
            layout: "imageLevelSplit" as const,
            imageKey: "level" as const,
            levelHeader: {
              left: { en: "Level", zh: "关卡" },
              right: { en: "Core Challenge", zh: "核心挑战" },
            },
            levelItems: [
              {
                title: { en: "Current Zone", zh: "洋流区" },
                text: {
                  en: "Navigate against dynamic water currents.",
                  zh: "逆动态洋流移动。",
                },
              },
              {
                title: { en: "Oxygen Zone", zh: "缺氧区" },
                text: {
                  en: "Illuminate corals to create survivable spaces.",
                  zh: "点亮珊瑚以创造可生存空间。",
                },
              },
              {
                title: { en: "Rock Zone", zh: "落石区" },
                text: {
                  en: "Avoid falling rocks and manage health.",
                  zh: "躲避落石并管理生命值。",
                },
              },
              {
                title: { en: "Deepest Zone", zh: "最深处" },
                text: {
                  en: "Restore the cave ecosystem and defeat the boss.",
                  zh: "修复洞穴生态并击败 Boss。",
                },
              },
            ],
          },
        ],
      },
      {
        key: "output" as const,
        title: { en: "Output", zh: "成果输出" },
        text: { en: "", zh: "" },
        outputImageKeys: [
          "output1",
          "output2",
          "output3",
          "output4",
          "output5",
          "output6",
        ] as const,
      },
    ],
  },
  resultImpact: {
    en: "Delivered a complete team-developed game prototype featuring a clear narrative arc, immersive environmental storytelling, and a polished player experience.\n\nExpanded my expertise in Unity-based level design and animation implementation while establishing a reusable AI-assisted art pipeline using Midjourney, Photoshop, and After Effects to accelerate concept development and production workflows.",
    zh: "交付了一款完整的团队游戏原型，具备清晰的叙事弧线、沉浸式的环境叙事与打磨到位的玩家体验。\n\n在 Unity 关卡设计与动画实现方面拓展了专业能力，并建立了可复用的 AI 辅助美术流程（Midjourney、Photoshop、After Effects），以加速概念开发与制作工作流。",
  },
  resultGalleryKeys: [] as const,
  resultVideo: {
    en: "https://youtu.be/mc4brbHeh4w",
    zh: "https://pub-3f7c602e953f4339a45704b35dffefb6.r2.dev/AquasWill.mp4",
  },
} as const;

export const aquasWillManifest: ProjectManifestEntry = {
  id: "aquas-will",
  meta: {
    name: { en: "Aqua's Will (2023)", zh: "Aqua 的意志（2023）" },
    keyword: { en: "2D RPG game", zh: "2D RPG 游戏" },
    summary: summaryCopy,
    role: {
      en: "Level and Animation Design",
      zh: "关卡与动画设计",
    },
    type: {
      en: "Team Project (Leader)",
      zh: "团队项目（负责人）",
    },
    tools: { en: "Unity, Midjourney, Adobe CS", zh: "Unity, Midjourney, Adobe CS" },
    details: { en: "2D RPG", zh: "2D RPG" },
    moreDetails: {
      en: "",
      zh: "https://pub-bea146db2f744e7a8ade7c6af6a38bae.r2.dev/Aqua's%20Will_%E4%BD%9C%E5%93%81%E9%9B%86.pdf",
    },
  },
  previewImage: {
    en: remote("https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg"),
    zh: remote(
      "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E7%89%871_xcgsiz.png",
    ),
  },
  images: {
    en: [
      remote("https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg"),
    ],
    zh: [
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E7%89%871_xcgsiz.png",
      ),
    ],
  },
  heroVideo: {
    en: remote("https://youtu.be/9QSlb-fNXos"),
    zh: remote(heroVideoZh),
  },
};

import type { LocalizedCopy, LocalizedStringList, MediaRef } from "../_schema/types";
import type { PopupMuseumAssetKey } from "./popup-museum-assets";
import heroVideoZh from "../../../materials/popup-museum/HV_PM.mp4";

const remote = (url: string): MediaRef => ({ kind: "remote", url });
const local = (assetKey: PopupMuseumAssetKey): MediaRef => ({
  kind: "local",
  assetKey,
});

/** Cloudinary / external URLs */
export const popupMuseumRemote = {
  previewEn: remote(
    "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
  ),
  previewZh: remote(
    "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/P_1_d9a6h4.png",
  ),
  flowchart: remote(
    "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193895/PM_Flowchart_hwnbcu.png",
  ),
  stepPlaceholder: remote(
    "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
  ),
  legacy: [
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193895/PM_Flowchart_hwnbcu.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143602_363_rhjp1v.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635240/ScreenShot_2026-03-04_143613_991_tfzthj.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587644/ScreenShot_2026-02-18_202557_562_cj69ds.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143623_577_iu6rkg.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193892/PM_ToonShader_rbdxfk.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193896/PM_StateMachine_lkdrnb.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Animation_fhrr29.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_AppearAnimation_amrrv1.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Diorama_kuwuq6.png",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635251/ScreenShot_2026-03-04_143855_701_rm5bh1.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635245/ScreenShot_2026-03-04_143727_008_ts4okg.jpg",
    ),
    remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635250/ScreenShot_2026-03-04_143747_610_dokz4v.jpg",
    ),
  ] as const,
  processDiorama: remote(
    "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Diorama_kuwuq6.png",
  ),
} as const;

export const popupMuseumCopy = {
  meta: {
    name: {
      en: "Pop-up Museum (2026)",
      zh: "数字博物馆（2026）",
    } satisfies LocalizedCopy,
    keyword: {
      en: "Museum interactive installation",
      zh: "博物馆交互装置",
    } satisfies LocalizedCopy,
    summary: {
      en: "An interactive museum installation built around artefacts from the Grant and Petrie Museum. By combining 3D-printed replicas, physical sensing, and real-time digital media, the piece turns objects that are normally “look but don’t touch” into something visitors can feel, move, and hear. I led the animation system and contributed 2D/3D assets plus UI/UX for the Unity experience.",
      zh: "一个以 Grant 和 Petrie 博物馆藏品为基础的交互装置。通过 3D 打印复制品、物理传感与实时数字媒体，将原本“只能看不能碰”的文物转化为可被触摸、移动与聆听的体验。我主导动画系统，并负责 2D/3D 资产与 Unity 端的 UI/UX。",
    } satisfies LocalizedCopy,
    role: { en: "Animator", zh: "动画师" } satisfies LocalizedCopy,
    type: { en: "Team Project", zh: "团队项目" } satisfies LocalizedCopy,
    tools: {
      en: "Unity, Maya, C4D, Adobe CS",
      zh: "Unity, Maya, C4D, Adobe CS",
    } satisfies LocalizedCopy,
    details: {
      en: "Designed for Grant and Petrie Museum",
      zh: "为 Grant 和 Petrie 博物馆创作",
    } satisfies LocalizedCopy,
    website: {
      en: "https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026",
      zh: "https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026",
    } satisfies LocalizedCopy,
    moreDetails: {
      en: "https://drive.google.com/file/d/1SO1XoJSZZHBFos8DZKYdI0Mf_ENYVCXY/view?usp=sharing",
      zh: "https://pub-bea146db2f744e7a8ade7c6af6a38bae.r2.dev/PopUpMuseum.pdf",
    } satisfies LocalizedCopy,
    heroVideo: {
      en: remote("https://youtu.be/Ld0dREliREA"),
      zh: remote(heroVideoZh),
    },
    previewImage: {
      en: popupMuseumRemote.previewEn,
      zh: popupMuseumRemote.previewZh,
    },
  },
  whatWhy: {
    problem: {
      en: [
        "Glass Barriers & Limited Tactile Engagement.",
        "Mismatch with Youth Expectations for Interactive Media.",
      ],
      zh: [
        "玻璃屏障限制触觉互动。",
        "传统展陈不符合年轻受众对交互媒体的期待。",
      ],
    } satisfies LocalizedStringList,
    insight: {
      en: [
        "High Engagement with Tactile Replicas & Gamified Intros.",
        "Toon-Shaded Storytelling Makes Artefacts Approachable.",
      ],
      zh: [
        "触摸复制品与游戏化引导能带来更强互动。",
        "三渲二的风格化材质与故事化叙事让文物“活起来”。",
      ],
    } satisfies LocalizedStringList,
  },
  approach: [
    {
      title: {
        en: "Tactile Artefacts",
        zh: "可触摸文物",
      } satisfies LocalizedCopy,
      text: {
        en: [
          "Created museum object replicas using 3D printing and high-precision scanning.",
          "Enables visitors to physically explore surface textures and forms for a deeper understanding of the artifacts.",
        ],
        zh: [
          "通过 3D 打印与高精度扫描制作文物复制品。",
          "让观众触摸表面纹理与形态，加深对文物的理解。",
        ],
      } satisfies LocalizedStringList,
      imageIndex: 2,
    },
    {
      title: {
        en: "Hardware Application",
        zh: "硬件应用",
      } satisfies LocalizedCopy,
      text: {
        en: [
          "Integrated CodeCell C3 sensors into the replicas.",
          "Physical movements are mirrored in real time by their digital counterparts.",
          "Enhances engagement, playability, and exploration.",
        ],
        zh: [
          "在复制品中集成 CodeCell C3 传感器。",
          "使物理动作实时映射到数字文物。",
          "提升互动性、可玩性与探索感。",
        ],
      } satisfies LocalizedStringList,
      imageIndex: 3,
    },
    {
      title: {
        en: "Digital Storytelling",
        zh: "数字叙事",
      } satisfies LocalizedCopy,
      text: {
        en: [
          "Developed a digital environment in Maya and Unity.",
          "Combines animation, visual effects, UI design, and multimedia content.",
          "Presents artifact information in an engaging and accessible way, encouraging curiosity and self-directed discovery.",
        ],
        zh: [
          "在 Maya 与 Unity 中搭建数字环境。",
          "结合动画、视效、UI 与多媒体内容。",
          "以易懂且吸引人的方式呈现文物信息，激发好奇与自主探索。",
        ],
      } satisfies LocalizedStringList,
      imageIndex: 4,
    },
  ],
  process: {
    research: {
      en: "Studied Grant and Petrie collection themes, visitor flow for pop-up formats, and technical constraints (sensors, print scale, Unity deployment on site). Mapped the full pipeline in a team flowchart before production.",
      zh: "研究 Grant and Petrie 馆藏主题、快闪展观众动线，以及传感器、打印尺度与现场 Unity 部署等技术约束；制作前用团队流程图梳理全管线。",
    } satisfies LocalizedCopy,
    tasks: {
      en: "Interactive Digital System Development including:\n\n· 3D Modelling & Environment Design\n· Animation Design\n· Custom Shader Development\n· UI/UX Design\n· Tool Development",
      zh: "交互数字系统开发，包括：\n\n· 3D 建模与环境设计\n· 动画设计\n· 自定义 Shader 开发\n· UI/UX 设计\n· 工具开发",
    } satisfies LocalizedCopy,
    modelling: {
      title: {
        en: "3D Modelling & Environment Design",
        zh: "3D 建模与环境设计",
      } satisfies LocalizedCopy,
      text: {
        en: "Built a 3D asset pipeline from Maya and Cinema 4D to Unity, supporting custom shader development and animation integration.",
        zh: "建立从 Maya、Cinema 4D 到 Unity 的资产流程，支持自定义 Shader 与动画整合。",
      } satisfies LocalizedCopy,
      stepImages: [
        local("enPro1"),
        local("enPro2"),
        local("enPro3"),
        local("enPro4"),
        local("enPro5"),
      ],
      carouselSlides: [
        {
          title: {
            en: "Seychellophryne Frog",
            zh: "塞舌尔蛙 / Seychellophryne Frog",
          } satisfies LocalizedCopy,
          image: local("dioSeychellophryneFrog"),
        },
        {
          title: { en: "Cowfish", zh: "箱鲀 / Cowfish" } satisfies LocalizedCopy,
          image: local("dioCowfish"),
        },
        {
          title: {
            en: "Carved ebony vessel",
            zh: "乌木雕刻器皿 / Carved ebony vessel",
          } satisfies LocalizedCopy,
          image: local("dioVessel"),
        },
        {
          title: {
            en: "Pottery 'tulip beaker'",
            zh: "郁金香形陶器 / Pottery 'tulip beaker'",
          } satisfies LocalizedCopy,
          image: local("dioPottery"),
        },
        {
          title: {
            en: "Limestone Frog",
            zh: "石灰岩蛙 / Limestone Frog",
          } satisfies LocalizedCopy,
          image: local("dioLimestoneFrog"),
        },
        {
          title: { en: "Pipistrellus", zh: "蝙蝠 / Pipistrellus" } satisfies LocalizedCopy,
          image: local("dioPipi"),
        },
        {
          title: {
            en: "Female Figurine",
            zh: "女性塑像 / Female Figurine",
          } satisfies LocalizedCopy,
          image: local("dioFemaleFigurine"),
        },
        {
          title: {
            en: "Sandstone Lion",
            zh: "砂岩狮 / Sandstone Lion",
          } satisfies LocalizedCopy,
          image: local("dioSandstoneLion"),
        },
        {
          title: { en: "Sea Sponge", zh: "海绵 / Sea Sponge" } satisfies LocalizedCopy,
          image: local("dioSeasponge"),
        },
        {
          title: {
            en: "Amoured Fish",
            zh: "装甲鱼 / Amoured Fish",
          } satisfies LocalizedCopy,
          image: local("dioAmouredfish"),
        },
      ],
    },
    animation: {
      title: {
        en: "Animation Design",
        zh: "动画设计",
      } satisfies LocalizedCopy,
      text: {
        en: "Created artifact reveal and transition animations using Animation Controllers and Animation Clips, developed looping environmental animations, and implemented subtle UI motion graphics to enhance user experience.",
        zh: "用 Animation Controller 与 Animation Clip 制作文物出现与过渡动画，开发循环环境动画与 UI 微动效，提升体验。",
      } satisfies LocalizedCopy,
      categories: [
        {
          title: {
            en: "Artefact Animation",
            zh: "文物动画",
          } satisfies LocalizedCopy,
          layout: "circles" as const,
          videos: [local("aniArtefact1"), local("aniArtefact2")],
        },
        {
          title: {
            en: "Dissolved and Flipping Animation",
            zh: "溶解与翻转动画",
          } satisfies LocalizedCopy,
          layout: "rectangles" as const,
          videos: [local("aniDissolveFlip1"), local("aniDissolveFlip2")],
        },
        {
          title: {
            en: "Diorama Loop Animation",
            zh: "场景循环动画",
          } satisfies LocalizedCopy,
          layout: "grid" as const,
          videos: [
            local("aniLoop1"),
            local("aniLoop2"),
            local("aniLoop3"),
            local("aniLoop4"),
          ],
        },
      ],
    },
    shader: {
      title: {
        en: "Custom Shader Development",
        zh: "自定义 Shader 开发",
      } satisfies LocalizedCopy,
      dissolveDescription: {
        en: "Designed noise-based dissolve shaders in Shader Graph to establish a cohesive visual style across the experience.",
        zh: "在 Shader Graph 中设计基于噪声的溶解着色器，统一全片视觉风格。",
      } satisfies LocalizedCopy,
      toonDescription: {
        en: "The shader can be reused by simply modifying the colour and texture as needed, at the same time maintaining a consistent lighting direction that aligns with the constructed external environment.",
        zh: "该着色器只需按需修改颜色与贴图即可复用，同时保持与搭建的外部环境一致的光照方向。",
      } satisfies LocalizedCopy,
    },
    uiUx: {
      title: {
        en: "UI/UX Design",
        zh: "UI/UX 设计",
      } satisfies LocalizedCopy,
      logicImage: local("logicUi"),
      storyboardImage: local("storyboardUx"),
      video: {
        en: local("uiAni"),
        zh: local("uiAni"),
      },
    },
    tools: {
      title: {
        en: "Tool Development",
        zh: "工具开发",
      } satisfies LocalizedCopy,
      rows: [
        {
          text: {
            en: [
              "Unity Editor tool - Batch Material Replace",
              "Aim: Batch-apply a stylized template material to selected scene models while keeping each object's original color.",
              "How: C# scripts.",
              "Effect: Cuts repetitive manual material swaps and avoids breaking shared .mat assets.",
            ],
            zh: [
              "Unity Editor 工具 — 批量材质替换",
              "目标：对所选场景模型批量套用风格化模板材质，同时保留各物体原有颜色。",
              "方式：C# 脚本。",
              "效果：减少重复手工换材质，避免破坏共享 .mat 资源。",
            ],
          } satisfies LocalizedStringList,
          images: [local("toolShader1"), local("toolShader2")] as const,
        },
        {
          text: {
            en: [
              "Unity Editor tool - Scene Triangle Count",
              "Aim: Check geometric triangle counts on selected scene objects without opening FBX or mesh assets in the Project window.",
              "How: C# scripts.",
              "Effect: Speeds up daily scene review and highlights the heaviest renderers early.",
            ],
            zh: [
              "Unity Editor 工具 — 场景三角面统计",
              "目标：在不打开 Project 中 FBX 或 Mesh 资源的情况下，查看所选场景物体的三角面数量。",
              "方式：C# 脚本。",
              "效果：加快日常场景审查，及早发现最重的 Renderer。",
            ],
          } satisfies LocalizedStringList,
          images: [local("toolTri1"), local("toolTri2")] as const,
        },
      ],
    },
    integrationImages: [
      local("integrationIn1"),
      local("integrationIn2"),
      local("integrationIn3"),
    ] as const,
  },
  result: {
    impact: {
      en: "Presented at UCL Illuminated 2026 in collaboration with the Grant and Petrie Museum, drew follow-up interest from museum curators. The piece offered a multi-sensory alternative to static display and demonstrated how digital animation systems can scale across many artefacts in one physical setup.",
      zh: "于 UCL Illuminated 2026 与 Grant and Petrie 博物馆合作展出，引起策展人后续关注。作品提供多感官替代方案，证明数字动画系统可在同一物理装置中扩展至多件文物。",
    } satisfies LocalizedCopy,
    gallery: [
      local("result1"),
      local("result2"),
      local("result3"),
      local("result4"),
    ] as const,
    resultVideo: {
      en: remote("https://youtu.be/xCatM3rwGKA"),
      zh: remote("//player.bilibili.com/player.html?bvid=BV1H5P9z7EhZ&page=1"),
    },
  },
} as const;

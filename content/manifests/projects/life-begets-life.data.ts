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
    zh: "A whale lives and dies, becoming pure energy. It rebuilds as a mechanical submarine that supports a fantastical city—home to mystical creatures called Aqua. As they absorb the whale's energy and merge with the city, a new whale is born, and the cycle begins again.",
  } satisfies LocalizedCopy,
  ideaTitle: { en: "Idea", zh: "理念" } satisfies LocalizedCopy,
  ideaText: {
    en: "The narrative expresses how all life is interconnected—each form nurtures and gives rise to the next. Through endless cycles of transformation, nature and technology, energy and matter, life and rebirth remain intertwined: a vision of creation as continuous renewal.",
    zh: "The narrative expresses how all life is interconnected—each form nurtures and gives rise to the next. Through endless cycles of transformation, nature and technology, energy and matter, life and rebirth remain intertwined: a vision of creation as continuous renewal.",
  } satisfies LocalizedCopy,
} as const;

export const lifeBegetsLifeDetailCopy = {
  problem: {
    en: ["Placeholder — Story section replaces What & Why on page."],
    zh: ["Placeholder — Story section replaces What & Why on page."],
  },
  insight: {
    en: ["Placeholder."],
    zh: ["Placeholder."],
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
          zh: "Modelling & environment setup",
        },
        text: {
          en: "Modelled the whale, coral environments, and city-scale structures in Cinema 4D—blocking readable scale shifts between organic, mechanical, and habitat phases.",
          zh: "Modelled the whale, coral environments, and city-scale structures in Cinema 4D—blocking readable scale shifts between organic, mechanical, and habitat phases.",
        },
        triptych: {
          left: {
            title: { en: "Character-Aqua", zh: "Character-Aqua" },
            imageKeys: ["character1", "character2", "character3"] as const,
          },
          center: {
            title: { en: "Environment Setup", zh: "Environment Setup" },
            imageKey: "environmentSetup" as const,
          },
          right: {
            title: { en: "Details", zh: "Details" },
            imageKeys: ["detail1", "detail2", "detail3"] as const,
          },
        },
      },
      {
        key: "rigging" as const,
        title: {
          en: "Rigging and binding",
          zh: "Rigging and binding",
        },
        text: {
          en: "Built rigs and skin weights for the whale and Aqua creatures; tuned controllers for stable deformation through transformation beats.",
          zh: "Built rigs and skin weights for the whale and Aqua creatures; tuned controllers for stable deformation through transformation beats.",
        },
        triptych: {
          left: {
            title: { en: "Aqua", zh: "Aqua" },
            imageKeys: ["aqua1", "aqua2", "aqua3"] as const,
          },
          center: {
            title: { en: "Rigging", zh: "Rigging" },
            imageKey: "rigging3" as const,
          },
          right: {
            title: { en: "Whale", zh: "Whale" },
            imageKeys: ["whale1", "whale2", "whale3"] as const,
          },
        },
      },
      {
        key: "animation" as const,
        title: {
          en: "Animation",
          zh: "Animation",
        },
        text: {
          en: "",
          zh: "",
        },
        threePanelRow: {
          introText: {
            en: "Built environment dissolution animation in Cinema 4D using Volume Remesh to retopologise volumetric meshes—reorganising mesh volumes to drive organic dissolve and breakup motion across the habitat geometry.",
            zh: "Built environment dissolution animation in Cinema 4D using Volume Remesh to retopologise volumetric meshes—reorganising mesh volumes to drive organic dissolve and breakup motion across the habitat geometry.",
          },
          imageKeys: ["growing1", "growing2"] as const,
          carouselKeys: ["growing31", "growing32", "growing33"] as const,
          footer: {
            text: {
              en: "Built the interactive flower roads using MoGraph Cloners, Field-based procedural animation, and XPresso-driven User Data for real-time layout control. Two cloner systems (holes + raised elements) tile across a 50 cm grid, while Formula, Capsule, and Helix Fields create spatial wave motion and colour/light variation. Custom sliders control size, count, spacing, and surface area—making the wall fully parametric and interactive during production.",
              zh: "Built the interactive flower roads using MoGraph Cloners, Field-based procedural animation, and XPresso-driven User Data for real-time layout control. Two cloner systems (holes + raised elements) tile across a 50 cm grid, while Formula, Capsule, and Helix Fields create spatial wave motion and colour/light variation. Custom sliders control size, count, spacing, and surface area—making the wall fully parametric and interactive during production.",
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
          zh: "Render",
        },
        text: {
          en: "Rendered with Redshift—tuning light rigs and render settings to achieve a mysterious, dreamlike underwater atmosphere.",
          zh: "Rendered with Redshift—tuning light rigs and render settings to achieve a mysterious, dreamlike underwater atmosphere.",
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
    zh: "Demonstrates 3D storytelling and symbolic structure for animation and film direction—cyclical ecology told through sequential metamorphosis without dialogue.",
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
      zh: "A short 3D animated film tracing a whale's life cycle from birth to dissolution, re-emergence as a core of energy, and transformation into a mechanical submarine that carries an entire underwater city—symbolising that all life is connected through continuous cycles of matter and meaning.",
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

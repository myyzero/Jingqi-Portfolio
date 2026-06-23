import type {
  WorksFilterType,
  WorksInfoOverride,
  WorksPageLabels,
} from "../_schema/siteContent";
import type { Language, WorksCategory } from "../_schema/types";

/** Projects shown on the works index (id → category). */
export const worksCatalog: Record<string, WorksCategory> = {
  "popup-museum": "interaction-design",
  "seeing-unseen": "interaction-design",
  "dragon-mountain": "game-digital-experience",
  "aquas-will": "game-digital-experience",
  "life-begets-life": "animation-film",
  montage: "animation-film",
};

const infoOverrides: Record<string, { en: WorksInfoOverride; zh: WorksInfoOverride }> =
  {
    "popup-museum": {
      en: {
        infoType: "Team Project",
        infoRole: "Animator",
        infoTools: "Maya, Unity, Adobe CS",
      },
      zh: {
        infoType: "团队项目",
        infoRole: "动画师",
        infoTools: "Maya, Unity, Adobe CS",
      },
    },
    "seeing-unseen": {
      en: {
        infoType: "Team Project",
        infoRole: "UX Designer, System Developer",
        infoTools: "Arduino, Raspberry Pi, sensors",
      },
      zh: {
        infoType: "团队项目",
        infoRole: "UX 设计师、系统开发",
        infoTools: "Arduino、Raspberry Pi、传感器",
      },
    },
    "aquas-will": {
      en: {
        infoType: "Team Project",
        infoRole: "Level and Animation Design",
        infoTools: "Unity, Midjourney, Adobe CS",
      },
      zh: {
        infoType: "团队项目",
        infoRole: "关卡与动画设计",
        infoTools: "Unity, Midjourney, Adobe CS",
      },
    },
  };

const pageLabels = {
  en: {
    heading: "Works",
    type: "Type",
    role: "My Role",
    tools: "Tools",
    summary: "Summary",
  },
  zh: {
    heading: "作品",
    type: "类型",
    role: "我的职责",
    tools: "工具",
    summary: "简介",
  },
} satisfies Record<Language, WorksPageLabels>;

const filterTypeLabels: Record<
  WorksFilterType,
  { en: string; zh: string }
> = {
  all: { en: "All", zh: "全部" },
  "interaction-design": { en: "Interaction Design", zh: "交互设计" },
  "game-digital-experience": {
    en: "Game & Digital Experience",
    zh: "游戏与数字体验",
  },
  "animation-film": { en: "Animation & Film", zh: "动画与影像" },
  "future-design": { en: "Future Design", zh: "未来设计" },
};

export function getWorksPageLabels(language: Language): WorksPageLabels {
  return pageLabels[language];
}

export function getWorksTypeLabel(
  type: WorksFilterType,
  language: Language,
): string {
  return filterTypeLabels[type][language];
}

export function getWorksInfoOverride(
  projectId: string,
  language: Language,
): WorksInfoOverride | undefined {
  return infoOverrides[projectId]?.[language];
}

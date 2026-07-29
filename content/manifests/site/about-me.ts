import type { AboutMeContent } from "../_schema/siteContent";
import type { Language, LocalizedCopy } from "../_schema/types";

const aboutMeFields = {
  heading: { en: "About Me", zh: "关于我" } satisfies LocalizedCopy,
  summaryTitle: { en: "Summary", zh: "个人简介" } satisfies LocalizedCopy,
  summaryText: {
    en:
      "I make physical-digital interventions that translate the intangible into something a body can meet, touch, and respond to. " +
      "My work spans game and animation, museum installation, and sensor-driven wearables. " +
      "The work I care about most is the moment when a concept resonates with people.",
    zh: "具备交互装置设计与开发，沉浸式空间体验，游戏设计及三维动画方面相关经验。有 Unreal Engine / Unity 项目协作与引擎侧资源落地经验，擅长与不同职能团队高效协作。",
  } satisfies LocalizedCopy,
  skillsTitle: { en: "Skills", zh: "核心技能" } satisfies LocalizedCopy,
  skillsText: {
    en: "Engines & 3D Creation: Unreal Engine (Blueprint), Unity (C#), Maya & Cinema 4D (modelling and animation), Git, Unity Version Control\n" +
    "Visual Design & Prototyping: Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Audition), Figma, TouchDesigner\n" +
    "Embedded & Sensing: Arduino & Raspberry Pi piplines, Audio and colour capture, Motor and haptic output\n" +
    "AI-assisted tooling: Midjourney (ideation), Figma Make (prototypes), Cursor (production scripts in Python and C# like Maya QC checkes, Unity Editor tools, and document-translation pipelines)",
    zh: "引擎 | 技术： Unreal Engine 5，Unity 6，动画系统，风格化材质，交互功能开发\n设计工具 | 软件： Maya, Cinema 4D, Adobe Creative Suite\n语言 | 编程： C, C#, Matlab\n硬件 | 开发： Arduino, Raspberry Pi",
  } satisfies LocalizedCopy,
};

export function getAboutMeContent(language: Language): AboutMeContent {
  return {
    heading: aboutMeFields.heading[language],
    summaryTitle: aboutMeFields.summaryTitle[language],
    summaryText: aboutMeFields.summaryText[language],
    skillsTitle: aboutMeFields.skillsTitle[language],
    skillsText: aboutMeFields.skillsText[language],
  };
}

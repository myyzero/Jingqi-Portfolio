import type { AboutContent } from "../_schema/siteContent";
import type { Language, LocalizedCopy } from "../_schema/types";

const aboutFields = {
  heading: { en: "About", zh: "关于" } satisfies LocalizedCopy,
  intro: {
    en: "My practice explores the intersection between human perception and environment, creating systems that sense, interpret, and transform invisible phenomena into tangible experiences.",
    zh: "我的创作实践关注「感知」与「环境」之间的关系，尝试通过可感知的交互系统，将那些肉眼不可见的变化转译为可以被触摸、聆听与体验的形式。",
  } satisfies LocalizedCopy,
  paragraph: {
    en: "Working across interactive installations, wearable sensing systems, and spatial interfaces, I design for embodied interaction—where sound, color, and sensation become instruments of communication.",
    zh: "结合交互装置、可穿戴感应系统与空间界面，我关注具身交互（embodied interaction），在其中声音、色彩与感官被视为沟通的媒介，而不是背景元素。",
  } satisfies LocalizedCopy,
  focusTitle: { en: "Focus", zh: "关注方向" } satisfies LocalizedCopy,
  focusText: {
    en: "Interaction between perception & environment",
    zh: "感知与环境之间的互动关系",
  } satisfies LocalizedCopy,
  methodTitle: { en: "Method", zh: "方法" } satisfies LocalizedCopy,
  methodText: {
    en: "Sound · Color · Sensing · Embodied interaction",
    zh: "声音 · 色彩 · 感应 · 具身交互",
  } satisfies LocalizedCopy,
  backgroundTitle: { en: "Background", zh: "背景" } satisfies LocalizedCopy,
  backgroundText: {
    en: "Digital Media, Design for Performance & Interaction",
    zh: "数字媒体，表演与交互设计方向",
  } satisfies LocalizedCopy,
};

export function getAboutContent(language: Language): AboutContent {
  return {
    heading: aboutFields.heading[language],
    intro: aboutFields.intro[language],
    paragraph: aboutFields.paragraph[language],
    focusTitle: aboutFields.focusTitle[language],
    focusText: aboutFields.focusText[language],
    methodTitle: aboutFields.methodTitle[language],
    methodText: aboutFields.methodText[language],
    backgroundTitle: aboutFields.backgroundTitle[language],
    backgroundText: aboutFields.backgroundText[language],
  };
}

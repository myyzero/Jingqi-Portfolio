import type { LandingContent } from "../_schema/siteContent";
import type { Language, LocalizedCopy } from "../_schema/types";

const landingFields = {
  name: {
    en: "Jingqi Gu",
    zh: "顾憬琦",
  } satisfies LocalizedCopy,
  subtitle: {
    en: "Interaction Designer | Technical Artist | Creative Technologist",
    zh: "交互设计师｜技术美术｜创意技术实践者",
  } satisfies LocalizedCopy,
  scrollLabel: {
    en: "Scroll to explore",
    zh: "向下滚动继续浏览",
  } satisfies LocalizedCopy,
};

export function getLandingContent(language: Language): LandingContent {
  return {
    name: landingFields.name[language],
    subtitle: landingFields.subtitle[language],
    scrollLabel: landingFields.scrollLabel[language],
  };
}

import type { ContactContent } from "../_schema/siteContent";
import type { Language, LocalizedCopy } from "../_schema/types";

const contactFields = {
  heading: { en: "Contact", zh: "联系" } satisfies LocalizedCopy,
  email: {
    en: "jingqi.gu.24@gmail.com",
    zh: "jingqi_work@126.com",
  } satisfies LocalizedCopy,
  footer: {
    en: "© 2026 Jingqi Gu",
    zh: "© 2026 顾憬琦 Jingqi Gu",
  } satisfies LocalizedCopy,
};

export function getContactContent(language: Language): ContactContent {
  return {
    heading: contactFields.heading[language],
    email: contactFields.email[language],
    footer: contactFields.footer[language],
  };
}

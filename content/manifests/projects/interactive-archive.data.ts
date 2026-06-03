import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";

export const interactiveArchiveManifest: ProjectManifestEntry = {
  id: "interactive-archive",
  meta: {
    name: {
      en: "Interactive Archive System (2023)",
      zh: "交互式博物馆档案系统（2023）",
    },
    keyword: {
      en: "Museum interactive interface",
      zh: "博物馆交互界面",
    },
    summary: {
      en: "An interactive interface developed for Yonglian Museum to review the history and rapid development of Yonglian Village, exploring ways to let people of all age feel more engaged when visiting the museum.",
      zh: "为永联村史馆开发的一套交互式界面，用于回顾永联村的发展历程与高速变化，探索如何让不同年龄段的参观者在博物馆中获得更具参与感的体验。",
    },
    role: {
      en: "Unity Developer, UI/UX Design",
      zh: "Unity 开发、UI/UX 设计",
    },
    type: {
      en: "Commercial Project with 3 members",
      zh: "商业项目",
    },
    tools: { en: "Unity, Photoshop", zh: "Unity, Photoshop" },
    details: {
      en: "Designed for Yonglian Museum in China",
      zh: "为永联村史馆设计与开发",
    },
  },
  previewImage: {
    en: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678740/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
    ),
    zh: remote(
      "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
    ),
  },
  images: {
    en: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678740/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678742/%E5%9B%BE%E5%B1%82_4_kckre9.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772680034/%E5%9B%BE%E5%B1%827_7_qmuts0.png",
      ),
    ],
    zh: [
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/%E5%9B%BE%E5%B1%82_4_kckre9.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/%E5%9B%BE%E5%B1%827_7_qmuts0.png",
      ),
    ],
  },
};

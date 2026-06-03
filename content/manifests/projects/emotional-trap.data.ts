import type { ProjectManifestEntry } from "../_schema/projectManifest";
import { remote } from "./_media";

export const emotionalTrapManifest: ProjectManifestEntry = {
  id: "emotional-trap",
  meta: {
    name: { en: "Emotional Trap (2024)", zh: "情绪陷阱（2024）" },
    keyword: { en: "Interactive concept", zh: "交互概念设计" },
    summary: {
      en: "This project explores the visualization and transformation of negative emotions through interactive design. A conceptual Emotion Transformation Machine materializes suppressed emotions as physical objects and imagines a process in which they are transformed into chocolate candies. By turning abstract feelings into tangible interactions, the project invites users to reflect on healthier ways of confronting and releasing negative emotions.",
      zh: "一个围绕“负面情绪的可视化与转化”展开的交互设计项目。项目设想了一台“情绪转化机”，将被压抑的情绪物化为实体，并想象它们被转化为巧克力糖果的过程。通过把抽象的感受变成可触碰、可互动的对象，引发人们深思：我们应当如何面对并释放负面情绪？",
    },
    role: { en: "Interaction Design", zh: "交互设计" },
    type: { en: "Personal Project", zh: "个人项目" },
    tools: { en: "Maya, Arduino, Adobe CS", zh: "Maya, Arduino, Adobe CS" },
    moreDetails: {
      en: "https://drive.google.com/file/d/1eX-FVvsLwnCg2pvazQKOXN0rPw2Ujx7n/view?usp=sharing",
      zh: "",
    },
  },
  previewImage: {
    en: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772679709/%E5%9B%BE%E5%B1%825_5_o11rc1.png",
    ),
    zh: remote(
      "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E5%B1%825_5_o11rc1.png",
    ),
  },
  images: {
    en: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637441/1_%E7%94%BB%E6%9D%BF_1_odgoxw.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637439/1-02_gfnh4n.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637440/1-03_x0u67p.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637439/1-04_co2mx3.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637440/1-05_rnee0q.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637441/1-06_vikegt.png",
      ),
    ],
    zh: [
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1_%E7%94%BB%E6%9D%BF_1_odgoxw.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1-02_gfnh4n.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1-03_x0u67p.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1-04_co2mx3.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1-05_rnee0q.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/1-06_vikegt.png",
      ),
    ],
  },
  heroVideo: {
    en: remote("https://youtu.be/snkAiXPK9qY"),
    zh: remote("//player.bilibili.com/player.html?bvid=BV1b7PXzxEzs&page=1"),
  },
};

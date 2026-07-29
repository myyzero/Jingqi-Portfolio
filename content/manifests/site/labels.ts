import type { SiteLabelsManifest } from "../_schema/types";

/**
 * Site-wide UI copy (single source of truth).
 * Edit here for nav + work detail section titles and placeholders.
 */
export const siteLabelsManifest: SiteLabelsManifest = {
  en: {
    nav: [
      { id: "works", label: "Works" },
      { id: "about-me", label: "About Me" },
      { id: "contact", label: "Contact" },
    ],
    workDetail: {
      backToWorks: "← Back to Works",
      home: "Home",
      notFound: "Project not found",
      notFoundDesc: "This project link doesn't match any published project yet.",
      backHome: "Back to home",
      moreDetails: "More Details",
      pdfCta: "View the complete portfolio PDF",
      whatWhy: "What & Why",
      problem: "Problem",
      insight: "Insight",
      approach: "Approach",
      process: "Process",
      resultImpact: "Result & Impact",
      impactPlaceholder:
        "Impact placeholder: exhibition context, audience engagement, awards, outcomes, or key learnings. This paragraph will be customised per project later.",
      processSteps: {
        research: "Research",
        tasks: "What needs to be done",
        how: "How to do it",
        output: "INTEGRATION",
      },
      processTexts: {
        research:
          "Context, references, user needs, and constraints that informed the direction.",
        tasks:
          "Key tasks and deliverables: design, prototyping, production, implementation.",
        how: "Workflow and tools used to build and iterate the system efficiently.",
        output:
          "A concise statement of what was produced and what experience it enables.",
      },
      whatWhyTexts: {
        problem:
          "Define the problem this project addresses and why it matters for the audience.",
        insight:
          "Summarise the key insight that shaped your concept and design decisions.",
        approach:
          "Outline the core approach in concrete actions, highlight the system or workflow that made it work, and connect the approach to the final experience or outcome.",
      },
    },
  },
  zh: {
    nav: [
      { id: "works", label: "作品" },
      { id: "about-me", label: "关于我" },
      { id: "contact", label: "联系" },
    ],
    workDetail: {
      backToWorks: "← 返回作品",
      home: "首页",
      notFound: "未找到项目",
      notFoundDesc: "该链接尚未对应已发布的项目。",
      backHome: "返回首页",
      moreDetails: "更多详情",
      pdfCta: "查看完整作品集 PDF",
      whatWhy: "项目背景",
      problem: "问题",
      insight: "洞察",
      approach: "方法",
      process: "制作流程",
      resultImpact: "成果与影响",
      impactPlaceholder:
        "影响说明占位：展览信息、观众反馈、奖项或关键成果。后续将按项目单独填写。",
      processSteps: {
        research: "调研",
        tasks: "需要完成的工作",
        how: "实现方式",
        output: "整合",
      },
      processTexts: {
        research: "项目背景、参考资料、用户需求与限制条件。",
        tasks: "关键任务与交付物：设计、原型、制作与实现。",
        how: "使用的工具与工作流，以及迭代过程。",
        output: "最终产出及其所呈现的体验或价值。",
      },
      whatWhyTexts: {
        problem: "说明本项目试图解决的核心问题，以及它对观众/用户的意义。",
        insight: "概括影响概念与设计决策的关键洞察。",
        approach:
          "用具体行动概括核心方法，突出支撑项目运行的系统或工作流，并将方法与最终体验或成果联系起来。",
      },
    },
  },
};

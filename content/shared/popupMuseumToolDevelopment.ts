import shader1 from "../../materials/Tools/shader_1_PM.png";
import shader2 from "../../materials/Tools/shader_2_PM.png";
import tri1 from "../../materials/Tools/tri_1_PM.png";
import tri2 from "../../materials/Tools/tri_2_PM.png";

export type ToolDevelopmentRow = {
  text: string[];
  images: readonly [string, string];
};

const MATERIAL_TOOL_EN: string[] = [
  "Unity Editor tool - Batch Material Replace",
  "Aim: Batch-apply a stylized template material to selected scene models while keeping each object's original color.",
  "How: C# scripts.",
  "Effect: Cuts repetitive manual material swaps and avoids breaking shared .mat assets.",
];

const TRIANGLE_TOOL_EN: string[] = [
  "Unity Editor tool - Scene Triangle Count",
  "Aim: Check geometric triangle counts on selected scene objects without opening FBX or mesh assets in the Project window.",
  "How: C# scripts.",
  "Effect: Speeds up daily scene review and highlights the heaviest renderers early.",
];

const MATERIAL_TOOL_ZH: string[] = [
  "Unity Editor 工具 — 批量材质替换",
  "目标：对所选场景模型批量套用风格化模板材质，同时保留各物体原有颜色。",
  "方式：C# 脚本。",
  "效果：减少重复手工换材质，避免破坏共享 .mat 资源。",
];

const TRIANGLE_TOOL_ZH: string[] = [
  "Unity Editor 工具 — 场景三角面统计",
  "目标：在不打开 Project 中 FBX 或 Mesh 资源的情况下，查看所选场景物体的三角面数量。",
  "方式：C# 脚本。",
  "效果：加快日常场景审查，及早发现最重的 Renderer。",
];

export function getPopupMuseumToolDevelopment(
  language: "en" | "zh",
): ToolDevelopmentRow[] {
  if (language === "zh") {
    return [
      { text: MATERIAL_TOOL_ZH, images: [shader1, shader2] },
      { text: TRIANGLE_TOOL_ZH, images: [tri1, tri2] },
    ];
  }

  return [
    { text: MATERIAL_TOOL_EN, images: [shader1, shader2] },
    { text: TRIANGLE_TOOL_EN, images: [tri1, tri2] },
  ];
}

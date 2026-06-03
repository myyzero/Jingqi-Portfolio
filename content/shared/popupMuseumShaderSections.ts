import dissolveImg from "../../materials/shader_dissolve_2_PM.png";
import toonImg from "../../materials/shader_toon_PM.png";
import logicToon from "../../materials/logic_toonShader2_PM.png";
import dissolveOutput from "../../materials/Ani_DissolveShader.mp4";
import toonOutput from "../../materials/Ani_ToonShader.mp4";

/** Edit captions and image imports here; descriptions in DISSOLVE_SHADER_DESCRIPTION_* */
export const DISSOLVE_SHADER_DESCRIPTION_EN =
  "Designed noise-based dissolve shaders in Shader Graph to establish a cohesive visual style across the experience.";

export const DISSOLVE_SHADER_DESCRIPTION_ZH =
  "在 Shader Graph 中设计基于噪声的溶解着色器，统一全片视觉风格。";

export const TOON_SHADER_DESCRIPTION_EN =
  "The shader can be reused by simply modifying the colour and texture as needed, at the same time maintaining a consistent lighting direction that aligns with the constructed external environment.";

export const TOON_SHADER_DESCRIPTION_ZH =
  "该着色器只需按需修改颜色与贴图即可复用，同时保持与搭建的外部环境一致的光照方向。";

export type ShaderMediaItem = {
  caption: string;
  image: string;
  aspect: "1920/1080" | "960/1080";
  kind?: "image" | "video";
};

export type ShaderSection = {
  title: string;
  layout: "dissolve" | "toon";
  description?: string;
  media: ShaderMediaItem[];
};

export function getPopupMuseumShaderSections(language: "en" | "zh"): ShaderSection[] {
  const dissolveDescription =
    language === "zh"
      ? DISSOLVE_SHADER_DESCRIPTION_ZH
      : DISSOLVE_SHADER_DESCRIPTION_EN;
  const toonDescription =
    language === "zh"
      ? TOON_SHADER_DESCRIPTION_ZH
      : TOON_SHADER_DESCRIPTION_EN;

  return [
    {
      title: language === "zh" ? "溶解 Shader" : "Dissolve Shader",
      layout: "dissolve",
      description: dissolveDescription,
      media: [
        {
          caption: "Shader graph",
          image: dissolveImg,
          aspect: "1920/1080",
        },
        {
          caption: "Output",
          image: dissolveOutput,
          aspect: "1920/1080",
          kind: "video",
        },
      ],
    },
    {
      title: language === "zh" ? "三渲二 Shader" : "Toon Shader",
      layout: "toon",
      description: toonDescription,
      media: [
        {
          caption: "Logic diagram",
          image: logicToon,
          aspect: "960/1080",
        },
        {
          caption: "Shader graph",
          image: toonImg,
          aspect: "1920/1080",
        },
        {
          caption: "Output",
          image: toonOutput,
          aspect: "1920/1080",
          kind: "video",
        },
      ],
    },
  ];
}

import { buildMaterialRegistry } from "../_schema/localMaterialAssets";

/** Logical key → path under repo `materials/` (file may be absent → placeholder + warn). */
const lifeBegetsLifeMaterialPaths = {
  cover: "life-begets-life/cover.png",
  environment: "life-begets-life/process/environment.png",
  environmentDesign: "life-begets-life/process/environment design.png",
  environmentSetup: "life-begets-life/process/environment setup.png",
  coral1: "life-begets-life/process/coral_1.png",
  whale1: "life-begets-life/process/whale_1.png",
  whale2: "life-begets-life/process/whale_2.png",
  whale3: "life-begets-life/process/whale_3.png",
  growing1: "life-begets-life/process/growing_1.png",
  rigging1: "life-begets-life/process/rigging_1.png",
  rigging2: "life-begets-life/process/rigging_2.png",
  rigging3: "life-begets-life/process/rigging_3.png",
  controller: "life-begets-life/process/controller.png",
  growing2: "life-begets-life/process/growing_2.png",
  growing31: "life-begets-life/process/growing_3_1.png",
  growing32: "life-begets-life/process/growing_3_2.png",
  growing33: "life-begets-life/process/growing_3_3.png",
  aqua1: "life-begets-life/process/aqua_1.png",
  aqua2: "life-begets-life/process/aqua_2.png",
  aqua3: "life-begets-life/process/aqua_3.png",
  aqua4: "life-begets-life/process/aqua_4.png",
  aqua5: "life-begets-life/process/aqua_5.png",
  aqua6: "life-begets-life/process/aqua_6.png",
  xpressoTag: "life-begets-life/process/XPressoTag_2.jpg",
  xpressoTag1: "life-begets-life/process/XPressoTag_1.mp4",
  xpressoTag2: "life-begets-life/process/XPressoTag_2.jpg",
  isometricRender: "life-begets-life/25_Jingqi Gu_Isometric image.jpg",
  storyboard1: "life-begets-life/storyboard/1.png",
  storyboard2: "life-begets-life/storyboard/2.png",
  wallProVideo: "life-begets-life/process/WallPro_2.mp4",
  researchProcess: "life-begets-life/process/3.png",
  character1: "life-begets-life/process/character_1.png",
  character2: "life-begets-life/process/character_2.png",
  character3: "life-begets-life/process/character_3.png",
  detail1: "life-begets-life/process/detail_1.png",
  detail2: "life-begets-life/process/detail_2.png",
  detail3: "life-begets-life/process/detail_3.png",
  story: "life-begets-life/Story/story.png",
  render1: "life-begets-life/process/render_1.png",
  render2: "life-begets-life/process/render_2.jpg",
  render3: "life-begets-life/process/render_3.png",
  render4: "life-begets-life/process/render_4.png",
} as const;

export type LifeBegetsLifeAssetKey = keyof typeof lifeBegetsLifeMaterialPaths;

export const lifeBegetsLifeAssetRegistry = buildMaterialRegistry(
  "life-begets-life",
  lifeBegetsLifeMaterialPaths,
);

export function resolveLifeBegetsLifeAsset(key: LifeBegetsLifeAssetKey): string {
  return lifeBegetsLifeAssetRegistry[key];
}

import { buildMaterialRegistry } from "../_schema/localMaterialAssets";

/** Logical key → path under repo `materials/` (file may be absent → placeholder + warn). */
const dragonMountainMaterialPaths = {
  problem: "dragon-mountain/whatwhy/problem.png",
  insight: "dragon-mountain/whatwhy/insight.png",
  approach: "dragon-mountain/whatwhy/approach.png",
  theory1: "dragon-mountain/process/theory_1_trajectory of dragon vein.png",
  theory2: "dragon-mountain/process/theory_2_feng shui dragon vein system.png",
  paintingAnalysis1: "dragon-mountain/process/painting analysis_1.png",
  paintingAnalysis2: "dragon-mountain/process/painting analysis_2_map design.png",
  experienceMapping: "dragon-mountain/process/experience mapping.png",
  flowchart: "dragon-mountain/process/flowchart.png",
  taskCol1: "dragon-mountain/tasks/10.png",
  taskCol2: "dragon-mountain/tasks/11.png",
  taskCol3: "dragon-mountain/tasks/12.png",
  taskCol4: "dragon-mountain/tasks/14.png",
  model1: "dragon-mountain/process/model_1.png",
  model2: "dragon-mountain/process/model_2.png",
  model3: "dragon-mountain/process/model_3.png",
  modelWhole1: "dragon-mountain/model_whole_1.png",
  modelWhole2: "dragon-mountain/model_whole_2.png",
  modelling3d: "dragon-mountain/tasks/3D Modelling & Environment Design.png",
  dialogueSystem: "dragon-mountain/process/interaction design/dialogue_whole.png",
  dialogueSystemVideo:
    "dragon-mountain/process/interaction design/ani_/ani_dialogue.mp4",
  navigationSystem:
    "dragon-mountain/process/interaction design/navigation_whole.png",
  navigationSystemVideo:
    "dragon-mountain/process/interaction design/ani_/ani_navigation.mp4",
  soaringBird: "dragon-mountain/process/interaction design/bird_whole.png",
  soaringBirdVideo:
    "dragon-mountain/process/interaction design/ani_/ani_bird.mp4",
  navigatingBoat: "dragon-mountain/process/interaction design/boat_whole.png",
  navigatingBoatVideo:
    "dragon-mountain/process/interaction design/ani_/ani_boat.mp4",
  witheredTree: "dragon-mountain/process/interaction design/tree_whole.png",
  witheredTreeVideo:
    "dragon-mountain/process/interaction design/ani_/ani_tree.mp4",
  weatherSystem: "dragon-mountain/process/interaction design/weather_whole.png",
  weatherSystemVideo:
    "dragon-mountain/process/interaction design/ani_/ani_weather.mp4",
  collectionSystem:
    "dragon-mountain/process/interaction design/collection_whole.png",
  collectionSystemVideo:
    "dragon-mountain/process/interaction design/ani_/ani_collection.mp4",
  uiDesign: "dragon-mountain/process/ui_whole.png",
  postcardBookmark: "dragon-mountain/process/postcard_whole.png",
  result1: "dragon-mountain/result/r_1.png",
  result2: "dragon-mountain/result/r_2.png",
  result3: "dragon-mountain/result/r_3.png",
  result4: "dragon-mountain/result/r_4.png",
  result5: "dragon-mountain/result/r_5.png",
  result6: "dragon-mountain/result/r_6.png",
} as const;

export type DragonMountainAssetKey = keyof typeof dragonMountainMaterialPaths;

export const dragonMountainAssetRegistry = buildMaterialRegistry(
  "dragon-mountain",
  dragonMountainMaterialPaths,
);

export function resolveDragonMountainAsset(key: DragonMountainAssetKey): string {
  return dragonMountainAssetRegistry[key];
}

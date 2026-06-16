import { buildMaterialRegistry } from "../_schema/localMaterialAssets";

/** Logical key → path under repo `materials/` (missing file → placeholder + warn). */
const aquasWillMaterialPaths = {
  cover: "aquas-will/cover.png",
  research: "aquas-will/whatwhy/research.png",
  story: "aquas-will/whatwhy/story.jpg",
  mechanism: "aquas-will/process/mechanism.png",
  character: "aquas-will/process/character.png",
  aniIdle: "aquas-will/process/ani_idle.mp4",
  aniSwim: "aquas-will/process/ani_swim.mp4",
  aniSmaller: "aquas-will/process/ani_smaller.mp4",
  aniBossIdle: "aquas-will/process/ani_boss_idle.mp4",
  aniBossAttack: "aquas-will/process/ani_boss_attack.mp4",
  aniBossIdle2: "aquas-will/process/ani_boss_idle_2.mp4",
  shot1: "aquas-will/process/shot_1.png",
  shot2: "aquas-will/process/shot_2.png",
  shot3: "aquas-will/process/shot_3.png",
  dash1: "aquas-will/process/dash_1.png",
  dash2: "aquas-will/process/dash_2.png",
  dash3: "aquas-will/process/dash_3.png",
  compress1: "aquas-will/process/compress_1.png",
  compress2: "aquas-will/process/compress_2.png",
  compress3: "aquas-will/process/compress_3.png",
  map: "aquas-will/process/map.png",
  map2: "aquas-will/process/map_2.png",
  level: "aquas-will/process/level.png",
  output1: "aquas-will/result/ScreenShot_2026-03-04_150142_226_vh9sr4.jpg",
  output2: "aquas-will/result/ScreenShot_2026-03-10_173810_394.png",
  output3: "aquas-will/result/ScreenShot_2026-03-10_173932_953.png",
  output4: "aquas-will/result/ScreenShot_2026-03-10_174004_706.png",
  output5: "aquas-will/result/ScreenShot_2026-03-10_174220_498.png",
  output6: "aquas-will/result/ScreenShot_2026-03-10_174332_601.png",
} as const;

export type AquasWillAssetKey = keyof typeof aquasWillMaterialPaths;

export const aquasWillAssetRegistry = buildMaterialRegistry(
  "aquas-will",
  aquasWillMaterialPaths,
);

export function resolveAquasWillAsset(key: AquasWillAssetKey): string {
  return aquasWillAssetRegistry[key];
}

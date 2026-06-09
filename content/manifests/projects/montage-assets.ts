import { buildMaterialRegistry } from "../_schema/localMaterialAssets";

const montageMaterialPaths = {
  cover: "montage/cover.png",
} as const;

export type MontageAssetKey = keyof typeof montageMaterialPaths;

export const montageAssetRegistry = buildMaterialRegistry(
  "montage",
  montageMaterialPaths,
);

export function resolveMontageAsset(key: MontageAssetKey): string {
  return montageAssetRegistry[key];
}

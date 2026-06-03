import type { MediaRef } from "./types";

/**
 * Resolves a manifest media reference to a URL usable in img/video src.
 * - remote: returns url as-is
 * - local: resolves assetKey via registry, or path string when no registry
 */
export function resolveMedia(
  ref: MediaRef,
  localAssets?: Record<string, string>,
): string {
  if (ref.kind === "remote") {
    return ref.url;
  }
  if (localAssets && "assetKey" in ref && ref.assetKey) {
    return localAssets[ref.assetKey] ?? ref.assetKey;
  }
  if ("path" in ref && ref.path) {
    return ref.path;
  }
  return "";
}

export function resolveMediaOptional(
  ref: MediaRef | undefined,
  fallback: string,
  localAssets?: Record<string, string>,
): string {
  if (!ref) return fallback;
  const resolved = resolveMedia(ref, localAssets);
  if (!resolved || resolved.startsWith("TODO")) return fallback;
  return resolved;
}

export function resolveMediaList(
  refs: readonly MediaRef[],
  localAssets?: Record<string, string>,
): string[] {
  return refs.map((ref) => resolveMedia(ref, localAssets));
}

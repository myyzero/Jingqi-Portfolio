/**
 * Resolves files under `materials/` without static imports.
 * Missing files fall back to a gray placeholder and emit a one-time console warning
 * so Vite never fails the build when an asset was renamed or removed.
 */

const MATERIAL_GLOB = import.meta.glob<string>("../../../materials/**/*.{png,jpg,jpeg,webp,gif,mp4,webm}", {
  eager: true,
  import: "default",
});

/** 16:9 gray SVG — matches UI placeholder tone (#ececec). */
export const MATERIAL_PLACEHOLDER_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540"><rect fill="#ececec" width="100%" height="100%"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="system-ui,sans-serif" font-size="18">Missing asset</text></svg>`,
  );

const materialUrlByPath = new Map<string, string>(
  Object.entries(MATERIAL_GLOB).map(([globKey, url]) => [
    normalizeMaterialGlobKey(globKey),
    url,
  ]),
);

const warnedKeys = new Set<string>();

function normalizeMaterialGlobKey(globKey: string): string {
  return globKey.replace(/\\/g, "/");
}

/** Path relative to repo `materials/` folder, e.g. `life-begets-life/process/foo.png`. */
export function toMaterialGlobKey(relativePath: string): string {
  const cleaned = relativePath.replace(/^\/+/, "").replace(/\\/g, "/");
  const withoutPrefix = cleaned.startsWith("materials/")
    ? cleaned.slice("materials/".length)
    : cleaned;
  return `../../../materials/${withoutPrefix}`;
}

function isVideoPath(relativePath: string): boolean {
  return /\.(mp4|webm)$/i.test(relativePath);
}

export type MaterialResolveContext = {
  /** Logical registry key for clearer warnings. */
  key?: string;
  /** Project id shown in warnings, e.g. `life-begets-life`. */
  project?: string;
};

/**
 * Resolve a file under `materials/`. Returns bundled URL, placeholder (images),
 * or empty string (missing video).
 */
export function resolveMaterialFile(
  relativePath: string,
  context?: MaterialResolveContext,
): string {
  const globKey = toMaterialGlobKey(relativePath);
  const url = materialUrlByPath.get(globKey);
  if (url) return url;

  const warnId = `${context?.project ?? ""}:${context?.key ?? relativePath}`;
  if (!warnedKeys.has(warnId)) {
    warnedKeys.add(warnId);
    const prefix = context?.project ? `[${context.project}] ` : "";
    const label = context?.key
      ? `Asset key "${context.key}" → materials/${relativePath.replace(/^\/+/, "")}`
      : `materials/${relativePath.replace(/^\/+/, "")}`;
    console.warn(
      `${prefix}Missing local material: ${label}. Using placeholder.`,
    );
  }

  return isVideoPath(relativePath) ? "" : MATERIAL_PLACEHOLDER_IMAGE;
}

/** Build a string registry from logical keys → `materials/…` paths. */
export function buildMaterialRegistry<const T extends Record<string, string>>(
  projectId: string,
  paths: T,
): { [K in keyof T]: string } {
  const registry = {} as { [K in keyof T]: string };
  for (const key of Object.keys(paths) as (keyof T)[]) {
    registry[key] = resolveMaterialFile(paths[key], {
      key: String(key),
      project: projectId,
    });
  }
  return registry;
}

/** Dev/build helper — list assets that resolved to placeholders. */
export function getMaterialRegistryPlaceholders<
  T extends Record<string, string>,
>(registry: { [K in keyof T]: string }): (keyof T)[] {
  return (Object.keys(registry) as (keyof T)[]).filter(
    (key) => registry[key] === MATERIAL_PLACEHOLDER_IMAGE || registry[key] === "",
  );
}

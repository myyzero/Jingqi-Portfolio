/** Resolved shapes for WorkDetail “how” blocks (built from manifests at runtime). */

export type AnimationCategory = {
  title: string;
  layout: "circles" | "rectangles" | "grid";
  videos: string[];
};

export type CarouselSlide = {
  title: string;
  image: string;
};

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

export type UiUxMediaPair = {
  logicImage: string;
  storyboardImage: string;
  video: string;
};

export type ToolDevelopmentRow = {
  text: string[];
  images: readonly [string, string];
};

/** Three-column process gallery: side stacks of squares flanking a 16:9 center image. */
export type ProcessTriptychLayout = {
  left: { title: string; images: string[] };
  center: { title: string; image: string };
  right: { title: string; images: string[] };
};

/** Three equal-width panels: two fixed images + looping carousel on the third. */
export type ProcessThreePanelRow = {
  images: [string, string];
  carouselImages: string[];
  /** Caption above the three growing panels, full width aligned with the row. */
  introText?: string;
  footer?: {
    text: string;
    video: string;
    image: string;
  };
};

/** Two squares + right column of two stacked 16:9 landscape images. */
export type ProcessRenderQuadLayout = {
  squares: [string, string];
  rectangles: [string, string];
};

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

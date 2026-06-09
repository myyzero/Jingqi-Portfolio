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

/** Research step row within a group — explicit text + media layout. */
export type ProcessResearchGroupRow = {
  /** Optional sub-label above row text (e.g. SOUND / COLOUR). */
  label?: string;
  text?: string;
  image?: string;
  images?: string[];
  /** Scale factor for `image` display width in split rows (e.g. 0.5). */
  imageScale?: number;
  /** Text-to-image column ratio for split rows. Default: 1:2. */
  splitRatio?: "1:2" | "2:1" | "1:1";
  layout?: "split" | "grid2x2" | "imageOnly";
};

/** Research step row group — optional heading + bullet items (one image per item). */
export type ProcessResearchRowGroup = {
  heading?: string;
  /** Legacy flat bullets — paired sequentially with `section.images`. */
  items?: string[];
  /** Single image shared by all `items` on the right (Survey Overview). */
  sharedImage?: string;
  /** Scale factor for `sharedImage` display width (e.g. 0.5 = half width). */
  sharedImageScale?: number;
  /** Text-to-image column ratio for `items` + `sharedImage` layout. Default: 1:2. */
  splitRatio?: "1:2" | "2:1" | "1:1";
  /** Single paragraph paired with two side-by-side images (1:1:1). */
  prose?: string;
  /** Resolved images for `textTwinImages` layout. */
  images?: string[];
  /** Explicit rows with resolved media. */
  rows?: ProcessResearchGroupRow[];
  /** `cards`: horizontal circular-image cards (image above, text below). */
  groupLayout?: "default" | "cards" | "labelOnly" | "textTwinImages" | "summary";
};

/** Research step sub-block: title + copy on the left, image(s) on the right (1:2). */
export type ProcessResearchSubsection = {
  title: string;
  /** Second title line shown below the main heading (e.g. UX Design → Wireframe Deck). */
  titleSubtitle?: string;
  /** Introductory paragraph shown below the section title (groupedRows). */
  intro?: string;
  text: string | string[];
  images: string[];
  /** Grouped bullets with optional sub-headings; one image per item in order. */
  rowGroups?: ProcessResearchRowGroup[];
  /** Stack images vertically on the right (e.g. theory study). */
  imageLayout?: "single" | "stack" | "rows" | "vertical" | "groupedRows";
};

export type ProcessResearchSplitLayout = {
  subsections: ProcessResearchSubsection[];
};

export type ProcessTasksOutlineItem = {
  title: string;
  subItems?: string[];
  image?: string;
};
export type ProcessTaskRow = {
  title: string;
  text?: string | string[];
  image: string;
  video?: string;
};

/** Tasks step group — top-level section or Interaction Design with nested rows. */
export type ProcessTaskGroup = {
  title: string;
  text?: string | string[];
  image?: string;
  images?: string[];
  /** Full-width images stacked between copy and `images` (verticalTriple). */
  stackImages?: string[];
  /** `verticalTriple`: text above, three images in a row below. Default: left text / right image. */
  layout?: "split" | "verticalTriple";
  /** Row layout when `rows` is set. Default: left text / right image (1:2). */
  rowLayout?: "split" | "stack";
  rows?: ProcessTaskRow[];
};

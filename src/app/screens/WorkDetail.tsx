import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowRight } from "lucide-react";
import {
  getWorkDetailLabels,
  type AnimationCategory,
  type CarouselSlide,
  type Language,
  type Project,
  type ShaderSection,
  type UiUxMediaPair,
  type ToolDevelopmentRow,
} from "../../../content";
import { getAllWorksContent } from "../../../content";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { withAutoScrollBehavior } from "../utils/scrollBehavior";
import type {
  ProcessTriptychLayout,
  ProcessThreePanelRow,
  ProcessRenderQuadLayout,
  ProcessResearchSubsection,
  ProcessTaskGroup,
  ProcessTasksOutlineItem,
  ProcessVideoTriptychLayout,
} from "../../../content/manifests/_schema/workDetailBlocks";
import pageBackground from "../../../materials/background_1.png";
import { BilibiliEmbedIframe } from "../utils/bilibiliEmbed";

/** White wash over background_1 — lower than Landing (75%) so texture shows through more */
const WORK_PAGE_BG_OVERLAY = "rgba(255, 255, 255, 0.6)";

/** Card / media panel surface on project detail pages */
const CARD_SURFACE_CLASS = "bg-[#f2f7fa]/90";

function normalizeLanguage(raw: string | undefined): Language {
  return raw === "zh" ? "zh" : "en";
}

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) return youtuBeMatch[1];
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  return null;
}

function getYouTubeBackgroundLoopUrl(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  const params = new URLSearchParams({
    controls: "1",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function findProjectById(projectId: string, language: Language): Project | null {
  return getAllWorksContent(language).find((p) => p.id === projectId) ?? null;
}

function normalizeEmbedUrl(url: string): string {
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function getVideoKind(
  url: string | undefined,
): "youtube" | "bilibili" | "mp4" | "other" | "none" {
  if (!url) return "none";
  if (url.startsWith("TODO")) return "none";
  if (getYouTubeId(url)) return "youtube";
  if (url.includes("player.bilibili.com")) return "bilibili";
  if (url.toLowerCase().includes(".mp4")) return "mp4";
  return "other";
}

export function WorkDetail() {
  const { lang, projectId } = useParams();
  const language = useMemo(() => normalizeLanguage(lang), [lang]);
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const project = useMemo(() => {
    if (!projectId) return null;
    return findProjectById(projectId, language);
  }, [projectId, language]);

  useEffect(() => {
    document.title = project ? `${project.name} — Jingqi Portfolio` : "Jingqi Portfolio";
  }, [project]);

  useLayoutEffect(() => {
    // Ensure detail pages always start at the very top (hero video),
    // without showing any intermediate scroll position.
    withAutoScrollBehavior(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [language, projectId]);

  const onBackToWorks = () => {
    setIsLeaving(true);
  };

  const labels = getWorkDetailLabels(language);
  const isFullscreenVideo = project?.layout === "fullscreen-video";

  return (
    <motion.div
      key={`${language}-${projectId ?? "unknown"}`}
      className={`min-h-screen ${
        isFullscreenVideo ? "bg-black" : "bg-cover bg-center bg-fixed bg-no-repeat"
      }`}
      style={
        isFullscreenVideo
          ? undefined
          : {
              backgroundImage: `linear-gradient(${WORK_PAGE_BG_OVERLAY}, ${WORK_PAGE_BG_OVERLAY}), url(${pageBackground})`,
            }
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{ duration: 0.25 }}
      onAnimationComplete={() => {
        if (!isLeaving) return;
        navigate(`/${language}#works`, {
          replace: false,
          state: { intent: "scroll", scrollTo: "works", behavior: "auto" },
        });
      }}
    >
        {/* Top bar */}
        <div className="sticky top-0 z-50 bg-white/50 backdrop-blur border-b border-[#e5e5e5]/60">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={onBackToWorks}
              className="text-xs tracking-widest uppercase text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
            >
              {labels.backToWorks}
            </button>

            <div className="flex items-center gap-3">
              <Link
                to={`/${language}`}
                className="text-xs tracking-widest uppercase text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
              >
                {labels.home}
              </Link>
              <span className="text-[#e5e5e5]">/</span>
              <button
                onClick={() => navigate(`/${language === "en" ? "zh" : "en"}/works/${projectId}`, { replace: true })}
                className="text-xs tracking-widest uppercase text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
              >
                {language === "en" ? "ZH" : "EN"}
              </button>
            </div>
          </div>
        </div>

        {!project ? (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-3xl text-[#1a1a1a] mb-4">{labels.notFound}</h1>
            <p className="text-[#6b6b6b] mb-10">{labels.notFoundDesc}</p>
            <Link
              to={`/${language}`}
              className="inline-block text-sm text-[#397fdf] hover:underline"
            >
              {labels.backHome}
            </Link>
          </div>
        ) : project.layout === "fullscreen-video" ? (
          <FullscreenVideoDetail project={project} />
        ) : (
          <WorkDetailTemplate project={project} language={language} />
        )}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 text-[#CBD9E6] tracking-widest uppercase text-sm">
      {children}
    </div>
  );
}

type WhatWhyItem = {
  title: string;
  text: string | string[];
  image: string;
};

function WhatWhyText({ text }: { text: string | string[] }) {
  if (Array.isArray(text)) {
    return (
      <ul className="w-full text-left text-sm lg:text-base text-[#6b6b6b] leading-relaxed space-y-2.5 list-disc pl-5 marker:text-[#CBD9E6]">
        {text.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="w-full text-left text-sm lg:text-base text-[#6b6b6b] leading-relaxed whitespace-pre-line">
      {text}
    </p>
  );
}

type ProcessStepData = {
  stage: string;
  text: string;
  image: string;
  /** When true, image keeps intrinsic aspect ratio (no 16:9 crop). */
  preserveImageAspect?: boolean;
  /** Pop-up Museum: rounded-2xl on the right-column step image. */
  roundedSideMedia?: boolean;
  stepImages?: string[];
  processTriptych?: ProcessTriptychLayout;
  processThreePanelRow?: ProcessThreePanelRow;
  processRenderQuad?: ProcessRenderQuadLayout;
  researchSections?: ProcessResearchSubsection[];
  taskSections?: ProcessTaskGroup[];
  flowchartImage?: string;
  flowchartImageScale?: number;
  tasksOutline?: ProcessTasksOutlineItem[];
  integrationImages?: readonly string[];
  integrationVideos?: readonly string[];
  howVideoRow?: readonly string[];
  howItems?: {
    title: string;
    text: string | string[];
    image: string;
    stepImages?: string[];
    stepImageShape?: "circle" | "roundedSquare";
    animationCategories?: AnimationCategory[];
    carouselSlides?: CarouselSlide[];
    shaderSections?: ShaderSection[];
    uiUxMedia?: UiUxMediaPair;
    toolDevelopment?: ToolDevelopmentRow[];
  }[];
};

/** Layout units 22 + 72 + 22 = 116 — total width unchanged, scheme A */
const CAROUSEL_THUMB_UNIT = 22;
const CAROUSEL_CENTER_UNIT = 72;
const CAROUSEL_LAYOUT_TOTAL =
  CAROUSEL_THUMB_UNIT * 2 + CAROUSEL_CENTER_UNIT;
const CAROUSEL_CENTER_SHARE = CAROUSEL_CENTER_UNIT / CAROUSEL_LAYOUT_TOTAL;
const CAROUSEL_THUMB_SHARE = CAROUSEL_THUMB_UNIT / CAROUSEL_LAYOUT_TOTAL;
const CAROUSEL_SLIDE_GAP = 12;
const CAROUSEL_ASPECT = 9 / 16;

function ProcessImageCarousel({ slides }: { slides: CarouselSlide[] }) {
  const count = slides.length;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setContainerWidth(w);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(((index % count) + count) % count);
  };

  const thumbWidth =
    containerWidth > 0 ? containerWidth * CAROUSEL_THUMB_SHARE : 0;
  const centerWidth =
    containerWidth > 0 ? containerWidth * CAROUSEL_CENTER_SHARE : 0;

  const viewportHeight =
    containerWidth > 0 ? Math.round(centerWidth * CAROUSEL_ASPECT) : 0;

  const getSlideWidth = (index: number) =>
    index === activeIndex ? centerWidth : thumbWidth;

  const trackOffset = useMemo(() => {
    if (containerWidth <= 0) return 0;
    let leading = 0;
    for (let i = 0; i < activeIndex; i++) {
      leading += getSlideWidth(i) + CAROUSEL_SLIDE_GAP;
    }
    leading += getSlideWidth(activeIndex) / 2;
    return containerWidth / 2 - leading;
  }, [activeIndex, containerWidth, centerWidth, thumbWidth]);

  const slideFrameClass = `h-full w-full overflow-hidden border border-[#e5e5e5]/60 ${CARD_SURFACE_CLASS}`;
  const springTransition = {
    type: "spring" as const,
    stiffness: 320,
    damping: 32,
  };

  return (
    <div className="w-full" ref={viewportRef}>
      <div className="hidden md:block">
        <div className="relative h-6 mb-3">
          <AnimatePresence mode="wait">
            <motion.h5
              key={slides[activeIndex].title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-x-0 text-center text-xs tracking-widest uppercase font-bold text-[#2F4156]"
            >
              {slides[activeIndex].title}
            </motion.h5>
          </AnimatePresence>
        </div>

        <div
          className="overflow-hidden w-full"
          style={viewportHeight > 0 ? { height: viewportHeight } : undefined}
        >
          <motion.div
            className="flex items-center h-full"
            style={{ gap: CAROUSEL_SLIDE_GAP }}
            animate={{ x: trackOffset }}
            transition={springTransition}
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  animate={{
                    width: getSlideWidth(index),
                    opacity: isActive ? 1 : 0.8,
                  }}
                  transition={springTransition}
                  whileHover={{
                    scale: isActive ? 1.02 : 1.06,
                    opacity: 1,
                  }}
                  className="shrink-0 h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBD9E6] rounded-sm overflow-hidden"
                  aria-label={
                    isActive
                      ? `Current: ${slide.title}`
                      : `Show ${slide.title}`
                  }
                  aria-current={isActive ? "true" : undefined}
                >
                  <div className={slideFrameClass}>
                    <ImageWithFallback
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative h-6 mb-3">
          <AnimatePresence mode="wait">
            <motion.h5
              key={slides[activeIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 text-center text-xs tracking-widest uppercase font-bold text-[#2F4156]"
            >
              {slides[activeIndex].title}
            </motion.h5>
          </AnimatePresence>
        </div>

        <div
          className="overflow-hidden w-full"
          style={viewportHeight > 0 ? { height: viewportHeight } : undefined}
        >
          <motion.div
            className="flex items-center h-full"
            style={{ gap: CAROUSEL_SLIDE_GAP }}
            animate={{ x: trackOffset }}
            transition={springTransition}
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={`${slide.title}-${index}-m`}
                  type="button"
                  onClick={() => goTo(index)}
                  animate={{
                    width: getSlideWidth(index),
                    opacity: isActive ? 1 : 0.8,
                  }}
                  transition={springTransition}
                  whileHover={{
                    scale: isActive ? 1.02 : 1.05,
                    opacity: 1,
                  }}
                  className="shrink-0 h-full cursor-pointer overflow-hidden"
                  aria-label={slide.title}
                >
                  <div className={slideFrameClass}>
                    <ImageWithFallback
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <p className="mt-3 text-center text-xs text-[#6b6b6b] tabular-nums">
          {activeIndex + 1} / {count}
        </p>
      </div>
    </div>
  );
}

function LoopVideo({
  src,
  className = "",
  label,
  style,
}: {
  src?: string;
  className?: string;
  label: string;
  style?: React.CSSProperties;
}) {
  const hasVideo = src && !src.startsWith("TODO");

  if (!hasVideo) {
    return (
      <div
        className={`bg-[#f2f7fa]/90 overflow-hidden ${className}`}
        style={style}
        aria-label={label}
      />
    );
  }

  const kind = getVideoKind(src);

  if (kind === "youtube") {
    const embed =
      getYouTubeBackgroundLoopUrl(src) ?? getYouTubeEmbedUrl(src);
    if (!embed) {
      return (
        <div
          className={`bg-[#f2f7fa]/90 overflow-hidden ${className}`}
          style={style}
          aria-label={label}
        />
      );
    }
    return (
      <iframe
        src={embed}
        title={label}
        className={`w-full h-full border-0 bg-[#f2f7fa]/90 ${className}`}
        style={style}
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  if (kind === "bilibili") {
    return (
      <iframe
        src={normalizeEmbedUrl(src)}
        title={label}
        className={`w-full h-full border-0 bg-[#f2f7fa]/90 ${className}`}
        style={style}
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className={`w-full h-full object-cover bg-[#f2f7fa]/90 ${className}`}
      style={style}
      aria-label={label}
    />
  );
}

const ANIMATION_ROW_GAP = 16;
const ANIMATION_RECT_ASPECT = 1920 / 1080;

function AnimationDesignShowcase({
  title,
  text,
  categories,
}: {
  title: string;
  text: string | string[];
  categories: AnimationCategory[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const circles = categories.find((c) => c.layout === "circles");
  const rectangles = categories.find((c) => c.layout === "rectangles");
  const gridCategory = categories.find((c) => c.layout === "grid");

  const rows = [
    {
      circle: circles?.videos[0],
      rect: rectangles?.videos[0],
      squares: [gridCategory?.videos[0], gridCategory?.videos[1]],
    },
    {
      circle: circles?.videos[1],
      rect: rectangles?.videos[1],
      squares: [gridCategory?.videos[2], gridCategory?.videos[3]],
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setContainerWidth(width);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rowHeight =
    containerWidth > 0
      ? (containerWidth - 3 * ANIMATION_ROW_GAP) /
        (3 + ANIMATION_RECT_ASPECT)
      : 0;
  const rectWidth = rowHeight * ANIMATION_RECT_ASPECT;
  const gridTemplateColumns =
    rowHeight > 0
      ? `${rowHeight}px ${rectWidth}px ${rowHeight}px ${rowHeight}px`
      : undefined;

  return (
    <div className="w-full space-y-6">
      <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156]">
        {title}
      </h4>

      {typeof text === "string" ? (
        <p className="text-[#6b6b6b] leading-relaxed text-sm lg:text-base">
          {text}
        </p>
      ) : (
        <WhatWhyText text={text} />
      )}

      <div ref={containerRef} className="w-full overflow-x-auto">
        <div
          className="min-w-0"
          style={
            rowHeight > 0
              ? {
                  width: containerWidth,
                  minWidth: rowHeight * 3 + rectWidth + 3 * ANIMATION_ROW_GAP,
                }
              : undefined
          }
        >
          {(circles || rectangles || gridCategory) && (
            <div
              className="grid mb-4"
              style={{
                gridTemplateColumns,
                gap: ANIMATION_ROW_GAP,
              }}
            >
              {circles && (
                <h5 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] text-center">
                  {circles.title}
                </h5>
              )}
              {rectangles && (
                <h5 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] text-center">
                  {rectangles.title}
                </h5>
              )}
              {gridCategory && (
                <h5 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] col-span-2 text-center">
                  {gridCategory.title}
                </h5>
              )}
            </div>
          )}

          <div className="flex flex-col" style={{ gap: ANIMATION_ROW_GAP }}>
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid"
                style={{
                  gridTemplateColumns,
                  gap: ANIMATION_ROW_GAP,
                  height: rowHeight > 0 ? rowHeight : undefined,
                }}
              >
                <LoopVideo
                  src={row.circle}
                  label={`${circles?.title ?? "Circle"} ${rowIndex + 1}`}
                  className="rounded-full overflow-hidden shrink-0"
                  style={
                    rowHeight > 0
                      ? { width: rowHeight, height: rowHeight }
                      : undefined
                  }
                />
                <LoopVideo
                  src={row.rect}
                  label={`${rectangles?.title ?? "Rectangle"} ${rowIndex + 1}`}
                  className="rounded-2xl overflow-hidden shrink-0"
                  style={
                    rowHeight > 0
                      ? { width: rectWidth, height: rowHeight }
                      : undefined
                  }
                />
                {row.squares.map((src, sqIndex) => (
                  <LoopVideo
                    key={sqIndex}
                    src={src}
                    label={`${gridCategory?.title ?? "Square"} ${rowIndex * 2 + sqIndex + 1}`}
                    className="rounded-2xl overflow-hidden shrink-0"
                    style={
                      rowHeight > 0
                        ? { width: rowHeight, height: rowHeight }
                        : undefined
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepImagesRow({
  images,
  shape = "circle",
}: {
  images: string[];
  shape?: "circle" | "roundedSquare";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ width: 0, circleSize: 72 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const gap = 12;

    const update = () => {
      const width = el.clientWidth;
      if (width <= 0) return;
      const circleSize = Math.max(
        48,
        Math.floor((width - (images.length - 1) * gap) / images.length),
      );
      setLayout({ width, circleSize });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [images.length]);

  const { width, circleSize } = layout;
  const count = images.length;
  const horizontalStep = count > 1 ? (width - circleSize) / (count - 1) : 0;

  const shapeClass =
    shape === "roundedSquare" ? "rounded-xl" : "rounded-full";

  return (
    <div ref={containerRef} className="mt-6 w-full">
      <div
        className="relative w-full"
        style={{ height: width > 0 ? circleSize : circleSize + 40 }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute overflow-hidden border-[3px] border-white shadow-sm bg-[#e5e5e5] z-10 ${shapeClass}`}
            style={{
              width: circleSize,
              height: circleSize,
              left: i * horizontalStep,
              top: 0,
            }}
          >
            <ImageWithFallback
              src={src}
              alt={`Step ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex w-full items-center gap-1 text-[#CBD9E6]">
        <div className="flex-1 h-px bg-current" />
        <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function ResearchRowImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60">
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-auto block object-contain"
      />
    </div>
  );
}

function ResultLeftSplitGallery({ images }: { images: readonly string[] }) {
  const [left, ...rightImages] = images;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">
      <div className="overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 min-h-[280px] lg:min-h-0">
        <ImageWithFallback
          src={left}
          alt="Result image left"
          className="w-full h-full min-h-[280px] lg:min-h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-8 min-h-0">
        {rightImages.map((src, imageIdx) => (
          <div
            key={src}
            className="flex-1 overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 min-h-[180px]"
          >
            <ImageWithFallback
              src={src}
              alt={`Result image right ${imageIdx + 1}`}
              className="w-full h-full min-h-[180px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ResearchRowVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 aspect-video">
      <LoopVideo
        src={src}
        label={label}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function hasCopyText(text: string | string[] | undefined): boolean {
  if (!text) return false;
  if (Array.isArray(text)) return text.length > 0;
  return text.trim().length > 0;
}

function getResearchSplitLayout(ratio: "1:2" | "2:1" | "1:1" = "1:2") {
  switch (ratio) {
    case "2:1":
      return {
        grid: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start",
        text: "lg:col-span-2",
        image: "lg:col-span-1",
      };
    case "1:1":
      return {
        grid: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start",
        text: "lg:col-span-1",
        image: "lg:col-span-1",
      };
    default:
      return {
        grid: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start",
        text: "lg:col-span-1",
        image: "lg:col-span-2",
      };
  }
}

function getScaledImageWidthStyle(
  scale?: number,
): React.CSSProperties | undefined {
  return scale ? { width: `${scale * 100}%` } : undefined;
}

function ProcessResearchSplitGallery({
  sections,
}: {
  sections: ProcessResearchSubsection[];
}) {
  const bulletClass =
    "text-sm lg:text-base text-[#6b6b6b] leading-relaxed list-disc pl-5 marker:text-[#CBD9E6]";

  return (
    <div className="space-y-14">
      {sections.map((section) => {
        const bullets = Array.isArray(section.text)
          ? section.text
          : [section.text];

        if (section.imageLayout === "rows") {
          return (
            <div key={section.title} className="space-y-8 lg:space-y-10">
              <h4 className="text-base md:text-lg font-medium text-[#1a1a1a] tracking-wide">
                {section.title}
              </h4>
              {bullets.map((bullet, rowIdx) => (
                <div
                  key={bullet}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-1">
                    <ul className={bulletClass}>
                      <li>{bullet}</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    {section.images[rowIdx] ? (
                      <ResearchRowImage
                        src={section.images[rowIdx]}
                        alt={`${section.title} ${rowIdx + 1}`}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        if (section.imageLayout === "groupedRows" && section.rowGroups) {
          let imageIdx = 0;
          return (
            <div key={section.title} className="space-y-8 lg:space-y-10">
              <div>
                <h4 className="text-base md:text-lg font-medium text-[#1a1a1a] tracking-wide">
                  {section.title}
                </h4>
                {section.intro ? (
                  <p className="mt-4 text-sm lg:text-base text-[#6b6b6b] leading-relaxed">
                    {section.intro}
                  </p>
                ) : null}
              </div>
              {section.rowGroups.map((group, groupIdx) => (
                <div key={`${section.title}-group-${groupIdx}`} className="space-y-6">
                  {group.heading ? (
                    <h5 className="text-sm md:text-base font-medium text-[#1a1a1a] tracking-wide">
                      {group.heading}
                    </h5>
                  ) : null}

                  {group.groupLayout === "labelOnly" ? null : group.groupLayout === "summary" && group.sharedImage ? (
                    <ResearchRowImage
                      src={group.sharedImage}
                      alt={group.heading ?? section.title}
                    />
                  ) : group.groupLayout === "textTwinImages" &&
                    group.prose &&
                    group.images &&
                    group.images.length >= 2 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                      <p className="text-sm lg:text-base text-[#6b6b6b] leading-relaxed">
                        {group.prose}
                      </p>
                      {group.images.slice(0, 2).map((src, twinIdx) => (
                        <ResearchRowImage
                          key={src}
                          src={src}
                          alt={`${group.heading ?? section.title} ${twinIdx + 1}`}
                        />
                      ))}
                    </div>
                  ) : group.groupLayout === "cards" && group.rows ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                      {group.rows.map((row) => (
                        <div
                          key={row.text}
                          className="flex h-full flex-col items-center rounded-2xl bg-[#f2f7fa]/90 px-4 py-6 text-center lg:px-5 lg:py-8"
                        >
                          {row.image ? (
                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#e5e5e5]/60 bg-[#f2f7fa]/90 lg:h-28 lg:w-28">
                              <ImageWithFallback
                                src={row.image}
                                alt={row.text}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ) : null}
                          <p className="mt-4 text-xs lg:text-sm text-[#6b6b6b] leading-relaxed">
                            {row.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : group.sharedImage && group.items ? (
                    (() => {
                      const split = getResearchSplitLayout(
                        group.splitRatio ?? "1:2",
                      );
                      return (
                    <div className={split.grid}>
                      <div className={split.text}>
                        <ul className="text-sm lg:text-base text-[#6b6b6b] leading-relaxed space-y-2.5 list-disc pl-5 marker:text-[#CBD9E6]">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={
                          group.sharedImageScale
                            ? `${split.image} flex justify-end`
                            : split.image
                        }
                      >
                        <div
                          className={group.sharedImageScale ? undefined : "w-full"}
                          style={getScaledImageWidthStyle(group.sharedImageScale)}
                        >
                          <ResearchRowImage
                            src={group.sharedImage}
                            alt={group.heading ?? section.title}
                          />
                        </div>
                      </div>
                    </div>
                      );
                    })()
                  ) : group.rows ? (
                    group.rows.map((row) =>
                      row.layout === "imageOnly" && row.image ? (
                        <ResearchRowImage
                          key={row.image}
                          src={row.image}
                          alt={group.heading ?? section.title}
                        />
                      ) : (
                        (() => {
                          const split = getResearchSplitLayout(
                            row.splitRatio ?? "1:2",
                          );
                          return (
                        <div
                          key={row.text ?? row.image}
                          className={split.grid}
                        >
                          <div className={split.text}>
                            {row.label ? (
                              <h6 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#2F4156] mb-3">
                                {row.label}
                              </h6>
                            ) : null}
                            {row.text ? (
                              <p className="text-sm lg:text-base text-[#6b6b6b] leading-relaxed whitespace-pre-line">
                                {row.text}
                              </p>
                            ) : null}
                          </div>
                          <div
                            className={
                              row.imageScale
                                ? `${split.image} flex justify-end`
                                : split.image
                            }
                          >
                            {row.layout === "grid2x2" && row.images ? (
                              <div className="grid grid-cols-2 gap-4 w-full">
                                {row.images.map((src, gridIdx) => (
                                  <ResearchRowImage
                                    key={src}
                                    src={src}
                                    alt={`${row.text ?? group.heading} ${gridIdx + 1}`}
                                  />
                                ))}
                              </div>
                            ) : row.image ? (
                              <div
                                className={row.imageScale ? undefined : "w-full"}
                                style={getScaledImageWidthStyle(row.imageScale)}
                              >
                                <ResearchRowImage
                                  src={row.image}
                                  alt={
                                    row.text ?? group.heading ?? section.title
                                  }
                                />
                              </div>
                            ) : null}
                          </div>
                        </div>
                          );
                        })()
                      ),
                    )
                  ) : group.items ? (
                    group.items.map((item) => {
                      const currentImageIdx = imageIdx;
                      imageIdx += 1;
                      return (
                        <div
                          key={item}
                          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
                        >
                          <div className="lg:col-span-1">
                            <p className="text-sm lg:text-base text-[#6b6b6b] leading-relaxed">
                              {item}
                            </p>
                          </div>
                          <div className="lg:col-span-2">
                            {section.images[currentImageIdx] ? (
                              <ResearchRowImage
                                src={section.images[currentImageIdx]}
                                alt={`${section.title} ${currentImageIdx + 1}`}
                              />
                            ) : null}
                          </div>
                        </div>
                      );
                    })
                  ) : null}
                </div>
              ))}
            </div>
          );
        }

        if (section.imageLayout === "vertical") {
          return (
            <div key={section.title} className="space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-medium text-[#1a1a1a] tracking-wide">
                  {section.title}
                </h4>
                {section.titleSubtitle ? (
                  <p className="text-base md:text-lg font-medium text-[#1a1a1a] mt-1 mb-4 tracking-wide">
                    {section.titleSubtitle}
                  </p>
                ) : null}
                {hasCopyText(section.text) ? (
                  <WhatWhyText text={section.text} />
                ) : null}
              </div>
              {section.images[0] ? (
                <ResearchRowImage
                  src={section.images[0]}
                  alt={section.titleSubtitle ?? section.title}
                />
              ) : null}
            </div>
          );
        }

        return (
          <div
            key={section.title}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
          >
            <div className="lg:col-span-1">
              <h4 className="text-base md:text-lg font-medium text-[#1a1a1a] mb-4 tracking-wide">
                {section.title}
              </h4>
              <WhatWhyText text={section.text} />
            </div>
            <div className="lg:col-span-2">
              {section.imageLayout === "stack" ? (
                <div className="flex flex-col gap-4">
                  {section.images.map((src, imageIdx) => (
                    <ResearchRowImage
                      key={src}
                      src={src}
                      alt={`${section.title} ${imageIdx + 1}`}
                    />
                  ))}
                </div>
              ) : (
                <ResearchRowImage
                  src={section.images[0]}
                  alt={section.title}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ProcessTasksSplitGallery({
  groups,
}: {
  groups: ProcessTaskGroup[];
}) {
  return (
    <div className="space-y-14">
      {groups.map((group) => (
        <div key={group.title} className="space-y-8 lg:space-y-10">
          <h4 className="text-base md:text-lg font-medium text-[#1a1a1a] tracking-wide">
            {group.title}
          </h4>
          {group.rows && group.rows.length > 0 ? (
            group.rows.map((row) =>
              group.rowLayout === "textTripleSquares" && row.images ? (
                <div
                  key={row.title}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-1">
                    <h5 className="text-sm md:text-base font-medium text-[#1a1a1a] mb-3 tracking-wide">
                      {row.title}
                    </h5>
                    {hasCopyText(row.text) ? (
                      <WhatWhyText text={row.text!} />
                    ) : null}
                  </div>
                  <div className="lg:col-span-2 grid grid-cols-3 gap-4">
                    {row.images.map((src, imageIdx) => (
                      <div
                        key={src}
                        className="aspect-square overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60"
                      >
                        <ImageWithFallback
                          src={src}
                          alt={`${row.title} ${imageIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : group.rowLayout === "stack" ? (
                <div key={row.title} className="space-y-4">
                  <h5 className="text-sm md:text-base font-medium text-[#1a1a1a] tracking-wide">
                    {row.title}
                  </h5>
                  <div className="flex flex-col gap-4 lg:gap-6">
                    {row.video ? (
                      <ResearchRowVideo
                        src={row.video}
                        label={`${row.title} animation`}
                      />
                    ) : null}
                    {row.image ? (
                      <ResearchRowImage src={row.image} alt={row.title} />
                    ) : null}
                  </div>
                </div>
              ) : (
                <div
                  key={row.title}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-1">
                    <h5 className="text-sm md:text-base font-medium text-[#1a1a1a] mb-3 tracking-wide">
                      {row.title}
                    </h5>
                    {hasCopyText(row.text) ? (
                      <WhatWhyText text={row.text!} />
                    ) : null}
                  </div>
                  <div className="lg:col-span-2">
                    {row.image ? (
                      <ResearchRowImage src={row.image} alt={row.title} />
                    ) : null}
                  </div>
                </div>
              ),
            )
          ) : group.layout === "twinImagesHeightAligned" && group.images ? (
            <TwinImagesHeightAligned
              images={[group.images[0], group.images[1]]}
              title={group.title}
            />
          ) : group.layout === "twinImages" && group.images ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {group.images.map((src, imageIdx) => (
                <ResearchRowImage
                  key={src}
                  src={src}
                  alt={`${group.title} ${imageIdx + 1}`}
                />
              ))}
            </div>
          ) : group.layout === "imageLevelSplit" &&
            group.image &&
            group.levelItems ? (
            <ImageLevelSplitGallery
              image={group.image}
              levels={group.levelItems}
              header={group.levelHeader}
              title={group.title}
            />
          ) : group.layout === "imageTextSplit" && group.image ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-2">
                <ResearchRowImage src={group.image} alt={group.title} />
              </div>
              <div className="lg:col-span-1">
                {hasCopyText(group.text) ? (
                  <WhatWhyText text={group.text!} />
                ) : null}
              </div>
            </div>
          ) : group.processVideoTriptych ? (
            <div className="space-y-6">
              {hasCopyText(group.text) ? (
                <p className="text-sm lg:text-base text-[#6b6b6b] leading-relaxed whitespace-pre-line">
                  {Array.isArray(group.text)
                    ? group.text.join("\n\n")
                    : group.text}
                </p>
              ) : null}
              <ProcessVideoTriptychGallery layout={group.processVideoTriptych} />
            </div>
          ) : group.layout === "verticalTriple" && group.images ? (
            <div className="space-y-6">
              {hasCopyText(group.text) ? (
                <WhatWhyText text={group.text!} />
              ) : null}
              {group.stackImages && group.stackImages.length > 0 ? (
                <div className="flex flex-col gap-4 lg:gap-6">
                  {group.stackImages.map((src, imageIdx) => (
                    <ResearchRowImage
                      key={src}
                      src={src}
                      alt={`${group.title} detail ${imageIdx + 1}`}
                    />
                  ))}
                </div>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {group.images.map((src, imageIdx) => (
                  <ResearchRowImage
                    key={src}
                    src={src}
                    alt={`${group.title} ${imageIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : group.image && !hasCopyText(group.text) ? (
            <ResearchRowImage src={group.image} alt={group.title} />
          ) : group.text && group.image ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-1">
                <WhatWhyText text={group.text} />
              </div>
              <div className="lg:col-span-2">
                <ResearchRowImage src={group.image} alt={group.title} />
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

const TRIPTYCH_GAP = 12;
const TRIPTYCH_CENTER_ASPECT = 1920 / 1080;

const TWIN_IMAGES_GAP = 24;

function TwinImagesHeightAligned({
  images,
  title,
}: {
  images: [string, string];
  title: string;
}) {
  const [leftSrc, rightSrc] = images;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [leftAspect, setLeftAspect] = useState(0);
  const [rightAspect, setRightAspect] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setContainerWidth(width);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const ready =
    containerWidth > 0 && leftAspect > 0 && rightAspect > 0;

  // Shared row height so both images keep native aspect (no crop) and fill the
  // content width: H = (W - gap) / (aspectLeft + aspectRight).
  const rowHeight = ready
    ? (containerWidth - TWIN_IMAGES_GAP) / (leftAspect + rightAspect)
    : 0;
  const leftWidth = rowHeight * leftAspect;
  const rightWidth = rowHeight * rightAspect;

  const cellClass =
    "overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60";

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="hidden sm:flex items-center justify-center"
        style={{ gap: TWIN_IMAGES_GAP }}
      >
        <div
          className={`${cellClass} shrink-0`}
          style={ready ? { width: leftWidth, height: rowHeight } : undefined}
        >
          <ImageWithFallback
            src={leftSrc}
            alt={`${title} left`}
            className="block h-full w-full object-contain"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalHeight > 0)
                setLeftAspect(img.naturalWidth / img.naturalHeight);
            }}
          />
        </div>
        <div
          className={`${cellClass} shrink-0`}
          style={ready ? { width: rightWidth, height: rowHeight } : undefined}
        >
          <ImageWithFallback
            src={rightSrc}
            alt={`${title} right`}
            className="block h-full w-full object-contain"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalHeight > 0)
                setRightAspect(img.naturalWidth / img.naturalHeight);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:hidden">
        <div className={cellClass}>
          <ImageWithFallback
            src={leftSrc}
            alt={`${title} left`}
            className="block w-full h-auto object-contain"
          />
        </div>
        <div className={cellClass}>
          <ImageWithFallback
            src={rightSrc}
            alt={`${title} right`}
            className="block w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function ImageLevelSplitGallery({
  image,
  levels,
  header,
  title,
}: {
  image: string;
  levels: { title: string; text: string }[];
  header?: { left: string; right: string };
  title: string;
}) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;

    const update = () => {
      const height = el.offsetHeight;
      if (height > 0) setImageHeight(height);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [image]);

  const headerCellClass =
    "text-xs tracking-widest uppercase font-bold text-[#2F4156]";
  const levelNameClass =
    "text-sm md:text-base font-medium text-[#1a1a1a] pr-4 whitespace-nowrap";
  const levelTextClass =
    "text-sm lg:text-base text-[#6b6b6b] leading-relaxed";
  const rowGridClass =
    "grid grid-cols-[minmax(6rem,auto)_1fr] gap-x-4 items-baseline";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
      <div ref={imageWrapRef} className="lg:col-span-2">
        <ResearchRowImage src={image} alt={title} />
      </div>
      <div
        className="lg:col-span-1 flex flex-col"
        style={imageHeight > 0 ? { height: imageHeight } : undefined}
      >
        {header ? (
          <div className={`${rowGridClass} shrink-0 pb-3 border-b border-[#e5e5e5]`}>
            <span className={headerCellClass}>{header.left}</span>
            <span className={headerCellClass}>{header.right}</span>
          </div>
        ) : null}
        {levels.map((level, levelIdx) => (
          <div
            key={level.title}
            className={`${rowGridClass} flex-1 content-center ${
              levelIdx < levels.length - 1 ? "border-b border-[#eef2f5]" : ""
            }`}
          >
            <span className={levelNameClass}>{level.title}</span>
            <span className={levelTextClass}>{level.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Column width proportions ≈ left 60 : middle 10 : right 22 (matches wireframe).
const VIDEO_TRIPTYCH_COL_UNITS = [60, 10, 22] as const;
const VIDEO_TRIPTYCH_COL_TOTAL = VIDEO_TRIPTYCH_COL_UNITS.reduce(
  (sum, unit) => sum + unit,
  0,
);
const VIDEO_TRIPTYCH_GAP = 12;

function ProcessVideoTriptychGallery({
  layout,
}: {
  layout: ProcessVideoTriptychLayout;
}) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;

    const update = () => {
      const height = el.offsetHeight;
      if (height > 0) setImageHeight(height);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [layout.image]);

  const [imageUnit, squareUnit, landscapeUnit] = VIDEO_TRIPTYCH_COL_UNITS;
  const imageBasis = `${(imageUnit / VIDEO_TRIPTYCH_COL_TOTAL) * 100}%`;
  const squareBasis = `${(squareUnit / VIDEO_TRIPTYCH_COL_TOTAL) * 100}%`;
  const landscapeBasis = `${(landscapeUnit / VIDEO_TRIPTYCH_COL_TOTAL) * 100}%`;

  // Right two columns scale to the left image height; each column's three cells
  // share one aspect ratio and fill via object-cover (no letterboxing).
  const cellHeight =
    imageHeight > 0 ? (imageHeight - 2 * VIDEO_TRIPTYCH_GAP) / 3 : 0;

  const cellClass =
    "overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60";

  const renderVideoColumn = (
    videos: string[],
    labelPrefix: string,
    basis: string,
  ) => (
    <div
      className="flex min-w-0 shrink-0 flex-col"
      style={{ flexBasis: basis, gap: VIDEO_TRIPTYCH_GAP }}
    >
      {videos.map((src, videoIdx) => (
        <div
          key={src}
          className={cellClass}
          style={cellHeight > 0 ? { height: cellHeight } : { minHeight: 96 }}
        >
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover bg-[#f2f7fa]/90"
            aria-label={`${labelPrefix} ${videoIdx + 1}`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      <div
        className="hidden lg:flex items-start"
        style={{ gap: VIDEO_TRIPTYCH_GAP }}
      >
        <div
          ref={imageWrapRef}
          className="min-w-0 shrink-0 overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60"
          style={{ flexBasis: imageBasis }}
        >
          <ImageWithFallback
            src={layout.image}
            alt="Animation workflow"
            className="block w-full h-auto object-contain"
          />
        </div>

        {renderVideoColumn(layout.leftVideos, "Aqua animation", squareBasis)}
        {renderVideoColumn(layout.rightVideos, "Boss animation", landscapeBasis)}
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        <div className={cellClass}>
          <ImageWithFallback
            src={layout.image}
            alt="Animation workflow"
            className="block w-full h-auto object-contain"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {layout.leftVideos.map((src, videoIdx) => (
            <div key={src} className={`${cellClass} aspect-square`}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover bg-[#f2f7fa]/90"
                aria-label={`Aqua animation ${videoIdx + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {layout.rightVideos.map((src, videoIdx) => (
            <div key={src} className={`${cellClass} aspect-video`}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover bg-[#f2f7fa]/90"
                aria-label={`Boss animation ${videoIdx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTriptychGallery({ layout }: { layout: ProcessTriptychLayout }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setContainerWidth(width);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const squareSize =
    containerWidth > 0
      ? Math.max(0, (9 * containerWidth - 50 * TRIPTYCH_GAP) / 66)
      : 0;
  const columnHeight =
    squareSize > 0 ? 3 * squareSize + 2 * TRIPTYCH_GAP : 0;
  const centerWidth = columnHeight * TRIPTYCH_CENTER_ASPECT;
  const gridTemplateColumns =
    squareSize > 0
      ? `${squareSize}px ${centerWidth}px ${squareSize}px`
      : undefined;

  const cellClass =
    "rounded-xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5]/60";

  const columnTitleClass =
    "text-xs tracking-widest uppercase font-bold text-[#2F4156] text-center";

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <div
        className="min-w-0"
        style={
          squareSize > 0
            ? {
                width: containerWidth,
                minWidth:
                  2 * squareSize + centerWidth + 2 * TRIPTYCH_GAP,
              }
            : undefined
        }
      >
        <div
          className="grid mb-3"
          style={{ gridTemplateColumns, gap: TRIPTYCH_GAP }}
        >
          <h5 className={columnTitleClass}>{layout.left.title}</h5>
          <h5 className={columnTitleClass}>{layout.center.title}</h5>
          <h5 className={columnTitleClass}>{layout.right.title}</h5>
        </div>

        <div
          className="grid items-stretch"
          style={{
            gridTemplateColumns,
            gap: TRIPTYCH_GAP,
            height: columnHeight > 0 ? columnHeight : undefined,
          }}
        >
          <div
            className="flex flex-col"
            style={{ gap: TRIPTYCH_GAP, height: columnHeight || undefined }}
          >
            {layout.left.images.map((src, i) => (
              <div
                key={src}
                className={`${cellClass} shrink-0`}
                style={
                  squareSize > 0
                    ? { width: squareSize, height: squareSize }
                    : undefined
                }
              >
                <ImageWithFallback
                  src={src}
                  alt={`${layout.left.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div
            className={cellClass}
            style={
              centerWidth > 0
                ? { width: centerWidth, height: columnHeight }
                : undefined
            }
          >
            <ImageWithFallback
              src={layout.center.image}
              alt={layout.center.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="flex flex-col"
            style={{ gap: TRIPTYCH_GAP, height: columnHeight || undefined }}
          >
            {layout.right.images.map((src, i) => (
              <div
                key={src}
                className={`${cellClass} shrink-0`}
                style={
                  squareSize > 0
                    ? { width: squareSize, height: squareSize }
                    : undefined
                }
              >
                <ImageWithFallback
                  src={src}
                  alt={`${layout.right.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PANEL_ROW_GAP = 12;
const PANEL_CAROUSEL_INTERVAL_MS = 1000;

const panelCellClass =
  "rounded-xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 aspect-square";

function ProcessPanelAutoCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, PANEL_CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [images.length]);

  if (images.length === 0) {
    return <div className={`${panelCellClass} w-full`} aria-hidden />;
  }

  return (
    <div className={`relative w-full ${panelCellClass}`}>
      <ImageWithFallback
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 ? (
        <div
          className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 pointer-events-none"
          aria-hidden
        >
          {images.map((src, i) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-white/90" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

const panelMediaClass =
  "rounded-xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 aspect-square w-full";

const processFlatTextClass =
  "text-[#6b6b6b] leading-relaxed text-sm lg:text-base whitespace-pre-line w-full max-w-none";

function ProcessThreePanelRowGallery({
  layout,
}: {
  layout: ProcessThreePanelRow;
}) {
  return (
    <div className="w-full space-y-6">
      {layout.introText ? (
        <p className={processFlatTextClass}>{layout.introText}</p>
      ) : null}

      <div
        className="grid grid-cols-1 sm:grid-cols-3 w-full"
        style={{ gap: PANEL_ROW_GAP }}
      >
        {layout.images.map((src, i) => (
          <div key={`panel-${i}`} className={panelCellClass}>
            <ImageWithFallback
              src={src}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <ProcessPanelAutoCarousel images={layout.carouselImages} />
      </div>

      {layout.footer ? (
        <div className="w-full space-y-4">
          <p className={processFlatTextClass}>{layout.footer.text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 lg:gap-6">
            <div className={panelMediaClass}>
              {layout.footer.video ? (
                <video
                  src={layout.footer.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              ) : (
                <div className="w-full h-full bg-[#f2f7fa]/90" aria-hidden />
              )}
            </div>
            <div className={panelMediaClass}>
              <ImageWithFallback
                src={layout.footer.image}
                alt="XPRESSO setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const RENDER_QUAD_GAP = 12;
const RENDER_RECT_ASPECT = 1920 / 1080;

function ProcessRenderQuadGallery({
  layout,
}: {
  layout: ProcessRenderQuadLayout;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setContainerWidth(width);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const g = RENDER_QUAD_GAP;
  const squareSize =
    containerWidth > 0 ? Math.max(0, (9 * containerWidth - 10 * g) / 26) : 0;
  const rectHeight = squareSize > 0 ? (squareSize - g) / 2 : 0;
  const rectWidth = rectHeight * RENDER_RECT_ASPECT;
  const gridTemplateColumns =
    squareSize > 0
      ? `${squareSize}px ${squareSize}px ${rectWidth}px`
      : undefined;

  const cellClass =
    "rounded-xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5]/60";

  return (
    <div ref={containerRef} className="w-full overflow-x-auto">
      <div
        className="min-w-0"
        style={
          squareSize > 0
            ? {
                width: containerWidth,
                minWidth: 2 * squareSize + rectWidth + 2 * g,
              }
            : undefined
        }
      >
        <div
          className="grid items-stretch"
          style={{
            gridTemplateColumns,
            gap: g,
            height: squareSize > 0 ? squareSize : undefined,
          }}
        >
          {layout.squares.map((src, i) => (
            <div
              key={`sq-${i}`}
              className={cellClass}
              style={
                squareSize > 0
                  ? { width: squareSize, height: squareSize }
                  : undefined
              }
            >
              <ImageWithFallback
                src={src}
                alt={`Render ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div
            className="flex flex-col"
            style={{
              gap: g,
              width: rectWidth > 0 ? rectWidth : undefined,
              height: squareSize > 0 ? squareSize : undefined,
            }}
          >
            {layout.rectangles.map((src, i) => (
              <div
                key={`rect-${i}`}
                className={cellClass}
                style={
                  rectWidth > 0 && rectHeight > 0
                    ? { width: rectWidth, height: rectHeight }
                    : undefined
                }
              >
                <ImageWithFallback
                  src={src}
                  alt={`Render ${i + 3}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StorySection({
  heading,
  image,
  storyTitle,
  storyText,
  ideaTitle,
  ideaText,
}: {
  heading: string;
  image: string;
  storyTitle: string;
  storyText: string;
  ideaTitle: string;
  ideaText: string;
}) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [imageHalfHeight, setImageHalfHeight] = useState(0);

  const measureImage = () => {
    const el = imageWrapRef.current;
    if (!el) return;
    const h = el.offsetHeight;
    if (h > 0) setImageHalfHeight(h / 2);
  };

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;

    measureImage();
    const observer = new ResizeObserver(measureImage);
    observer.observe(el);
    return () => observer.disconnect();
  }, [image]);

  const columnHeadingClass =
    "mb-4 text-xs tracking-widest uppercase font-bold text-[#2F4156]";
  const columnBodyClass =
    "text-sm lg:text-base text-[#6b6b6b] leading-relaxed whitespace-pre-line";

  const textGap = 48;

  const storyContentWidth = "w-full max-w-5xl mx-auto";
  const storyHorizontalPad = "px-4 lg:px-8";

  const textPanelClass =
    "rounded-3xl bg-[#f2f7fa]/90 px-8 lg:px-10 py-8 lg:py-10";

  const storyIdeaColumns = (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 ${storyContentWidth}`}
    >
      <div className={textPanelClass}>
        <h4 className={columnHeadingClass}>{storyTitle}</h4>
        <p className={columnBodyClass}>{storyText}</p>
      </div>
      <div className={textPanelClass}>
        <h4 className={columnHeadingClass}>{ideaTitle}</h4>
        <p className={columnBodyClass}>{ideaText}</p>
      </div>
    </div>
  );

  return (
    <section className="px-6 lg:px-10 py-20">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        {/* Desktop: image in flow; two gray panels pull up to image midline */}
        <div className="hidden md:block overflow-visible">
          <div className={`relative z-10 ${storyHorizontalPad}`}>
            <div
              ref={imageWrapRef}
              className={`${storyContentWidth} rounded-2xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm`}
            >
              <ImageWithFallback
                src={image}
                alt={heading}
                className="w-full h-auto object-cover"
                onLoad={measureImage}
              />
            </div>
          </div>

          <div
            className={`relative z-0 overflow-visible ${storyHorizontalPad}`}
            style={{
              marginTop: imageHalfHeight > 0 ? -imageHalfHeight : undefined,
              paddingTop:
                imageHalfHeight > 0 ? imageHalfHeight + textGap : textGap,
            }}
          >
            {storyIdeaColumns}
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className={`md:hidden space-y-6 ${storyHorizontalPad}`}>
          <div
            className={`${storyContentWidth} rounded-2xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm`}
          >
            <ImageWithFallback
              src={image}
              alt={heading}
              className="w-full h-auto object-cover"
            />
          </div>
          {storyIdeaColumns}
        </div>
      </div>
    </section>
  );
}

function WhatIsItSection({
  heading,
  subsections,
}: {
  heading: string;
  subsections: { title: string; image: string; text: string }[];
}) {
  const subsectionTitleClass =
    "text-base md:text-lg font-medium text-[#1a1a1a] tracking-wide";
  const subsectionBodyClass =
    "text-sm lg:text-base text-[#6b6b6b] leading-relaxed whitespace-pre-line";

  return (
    <section className="px-6 lg:px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{heading}</SectionHeading>
        <div className="space-y-16">
          {subsections.map((subsection) => (
            <div key={subsection.title} className="space-y-6">
              <h4 className={subsectionTitleClass}>{subsection.title}</h4>
              <div className="rounded-2xl overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm">
                <ImageWithFallback
                  src={subsection.image}
                  alt={subsection.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className={subsectionBodyClass}>{subsection.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWhySection({
  heading,
  items,
}: {
  heading: string;
  items: WhatWhyItem[];
}) {
  return (
    <section className="px-6 lg:px-10 py-20">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        {/* Desktop: rounded bar + circles centered on top edge */}
        <div className="hidden md:block pt-40">
          <div className="rounded-3xl bg-[#f2f7fa]/90 px-12 lg:px-24 pb-24 pt-0 overflow-visible min-h-[320px]">
            <div
              className={`grid gap-10 lg:gap-20 w-full ${
                items.length === 2
                  ? "grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-3"
              }`}
            >
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-3 lg:px-6"
                >
                  <div className="w-80 h-80 shrink-0 -mt-40 rounded-full overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm z-10">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="mt-6 mb-5 text-xs tracking-widest uppercase font-bold text-[#2F4156]">
                    {item.title}
                  </h4>
                  <WhatWhyText text={item.text} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: simplified stacked layout */}
        <div className="md:hidden space-y-14">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center px-4">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm mb-6">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] mb-3">
                {item.title}
              </h4>
              <WhatWhyText text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachItemsSection({
  heading,
  items,
  placeholderImage,
}: {
  heading: string;
  items: { title: string; text: string | string[]; image: string }[];
  placeholderImage: string;
}) {
  return (
    <section className="px-6 lg:px-10 py-20">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        <div className="hidden md:block pt-40">
          <div className="rounded-3xl bg-[#f2f7fa]/90 px-12 lg:px-24 pb-24 pt-0 overflow-visible min-h-[320px]">
            <div className="grid grid-cols-3 gap-10 lg:gap-20 w-full">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-3 lg:px-6"
                >
                  <div className="w-80 h-80 shrink-0 -mt-40 rounded-full overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm z-10">
                    <ImageWithFallback
                      src={item.image || placeholderImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="mt-6 mb-5 text-xs tracking-widest uppercase font-bold text-[#2F4156]">
                    {item.title}
                  </h4>
                  <WhatWhyText text={item.text} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-14">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center px-4">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5] shadow-sm mb-6">
                <ImageWithFallback
                  src={item.image || placeholderImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] mb-3">
                {item.title}
              </h4>
              <WhatWhyText text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShaderBodyText({ children }: { children: string }) {
  return (
    <p className="text-[#6b6b6b] leading-relaxed text-sm lg:text-base">
      {children}
    </p>
  );
}

function ShaderMediaCell({
  caption,
  image,
  aspect,
  kind = "image",
  fit = "cover",
}: {
  caption?: string;
  image: string;
  aspect: "1920/1080" | "960/1080";
  kind?: "image" | "video";
  fit?: "cover" | "contain";
}) {
  const ratio = aspect === "960/1080" ? 960 / 1080 : 1920 / 1080;

  return (
    <div className="w-full min-w-0 self-start">
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60"
        style={{ aspectRatio: ratio }}
      >
        {kind === "video" ? (
          <LoopVideo
            src={image}
            label={caption ?? "Shader output"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <ImageWithFallback
            src={image}
            alt={caption ?? ""}
            className={`absolute inset-0 w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          />
        )}
        {caption ? (
          <span className="absolute bottom-2 left-2 z-10 px-2 py-0.5 text-[10px] tracking-widest uppercase font-bold text-white bg-[#2F4156]/80 rounded-sm">
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function UiUxDesignShowcase({
  title,
  text,
  media,
}: {
  title: string;
  text: string | string[];
  media: UiUxMediaPair;
}) {
  const hasText =
    typeof text === "string" ? text.trim().length > 0 : text.length > 0;

  return (
    <div className="w-full space-y-6">
      <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156]">
        {title}
      </h4>

      {hasText ? (
        typeof text === "string" ? (
          <p className="text-[#6b6b6b] leading-relaxed text-sm lg:text-base">
            {text}
          </p>
        ) : (
          <WhatWhyText text={text} />
        )
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-6 lg:gap-8 items-stretch">
        <div className="relative flex min-h-[min(85vw,320px)] lg:min-h-0 lg:h-full items-center justify-center overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60">
          <ImageWithFallback
            src={media.logicImage}
            alt="UI logic diagram"
            className="absolute inset-0 w-full h-full object-contain object-center p-2"
          />
        </div>
        <div className="relative flex min-h-[min(85vw,320px)] lg:min-h-0 lg:h-full items-center justify-center overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60">
          <ImageWithFallback
            src={media.storyboardImage}
            alt="UI storyboard"
            className="absolute inset-0 w-full h-full object-contain object-center p-2"
          />
        </div>
        <div className="relative w-full self-start aspect-video overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60">
          <LoopVideo
            src={media.video}
            label="UI animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const TOOL_LABEL_LINE =
  /^(Aim|How|Effect|目标|方式|效果)([:：])\s?(.*)$/u;

function ToolDevelopmentLine({ item }: { item: string }) {
  const match = item.match(TOOL_LABEL_LINE);
  if (!match) return <>{item}</>;

  const [, label, separator, body] = match;
  return (
    <>
      <span className="underline decoration-[#2F4156] underline-offset-2">
        {label}
        {separator}
      </span>
      {body ? ` ${body}` : null}
    </>
  );
}

function ToolDevelopmentText({ items }: { items: string[] }) {
  return (
    <ul className="w-full text-left text-sm lg:text-base text-[#6b6b6b] leading-relaxed space-y-2.5">
      {items.map((item) => {
        const isHeading = !TOOL_LABEL_LINE.test(item);
        return (
          <li
            key={item}
            className={
              isHeading
                ? "font-normal text-[#6b6b6b] mt-4 first:mt-0 list-none"
                : "list-disc pl-5 marker:text-[#CBD9E6]"
            }
          >
            <ToolDevelopmentLine item={item} />
          </li>
        );
      })}
    </ul>
  );
}

function ToolDevelopmentShowcase({
  title,
  rows,
}: {
  title: string;
  rows: ToolDevelopmentRow[];
}) {
  return (
    <div className="w-full space-y-6">
      <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156]">
        {title}
      </h4>

      <div className="space-y-10">
        {rows.map((row) => (
          <div
            key={row.text[0]}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            <div className="min-w-0">
              <ToolDevelopmentText items={row.text} />
            </div>
            {row.images.map((src) => (
              <ShaderMediaCell
                key={src}
                image={src}
                aspect="1920/1080"
                fit="contain"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ToonShaderBlock({ section }: { section: ShaderSection }) {
  const [logic, ...bottomImages] = section.media;
  if (!logic) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-rows-[auto_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
      <div className="lg:row-span-2 flex w-full min-h-0 lg:h-full">
        <div className="relative flex-1 w-full min-h-[min(85vw,420px)] lg:min-h-0 lg:h-full overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60">
          <ImageWithFallback
            src={logic.image}
            alt={logic.caption}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
          <span className="absolute bottom-2 left-2 z-10 px-2 py-0.5 text-[10px] tracking-widest uppercase font-bold text-white bg-[#2F4156]/80 rounded-sm">
            {logic.caption}
          </span>
        </div>
      </div>

      <div className="min-w-0">
        {section.description ? (
          <ShaderBodyText>{section.description}</ShaderBodyText>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 min-h-0 min-w-0">
        {bottomImages.map((item) => (
          <ShaderMediaCell
            key={item.caption}
            caption={item.caption}
            image={item.image}
            aspect={item.aspect}
            kind={item.kind}
          />
        ))}
      </div>
    </div>
  );
}

function ShaderDevelopmentShowcase({
  title,
  sections,
}: {
  title: string;
  sections: ShaderSection[];
}) {
  return (
    <div className="w-full space-y-10">
      <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156]">
        {title}
      </h4>

      {sections.map((section) => (
        <div key={section.title} className="space-y-5">
          <h5 className="text-xs tracking-widest uppercase font-bold text-[#2F4156]/90">
            {section.title}
          </h5>

          {section.layout === "dissolve" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              <div>
                {section.description ? (
                  <ShaderBodyText>{section.description}</ShaderBodyText>
                ) : null}
              </div>
              {section.media.map((item) => (
                <ShaderMediaCell
                  key={item.caption}
                  caption={item.caption}
                  image={item.image}
                  aspect={item.aspect}
                  kind={item.kind}
                />
              ))}
            </div>
          ) : (
            <ToonShaderBlock section={section} />
          )}
        </div>
      ))}
    </div>
  );
}

function ProcessTasksOutlineGallery({
  items,
}: {
  items: ProcessTasksOutlineItem[];
}) {
  return (
    <div className="w-full rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60 px-6 py-10 lg:px-8 lg:py-12">
      <div className="flex flex-col divide-y divide-[#dcdcdc] lg:flex-row lg:divide-y-0 lg:divide-x">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-1 flex-col items-center text-center px-3 py-8 first:pt-0 last:pb-0 lg:px-5 lg:py-0"
          >
            {item.image ? (
              <div className="mb-5 h-24 w-24 shrink-0 overflow-hidden rounded-full bg-[#f2f7fa]/90 lg:h-[6.5rem] lg:w-[6.5rem]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <h4 className="mb-3 text-[11px] font-bold uppercase leading-snug tracking-widest text-[#2F4156] lg:text-xs">
              {item.title}
            </h4>
            {item.subItems && item.subItems.length > 0 ? (
              <p className="text-xs leading-relaxed text-[#2F4156]/85 lg:text-sm">
                {item.subItems.join(", ")}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessStepRow({
  step,
  idx,
  totalSteps,
}: {
  step: ProcessStepData;
  idx: number;
  totalSteps: number;
}) {
  const hasHowItems = step.howItems && step.howItems.length > 0;
  const hasIntegrationGallery =
    step.integrationImages && step.integrationImages.length > 0;
  const hasIntegrationVideos =
    step.integrationVideos && step.integrationVideos.length > 0;
  const hasHowVideoRow = step.howVideoRow && step.howVideoRow.length > 0;
  const hasTriptych = Boolean(step.processTriptych);
  const hasThreePanelRow = Boolean(step.processThreePanelRow);
  const hasRenderQuad = Boolean(step.processRenderQuad);
  const hasResearchSections =
    Boolean(step.researchSections && step.researchSections.length > 0);
  const hasTaskSections =
    Boolean(step.taskSections && step.taskSections.length > 0);
  const hasFlowchartImage = Boolean(step.flowchartImage);
  const hasTasksOutline = Boolean(step.tasksOutline && step.tasksOutline.length > 0);
  const useFlatProcessText =
    hasTriptych ||
    hasThreePanelRow ||
    hasRenderQuad ||
    hasResearchSections ||
    hasTaskSections ||
    hasFlowchartImage ||
    hasTasksOutline ||
    hasHowVideoRow ||
    hasIntegrationVideos;
  const showStepText =
    !hasHowItems &&
    !hasIntegrationGallery &&
    !hasIntegrationVideos &&
    !hasHowVideoRow &&
    (step.text?.trim().length ?? 0) > 0;

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="mt-1 w-6 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#CBD9E6]" />
              {idx < totalSteps - 1 && (
                <div className="w-px flex-1 bg-[#e5e5e5] mt-2 min-h-[48px]" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm tracking-widest uppercase text-[#1a1a1a]">
                {step.stage}
              </div>
              {showStepText && !useFlatProcessText ? (
                <p className="text-[#6b6b6b] leading-relaxed mt-3 whitespace-pre-line">
                  {step.text}
                </p>
              ) : null}
              {step.stepImages && step.stepImages.length > 0 ? (
                <div className="mt-4">
                  <StepImagesRow images={step.stepImages} />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {!hasHowItems &&
          !hasIntegrationGallery &&
          !hasIntegrationVideos &&
          !hasHowVideoRow &&
          !hasTriptych &&
          !hasThreePanelRow &&
          !hasRenderQuad &&
          !hasResearchSections &&
          !hasTaskSections &&
          !hasFlowchartImage &&
          !hasTasksOutline && (
          <div
            className={
              step.preserveImageAspect
                ? `lg:col-span-3 overflow-hidden bg-[#f2f7fa]/90 border border-[#e5e5e5]/60${step.roundedSideMedia ? " rounded-2xl" : ""}`
                : step.roundedSideMedia
                  ? "lg:col-span-3 aspect-video bg-[#f2f7fa]/90 overflow-hidden border border-[#e5e5e5]/60 rounded-2xl"
                  : "lg:col-span-3 aspect-video bg-[#f2f7fa]/90 overflow-hidden"
            }
          >
            <ImageWithFallback
              src={step.image}
              alt={`${step.stage} image`}
              className={
                step.preserveImageAspect
                  ? "w-full h-auto block object-contain"
                  : "w-full h-full object-cover"
              }
            />
          </div>
        )}
      </div>

      {showStepText && useFlatProcessText ? (
        <div className="lg:ml-10">
          <p className={processFlatTextClass}>{step.text}</p>
        </div>
      ) : null}

      {hasRenderQuad && step.processRenderQuad && (
        <div className="lg:ml-10">
          <ProcessRenderQuadGallery layout={step.processRenderQuad} />
        </div>
      )}

      {hasResearchSections && step.researchSections && (
        <div className="lg:ml-10">
          <ProcessResearchSplitGallery sections={step.researchSections} />
        </div>
      )}

      {hasTaskSections && step.taskSections && (
        <div className="lg:ml-10">
          <ProcessTasksSplitGallery groups={step.taskSections} />
        </div>
      )}

      {hasTasksOutline && step.tasksOutline && (
        <div className="w-full">
          <ProcessTasksOutlineGallery items={step.tasksOutline} />
        </div>
      )}

      {hasFlowchartImage && step.flowchartImage && (
        <div className="lg:ml-10 flex justify-center">
          <div
            className="overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60"
            style={{
              width: step.flowchartImageScale
                ? `${step.flowchartImageScale * 100}%`
                : "100%",
            }}
          >
            <ImageWithFallback
              src={step.flowchartImage}
              alt={`${step.stage} flowchart`}
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>
      )}

      {hasThreePanelRow && step.processThreePanelRow && (
        <div className="lg:ml-10">
          <ProcessThreePanelRowGallery layout={step.processThreePanelRow} />
        </div>
      )}

      {hasTriptych && step.processTriptych && (
        <div className="lg:ml-10">
          <ProcessTriptychGallery layout={step.processTriptych} />
        </div>
      )}

      {hasIntegrationGallery && (
        <div className="lg:ml-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {step.integrationImages!.map((src, imageIdx) => (
              <div
                key={src}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-[#f2f7fa]/90 border border-[#e5e5e5]/60"
              >
                <ImageWithFallback
                  src={src}
                  alt={`${step.stage} ${imageIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {hasIntegrationVideos && (
        <div
          className={
            hasIntegrationGallery
              ? "lg:ml-10 mt-8 lg:mt-10"
              : "lg:ml-10"
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {step.integrationVideos!.map((src, videoIdx) => (
              <ResearchRowVideo
                key={src}
                src={src}
                label={`${step.stage} ${videoIdx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {hasHowVideoRow && (
        <div className="lg:ml-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {step.howVideoRow!.map((src, videoIdx) => (
              <ResearchRowVideo
                key={src}
                src={src}
                label={`${step.stage} ${videoIdx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {hasHowItems && (
        <div className="lg:ml-10 space-y-10">
          {step.howItems!.map((item) =>
            item.uiUxMedia ? (
              <UiUxDesignShowcase
                key={item.title}
                title={item.title}
                text={item.text}
                media={item.uiUxMedia}
              />
            ) : item.toolDevelopment && item.toolDevelopment.length > 0 ? (
              <ToolDevelopmentShowcase
                key={item.title}
                title={item.title}
                rows={item.toolDevelopment}
              />
            ) : item.shaderSections && item.shaderSections.length > 0 ? (
              <ShaderDevelopmentShowcase
                key={item.title}
                title={item.title}
                sections={item.shaderSections}
              />
            ) : item.animationCategories &&
              item.animationCategories.length > 0 ? (
              <AnimationDesignShowcase
                key={item.title}
                title={item.title}
                text={item.text}
                categories={item.animationCategories}
              />
            ) : (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
              >
                <div className="lg:col-span-2">
                  <h4 className="text-xs tracking-widest uppercase font-bold text-[#2F4156] mb-3">
                    {item.title}
                  </h4>
                  {typeof item.text === "string" ? (
                    <p className="text-[#6b6b6b] leading-relaxed text-sm lg:text-base">
                      {item.text}
                    </p>
                  ) : (
                    <WhatWhyText text={item.text} />
                  )}
                  {item.stepImages && item.stepImages.length > 0 && (
                    <StepImagesRow
                      images={item.stepImages}
                      shape={item.stepImageShape}
                    />
                  )}
                </div>
                <div className="lg:col-span-3">
                  {item.carouselSlides && item.carouselSlides.length > 0 ? (
                    <ProcessImageCarousel slides={item.carouselSlides} />
                  ) : (
                    <div className="aspect-video bg-[#f2f7fa]/90 overflow-hidden border border-[#e5e5e5]/60">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}

/** Single controllable embed — used when manifest sets layout: fullscreen-video */
function FullscreenVideoDetail({ project }: { project: Project }) {
  const videoKind = getVideoKind(project.videoUrl);
  const youtubeEmbed = getYouTubeEmbedUrl(project.videoUrl ?? "");

  return (
    <section
      className="relative w-full h-[calc(100vh-65px)] min-h-[360px] bg-black"
      aria-label={project.name}
    >
      {videoKind === "youtube" && youtubeEmbed ? (
        <iframe
          src={youtubeEmbed}
          title={project.name}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : videoKind === "bilibili" && project.videoUrl ? (
        <BilibiliEmbedIframe
          url={project.videoUrl}
          mode="interactive"
          title={project.name}
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : videoKind === "mp4" && project.videoUrl ? (
        <video
          className="absolute inset-0 w-full h-full object-contain bg-black"
          src={project.videoUrl}
          controls
          playsInline
        />
      ) : (
        <ImageWithFallback
          src={project.previewImage}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}
    </section>
  );
}

function WorkDetailTemplate({
  project,
  language,
}: {
  project: Project;
  language: Language;
}) {
  const labels = getWorkDetailLabels(language);
  const videoKind = getVideoKind(project.videoUrl);
  const heroYouTube = getYouTubeBackgroundLoopUrl(project.videoUrl ?? "");
  const detailsYouTube = getYouTubeEmbedUrl(project.videoUrl ?? "");

  const placeholder = project.images[0] ?? project.previewImage;
  const getImg = (idx: number) => project.images[idx] ?? placeholder;
  const imagePlaceholder = project.previewImage;
  const detail = project.detail;

  const whatWhyItems: WhatWhyItem[] = detail
    ? [
        {
          title: labels.problem,
          text: detail.problem,
          image: getImg(0),
        },
        {
          title: labels.insight,
          text: detail.insight,
          image: getImg(1),
        },
        ...(detail.approach
          ? [
              {
                title: labels.approach,
                text: detail.approach,
                image: getImg(2),
              },
            ]
          : []),
      ]
    : [
        {
          title: labels.problem,
          text: labels.whatWhyTexts.problem,
          image: getImg(0),
        },
        {
          title: labels.insight,
          text: labels.whatWhyTexts.insight,
          image: getImg(1),
        },
        {
          title: labels.approach,
          text: labels.whatWhyTexts.approach,
          image: getImg(2),
        },
      ];

  const approachItems = detail?.approachItems.map((item, i) => ({
    title: item.title,
    text: item.text,
    image: item.image ?? getImg(2 + i),
  }));

  const process: ProcessStepData[] =
    detail?.process.layout === "pipeline" && detail.process.pipeline?.length
      ? detail.process.pipeline.map((item) => ({
          stage: item.title,
          text: Array.isArray(item.text) ? item.text.join("\n\n") : item.text,
          image: item.image ?? imagePlaceholder,
          stepImages: item.stepImages,
          processTriptych: item.processTriptych,
          processThreePanelRow: item.processThreePanelRow,
          processRenderQuad: item.processRenderQuad,
          flowchartImage: item.flowchartImage,
          flowchartImageScale: item.flowchartImageScale,
          taskSections: item.taskSections,
          integrationImages: item.integrationImages,
          preserveImageAspect:
            !item.processTriptych &&
            !item.processThreePanelRow &&
            !item.processRenderQuad &&
            !item.flowchartImage &&
            !item.taskSections &&
            !item.integrationImages &&
            (project.id === "life-begets-life" || project.id === "aquas-will"),
        }))
      : detail
      ? [
        {
          stage: labels.processSteps.research,
          text: detail.process.research,
          image: detail.processImages?.research ?? getImg(0),
          researchSections: detail.process.researchSections,
          preserveImageAspect:
            project.id === "popup-museum" ||
            project.id === "life-begets-life" ||
            project.id === "aquas-will",
          roundedSideMedia: project.id === "popup-museum",
        },
        {
          stage:
            detail.process.stepLabels?.tasks ?? labels.processSteps.tasks,
          text: detail.process.tasks,
          image: detail.processImages?.tasks ?? getImg(2),
          flowchartImage: detail.process.tasksFlowchart,
          tasksOutline: detail.process.tasksOutline,
          taskSections: detail.process.tasksSections,
          roundedSideMedia: project.id === "popup-museum",
        },
        {
          stage:
            detail.process.stepLabels?.how ?? labels.processSteps.how,
          text: "",
          image: imagePlaceholder,
          taskSections: detail.process.howTaskSections,
          howVideoRow: detail.process.howVideoRow,
          howItems: detail.process.howItems.map((item) => ({
            title: item.title,
            text: item.text,
            image: item.image ?? imagePlaceholder,
            stepImages: item.stepImages,
            stepImageShape: item.stepImageShape,
            animationCategories: item.animationCategories,
            carouselSlides: item.carouselSlides,
            shaderSections: item.shaderSections,
            uiUxMedia: item.uiUxMedia,
            toolDevelopment: item.toolDevelopment,
          })),
        },
        ...(detail.process.hideOutputStep
          ? []
          : [
              {
                stage:
                  detail.process.stepLabels?.output ??
                  labels.processSteps.output,
                text: detail.process.output,
                image: detail.processImages?.output ?? getImg(9),
                integrationImages: detail.process.integrationImages,
                integrationVideos: detail.process.integrationVideos,
              },
            ]),
      ]
    : [
        {
          stage: labels.processSteps.research,
          text: labels.processTexts.research,
          image: getImg(1),
        },
        {
          stage: labels.processSteps.tasks,
          text: labels.processTexts.tasks,
          image: getImg(2),
        },
        {
          stage: labels.processSteps.how,
          text: labels.processTexts.how,
          image: getImg(6),
        },
        {
          stage: labels.processSteps.output,
          text: labels.processTexts.output,
          image: getImg(9),
        },
      ];

  const resultImpactText = detail?.resultImpact ?? labels.impactPlaceholder;

  const resultImages =
    detail?.resultGalleryImages !== undefined
      ? [...detail.resultGalleryImages]
      : ([project.images[10], project.images[11], project.images[12]].filter(
          Boolean,
        ) as string[]);

  const resultGalleryLayout = detail?.resultGalleryLayout ?? "default";
  const resultGallery2x2 = resultImages.length === 4;
  const resultGallery2x3 = resultImages.length === 6;
  const resultGalleryLeftSplit =
    resultGalleryLayout === "leftOneRightTwo" && resultImages.length >= 2;

  const resultVideoUrl = detail?.resultVideoUrl ?? project.videoUrl;
  const resultVideoKind = getVideoKind(resultVideoUrl);
  const resultYouTubeEmbed = getYouTubeEmbedUrl(resultVideoUrl ?? "");
  const resultBilibiliUrl =
    resultVideoUrl && resultVideoKind === "bilibili"
      ? normalizeEmbedUrl(resultVideoUrl)
      : null;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] bg-black">
        {videoKind === "youtube" && heroYouTube ? (
          <iframe
            src={heroYouTube}
            title={`${project.name} Hero`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : videoKind === "bilibili" && project.videoUrl ? (
          <BilibiliEmbedIframe
            url={project.videoUrl}
            mode="hero-background"
            title={`${project.name} Hero`}
            className="absolute inset-0 w-full h-full"
          />
        ) : videoKind === "mp4" && project.videoUrl ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <ImageWithFallback
            src={project.previewImage}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Title + summary */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            {project.name}
          </h1>
          <p className="text-[#6b6b6b] leading-relaxed text-lg whitespace-pre-line">
            {project.summary}
          </p>

          {/* More details */}
          {project.moreDetails && !project.moreDetails.startsWith("TODO") && (
            <div className="mt-10 pt-8 border-t border-[#e5e5e5]">
              <div className="text-[#6b6b6b] mb-2 text-sm tracking-wider uppercase">
                {labels.moreDetails}
              </div>
              <a
                href={project.moreDetails}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#397fdf] hover:underline"
              >
                {labels.pdfCta}
              </a>
            </div>
          )}
        </div>
      </section>

      {project.whatIsItSection ? (
        <WhatIsItSection {...project.whatIsItSection} />
      ) : project.storySection ? (
        <StorySection {...project.storySection} />
      ) : (
        <WhatWhySection heading={labels.whatWhy} items={whatWhyItems} />
      )}

      {approachItems && approachItems.length > 0 && (
        <ApproachItemsSection
          heading={labels.approach}
          items={approachItems}
          placeholderImage={imagePlaceholder}
        />
      )}

      {/* Process */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>{labels.process}</SectionHeading>
          <div className="grid grid-cols-1 gap-16">
            {process.map((step, idx) => (
              <ProcessStepRow
                key={step.stage}
                step={step}
                idx={idx}
                totalSteps={process.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Result & Impact */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>{labels.resultImpact}</SectionHeading>

          <div className="w-full space-y-8">
            {resultImages.length > 0 ? (
              resultGalleryLeftSplit ? (
                <ResultLeftSplitGallery images={resultImages} />
              ) : (
                <div
                  className={
                    resultGallery2x2 || resultGallery2x3
                      ? "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full"
                      : "grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                  }
                >
                  {resultImages.map((src, imageIdx) => (
                    <div
                      key={`${src}-${imageIdx}`}
                      className="overflow-hidden rounded-2xl bg-[#f2f7fa]/90 aspect-video border border-[#e5e5e5]/60"
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Result image ${imageIdx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )
            ) : null}

            <p className="w-full text-[#6b6b6b] leading-relaxed text-lg whitespace-pre-line">
              {resultImpactText}
            </p>

            {resultVideoUrl && resultVideoKind !== "none" && (
              <div className="w-full aspect-video bg-[#1a1a1a]">
                {resultVideoKind === "youtube" && resultYouTubeEmbed ? (
                  <iframe
                    src={resultYouTubeEmbed}
                    title={`${project.name} Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : resultVideoKind === "bilibili" && resultBilibiliUrl ? (
                  <iframe
                    src={resultBilibiliUrl}
                    title={`${project.name} Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : resultVideoKind === "mp4" ? (
                  <video
                    className="w-full h-full object-cover"
                    src={resultVideoUrl}
                    controls
                    playsInline
                  />
                ) : (
                  <ImageWithFallback
                    src={project.previewImage}
                    alt={`${project.name} video placeholder`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}


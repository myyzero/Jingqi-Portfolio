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

  return (
    <motion.div
      key={`${language}-${projectId ?? "unknown"}`}
      className="min-h-screen bg-white"
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
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#e5e5e5]">
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
    <p className="w-full text-left text-sm lg:text-base text-[#6b6b6b] leading-relaxed">
      {text}
    </p>
  );
}

type ProcessStepData = {
  stage: string;
  text: string;
  image: string;
  integrationImages?: readonly string[];
  howItems?: {
    title: string;
    text: string | string[];
    image: string;
    stepImages?: string[];
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

  const slideFrameClass =
    "h-full w-full overflow-hidden border border-[#e5e5e5]/60 bg-[#fafafa]";
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
        className={`bg-[#CFCFCF] overflow-hidden ${className}`}
        style={style}
        aria-label={label}
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
      className={`w-full h-full object-cover bg-[#CFCFCF] ${className}`}
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
                  className="overflow-hidden shrink-0"
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
                    className="overflow-hidden shrink-0"
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

/** One continuous wave: semicircle hugs on each circle + smooth curves in gaps */
function buildHuggingWavePath(
  centers: { x: number; y: number }[],
  radius: number,
): string {
  if (centers.length === 0) return "";

  let d = "";

  for (let i = 0; i < centers.length; i++) {
    const { x, y } = centers[i];
    const startX = x - radius;
    const endX = x + radius;
    const wrapTop = i % 2 === 0;

    if (i === 0) {
      d = `M ${startX} ${y}`;
    } else {
      const prev = centers[i - 1];
      const prevEndX = prev.x + radius;
      const gapMidX = (prevEndX + startX) / 2;
      const prevWrapTop = (i - 1) % 2 === 0;

      if (prevWrapTop && !wrapTop) {
        d += ` Q ${gapMidX} ${y + radius} ${startX} ${y}`;
      } else if (!prevWrapTop && wrapTop) {
        d += ` Q ${gapMidX} ${y - radius} ${startX} ${y}`;
      } else {
        d += ` L ${startX} ${y}`;
      }
    }

    d += wrapTop
      ? ` A ${radius} ${radius} 0 0 0 ${endX} ${y}`
      : ` A ${radius} ${radius} 0 0 1 ${endX} ${y}`;
  }

  return d;
}

function StepImagesRow({ images }: { images: string[] }) {
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
  const radius = circleSize / 2;
  const strokeWidth = Math.max(2, Math.round(circleSize * 0.07));
  const horizontalStep = count > 1 ? (width - circleSize) / (count - 1) : 0;
  const circleTop = strokeWidth;
  const equatorY = circleTop + radius;
  const rowHeight = circleSize + strokeWidth * 2;

  const centers =
    width > 0
      ? images.map((_, i) => ({
          x: i * horizontalStep + radius,
          y: equatorY,
        }))
      : [];

  const wavePath =
    centers.length > 0 ? buildHuggingWavePath(centers, radius) : "";

  return (
    <div ref={containerRef} className="mt-6 w-full">
      <div
        className="relative w-full"
        style={{ height: width > 0 ? rowHeight : circleSize + 40 }}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-sm bg-[#e5e5e5] z-10"
            style={{
              width: circleSize,
              height: circleSize,
              left: i * horizontalStep,
              top: circleTop,
            }}
          >
            <ImageWithFallback
              src={src}
              alt={`Step ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {width > 0 && wavePath && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            aria-hidden
          >
            <path
              d={wavePath}
              fill="none"
              stroke="#CBD9E6"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className="mt-4 flex w-full items-center gap-1 text-[#CBD9E6]">
        <div className="flex-1 h-px bg-current" />
        <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={1.5} />
      </div>
    </div>
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
    <section className="px-6 lg:px-10 py-20 bg-[#fafafa]">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        {/* Desktop: rounded bar + circles centered on top edge */}
        <div className="hidden md:block pt-40">
          <div className="rounded-3xl bg-[#ececec] px-12 lg:px-24 pb-24 pt-0 overflow-visible min-h-[320px]">
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
                  <div className="w-80 h-80 shrink-0 -mt-40 rounded-full overflow-hidden bg-white border border-[#e5e5e5] shadow-sm z-10">
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
              <div className="w-36 h-36 rounded-full overflow-hidden bg-white border border-[#e5e5e5] shadow-sm mb-6">
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
    <section className="px-6 lg:px-10 py-20 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        <div className="hidden md:block pt-40">
          <div className="rounded-3xl bg-[#ececec] px-12 lg:px-24 pb-24 pt-0 overflow-visible min-h-[320px]">
            <div className="grid grid-cols-3 gap-10 lg:gap-20 w-full">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center px-3 lg:px-6"
                >
                  <div className="w-80 h-80 shrink-0 -mt-40 rounded-full overflow-hidden bg-white border border-[#e5e5e5] shadow-sm z-10">
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
              <div className="w-36 h-36 rounded-full overflow-hidden bg-white border border-[#e5e5e5] shadow-sm mb-6">
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
        className="relative w-full overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60"
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
        <div className="relative flex min-h-[min(85vw,320px)] lg:min-h-0 lg:h-full items-center justify-center overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60">
          <ImageWithFallback
            src={media.logicImage}
            alt="UI logic diagram"
            className="absolute inset-0 w-full h-full object-contain object-center p-2"
          />
        </div>
        <div className="relative flex min-h-[min(85vw,320px)] lg:min-h-0 lg:h-full items-center justify-center overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60">
          <ImageWithFallback
            src={media.storyboardImage}
            alt="UI storyboard"
            className="absolute inset-0 w-full h-full object-contain object-center p-2"
          />
        </div>
        <div className="relative w-full self-start aspect-video overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60">
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
  /^(Aim|How|Effect|目标|方式|效果):\s?(.*)$/u;

function ToolDevelopmentLine({ item }: { item: string }) {
  const match = item.match(TOOL_LABEL_LINE);
  if (!match) return <>{item}</>;

  const [, label, body] = match;
  return (
    <>
      <span className="underline decoration-[#2F4156] underline-offset-2">
        {label}:
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
                ? "font-semibold text-[#2F4156] mt-4 first:mt-0 list-none"
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
        <div className="relative flex-1 w-full min-h-[min(85vw,420px)] lg:min-h-0 lg:h-full overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60">
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
  const showStepText =
    !hasHowItems &&
    !hasIntegrationGallery &&
    step.text.trim().length > 0;

  return (
    <div className="grid grid-cols-1 gap-10">
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
              {showStepText ? (
                <p className="text-[#6b6b6b] leading-relaxed mt-3 whitespace-pre-line">
                  {step.text}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {!hasHowItems && !hasIntegrationGallery && (
          <div className="lg:col-span-3 aspect-video bg-[#fafafa] overflow-hidden">
            <ImageWithFallback
              src={step.image}
              alt={`${step.stage} image`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {hasIntegrationGallery && (
        <div className="lg:ml-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {step.integrationImages!.map((src, imageIdx) => (
              <div
                key={src}
                className="relative w-full aspect-[4/3] overflow-hidden bg-[#fafafa] border border-[#e5e5e5]/60"
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
                    <StepImagesRow images={item.stepImages} />
                  )}
                </div>
                <div className="lg:col-span-3">
                  {item.carouselSlides && item.carouselSlides.length > 0 ? (
                    <ProcessImageCarousel slides={item.carouselSlides} />
                  ) : (
                    <div className="aspect-video bg-[#fafafa] overflow-hidden border border-[#e5e5e5]/60">
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
  const bilibiliUrl =
    project.videoUrl && videoKind === "bilibili"
      ? normalizeEmbedUrl(project.videoUrl)
      : null;

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

  const process: ProcessStepData[] = detail
    ? [
        {
          stage: labels.processSteps.research,
          text: detail.process.research,
          image: detail.processImages?.research ?? getImg(0),
        },
        {
          stage: labels.processSteps.tasks,
          text: detail.process.tasks,
          image: detail.processImages?.tasks ?? getImg(2),
        },
        {
          stage: labels.processSteps.how,
          text: "",
          image: imagePlaceholder,
          howItems: detail.process.howItems.map((item) => ({
            title: item.title,
            text: item.text,
            image: item.image ?? imagePlaceholder,
            stepImages: item.stepImages,
            animationCategories: item.animationCategories,
            carouselSlides: item.carouselSlides,
            shaderSections: item.shaderSections,
            uiUxMedia: item.uiUxMedia,
            toolDevelopment: item.toolDevelopment,
          })),
        },
        {
          stage: labels.processSteps.output,
          text: detail.process.output,
          image: detail.processImages?.output ?? getImg(9),
          integrationImages: detail.process.integrationImages,
        },
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

  const resultImages = detail?.resultGalleryImages
    ? [...detail.resultGalleryImages]
    : ([project.images[10], project.images[11], project.images[12]].filter(
        Boolean,
      ) as string[]);

  const resultGallery2x2 = resultImages.length === 4;

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
        ) : videoKind === "bilibili" && bilibiliUrl ? (
          <iframe
            src={bilibiliUrl}
            title={`${project.name} Hero`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
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
      <section className="px-6 py-16 bg-white">
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

      <WhatWhySection heading={labels.whatWhy} items={whatWhyItems} />

      {approachItems && approachItems.length > 0 && (
        <ApproachItemsSection
          heading={labels.approach}
          items={approachItems}
          placeholderImage={imagePlaceholder}
        />
      )}

      {/* Process */}
      <section className="px-6 py-20 bg-white">
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
      <section className="px-6 py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>{labels.resultImpact}</SectionHeading>

          <div className="w-full space-y-8">
            <div
              className={
                resultGallery2x2
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full"
                  : "grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
              }
            >
              {(resultImages.length ? resultImages : [project.previewImage]).map(
                (src, imageIdx) => (
                  <div
                    key={src}
                    className="bg-white overflow-hidden aspect-video border border-[#e5e5e5]/60"
                  >
                    <ImageWithFallback
                      src={src}
                      alt={`Result image ${imageIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ),
              )}
            </div>

            <p className="w-full text-[#6b6b6b] leading-relaxed text-lg whitespace-pre-line">
              {resultImpactText}
            </p>

            {project.videoUrl && videoKind !== "none" && (
              <div className="w-full aspect-video bg-[#1a1a1a]">
                {videoKind === "youtube" && (detailsYouTube ?? project.videoUrl) ? (
                  <iframe
                    src={detailsYouTube ?? project.videoUrl}
                    title={`${project.name} Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : videoKind === "bilibili" && bilibiliUrl ? (
                  <iframe
                    src={bilibiliUrl}
                    title={`${project.name} Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : videoKind === "mp4" ? (
                  <video
                    className="w-full h-full object-cover"
                    src={project.videoUrl}
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


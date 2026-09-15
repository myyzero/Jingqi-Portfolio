import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  getAllWorksContent,
  getProjectsForToolTag,
  getWorksPageLabels,
  getWorksToolTags,
  getWorksTypeLabel,
  isWorksToolTagFilterable,
  worksCatalog,
  worksDisplayOrder,
  type Language,
  type WorksCategory,
  type WorksToolTag,
  type WorksToolTagId,
} from "../../../content";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { withAutoScrollBehavior } from "../utils/scrollBehavior";

type WorkIndexItem = {
  id: string;
  name: string;
  keyword: string;
  type: WorksCategory;
  previewImage: string;
  toolTags: WorksToolTag[];
};

const TAG_EASE = [0.22, 1, 0.36, 1] as const;
const NAV_OFFSET = 96;

function scrollToWorksFilterHeading(headingEl: HTMLElement | null) {
  if (!headingEl) return;
  const top =
    headingEl.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  withAutoScrollBehavior(() => {
    window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
  });
}

function buildIndexItems(language: Language): WorkIndexItem[] {
  const all = getAllWorksContent(language);

  return Object.entries(worksCatalog)
    .map(([id, category]) => {
      const project = all.find((p) => p.id === id);
      if (!project) return null;

      return {
        id: project.id,
        name: project.name,
        keyword: project.keyword,
        type: category,
        previewImage: project.previewImage,
        toolTags: getWorksToolTags(project.id),
      };
    })
    .filter((item): item is WorkIndexItem => item !== null);
}

function WorkCard({
  item,
  language,
  showTagAlways = false,
  onToolTagClick,
}: {
  item: WorkIndexItem;
  language: Language;
  /** Mobile / no-hover: keep category tag visible. */
  showTagAlways?: boolean;
  onToolTagClick: (tag: WorksToolTagId) => void;
}) {
  const categoryLabel = getWorksTypeLabel(item.type, language);
  const [imageHovered, setImageHovered] = useState(false);
  const tagVisible = showTagAlways || imageHovered;
  const detailTo = `/${language}/works/${item.id}`;

  return (
    <div
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
    >
      <Link
        to={detailTo}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#567C8D]/40"
        aria-label={item.name}
      >
        <div className="overflow-hidden bg-[#fafafa] aspect-[1921/1080]">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {item.previewImage ? (
              <ImageWithFallback
                src={item.previewImage}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#1a1a1a]" />
            )}
          </motion.div>
        </div>
      </Link>

      <div className="mt-3 flex items-start justify-between gap-3">
        <Link to={detailTo} className="min-w-0 flex-1 space-y-1.5 block">
          <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] leading-snug">
            {item.name}
          </h3>
          <p className="text-base text-[#6b6b6b] leading-relaxed">
            {item.keyword}
          </p>
          <div className="min-h-[1.5rem] overflow-hidden">
            <motion.span
              className="inline-block mt-1 px-2 py-0.5 rounded-sm bg-[#e8e8e8] text-[11px] text-[#3a3a3a]"
              initial={false}
              animate={
                tagVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }
              }
              transition={{ duration: 0.35, ease: TAG_EASE }}
              aria-hidden={!tagVisible}
            >
              {categoryLabel}
            </motion.span>
          </div>
        </Link>

        {item.toolTags.length > 0 && (
          <div
            className="flex flex-wrap justify-end content-start gap-1 max-w-[55%] shrink-0"
            aria-hidden={!tagVisible}
          >
            {item.toolTags.map((tag) => {
              const filterable = isWorksToolTagFilterable(tag.label);
              return (
                <motion.button
                  key={tag.label}
                  type="button"
                  className={`inline-block px-2 py-0.5 rounded-sm text-[11px] text-black origin-center ${
                    filterable ? "cursor-pointer" : "cursor-default"
                  }`}
                  style={{ backgroundColor: tag.color }}
                  initial={false}
                  animate={
                    tagVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }
                  }
                  whileHover={filterable ? { scale: 1.1 } : undefined}
                  whileTap={filterable ? { scale: 1.05 } : undefined}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  disabled={!filterable}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!filterable) return;
                    (e.currentTarget as HTMLButtonElement).blur();
                    onToolTagClick(tag.label);
                  }}
                >
                  {tag.label}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function WorksIndex({ language }: { language: Language }) {
  const labels = getWorksPageLabels(language);
  const [activeToolTag, setActiveToolTag] = useState<WorksToolTagId | null>(
    null,
  );
  const worksHeadingRef = useRef<HTMLDivElement>(null);

  const allItems = useMemo(() => buildIndexItems(language), [language]);
  const byId = useMemo(() => {
    const map = new Map<string, WorkIndexItem>();
    for (const item of allItems) map.set(item.id, item);
    return map;
  }, [allItems]);

  const displayItems = useMemo(() => {
    const ids = activeToolTag
      ? getProjectsForToolTag(activeToolTag)
      : [...worksDisplayOrder];
    return ids
      .map((id) => byId.get(id))
      .filter((item): item is WorkIndexItem => item != null);
  }, [activeToolTag, byId]);

  const heading = activeToolTag ?? labels.heading;

  useEffect(() => {
    if (!activeToolTag) return;
    let cancelled = false;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) scrollToWorksFilterHeading(worksHeadingRef.current);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
    };
  }, [activeToolTag]);

  return (
    <section id="works" className="min-h-screen scroll-mt-24 py-28">
      <div className="page-shell">
        <motion.div
          ref={worksHeadingRef}
          className="mb-14 flex flex-wrap items-baseline gap-x-6 gap-y-2 scroll-mt-[96px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="works-filter-heading"
            className="text-[#6086ad] tracking-widest uppercase text-2xl md:text-3xl font-bold"
          >
            {heading}
          </h2>
          {activeToolTag && (
            <button
              type="button"
              onClick={() => setActiveToolTag(null)}
              className="text-[#6086ad]/80 hover:text-[#6086ad] tracking-widest uppercase text-sm md:text-base font-semibold transition-colors"
            >
              {labels.allWorks}
            </button>
          )}
        </motion.div>

        {/* Desktop: equal 2-column grid (3 rows × 2 cols for six works) */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-6 gap-y-14">
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <WorkCard
                item={item}
                language={language}
                onToolTagClick={setActiveToolTag}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: single column, same reading order */}
        <div className="md:hidden flex flex-col gap-10">
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <WorkCard
                item={item}
                language={language}
                showTagAlways
                onToolTagClick={setActiveToolTag}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

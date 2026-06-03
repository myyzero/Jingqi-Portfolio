import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import type { Language } from "../../../content";
import { getAllWorksContent } from "../../../content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type WorkType =
  | "all"
  | "interaction-design"
  | "game-digital-experience"
  | "animation-film"
  | "future-design";

type WorkIndexItem = {
  id: string;
  name: string;
  keyword: string;
  type: Exclude<WorkType, "all">;
  previewImage: string;
  infoType: string;
  infoRole: string;
  infoTools: string;
  infoSummary: string;
};

const WORKS_CATALOG: Record<string, Exclude<WorkType, "all">> = {
  "popup-museum": "interaction-design",
  "seeing-unseen": "interaction-design",
  "dragon-mountain": "game-digital-experience",
  "aquas-will": "game-digital-experience",
  "life-begets-life": "animation-film",
  "yuliu-tea-ceremony": "animation-film",
  montage: "animation-film",
  "future-design-project": "future-design",
};

const EN_INFO_OVERRIDES: Partial<
  Record<string, Pick<WorkIndexItem, "infoType" | "infoRole" | "infoTools">>
> = {
  "popup-museum": {
    infoType: "Team Project",
    infoRole: "Animator",
    infoTools: "Maya, Unity, Adobe CS",
  },
};

const ZH_INFO_OVERRIDES: Partial<
  Record<string, Pick<WorkIndexItem, "infoType" | "infoRole" | "infoTools">>
> = {
  "popup-museum": {
    infoType: "团队项目",
    infoRole: "动画师",
    infoTools: "Maya, Unity, Adobe CS",
  },
};

function getTypeLabel(type: WorkType, language: Language) {
  if (language === "zh") {
    switch (type) {
      case "all":
        return "全部";
      case "interaction-design":
        return "交互设计";
      case "game-digital-experience":
        return "游戏与数字体验";
      case "animation-film":
        return "动画与影像";
      case "future-design":
        return "未来设计";
    }
  }

  switch (type) {
    case "all":
      return "All";
    case "interaction-design":
      return "Interaction Design";
    case "game-digital-experience":
      return "Game & Digital Experience";
    case "animation-film":
      return "Animation & Film";
    case "future-design":
      return "Future Design";
  }
}

function getWorksLabels(language: Language) {
  if (language === "zh") {
    return {
      heading: "作品",
      type: "类型",
      role: "我的职责",
      tools: "工具",
      summary: "简介",
    };
  }

  return {
    heading: "Works",
    type: "Type",
    role: "My Role",
    tools: "Tools",
    summary: "Summary",
  };
}

function buildIndexItems(language: Language): WorkIndexItem[] {
  const all = getAllWorksContent(language);
  const overrides = language === "zh" ? ZH_INFO_OVERRIDES : EN_INFO_OVERRIDES;

  const items = Object.entries(WORKS_CATALOG)
    .map(([id, category]) => {
      const project = all.find((p) => p.id === id);
      if (!project) return null;

      const override = overrides[id];

      return {
        id: project.id,
        name: project.name,
        keyword: project.keyword,
        type: category,
        previewImage: project.previewImage,
        infoType: override?.infoType ?? project.type,
        infoRole: override?.infoRole ?? project.role,
        infoTools: override?.infoTools ?? project.tools ?? "",
        infoSummary: project.summary,
      };
    })
    .filter((item): item is WorkIndexItem => item !== null);

  items.sort((a, b) => {
    if (a.id === "popup-museum") return -1;
    if (b.id === "popup-museum") return 1;
    return a.name.localeCompare(b.name, language === "zh" ? "zh" : "en");
  });

  return items;
}

function InfoLabels({
  labels,
  item,
}: {
  labels: ReturnType<typeof getWorksLabels>;
  item: WorkIndexItem;
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 text-xs leading-relaxed">
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.type}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoType}</span>
        </div>
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.role}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoRole}</span>
        </div>
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.tools}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoTools}</span>
        </div>
      </div>
      <div className="text-xs text-[#6b6b6b] leading-relaxed">
        <span className="tracking-widest uppercase font-bold text-[#2F4156]">
          {labels.summary}
        </span>
        <span className="text-[#1a1a1a]">: {item.infoSummary}</span>
      </div>
    </>
  );
}

function InfoLabelsMobile({
  labels,
  item,
}: {
  labels: ReturnType<typeof getWorksLabels>;
  item: WorkIndexItem;
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 text-xs leading-relaxed">
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.type}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoType}</span>
        </div>
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.role}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoRole}</span>
        </div>
        <div className="text-[#6b6b6b]">
          <span className="tracking-widest uppercase font-bold text-[#2F4156]">
            {labels.tools}
          </span>
          <span className="text-[#1a1a1a]">: {item.infoTools}</span>
        </div>
      </div>
      <div className="text-xs text-[#6b6b6b] leading-relaxed">
        <span className="tracking-widest uppercase font-bold text-[#2F4156]">
          {labels.summary}
        </span>
        <span className="text-[#1a1a1a]">: {item.infoSummary}</span>
      </div>
    </>
  );
}

export function WorksIndex({ language }: { language: Language }) {
  const labels = getWorksLabels(language);
  const allItems = useMemo(() => buildIndexItems(language), [language]);

  const [selectedType, setSelectedType] = useState<WorkType>("all");
  const filteredItems = useMemo(() => {
    if (selectedType === "all") return allItems;
    return allItems.filter((i) => i.type === selectedType);
  }, [allItems, selectedType]);

  const [selectedId, setSelectedId] = useState<string | null>(() => {
    return filteredItems[0]?.id ?? null;
  });

  const selectedItem = useMemo(() => {
    return filteredItems.find((i) => i.id === selectedId) ?? filteredItems[0] ?? null;
  }, [filteredItems, selectedId]);

  React.useEffect(() => {
    const exists = filteredItems.some((i) => i.id === selectedId);
    if (!exists) setSelectedId(filteredItems[0]?.id ?? null);
  }, [filteredItems, selectedId]);

  const types: WorkType[] = [
    "all",
    "interaction-design",
    "game-digital-experience",
    "animation-film",
    "future-design",
  ];

  return (
    <section id="works" className="min-h-screen px-6 py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-14 text-[#CBD9E6] tracking-widest uppercase text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {labels.heading}
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-6">
            <div className="bg-[#fafafa] overflow-hidden">
              {selectedItem?.previewImage ? (
                <ImageWithFallback
                  src={selectedItem.previewImage}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover aspect-video"
                />
              ) : (
                <div className="w-full aspect-video bg-[#1a1a1a]" />
              )}
            </div>

            {selectedItem && (
              <div className="mt-4 space-y-3 max-w-full">
                <InfoLabels labels={labels} item={selectedItem} />
              </div>
            )}
          </div>

          <div className="col-span-3">
            <div className="space-y-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`w-full text-left px-3 py-2 text-xs tracking-widest uppercase transition-colors ${
                    selectedType === t
                      ? "text-[#567C8D] font-bold"
                      : "text-[#6b6b6b] hover:text-[#567C8D] hover:font-bold"
                  }`}
                >
                  {getTypeLabel(t, language)}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-3 max-h-[70vh] overflow-y-auto pr-2">
            <div className="space-y-4">
              {filteredItems.map((item) => {
                const isSelected = item.id === selectedItem?.id;
                return (
                  <Link
                    key={item.id}
                    to={`/${language}/works/${item.id}`}
                    onMouseEnter={() => setSelectedId(item.id)}
                    onFocus={() => setSelectedId(item.id)}
                    className={`block px-3 py-2 rounded-sm transition-colors ${
                      isSelected ? "bg-[#f3f3f3]" : "hover:bg-[#fafafa]"
                    }`}
                  >
                    <div className="text-xs text-[#6b6b6b] tracking-wide">
                      {item.keyword}
                    </div>
                    <div
                      className={`text-sm ${isSelected ? "text-[#567C8D]" : "text-[#1a1a1a]"}`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6">
          <div className="bg-[#fafafa] overflow-hidden">
            {selectedItem?.previewImage ? (
              <ImageWithFallback
                src={selectedItem.previewImage}
                alt={selectedItem.name}
                className="w-full object-cover aspect-video"
              />
            ) : (
              <div className="w-full aspect-video bg-[#1a1a1a]" />
            )}
          </div>

          {selectedItem && (
            <div className="space-y-3">
              <InfoLabelsMobile labels={labels} item={selectedItem} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="space-y-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`w-full text-left px-2 py-2 text-[10px] tracking-widest uppercase transition-colors ${
                    selectedType === t
                      ? "text-[#567C8D] font-bold"
                      : "text-[#6b6b6b] hover:text-[#567C8D] hover:font-bold"
                  }`}
                >
                  {getTypeLabel(t, language)}
                </button>
              ))}
            </div>

            <div className="max-h-[45vh] overflow-y-auto pr-1">
              <div className="space-y-3">
                {filteredItems.map((item) => {
                  const isSelected = item.id === selectedItem?.id;
                  return (
                    <Link
                      key={item.id}
                      to={`/${language}/works/${item.id}`}
                      onClick={(e) => {
                        if (!isSelected) {
                          e.preventDefault();
                          setSelectedId(item.id);
                        }
                      }}
                      className={`block px-2 py-2 rounded-sm transition-colors ${
                        isSelected ? "bg-[#f3f3f3]" : "hover:bg-[#fafafa]"
                      }`}
                    >
                      <div className="text-[10px] text-[#6b6b6b] tracking-wide">
                        {item.keyword}
                      </div>
                      <div
                        className={`text-xs ${isSelected ? "text-[#567C8D]" : "text-[#1a1a1a]"}`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

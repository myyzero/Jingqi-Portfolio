import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  type Project,
  type Language,
  getProjectContent,
} from "../../../content";

// Convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  // Handle youtu.be format
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) {
    return `https://www.youtube.com/embed/${youtuBeMatch[1]}`;
  }

  // Handle youtube.com/watch format
  const youtubeMatch = url.match(
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Already in embed format
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  return url;
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
    >
      <div className="relative mb-4 overflow-hidden bg-white aspect-[16/10]">
        <ImageWithFallback
          src={project.previewImage}
          alt={project.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      </div>
      <h4 className="text-lg text-[#1a1a1a] mb-2">
        {project.name}
      </h4>
      <p className="text-sm text-[#6b6b6b] line-clamp-2">
        {project.summary}
      </p>
    </motion.div>
  );
}

function ProjectDetail({
  project,
  language,
  onClose,
}: {
  project: Project;
  language: Language;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const labels =
    language === "zh"
      ? {
          back: "返回项目列表",
          type: "项目类型",
          role: "我的职责",
          tools: "使用工具",
          details: "项目说明",
          website: "项目网站",
          websiteCta: "查看项目网站",
          moreDetails: "更多详情",
          moreDetailsCta: "查看完整作品集",
          summary: "项目概述",
          video: "项目视频",
        }
      : {
          back: "Back to Projects",
          type: "Type",
          role: "My Role",
          tools: "Tools",
          details: "Details",
          website: "Website",
          websiteCta: "View Project Website",
          moreDetails: "More Details",
          moreDetailsCta: "View the complete Portfolio of this project",
          summary: "Summary",
          video: "Video",
        };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={onClose}
          className="mb-8 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm tracking-wider uppercase"
        >
          ← {labels.back}
        </button>

        <h2 className="text-4xl text-[#1a1a1a] mb-4">
          {project.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-3">
            {/* Image Gallery */}
            <div className="relative bg-[#fafafa] mb-4 group">
              <div
                className={
                  project.id === "mixing-happiness" ||
                  project.id === "emotional-trap"
                    ? "w-full"
                    : "aspect-[16/10] w-full"
                }
              >
                <ImageWithFallback
                  src={project.images[currentImageIndex]}
                  alt={`${project.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Arrows - Transparent */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 aspect-video overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-[#a8c5d8]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                  {labels.type}
                </h3>
                <p className="text-[#1a1a1a]">{project.type}</p>
              </div>
              <div>
                <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                  {labels.role}
                </h3>
                <p className="text-[#1a1a1a]">{project.role}</p>
              </div>
              {project.tools && (
                <div>
                  <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                    {labels.tools}
                  </h3>
                  <p className="text-[#1a1a1a]">{project.tools}</p>
                </div>
              )}
              {project.details && (
                <div>
                  <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                    {labels.details}
                  </h3>
                  <p className="text-[#1a1a1a]">{project.details}</p>
                </div>
              )}
              {project.website && (
                <div>
                  <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                    {labels.website}
                  </h3>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#397fdf] hover:underline text-sm break-all"
                  >
                    {labels.websiteCta}
                  </a>
                </div>
              )}
              {project.moreDetails && (
                <div>
                  <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                    {labels.moreDetails}
                  </h3>
                  <a
                    href={project.moreDetails}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#397fdf] hover:underline text-sm"
                  >
                    {labels.moreDetailsCta}
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-4">
            {labels.summary}
          </h3>
          <p className="text-[#1a1a1a] leading-relaxed text-lg whitespace-pre-line">
            {project.summary}
          </p>
        </div>

        {/* Video */}
        {project.videoUrl && (
          <div className="mb-8">
            <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-4">
              {labels.video}
            </h3>
            <div className="aspect-video bg-[#1a1a1a]">
              <iframe
                src={getYouTubeEmbedUrl(project.videoUrl)}
                title={`${project.name} Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function InteractiveProjects({ language }: { language: Language }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const { interactiveInstallation, immersiveGaming } =
    getProjectContent(language);

  const sectionLabels =
    language === "zh"
      ? {
          heading: "交互项目",
          installation: "交互装置 | 可穿戴设计",
          immersive: "沉浸式体验设计 | 游戏",
        }
      : {
          heading: "Interactive Projects",
          installation: "Interactive Installation | Wearable Design",
          immersive: "Immersive Experience Design | Gaming",
        };

  return (
    <>
      <section
        id="interactive-projects"
        ref={ref}
        className="min-h-screen px-6 py-32 bg-white"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-20 text-[#a8c5d8] tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {sectionLabels.heading}
          </motion.div>

          {/* Interactive Installation */}
          <div className="mb-24">
            <h3 className="text-2xl text-[#1a1a1a] mb-8">
              {sectionLabels.installation}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interactiveInstallation.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
            </div>
          </div>

          {/* Immersive Experience Design and Gaming */}
          <div className="mb-24">
            <h3 className="text-2xl text-[#1a1a1a] mb-8">
              {sectionLabels.immersive}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {immersiveGaming.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
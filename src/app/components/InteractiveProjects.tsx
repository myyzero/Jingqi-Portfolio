import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";
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
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button
          onClick={onClose}
          className="mb-8 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors text-sm tracking-wider uppercase"
        >
          ← Back to Projects
        </button>

        <h2 className="text-4xl text-[#1a1a1a] mb-4">
          {project.name}
        </h2>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative bg-[#fafafa] mb-4 group">
            <div className={project.id === "mixing-happiness" || project.id === "emotional-trap" ? "w-full" : "aspect-[16/9] w-full"}>
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
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

        {/* Video */}
        {project.videoUrl && (
          <div className="mb-8">
            <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-4">
              Video
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

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
              Type
            </h3>
            <p className="text-[#1a1a1a]">{project.type}</p>
          </div>
          <div>
            <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
              Role
            </h3>
            <p className="text-[#1a1a1a]">{project.role}</p>
          </div>
          {project.tools && (
            <div>
              <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                Tools
              </h3>
              <p className="text-[#1a1a1a]">{project.tools}</p>
            </div>
          )}
          {project.details && (
            <div>
              <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                Details
              </h3>
              <p className="text-[#1a1a1a]">
                {project.details}
              </p>
            </div>
          )}
          {project.website && (
            <div>
              <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                Website
              </h3>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a8c5d8] hover:underline text-sm break-all"
              >
                View Project Website （作品网站）
              </a>
            </div>
          )}
          {project.moreDetails && (
            <div>
              <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-2">
                More Details
              </h3>
              <a
                href={project.moreDetails}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a8c5d8] hover:underline text-sm"
              >
                View the complete Portfolio of this project (查看完整作品集)
              </a>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm text-[#a8c5d8] tracking-wider uppercase mb-4">
            Summary
          </h3>
          <p className="text-[#1a1a1a] leading-relaxed text-lg whitespace-pre-line">
            {project.summary}
          </p>
        </div>
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
            Interactive Projects
          </motion.div>

          {/* Interactive Installation */}
          <div className="mb-24">
            <h3 className="text-2xl text-[#1a1a1a] mb-8">
              Interactive Installation | Wearable Design
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
              Immersive Experience Design | Gaming
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
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
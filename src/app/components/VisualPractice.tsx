import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import type { Language, MediaItemContent } from "../../../content";
import { getVisualPracticeContent } from "../../../content";

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  // Bilibili 嵌入地址直接返回
  if (url.includes("player.bilibili.com")) {
    return url;
  }

  const videoId =
    url.split("youtu.be/")[1]?.split("?")[0] ||
    url.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    return url;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

function MediaItemComponent({
  item,
  index,
  onVideoClick,
}: {
  item: MediaItemContent;
  index: number;
  onVideoClick?: (item: MediaItemContent) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (item.type === "category") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="col-span-2 md:col-span-4 flex items-center mt-8 first:mt-0"
      >
        <h3 className="text-xl text-[#1a1a1a] tracking-wide">
          {item.title}
        </h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      {/* Media Container - aspect-square means 1:1 ratio */}
      <div className="relative mb-3 overflow-hidden bg-[#fafafa] aspect-square">
        {item.type === "youtube" && item.videoUrl ? (
          <div className="w-full h-full bg-[#1a1a1a] relative cursor-pointer" onClick={() => onVideoClick?.(item)}>
            {/* Thumbnail */}
            {item.image && (
              <ImageWithFallback
                src={item.image}
                alt={item.title || "Video thumbnail"}
                className="w-full h-full object-cover"
              />
            )}
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
              <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                <svg
                  className="w-8 h-8 text-[#1a1a1a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : item.type === "video" && item.videoUrl ? (
          <div className="w-full h-full bg-[#1a1a1a] relative">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                {item.image && (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title || "Video thumbnail"}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Play Button Overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                >
                  <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                    <svg
                      className="w-8 h-8 text-[#1a1a1a]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <video
                src={item.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onEnded={() => setIsPlaying(false)}
              />
            )}
          </div>
        ) : item.image ? (
          <ImageWithFallback
            src={item.image}
            alt={item.title || "Practice work"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
            <div className="text-center text-white text-xs">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-[10px] opacity-60">Media</p>
            </div>
          </div>
        )}
        {!isPlaying && (
          <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
        )}
      </div>

      {/* Title */}
      {item.title && <h4 className="text-sm text-[#1a1a1a]">{item.title}</h4>}
    </motion.div>
  );
}

// YouTube Video Modal Component
function VideoModal({
  item,
  onClose,
}: {
  item: MediaItemContent | null;
  onClose: () => void;
}) {
  if (!item || !item.videoUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl bg-[#1a1a1a] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Close video"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Title */}
        {item.title && (
          <div className="bg-[#1a1a1a] px-6 py-4 border-b border-white/10">
            <h3 className="text-lg text-white">{item.title}</h3>
          </div>
        )}

        {/* YouTube Embed */}
        <div className="aspect-video bg-black">
          <iframe
            src={getYouTubeEmbedUrl(item.videoUrl)}
            title={item.title || "Video"}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function VisualPractice({ language }: { language: Language }) {
  // ✅ 修复1: 降低阈值从 0.2 到 0.05，移动端更容易触发
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [selectedVideo, setSelectedVideo] = useState<MediaItemContent | null>(
    null,
  );
  const practiceData = getVisualPracticeContent(language);

  return (
    <section
      id="visual-practice"
      ref={ref}
      className="min-h-screen px-6 py-32 bg-[#fafafa]"
    >
      {/* ✅ 修复2: 移除 motion.div 和 opacity 动画，改用普通 div */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 text-[#a8c5d8] tracking-widest uppercase text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Visual & Technical Practice
        </motion.div>

        {/* All items in a single grid - 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {practiceData.map((item, index) => (
            <MediaItemComponent 
              key={item.id} 
              item={item} 
              index={index}
              onVideoClick={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
}

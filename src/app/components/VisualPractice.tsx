import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface MediaItem {
  id: number;
  title?: string;
  image?: string;
  videoUrl?: string;
  type: string;
}

const practiceData: MediaItem[] = [
  // 3D Animation Clips - Category Header
  {
    id: 1,
    title: "3D Animation Clips",
    type: "category",
  },
  {
    id: 2,
    title: "XPRESSO Tag",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629437/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250223231326_qb8lrl.jpg",
    type: "image",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629435/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250223154209_q20hzd.jpg",
    type: "image",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629438/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250223212738_u0xid9.jpg",
    type: "image",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772676896/%E5%9B%BE%E5%B1%82_8_js9bhq.png",
    type: "image",
  },
  {
    id: 6,
    title: "Life Begets Life",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772673238/%E5%9B%BE%E5%B1%82_1_bzg7mm.png",
    type: "image",
  },
  {
    id: 7,
    title: "This artwork tells the story of a whale’s life cycle, from birth to death, as it transforms into a core of pure energy.",
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772674275/%E6%9B%9D%E5%85%89%E5%BA%A6_1_rllvh0.png",
    type: "image",
  },
  {
    id: 8,
    title: "Using this energy, the whale reconstructs itself into a mechanical submarine, upon which an entire underwater city emerges.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772674274/%E6%9B%9D%E5%85%89%E5%BA%A6_1_%E6%8B%B7%E8%B4%9D_qddmb8.png",
    type: "image",
  },
  {
    id: 9,
    title: "The narrative symbolizes the interconnectedness of all living beings.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772674348/%E6%9B%9D%E5%85%89%E5%BA%A6_31_kl3lzz.png",
    type: "image",
  },
  {
    id: 10,
    title: "Interactive flower floor",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772673241/%E5%9B%BE%E5%B1%82_5_euqrew.png",
    type: "image",
  },
  {
    id: 11,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772673434/%E5%9B%BE%E5%B1%82_6_koszkv.png",
    type: "image",
  },
  {
    id: 12,
    title: "Modelling",
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629431/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250223152119_mhvwle.jpg",
    type: "image",
  },
  {
    id: 13,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772672979/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250223232905_hfntvh.png",
    type: "image",
  },

  // Creative Coding - Processing - Category Header
  {
    id: 14,
    title: "Creative Coding - Processing",
    type: "category",
  },
  {
    id: 15,
    title: "The cat's eyes, shape and tail can change according to the trigger of mouse.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629247/cat_2_kymnob.jpg",
    type: "image",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629245/cat_1_rx37kp.jpg",
    type: "image",
  },
  {
    id: 17,
    title: "Bubble milk tea made from simple geometric shapes can be rotated to any angle.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629261/milktea_2_e2zprg.jpg",
    type: "image",
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772629259/milktea_1_yocfp3.jpg",
    type: "image",
  },

  // Design Practice - Category Header
  {
    id: 19,
    title: "Design Practice",
    type: "category",
  },
  {
    id: 20,
    title: "Workflow: Rhino-Processing-CompyUI",
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772631235/RhinoModel_nl1b8j.jpg",
    type: "image",
  },
  {
    id: 21,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772631239/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250416181635_r2iaqw.jpg",
    type: "image",
  },
  {
    id: 22,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772631238/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250416181617_jsjwt9.jpg",
    type: "image",
  },
  {
    id: 23,
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772631236/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250416172145_ta5ano.jpg",
    type: "image",
  },
  {
    id: 24,
    title: "Gaming design, player can explore the whole world, interacting with different elements.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772624345/UNITY_SKILLS_2025_HERO_04_hjzptv.jpg",
    type: "image",
  },
  {
    id: 25,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772624344/UNITY_SKILLS_2025_HERO_01_azfmku.jpg",
    type: "image",
  },
  {
    id: 26,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772624344/UNITY_SKILLS_2025_HERO_03_doinks.jpg",
    type: "image",
  },
  {
    id: 27,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772631985/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250507045003_aii7xz.jpg",
    type: "image",
  },
  {
    id: 28,
    title: "Rigging",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772632006/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250507010700_yki0d7.jpg",
    type: "image",
  },
  {
    id: 29,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772632004/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250507010458_mkbucx.jpg",
    type: "image",
  },
  {
    id: 30,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772632030/aqua_joint_front_vgx3zq.jpg",
    type: "image",
  },
  {
    id: 31,
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772632028/aqua_joint_top_coxaua.jpg",
    type: "image",
  },
  {
    id: 32,
    title: "Character animation design",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772721242/%E5%9B%BE%E5%B1%82_7_rmyjo9.png",
    type: "image",
  },
  {
    id: 33,
    title: "Fluid Simulation (Bifrost) & Particle System (nParticle)",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772721242/%E5%9B%BE%E5%B1%8211_3_xtb5ak.png",
    type: "image",
  },
  {
    id: 34,
    title: "Rigging and Skinning: Use the ADV plugin for character rigging → paint skin weights → refine and optimize.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772721242/%E5%9B%BE%E7%89%8731_qmjrks.png",
    type: "image",
  },
  {
    id: 35,
    title: "Workflow: Record reference video → Plask AI → Maya → apply motion capture data to the character model → refine and optimize wrist and finger movements.",
    image:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772721243/%E5%9B%BE%E5%B1%82_522_niimb9.png",
    type: "image",
  },

  // Others - Category Header
  {
    id: 36,
    title: "Others",
    type: "category",
  },
  {
    id: 37,
    title: "Montage",
    image: "https://res.cloudinary.com/dnigow6jb/image/upload/v1772676897/%E5%9B%BE%E5%B1%82_7_l4rq4r.png",
    videoUrl: "https://youtu.be/N8GMI1KpAhw",
    type: "youtube",
  }
];

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.split("youtu.be/")[1]?.split("?")[0] || url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

function MediaItemComponent({
  item,
  index,
  onVideoClick,
}: {
  item: MediaItem;
  index: number;
  onVideoClick?: (item: MediaItem) => void;
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
  item: MediaItem | null;
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

export function VisualPractice() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  return (
    <section
      id="visual-practice"
      ref={ref}
      className="min-h-screen px-6 py-32 bg-[#fafafa]"
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
      </motion.div>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
}

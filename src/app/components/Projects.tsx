import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Resonance Field",
    category: "Interactive Installation",
    description:
      "A spatial sound environment that translates visitor movement into evolving sonic textures",
    image:
      "https://images.unsplash.com/photo-1717388835937-f5f31bbb4cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGluc3RhbGxhdGlvbiUyMGFydCUyMG11c2V1bXxlbnwxfHx8fDE3NzIwMzQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    concept: "Exploring collective behavior through acoustic feedback",
    system:
      "Ultrasonic sensors → Motion tracking → Spatial audio synthesis",
    outcome: "8-channel immersive experience for 20-30 participants",
  },
  {
    id: 2,
    title: "Chromatic Breath",
    category: "Wearable Sensing System",
    description:
      "A garment that visualizes breathing patterns through dynamic color-shifting textiles",
    image:
      "https://images.unsplash.com/photo-1758577515333-e71b713059f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFyYWJsZSUyMHRlY2hub2xvZ3klMjBzZW5zb3J8ZW58MXx8fHwxNzcyMDM0NTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    concept: "Making invisible physiological rhythms visible and shared",
    system:
      "Respiration sensors → Breathing rate analysis → LED matrix control",
    outcome: "Worn by 15 performers in live performance setting",
  },
  {
    id: 3,
    title: "Liminal Frequencies",
    category: "Sound Environment",
    description:
      "An architecture-specific sound piece responding to ambient electromagnetic fields",
    image:
      "https://images.unsplash.com/photo-1770322186213-f75c59326555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmUlMjB2aXN1YWxpemF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwMzQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    concept: "Sonifying the invisible electromagnetic landscape",
    system:
      "EMF detection → Signal processing → Generative audio engine",
    outcome: "Site-specific installation, 6-week exhibition",
  },
  {
    id: 4,
    title: "Threshold Light",
    category: "Spatial Interface",
    description:
      "A responsive light installation that creates zones of intimacy through proximity sensing",
    image:
      "https://images.unsplash.com/photo-1681116864124-4544e613846c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGF0aWFsJTIwbGlnaHQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcyMDM0NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    concept: "Negotiating shared space through ambient feedback",
    system:
      "Depth cameras → Proximity mapping → Distributed lighting control",
    outcome: "Public installation, 3 months active engagement",
  },
];

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
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
          Selected Works
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              className="group cursor-pointer"
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              <div className="relative mb-6 overflow-hidden bg-white aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>

              <div className="space-y-3">
                <div className="text-xs text-[#6b6b6b] tracking-wider uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl text-[#1a1a1a] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[#6b6b6b] leading-relaxed">
                  {project.description}
                </p>

                {/* Expanded view */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedProject === project.id ? "auto" : 0,
                    opacity: selectedProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-6 border-t border-[#e5e5e5] space-y-4">
                    <div>
                      <div className="text-xs text-[#a8c5d8] mb-2 tracking-wider uppercase">
                        Concept
                      </div>
                      <p className="text-[#1a1a1a] text-sm">
                        {project.concept}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs text-[#a8c5d8] mb-2 tracking-wider uppercase">
                        System Logic
                      </div>
                      <p className="text-[#1a1a1a] text-sm font-mono">
                        {project.system}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs text-[#a8c5d8] mb-2 tracking-wider uppercase">
                        Outcome
                      </div>
                      <p className="text-[#6b6b6b] text-sm">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

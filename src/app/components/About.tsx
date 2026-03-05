import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32 bg-white"
    >
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-12 text-[#a8c5d8] tracking-widest uppercase text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p
            className="text-[#1a1a1a] leading-relaxed"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
          >
            My practice explores the intersection between{" "}
            <span className="text-[#6b6b6b] italic">
              human perception and environment
            </span>
            , creating systems that sense, interpret, and transform invisible
            phenomena into tangible experiences.
          </p>

          <p className="text-[#6b6b6b] leading-loose text-lg">
            Working across interactive installations, wearable sensing systems,
            and spatial interfaces, I design for embodied interaction—where
            sound, color, and sensation become instruments of communication.
          </p>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#e5e5e5]">
            <div>
              <h3 className="text-[#1a1a1a] mb-2 tracking-wide">Focus</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                Interaction between perception & environment
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2 tracking-wide">Method</h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                Sound · Color · Sensing · Embodied interaction
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] mb-2 tracking-wide">
                Background
              </h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                Digital Media, Design for Performance & Interaction
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

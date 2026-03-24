import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import type { Language } from "../../../content";
import { getAboutMeContent } from "../../../content";

export function AboutMe({ language }: { language: Language }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const content = getAboutMeContent(language);
  const skillLines = content.skillsText.split("\n");

  return (
    <section id="about-me" ref={ref} className="px-6 py-24 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8 text-[#a8c5d8] tracking-widest uppercase text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {content.heading}
        </motion.div>

        <motion.div
          className="w-full min-h-[55vh] flex flex-col justify-evenly text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div>
            <h3 className="mb-2 text-sm md:text-base text-[#1a1a1a] font-normal">
              {content.summaryTitle}
            </h3>
            <p
              className="text-[#6b6b6b] tracking-wide leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                fontWeight: 200,
              }}
            >
              {content.summaryText}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm md:text-base text-[#1a1a1a] font-normal">
              {content.skillsTitle}
            </h3>
            <div className="space-y-2">
              {skillLines.map((line) => {
                const [label, ...rest] = line.split(":");
                const value = rest.join(":");
                return (
                  <p key={line} className="leading-relaxed">
                    <span className="text-sm md:text-base text-[#4f4f4f] font-normal">
                      {label}:
                    </span>
                    <span
                      className="text-[#6b6b6b] tracking-wide"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                        fontWeight: 200,
                      }}
                    >
                      {value}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

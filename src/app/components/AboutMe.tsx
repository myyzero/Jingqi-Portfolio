import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import type { Language } from "../../../content";
import { getAboutMeContent } from "../../../content";

export function AboutMe({ language }: { language: Language }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const content = getAboutMeContent(language);
  const skillLines = content.skillsText.split("\n");
  const skillLabelSeparator = language === "zh" ? "" : ":";

  return (
    <section id="about-me" ref={ref} className="px-6 py-24">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8 text-[#6086ad] tracking-widest uppercase text-sm font-medium"
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
            <h3 className="mb-2 text-sm md:text-base text-[#6086ad] font-medium">
              {content.summaryTitle}
            </h3>
            <div className="space-y-4">
              {content.summaryText.split("\n\n").filter(Boolean).map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="text-[#a1c0df] tracking-wide leading-relaxed"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                    fontWeight: 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm md:text-base text-[#6086ad] font-medium">
              {content.skillsTitle}
            </h3>
            <div className="space-y-2">
              {skillLines.map((line) => {
                const [label, ...rest] = line.split(":");
                const value = rest.join(":");
                return (
                  <p key={line} className="leading-relaxed">
                    <span className="text-sm md:text-base text-[#6086ad] font-medium">
                      {label}
                      {skillLabelSeparator}
                    </span>
                    <span
                      className="text-[#a1c0df] tracking-wide"
                      style={{
                        fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                        fontWeight: 400,
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

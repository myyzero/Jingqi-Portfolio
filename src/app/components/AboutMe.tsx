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
          className="mb-8 text-[#6086ad] tracking-widest uppercase text-2xl md:text-3xl font-bold"
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
          <div className="rounded-2xl bg-white/20 px-6 py-6 md:px-8 md:py-8">
            <h3 className="mb-2 text-lg md:text-xl text-black font-bold">
              {content.summaryTitle}
            </h3>
            <div className="space-y-4">
              {content.summaryText.split("\n\n").filter(Boolean).map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="text-base text-[#6b6b6b] tracking-wide leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/20 px-6 py-6 md:px-8 md:py-8">
            <h3 className="mb-2 text-lg md:text-xl text-black font-bold">
              {content.skillsTitle}
            </h3>
            <div className="space-y-2">
              {skillLines.map((line) => {
                const [label, ...rest] = line.split(":");
                const value = rest.join(":");
                return (
                  <p key={line} className="leading-relaxed">
                    <span className="text-base text-black font-bold">
                      {label}
                      {skillLabelSeparator}
                    </span>
                    <span className="text-base text-[#6b6b6b] tracking-wide">
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

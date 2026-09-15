import { motion } from "motion/react";
import type { Language } from "../../../content";
import { getLandingContent } from "../../../content";

interface LandingProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Landing({ language, onLanguageChange }: LandingProps) {
  const content = getLandingContent(language);

  return (
    <section
      id="landing"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Content — single column, vertically centered as one group */}
      <motion.div
        className="page-shell-hero relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.h1
          className="tracking-tight text-[#6086ad]"
          style={{
            fontSize: "clamp(2.85rem, 7vw, 5.5rem)",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          {content.name}
        </motion.h1>

        <motion.p
          className="text-[#a1c0df] tracking-wide"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            fontWeight: 400,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={() => onLanguageChange("en")}
            className={
              language === "en"
                ? "text-[#a1c0df]"
                : "text-[#a1c0df]/50 hover:text-[#a1c0df] transition-colors duration-300"
            }
          >
            EN
          </button>
          <span className="text-[#a1c0df]">|</span>
          <button
            onClick={() => onLanguageChange("zh")}
            className={
              language === "zh"
                ? "text-[#a1c0df]"
                : "text-[#a1c0df]/50 hover:text-[#a1c0df] transition-colors duration-300"
            }
          >
            中文
          </button>
        </motion.div>

        <motion.p
          className="w-full max-w-3xl mx-auto text-[#a1c0df] tracking-wide"
          style={{
            fontSize: "clamp(0.95rem, 2.2vw, 1.35rem)",
            fontWeight: 400,
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {content.tagline}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-[#a8c5d8]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm text-[#a1c0df] tracking-wide">
            {content.scrollLabel}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

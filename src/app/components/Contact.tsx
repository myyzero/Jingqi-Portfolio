import React from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import type { Language } from "../../../content";
import { getContactContent } from "../../../content";

export function Contact({ language }: { language: Language }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const content = getContactContent(language);

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-32 bg-white"
    >
      <motion.div
        className="max-w-2xl w-full text-center"
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
          {content.heading}
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="pt-8">
            <a
              href={`mailto:${content.email}`}
              className="text-[#6b6b6b] hover:text-[#a8c5d8] transition-colors duration-300 text-lg tracking-wide"
            >
              {content.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 pt-12 border-t border-[#e5e5e5]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xs text-[#6b6b6b] tracking-wider">
            {content.footer}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
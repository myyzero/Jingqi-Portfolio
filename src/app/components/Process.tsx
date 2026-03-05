import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const processSteps = [
    {
      phase: "Sensing",
      description: "Identifying invisible phenomena to capture",
      elements: ["Environmental data", "Physiological signals", "Spatial patterns"],
    },
    {
      phase: "Interpretation",
      description: "Translating raw data into meaningful information",
      elements: ["Signal processing", "Pattern recognition", "Context mapping"],
    },
    {
      phase: "Transformation",
      description: "Designing perceptible output systems",
      elements: ["Sonic design", "Visual mapping", "Haptic feedback"],
    },
    {
      phase: "Experience",
      description: "Creating spaces for embodied interaction",
      elements: ["Spatial choreography", "Feedback loops", "Collective engagement"],
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="min-h-screen px-6 py-32 bg-white"
    >
      <motion.div
        className="max-w-6xl mx-auto"
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
          Process & Thinking
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p
            className="text-[#1a1a1a] leading-relaxed max-w-3xl"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
          >
            My approach is rooted in{" "}
            <span className="text-[#6b6b6b] italic">
              end-to-end systems thinking
            </span>
            —from sensing invisible phenomena to designing how they become
            perceptible and meaningful.
          </p>
        </motion.div>

        {/* Process flow diagram */}
        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
            <svg className="w-full h-full" style={{ overflow: "visible" }}>
              {processSteps.map((_, index) => {
                if (index === processSteps.length - 1) return null;
                const startX = (index + 0.5) * (100 / processSteps.length);
                const endX = (index + 1.5) * (100 / processSteps.length);
                return (
                  <motion.line
                    key={index}
                    x1={`${startX}%`}
                    y1="50%"
                    x2={`${endX}%`}
                    y2="50%"
                    stroke="#e5e5e5"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-[#fafafa] p-6 h-full border border-[#e5e5e5]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#a8c5d8]/20 flex items-center justify-center text-[#6b6b6b] text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-[#1a1a1a] tracking-wide">
                      {step.phase}
                    </h3>
                  </div>
                  <p className="text-[#6b6b6b] text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.elements.map((element, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#6b6b6b] flex items-start gap-2"
                      >
                        <span className="text-[#a8c5d8] mt-1">→</span>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System diagram example */}
        <motion.div
          className="mt-24 p-12 bg-[#fafafa] border border-[#e5e5e5]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-xs text-[#a8c5d8] mb-8 tracking-wider uppercase">
            Example System Architecture
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#a8c5d8] flex items-center justify-center text-[#6b6b6b] text-xs">
                INPUT
              </div>
              <div className="text-sm text-[#1a1a1a] mb-2">
                Environmental Sensors
              </div>
              <div className="text-xs text-[#6b6b6b] font-mono">
                Temperature · Humidity · Motion · Proximity
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#a8c5d8] flex items-center justify-center text-[#6b6b6b] text-xs">
                PROCESS
              </div>
              <div className="text-sm text-[#1a1a1a] mb-2">
                Data Transformation
              </div>
              <div className="text-xs text-[#6b6b6b] font-mono">
                Filtering · Mapping · Synthesis
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#a8c5d8] flex items-center justify-center text-[#6b6b6b] text-xs">
                OUTPUT
              </div>
              <div className="text-sm text-[#1a1a1a] mb-2">
                Experiential Response
              </div>
              <div className="text-xs text-[#6b6b6b] font-mono">
                Sound · Light · Vibration
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

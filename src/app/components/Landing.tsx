import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import type { Language } from "../../../content";
import { getLandingContent } from "../../../content";
import landingBackground from "../../../materials/background_0.png";
import momentTagline from "../../../materials/Fonts/moment_1.png";

interface LandingProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function Landing({ language, onLanguageChange }: LandingProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const content = getLandingContent(language);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() * 0.5 - 0.25),
        speedY: (Math.random() * 0.5 - 0.25),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 197, 216, 0.2)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      id="landing"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${landingBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Animated particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      {/* Reactive light orb that follows cursor */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a8c5d8 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 20,
        }}
      />

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

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={momentTagline}
            alt="I care about the MOMENT when a concept RESONATES with PEOPLE."
            className="mx-auto w-full h-auto mix-blend-screen select-none"
            draggable={false}
          />
        </motion.div>

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
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Determine active section
      const sections = ["landing", "interactive-projects", "visual-practice", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "interactive-projects", label: "Interactive Projects" },
    { id: "visual-practice", label: "Visual & Technical Practice" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollToSection("landing")}
          className="text-[#1a1a1a] tracking-wider text-sm hover:text-[#a8c5d8] transition-colors duration-300"
        >
          ◆
        </button>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#a8c5d8]"
                  : "text-[#6b6b6b] hover:text-[#1a1a1a]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
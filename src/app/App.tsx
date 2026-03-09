import React, { useEffect, useState } from "react";
import { Landing } from "./components/Landing";
import { InteractiveProjects } from "./components/InteractiveProjects";
import { VisualPractice } from "./components/VisualPractice";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import type { Language } from "../../content";

const NavigationComponent = Navigation as any;
const LandingComponent = Landing as any;
const InteractiveProjectsComponent = InteractiveProjects as any;
const VisualPracticeComponent = VisualPractice as any;
const ContactComponent = Contact as any;

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const segments = window.location.pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first === "zh") return "zh";
  return "en";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage());

  useEffect(() => {
    document.title = "Jingqi Portfolio";
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const segments = window.location.pathname.split("/").filter(Boolean);
    const [, ...rest] = segments;
    const nextPath = `/${[language, ...rest].join("/")}`;
    if (window.location.pathname !== nextPath) {
      window.history.replaceState(null, "", nextPath);
    }
  }, [language]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.cookie = `lang=${language}; path=/; max-age=31536000`;
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <NavigationComponent
        language={language}
        onLanguageChange={setLanguage}
      />
      <LandingComponent
        language={language}
        onLanguageChange={setLanguage}
      />
      <InteractiveProjectsComponent language={language} />
      <VisualPracticeComponent language={language} />
      <ContactComponent language={language} />
    </div>
  );
}
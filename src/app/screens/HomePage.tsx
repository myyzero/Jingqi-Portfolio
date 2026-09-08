import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import type { Language } from "../../../content";
import { Navigation } from "../components/Navigation";
import { Landing } from "../components/Landing";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { WorksIndex } from "../components/WorksIndex";
import { withAutoScrollBehavior } from "../utils/scrollBehavior";
import pageBackground from "../../../materials/background_1.png";

function normalizeLanguage(raw: string | undefined): Language {
  return raw === "zh" ? "zh" : "en";
}

export function HomePage() {
  const { lang } = useParams();
  const language = useMemo(() => normalizeLanguage(lang), [lang]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Jingqi Portfolio";
  }, []);

  useEffect(() => {
    document.cookie = `lang=${language}; path=/; max-age=31536000`;
  }, [language]);

  useLayoutEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    const navState = location.state as
      | { intent?: "scroll"; scrollTo?: string; behavior?: ScrollBehavior }
      | null;

    // Important: refresh / manual URL entry should NOT auto-jump to Works.
    if (navState?.intent !== "scroll") {
      withAutoScrollBehavior(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
      return;
    }
    if (navState.scrollTo !== hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    // Override global smooth scroll for this jump.
    withAutoScrollBehavior(() => {
      el.scrollIntoView({ behavior: navState.behavior ?? "auto" });
    });
  }, [location.key, location.hash, location.state]);

  const onLanguageChange = (next: Language) => {
    if (next === language) return;
    navigate(`/${next}`, { replace: true });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${pageBackground})` }}
    >
      <Navigation language={language} onLanguageChange={onLanguageChange} />
      <Landing language={language} onLanguageChange={onLanguageChange} />
      <AboutMe language={language} />
      <WorksIndex language={language} />
      <Contact language={language} />
    </div>
  );
}


import { Landing } from "./components/Landing";
import { InteractiveProjects } from "./components/InteractiveProjects";
import { VisualPractice } from "./components/VisualPractice";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { useEffect } from "react";

export default function App() {
  // 设置浏览器标签页标题
  useEffect(() => {
    document.title = "Jingqi Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Landing />
      <InteractiveProjects />
      <VisualPractice />
      <Contact />
    </div>
  );
}
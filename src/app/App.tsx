import { Landing } from "./components/Landing";
import { InteractiveProjects } from "./components/InteractiveProjects";
import { VisualPractice } from "./components/VisualPractice";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
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

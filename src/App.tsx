import './App.css';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import { Atmosphere, GridOverlay } from './background';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import LeetCode from './sections/LeetCode';
import ExperienceEducation from './sections/Experience/ExperienceEducation';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AIAssistant from './features/ai-assistant';
import { useHeroEntrance } from './hooks/useHeroEntrance';
import { useRevealAnimations } from './hooks/useRevealAnimations';
import { useMagnetic } from './hooks/useMagnetic';

/** Composition root — mirrors the original single-file section order exactly:
 * preloader → backdrop → cursor → nav → hero → AI assistant → about →
 * tech stack → projects → leetcode → experience/education → stats →
 * contact → footer. */
export default function App() {
  const { preloaderDone, heroPlaying } = useHeroEntrance();
  useRevealAnimations();
  useMagnetic();

  return (
    <>
      <Preloader done={preloaderDone} />
      <Atmosphere />
      <GridOverlay />
      <CustomCursor />

      <Navbar />

      <Hero playEntrance={heroPlaying} />
      <AIAssistant />

      <About />
      <TechStack />
      <Projects />
      <LeetCode />
      <ExperienceEducation />
      <Stats />
      <Contact />

      <Footer />
    </>
  );
}

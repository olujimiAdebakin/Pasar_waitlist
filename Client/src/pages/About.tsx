import { useEffect } from "react";
import AboutHero from "../components/section/AboutHero";
import Mission from "../components/section/Mission";
import Vision from "../components/section/Vision";
import Values from "../components/section/Values";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when component mounts
  });
  return (
    <div>
      <AboutHero />
      <Mission />
      <Vision />
      <Values />
    </div>
  );
}

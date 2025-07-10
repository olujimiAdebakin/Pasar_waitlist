import AboutHero from "../components/section/AboutHero";
import Mission from "../components/section/Mission";
import Vision from "../components/section/Vision";
import Values from "../components/section/Values";

export default function About() {
  return (
    <div className="bg-[#09090F] min-h-screen">
      <AboutHero />
      <Mission />
      <Vision />
      <Values />
    </div>
  );
}

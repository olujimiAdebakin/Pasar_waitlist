import CTA from "../components/section/CTA";
import Hero from "../components/section/Hero";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import FaqSection from "../components/section/FAQ";
import HowItWorks from "../components/section/HowItWorks";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <HowItWorks />
      <FaqSection />
      <CTA />
      <Footer />
    </div>
  );
}

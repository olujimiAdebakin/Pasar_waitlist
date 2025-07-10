import CTA from "../components/section/CTA";
import Hero from "../components/section/Hero";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import FaqSection from "../components/section/FAQ";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <FaqSection />
      <CTA />
      <Footer />
    </div>
  );
}

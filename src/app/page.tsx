import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import UseCaseVideo from "@/components/UseCaseVideo";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      <a href="#hero" className="skip-to-content">
        본문으로 건너뛰기
      </a>
      <Nav />
      <HeroSection />
      <PainPoints />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <Metrics />
      <div className="section-divider" />
      <UseCaseVideo />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Comparison />
      <div className="section-divider" />
      <FinalCTA />
      <Footer />
    </main>
  );
}

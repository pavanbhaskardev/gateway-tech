import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import SolutionSection from "./components/SolutionSection";
import IndustriesSection from "./components/IndustriesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection title="Our Approach" />
      <SolutionSection />
      <IndustriesSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}

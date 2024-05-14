import {
  LinkIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import SolutionSection from "./components/SolutionSection";
import IndustriesSection from "./components/IndustriesSection";

const features = [
  {
    name: "Customization and Integration",
    description:
      "Tailored solutions seamlessly integrate with existing infrastructure, ensuring smooth workflow integration across industries.",
    icon: LinkIcon,
  },
  {
    name: "Real-Time Monitoring and Insights",
    description:
      "Gain actionable data insights with IoT solutions, providing real-time monitoring for enhanced operational efficiency and informed decision-making.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Predictive Analytics and Maintenance",
    description:
      "Anticipate and prevent potential issues with advanced analytics, saving time and resources through proactive maintenance planning.",
    icon: ChartBarIcon,
  },
  {
    name: "Enhanced Collaboration and Communication",
    description:
      "Facilitate seamless cross-functional collaboration, improving communication and coordination for better outcomes in diverse industries.",
    icon: UserGroupIcon,
  },
  {
    name: "Continuous Improvement and Innovation",
    description:
      "Stay ahead of the curve with ongoing research and development, accessing cutting-edge IoT advancements for sustained competitiveness.",
    icon: BoltIcon,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection title="Our Approach" features={features} />
      <SolutionSection />
      <IndustriesSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}

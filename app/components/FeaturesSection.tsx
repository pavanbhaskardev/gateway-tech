"use client";
import {
  UserIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  HeartIcon,
  GlobeAmericasIcon,
  TruckIcon,
  LightBulbIcon,
  WrenchIcon,
  CubeIcon,
  ShoppingCartIcon,
  TagIcon,
  ArrowTrendingUpIcon,
  Squares2X2Icon,
  CloudIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  LinkIcon,
  BoltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SVGProps, useRef } from "react";
import { RobotIcon, LeafIcon, AnimalFeetIcon } from "@/lib/Svg";
import { motion, useInView } from "framer-motion";

type FeaturesSectionType = {
  title?: string;
  industry?: string;
};

const listVariants = {
  initial: {
    y: 200,
    opacity: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.09,
      duration: 1.25,
    },
  },
};

const Industries = [
  {
    name: "Agriculture",
    features: [
      {
        name: "Precision Agriculture",
        description:
          "Leverage IoT sensors and data analytics to optimize irrigation, fertilization, and pest control based on real-time field conditions, maximizing yield and minimizing waste.",
        icon: LeafIcon, // Replace with an icon representing a leaf
      },
      {
        name: "Smart Livestock Management",
        description:
          "Track and monitor animal health, location, and behavior using wearable sensors, improving animal welfare and productivity.",
        icon: AnimalFeetIcon, // Replace with an icon representing a cow
      },
      {
        name: "Agricultural Supply Chain Optimization",
        description:
          "Gain real-time visibility into your supply chain with connected sensors in storage facilities and transportation vehicles, ensuring optimal product freshness and delivery efficiency.",
        icon: TruckIcon, // Replace with an icon representing a truck
      },
      {
        name: "Environmental Monitoring",
        description:
          "Monitor soil health, weather conditions, and water quality using IoT sensors to make data-driven decisions for sustainable agricultural practices.",
        icon: GlobeAmericasIcon, // Replace with an icon representing the Earth
      },
    ],
  },
  {
    name: "Manufacturing",
    features: [
      {
        name: "Predictive Maintenance",
        description:
          "IoT sensors on machinery and equipment continuously monitor performance, enabling preventive maintenance and reducing downtime.",
        icon: WrenchIcon, // Replace with an icon representing a wrench
      },
      {
        name: "Industrial Automation and Robotics",
        description:
          "Implement intelligent automation solutions with robots and connected machines for efficient and high-precision production lines.",
        icon: RobotIcon,
      },
      {
        name: "Supply Chain Management & Inventory Optimization",
        description:
          "Track materials and finished goods in real-time through connected logistics networks, optimizing inventory levels and reducing lead times.",
        icon: CubeIcon, // Replace with an icon representing a box
      },
      {
        name: "Energy Efficiency and Sustainability",
        description:
          "Monitor and optimize energy consumption in factories using IoT sensors and analytics, reducing operational costs and environmental impact.",
        icon: LightBulbIcon, // Replace with an icon representing a lightbulb
      },
    ],
  },
  {
    name: "Healthcare",
    features: [
      {
        name: "Remote Patient Monitoring",
        description:
          "IoT-enabled devices such as wearable sensors, smart patches, and remote monitoring systems allow healthcare providers to remotely track patients' vital signs, medication adherence, and disease progression in real-time.",
        icon: UserIcon,
      },
      {
        name: "Predictive analysis and preventive care",
        description:
          "IoT sensors embedded in medical devices, equipment, and patient environments collect vast amounts of data, which can be analyzed using predictive analytics algorithms.",
        icon: PresentationChartLineIcon,
      },
      {
        name: "Smart Hospitals and Healthcare Facilities",
        description:
          "IoT sensors and connected devices are transforming traditional healthcare facilities into smart hospitals equipped with advanced monitoring, automation, and communication systems.",
        icon: BuildingOfficeIcon,
      },
      {
        name: "Tele-medicine and Virtual Care",
        description:
          "The widespread adoption of IoT-powered tele-medicine platforms and virtual care solutions has accelerated due to the COVID-19 pandemic.",
        icon: HeartIcon,
      },
    ],
  },
  {
    name: "Retail",
    features: [
      {
        name: "Smart Warehousing and Inventory Management",
        description:
          "Optimize warehouse operations with connected inventory systems, real-time tracking, and automated picking & packing processes.",
        icon: Squares2X2Icon, // Replace with an icon representing a shelf
      },
      {
        name: "Omnichannel Retailing and Customer Experience",
        description:
          "Provide seamless shopping experiences across online and physical stores using connected devices and data analytics to personalize customer journeys.",
        icon: ShoppingCartIcon, // Replace with an icon representing a shopping cart
      },
      {
        name: "Smart Asset Management",
        description:
          "Track in-store inventory and assets like displays and refrigeration units using IoT sensors to optimize maintenance and prevent stockouts.",
        icon: TagIcon, // Replace with an icon representing a tag
      },
      {
        name: "Predictive Demand Forecasting",
        description:
          "Utilize customer data and real-time sales information to predict demand and optimize inventory levels, minimizing stockouts and overstocking.",
        icon: ArrowTrendingUpIcon, // Replace with an icon representing a graph
      },
    ],
  },
  {
    name: "Technology",
    features: [
      {
        name: "Connected Product Development",
        description:
          "Develop and integrate IoT sensors and functionalities into hardware products, enabling data collection, remote management, and improved user experiences.",
        icon: CpuChipIcon, // Replace with an icon representing a computer chip
      },
      {
        name: "Secure and Scalable Cloud Solutions",
        description:
          "Design and implement secure and scalable cloud infrastructure to manage and analyze the vast amount of data generated by connected devices.",
        icon: CloudIcon, // Replace with an icon representing uploading to the cloud
      },
      {
        name: "DevOps and Agile Development",
        description:
          "Leverage DevOps methodologies and agile development practices to accelerate innovation and deliver high-quality IoT solutions efficiently.",
        icon: RocketLaunchIcon, // Replace with an icon representing a rocket
      },
      {
        name: "Data Analytics and Machine Learning",
        description:
          "Extract valuable insights from the data collected by connected devices using advanced analytics and machine learning algorithms, enabling data-driven decision making.",
        icon: ChartBarIcon, // Replace with an icon representing a bar chart
      },
    ],
  },
];

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

export default function FeaturesSection({
  title = "",
  industry = "",
}: FeaturesSectionType) {
  const featuresList = (
    industry
      ? Industries.find((details) => details.name === industry)?.features
      : features
  ) as {
    name: string;
    description: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
  }[];
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { amount: 0.1, once: true });

  return (
    <div
      className="bg-white py-24 sm:py-32"
      id="feature-section"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <p className="mt-2 text-4xl font-bold font-secondary tracking-tight  sm:text-5xl">
              Our Approach
            </p>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.div
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={listVariants}
          >
            {featuresList.map((feature, index) => {
              return (
                <motion.div
                  className="relative pl-16"
                  variants={listVariants}
                  key={feature.name}
                >
                  <dt className="text-base font-semibold leading-7">
                    <div
                      className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(110deg,#183835,45%,#78c51c,55%,#183835)] bg-[length:300%_100%] animate-shimmer transition-colors`}
                    >
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
} from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const RobotIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ref={ref}
      {...props}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
});
RobotIcon.displayName = "RobotIcon";

const LeafIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      ref={ref}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
});
LeafIcon.displayName = "LeafIcon";

const AnimalFeetIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      ref={ref}
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
});

AnimalFeetIcon.displayName = "AnimalFeetIcon";

const Industries = [
  {
    name: "Agriculture",
    description:
      "Harnessing technology to increase crop yields, improve sustainability and optimize supply chains, ensuring food security and supporting rural economies",
    banner: "/industries/agriculture-banner.png",
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
    description:
      "Driving productivity and innovation in energy and automobile sectors through advanced production techniques and sustainable technologies.",
    banner: "/industries/manufacturing-banner.png",
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
    description:
      "Innovating pharmaceuticals, medical devices, and biotechnology to improve patient care and advance medical science.",
    banner: "/industries/healthcare-banner.png",
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
    description:
      "Facilitating efficient distribution and management of goods through warehouses, optimizing food and supply chains for seamless delivery to consumers.",
    banner: "/industries/retail-banner.png",
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
    description:
      "Spearheading digital transformation across industries, from software development to hardware manufacturing, to enhance connectivity and streamline processes.",
    banner: "/industries/technology-banner.png",
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

export default Industries;

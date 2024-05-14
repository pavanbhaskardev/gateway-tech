import {
  LinkIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

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

export default function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32" id="feature-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-4xl font-bold font-secondary tracking-tight  sm:text-5xl">
            Our Approach
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(110deg,#183835,45%,#78c51c,55%,#183835)] bg-[length:200%_100%] animate-shimmer transition-colors">
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
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

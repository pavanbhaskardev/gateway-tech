import {
  Cog6ToothIcon,
  SparklesIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const perks = [
  {
    name: "AI Algorithms",
    description:
      "Our solutions leverage automated AI algorithms to detect changes in machine operations.",
    icon: SparklesIcon,
  },
  {
    name: "Early Detection ",
    description:
      "We prioritize the early detection of even minor deviations in machine performance to ensure uninterrupted production processes.",
    icon: ClockIcon,
  },
  {
    name: "Predictive Maintenance",
    description:
      "Our predictive maintenance technology offers invaluable insights for effective asset management.",
    icon: Cog6ToothIcon,
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center md:mb-10">
        <h2 className="mt-2 text-4xl font-bold font-secondary tracking-tight sm:text-5xl">
          Why us
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
          We maximize your operational efficiency with our predictive
          maintenance solutions.
        </p>
      </div>

      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
        {perks.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-md items-start px-4 lg:max-w-none lg:px-8">
              <perk.icon
                className="h-8 w-8 flex-shrink-0 text-brandPrimary"
                aria-hidden="true"
              />
              <div className="ml-4 flex flex-auto flex-col">
                <h3 className="font-medium mb-1">{perk.name}</h3>
                <p className="text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

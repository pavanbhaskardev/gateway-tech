import Image from "next/image";
import React from "react";

const features = [
  {
    name: "Remote Operated Systems",
    description:
      "Streamline operations with IoT-enabled remote control solutions for enhanced efficiency and convenience.",
    imageSrc: "/Remote-operating-system.png",
  },
  {
    name: "AI Vision Inspection",
    description:
      "Optimize quality control processes with AI vision inspection technology for accurate and efficient defect detection.",
    imageSrc: "/AI-vision-inspection.png",
  },
  {
    name: "Seamless Data Integration",
    description:
      "Achieve seamless integration of data across platforms for improved decision-making and operational efficiency.",
    imageSrc: "/Seamless-data-integration.png",
  },
  {
    name: "Analytics based early Predictions",
    description:
      "Leverage analytics for early prediction of issues, enabling proactive decision-making and preventing costly downtime.",
    imageSrc: "/Analytics.png",
  },
];

const SolutionSection = () => {
  return (
    <div className="bg-brandAccent py-24 sm:py-32" id="solutions-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl">
            Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the transformation impact of Gateway Tech Solutions,
            leveraging cutting-edge technology to revolutionize industries
            through seamless integration of IoT, driving innovation and
            elevating operational efficiency.
          </p>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-12 xl:aspect-w-9">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.description}
                    fill
                    className="h-full w-full object-cover object-center group-hover:scale-125 transition-all duration-500"
                  />

                  <div className="absolute bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
                </div>

                <div className="absolute bottom-4 left-4 w-[calc(100%-2rem)]">
                  <h3 className="mt-4 font-medium text-lg text-white underline">
                    {feature.name}
                  </h3>
                  <p className="mt-1 text-white text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;

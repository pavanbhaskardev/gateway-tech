import { SVGProps } from "react";

type FeaturesSectionType = {
  title?: string;
  features: {
    name: string;
    description: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
  }[];
};

export default function FeaturesSection({
  title = "",
  features,
}: FeaturesSectionType) {
  return (
    <div className="bg-white py-24 sm:py-32" id="feature-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <p className="mt-2 text-4xl font-bold font-secondary tracking-tight  sm:text-5xl">
              Our Approach
            </p>
          )}
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

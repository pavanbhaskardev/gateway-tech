import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Industries from "@/lib/industries";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/app/components/FeaturesSection";

// generating all the pages statically
export async function generateStaticParams() {
  return Industries.map((industry) => ({
    slug: industry.name,
  }));
}

type Props = {
  params: { id: string };
};

// generating meta-data dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const details = Industries.find(
    (industry) => industry.name.toLowerCase() === params.id
  );

  return {
    title: !details ? "Not Found" : `${details.name}`,
  };
}

const page = ({ params }: Props) => {
  const details = Industries.find(
    (industry) => industry.name.toLowerCase() === params.id
  );

  if (details) {
    return (
      <>
        <div className="relative overflow-hidden h-[calc(100vh-68px)] flex items-center">
          <Image
            src={details.banner}
            fill
            alt={`${params.id} industry pic`}
            className="absolute -z-10 h-full w-full object-cover"
            priority
          />

          <div className="absolute h-full w-full bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

          <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <p className="my-6 text-base md:text-xl leading-8 text-white text-balance font-bold">
                Gateway Tech involved for revolutionizing 
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-secondary capitalize text-white">
                {params.id}
              </h1>

              <p className="my-6 text-lg leading-8 text-gray-300 text-balance">
                {details.description}
              </p>

              <Button variant="outline">Book a Demo</Button>
            </div>
          </div>
        </div>

        <FeaturesSection industry={details.name} />
      </>
    );
  }
};

export default page;

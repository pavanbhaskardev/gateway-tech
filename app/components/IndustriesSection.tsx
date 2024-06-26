"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Industries from "@/lib/industries";
import { Button } from "@/components/ui/button";
import { IndustryType } from "@/lib/types";

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(Industries[0].name);
  const selectedIndustry = useMemo(() => {
    return Industries.find((details) => details.name === activeIndustry);
  }, [activeIndustry]) as IndustryType;

  return (
    <div className="bg-brandText pt-24 sm:pt-32" id="solutions-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-white text-4xl tracking-tight sm:text-5xl">
            Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how we revolutionize industries through the integration of
            IoT, driving transformation change and enhancing operational
            efficiency.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Select value={activeIndustry} onValueChange={setActiveIndustry}>
            <SelectTrigger className="w-[180px] sm:hidden text-white">
              <SelectValue placeholder="Select a Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Industries.map((details) => (
                  <SelectItem value={details.name} key={details.name}>
                    {details.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Tabs
            value={activeIndustry}
            onValueChange={setActiveIndustry}
            className="hidden sm:block"
          >
            <TabsList className="grid max-w-2xl grid-cols-5 mx-auto">
              {Industries.map((details) => (
                <TabsTrigger value={details.name} key={details.name}>
                  {details.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="relative h-96 md:h-[600px] mt-12">
        {Industries.map((details) => (
          <Image
            key={details.name}
            src={selectedIndustry.banner}
            alt={`${setActiveIndustry.name} - industry image`}
            fill
            className={`h-full w-full object-cover bg-gray-400 ${
              details.name === selectedIndustry.name ? "absolute" : "invisible"
            }`}
          />
        ))}

        <div className="absolute h-full w-full bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="mx-auto max-w-2xl lg:text-center flex items-center flex-col justify-center h-full space-y-4 sm:space-y-12">
          <p className="mt-2 text-4xl uppercase text-white tracking-tight sm:text-7xl z-10 lg:text-9xl">
            {selectedIndustry?.name}
          </p>

          <p className="text-xl text-balance leading-6 text-gray-300 z-10 w-[90%] mx-auto text-center sm:text-2xl sm:w-full">
            {selectedIndustry?.description}
          </p>

          <Button
            variant="outline"
            size="lg"
            className="z-10 rounded-full"
            asChild
          >
            <Link
              href={`industries/${selectedIndustry.name.toLowerCase()}`}
              scroll
            >
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;

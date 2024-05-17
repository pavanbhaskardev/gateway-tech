"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "#arc1-1",
      { rotate: [0, 360] },
      { duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }
    );

    animate(
      "#arc1-2",
      { rotate: [0, -360] },
      { duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }
    );

    animate(
      "#arc2-1",
      { rotate: 360 },
      { duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }
    );

    animate(
      "#arc2-2",
      { rotate: -360 },
      { duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }
    );
  }, [animate]);

  return (
    <div className="relative bg-white" ref={scope}>
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-12 text-6xl font-bold font-secondary sm:mt-10 sm:text-7xl bg-[linear-gradient(110deg,#183835,45%,#78c51c,55%,#183835)] bg-[length:300%_100%] animate-shimmer transition-colors bg-clip-text text-transparent">
              Empowering your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              with the transformative potential of IoT services.
            </p>
            <div className="my-5 flex items-center gap-x-3">
              <Button
                className="bg-brandPrimary hover:bg-brandPrimary/80"
                asChild
              >
                <Link href="/contact">Book a Demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#about-section">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 lg:self-center">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop
            autoplay={{
              delay: 2500,
            }}
            modules={[EffectFade, Autoplay]}
            className="h-52 w-52 md:h-96 md:w-96 lg:h-[500px] mx-auto"
          >
            <SwiperSlide>
              <Image
                fill
                alt="Farm using IoT"
                src="/herosection/Ellipse1.png"
                className="object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                fill
                alt="Store using IoT"
                src="/herosection/Ellipse2.png"
                className="object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                fill
                alt="Industries workers benefitting by using IoT"
                src="/herosection/Ellipse3.png"
                className="object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                fill
                alt="Healthcare benefitting by using IoT"
                src="/herosection/Ellipse4.png"
                className="object-contain"
              />
            </SwiperSlide>
          </Swiper>

          <Image
            src="/circle.svg"
            alt="A circle illustration"
            className="w-[220px!important] h-[220px!important] md:h-[400px!important] md:w-[400px!important] m-auto"
            fill
          />

          {/* arc1 */}
          <Image
            src="/arc1.svg"
            alt="A arc illustration"
            className="w-[240px!important] h-[240px!important] md:h-[420px!important] md:w-[420px!important] rotate-90 m-auto"
            fill
            id="arc1-1"
          />

          <Image
            src="/arc2.svg"
            alt="A arc illustration"
            className="w-[260px!important] h-[260px!important] md:h-[440px!important] md:w-[440px!important] -rotate-90 m-auto"
            fill
            id="arc1-2"
          />

          {/* arc2 */}
          <Image
            src="/arc2.svg"
            alt="A arc illustration"
            className="w-[280px!important] h-[280px!important]  md:h-[460px!important] md:w-[460px!important]  rotate-180 m-auto"
            fill
            id="arc2-1"
          />

          <Image
            src="/arc1.svg"
            alt="A arc illustration"
            className="w-[300px!important] h-[300px!important] md:h-[480px!important] md:w-[480px!important]   m-auto"
            fill
            id="arc2-2"
          />
        </div>
      </div>
    </div>
  );
}

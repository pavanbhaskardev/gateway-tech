"use client";
import { Fragment, useState } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  CpuChipIcon,
  UsersIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Agriculture",
    description:
      "Harnessing technology to increase crop yields, improve sustainability, and optimize supply chains, ensuring food security and supporting rural economies",
    href: "/industries/agriculture",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Manufacturing",
    description:
      "Driving productivity and innovation in energy and automobile sectors through advanced production techniques nd sustainable technologies",
    href: "/industries/manufacturing",
    icon: CubeIcon,
  },
  {
    name: "Healthcare",
    description:
      "Innovating pharmaceuticals medical devices, and biotechnology to improve patient care and advance medical science",
    href: "/industries/healthcare",
    icon: UsersIcon,
  },
  {
    name: "Retail",
    description:
      "Facilitating efficient distribution and management of goods through warehouse, optimizing food and supply chains for seamless delivery to consumers",
    href: "/industries/retail",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Technology",
    description:
      "Spearheading digital transformation across industries, from software development to hardware manufacturing, to enhance connectivity and streamline processes.",
    href: "/industries/technology",
    icon: CpuChipIcon,
  },
];

const pageLinks = [
  { name: "Features", href: "/#feature-section" },
  { name: "Solutions", href: "/#solutions-section" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const hamburgerMenuSlideVariants = {
  initial: {
    translateX: "100%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.75,
    },
  },
  animate: {
    translateX: "0",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.75,
    },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-20 bg-brandAccent  sticky top-0 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-semibold sm:text-lg">GATEWAY TECH</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:items-center">
          <Popover>
            {({ open, close }) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-base leading-6 ">
                  Industries
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-none text-gray-400 transition-transform ${
                      open ? "rotate-180 transform" : ""
                    }}`}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-brandAccent pt-14 shadow-lg ring-1 ring-gray-900/5">
                    <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                      {products.map((item) => (
                        <Link
                          href={item.href}
                          key={item.name}
                          onClick={close}
                          className="group relative rounded-lg p-6 text-sm leading-6 transition-colors hover:bg-brandText/10"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brandPrimary">
                            <item.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <Link
                            href={item.href}
                            className="mt-6 block font-semibold text-lg"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600 text-base text-balance">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {pageLinks.map((details) => (
            <Link
              href={details.href}
              className="text-base leading-6"
              key={details.name}
              scroll
            >
              {details.name}
            </Link>
          ))}
        </Popover.Group>

        <Button
          asChild
          className="bg-brandPrimary hover:bg-brandPrimary/80 hidden lg:flex"
          size="lg"
        >
          <Link href="/contact">Book a Demo</Link>
        </Button>
      </nav>

      {/* mobile navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={hamburgerMenuSlideVariants}
            initial="initial"
            animate={mobileMenuOpen ? "animate" : "initial"}
            exit="initial"
            className="fixed lg:hidden top-0 right-0 z-10 w-full h-full overflow-y-hidden bg-brandAccent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7  hover:bg-brandText/10">
                          Industries
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <Link
                              onClick={() => setMobileMenuOpen(false)}
                              key={item.name}
                              href={item.href}
                              scroll
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7  hover:bg-brandText/10"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {pageLinks.map((details) => (
                    <Link
                      href={details.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7  hover:bg-brandText/10"
                      key={details.name}
                      scroll
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {details.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

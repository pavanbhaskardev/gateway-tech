"use client";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What industries does Gateway Tech serve?",
    answer:
      "We serve a wide range of industries, including agriculture, manufacturing, healthcare, online retail (or e-commerce), and more. We offer customized solutions tailored to the specific needs of each industry.",
  },
  {
    question: "What are the benefits of using Gateway Tech's solutions?",
    answer:
      "Benefits include increased efficiency, improved data-driven decision making, reduced costs, enhanced customer experiences, and better resource management.",
  },
  {
    question: "What kind of IoT solutions does Gateway Tech offer?",
    answer:
      "We offer a comprehensive suite of IoT solutions, including sensors, data collection and analysis platforms, connectivity options, and integration services. We can help you design, implement, and manage your entire IoT ecosystem.",
  },
];

export default function FAQSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl text-center">
            Frequently asked questions
          </h2>

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left ">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

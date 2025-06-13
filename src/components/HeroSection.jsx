import React, { useState } from "react";
import TestimonialsSection from "./TestimonialsSection";
import Insights from "./Insights";

const steps = [
  {
    id: 1,
    title: "Ideate",
    description: "Brainstorm and validate your product ideas.",
    image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/01_ideate.png?width=1800&height=1800&name=01_ideate.png",
  },
  {
    id: 2,
    title: "Design",
    description: "Create intuitive, user-friendly designs.",
    image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/02_design.png?width=1800&height=1800&name=02_design.png",
  },
  {
    id: 3,
    title: "Develop",
    description: "Bring products to life with world-class engineering.",
    image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/03_develop.png?width=1800&height=1800&name=03_develop.png",
  },
  {
    id: 4,
    title: "Maintain",
    description: "Ensure reliability, performance, and stability over time.",
    image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/04_maintain.png?width=480&height=480&name=04_maintain.png",
  },
  {
    id: 5,
    title: "Scale",
    description: "Grow your product to handle more users and markets.",
    image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Illustrations/05_scale.png?width=480&height=480&name=05_scale.png",
  },
];

const HeroSection = () => {
  const [activeStep, setActiveStep] = useState(3); // Default: Develop

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Replace with background image or 3D render */}
        <img
          src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/video-placeholder.jpg?length=3687"
          alt="Background Visual"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-48">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          <span className="text-green-500">Accelerate</span> digital
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          We speed up AI adoption and ramp up engineering and design teams to help you lead your industry.
        </p>

        {/* Trusted by logos */}
        <div className="mt-10 text-sm text-gray-400">
          <p className="mb-3">Trusted by:</p>
          <div className="flex flex-wrap items-center gap-6">
            <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ikea.svg"
             alt="IKEA" className="h-6" />
            <img src="https://www.netguru.com/hubfs/_N23/assets/logos/ubs.svg"
            alt="UBS" className="h-6" />
            <img src="https://www.netguru.com/hubfs/_N23/assets/logos/volkswagen.svg"
            alt="Volkswagen" className="h-6" />
            <img src="https://www.netguru.com/hubfs/_N23/assets/logos/olx.svg"
            alt="OLX" className="h-6" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </div>

      {/* Floating Book CTA */}
      <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 z-20">
        <div className="bg-white shadow-xl rounded-lg p-4 w-48">
          <img
            src="https://thumbs.dreamstime.com/z/n-gray-color-illustration-n-gray-color-illustration-n-dot-monogram-289942276.jpg"
            alt="Netguru Guide to AI Agents"
            className="rounded mb-3"
          />
          <p className="text-sm text-gray-800 font-semibold mb-2">
            Netguru Guide to AI Agents
          </p>
          <a
            href="https://www.netguru.com/resources/ai-agents-implementation-guide"
            className="inline-block text-green-600 text-xs font-medium hover:underline"
          >
            GET YOURS →
          </a>
        </div>
      </div>
    </section>

      {/* Case Studies */}
      <section className="py-16 bg-white px-4 md:px-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">
            Design, engineering & applied AI
          </h2>
          <a
            href="https://www.netguru.com/clients"
            className="text-green-600 underline text-sm"
          >
            More Case Studies
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Merck */}
          <div>
            <img
              src="https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?length=363"
              alt="Merck"
              className="rounded"
            />
            <p className="text-sm mt-2 text-gray-500 font-semibold italic">
              Merck — R&D Productivity
            </p>
            <h3 className="font-bold mt-2 text-lg">
              <a
                href="https://www.netguru.com/clients/merck-ai-rd"
                className="underline text-black hover:text-green-600"
              >
                Speeding up Merck’s process from 6 months to 6 hours
              </a>
            </h3>
          </div>

          {/* Newzip */}
          <div>
            <img
              src="https://www.netguru.com/hs-fs/hubfs/Newzip%20hero%20image%20new.png?length=690"
              alt="Newzip"
              className="rounded"
            />
            <p className="text-sm mt-2 text-gray-500 font-semibold italic">
              Newzip — AI for Real Estate
            </p>
            <h3 className="font-bold mt-2 text-lg">
              <a
                href="https://www.netguru.com/clients/ai-hyper-personalization-proptech"
                className="underline text-black hover:text-green-600"
              >
                60% more user engagement with hyper-personalization
              </a>
            </h3>
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <h2 className="text-2xl font-medium leading-snug text-gray-900 max-w-xl">
            Leverage our full digital{" "}
            <span className="relative inline-block font-bold">
              <span className="bg-green-200 rounded-full px-2 py-0.5">
                product expertise
              </span>
            </span>
          </h2>
          <h3>
            <p className="text-gray-700 max-w-xl">
              Whether you want to consult an idea, add missing capabilities,
              quickly expand your team, or hand over a project – we’ve got you
              covered.
            </p>
          </h3>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Steps List */}
          <div className="flex-1 space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer flex items-center gap-4 transition ${
                  activeStep === step.id
                    ? "bg-white p-4 rounded-md shadow"
                    : ""
                }`}
              >
                <div
                  className={`font-semibold ${
                    activeStep === step.id
                      ? "bg-gradient-to-r from-green-200 to-green-400 text-green-900 px-3 py-1 rounded-full"
                      : "text-gray-400"
                  }`}
                >
                  {step.id.toString().padStart(2, "0")}
                </div>
                <div>
                  <h4
                    className={`font-bold ${
                      activeStep === step.id
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h4>
                  {activeStep === step.id && (
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image & Description */}
          <div className="flex-1 flex flex-col items-center text-center md:text-left">
            <img
              src={steps[activeStep - 1].image}
              alt={steps[activeStep - 1].title}
              className="max-w-md mb-6"
            />
            <p className="text-lg text-gray-700 font-medium">
              {steps[activeStep - 1].description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection/>

      {/* Client Logos */}
      {/* <section className="bg-gray-50 py-10 px-4 md:px-20"> */}
        {/* <h2 className="text-xl font-semibold mb-6">
          Trusted by industry leaders
        </h2> */}
        {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-6 grayscale items-center justify-center">
          <img src="/logos/merck.svg" alt="Merck" />
          <img src="/logos/ubs.svg" alt="UBS" />
          <img src="/logos/vw.svg" alt="Volkswagen" />
          <img src="/logos/zabka.svg" alt="Zabka" />
          <img src="/logos/olx.svg" alt="OLX" />
          <img src="/logos/synerise.svg" alt="Synerise" />
        </div> */}
      {/* </section> */}

      {/* Insights */}
      <Insights/>
    </div>
  );
};

export default HeroSection;

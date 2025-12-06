"use client";

import { useState } from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { ScrollReveal } from "./ui/scroll-reveal";

const features = [
  {
    id: 1,
    title: "Smart Organization — Finally, Order Without Effort",
    description: "Forget endless lists and messy to-dos. Rechecker auto-structures your tasks so you see what's important now — and what can wait. Work flows, not chaos.",
    image: "/images/Smart Organization.png",
  },
  {
    id: 2,
    title: "Minimalist UI — Zero Overload, Pure Productivity",
    description: "No unnecessary buttons. No noisy menus. Just a clean, intuitive interface that helps you stay on task and calm. Because less distraction = more doing.",
    image: "/images/Minimalist UI.png",
  },
  {
    id: 3,
    title: "Full Customization — Make It Yours",
    description: "Change fonts, backgrounds, themes — build a workspace that feels like you. Your checklist, your style, your flow.",
    image: "/images/Full Customization.png",
  },
  {
    id: 4,
    title: "Nested Checklists — Build Systems, Not Just Lists",
    description: "Got a big project? Break it into manageable systems. Create nested checklists that map your workflow, from high-level ideas to daily tasks. Clarity by design.",
    image: "/images/Nested Checklists.png",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 sm:mb-16 md:mb-20 text-center">
            What does Rechecker include?
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Левый контейнер - мокап телефона */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="w-full max-w-[280px] sm:max-w-xs h-auto relative">
                <Image
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  width={320}
                  height={320}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 320px"
                />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Правый контейнер - карточки Features */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-2">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.id} delay={0.1 * index + 0.3}>
                <div
                  onClick={() => setActiveFeature(index)}
                  className="cursor-pointer"
                >
                  <WobbleCard
                    containerClassName={`${
                      activeFeature === index
                        ? "bg-neutral-900"
                        : "bg-white/50"
                    }`}
                    className={`p-4 sm:p-6 ${
                      activeFeature === index ? "text-white" : "text-black"
                    }`}
                    disableGradient={activeFeature === index}
                  >
                    <h3 className={`text-base sm:text-lg font-semibold mb-2 ${
                      activeFeature === index ? "text-white" : "text-black"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      activeFeature === index ? "text-white/90" : "text-black/70"
                    }`}>
                      {feature.description}
                    </p>
                  </WobbleCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


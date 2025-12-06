"use client";

import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { ScrollReveal } from "./ui/scroll-reveal";

const advantages = [
  {
    icon: "/icons/bi-stars.svg",
    title: "Built for Focus — Not Busywork",
    description: "Rechecker removes the noise so your brain can concentrate on results, not organizing.",
  },
  {
    icon: "/icons/checklist.svg",
    title: "Flexible Yet Powerful",
    description: "Whether you plan daily groceries or ship a startup — Rechecker adapts to your pace and your goals.",
  },
  {
    icon: "/icons/dashboard.svg",
    title: "Personal. Clean. Yours.",
    description: "With full customization and a simple interface, you create your own productivity space.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="advantages" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 sm:mb-16 md:mb-20 text-center">
            Why People Choose Us?
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {advantages.map((advantage, index) => (
          <ScrollReveal key={index} delay={0.1 * index}>
          <WobbleCard
            key={index}
            containerClassName="bg-white/50 cursor-default h-full"
            className="p-6 sm:p-8 flex flex-col"
            disableGradient={true}
          >
            <div className="mb-4 sm:mb-6">
              <Image
                src={advantage.icon}
                alt={advantage.title}
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-black">
              {advantage.title}
            </h3>
            <p className="text-sm sm:text-base text-black/70 leading-relaxed">
              {advantage.description}
            </p>
          </WobbleCard>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </section>
  );
}


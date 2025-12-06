"use client";

import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 min-h-screen flex items-center py-12 sm:py-16 md:py-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 w-full">
      <ScrollReveal direction="right" delay={0.1}>
        <div className="flex-1 max-w-2xl text-left">
          <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 md:mb-4 lg:mb-6 leading-normal md:leading-tight">
            <Highlight>From Chaos to Clarity</Highlight> — In One Tap
          </h1>
          <p className="text-xl sm:text-2xl md:text-xl mb-8 sm:mb-10 md:mb-6 lg:mb-8 text-black/80 leading-relaxed">
            Rechecker turns your thoughts and tasks into a clean, distraction-free checklist that guides you from idea to done. No clutter. Just focus.
          </p>
          <div className="flex items-center justify-start">
            <a href="#download">
              <Image
                src="/buttons/white.svg"
                alt="Download on App Store"
                width={160}
                height={46}
                className="h-14 sm:h-16 md:h-10 lg:h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="left" delay={0.2}>
        <div className="hidden md:flex flex-1 justify-center items-center w-full md:w-auto">
          <div className="w-full max-w-[280px] sm:max-w-xs h-auto relative">
            <Image
              src="/images/Hero.png"
              alt="Rechecker App"
              width={320}
              height={320}
              className="object-contain w-full h-auto"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 320px"
            />
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}


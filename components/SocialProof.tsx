"use client";

import Image from "next/image";
import { ScrollReveal } from "./ui/scroll-reveal";

const avatars = [
  "/images/Emily.jpg",
  "/images/Mark.jpg",
  "/images/Anna.jpg",
  "/images/Kamil.jpg",
  "/images/Antony.jpg",
];

export default function SocialProof() {
  return (
    <section id="download" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8">
            Loved by People Who Get Things Done
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base sm:text-lg text-black/70 mb-8 sm:mb-12 px-4">
            Join hundreds of creators, freelancers and doers who already turned chaos into clarity with Rechecker.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Левый столбец: аватары с наложением */}
          <div className="flex items-center">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shrink-0 ${i > 0 ? '-ml-2 sm:-ml-3' : ''}`}
              >
                <Image
                  src={avatar}
                  alt={`Avatar ${i + 1}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Правый столбец: звезды и текст */}
          <div className="flex flex-col gap-2">
            {/* Первая строка: звезды */}
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              ))}
            </div>
            
            {/* Вторая строка: текст */}
            <p className="text-sm sm:text-base font-semibold text-black">
              1,000 + customers joined
            </p>
          </div>
        </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
        <div className="flex justify-center">
          <a href="#download">
            <Image
              src="/buttons/app-store.svg"
              alt="Download on App Store"
              width={160}
              height={46}
              className="h-10 sm:h-12 w-auto"
            />
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


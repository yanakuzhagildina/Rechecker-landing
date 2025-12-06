"use client";

import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { ScrollReveal } from "./ui/scroll-reveal";

const reviews = [
  {
    text: "Rechecker is the first checklist app that actually calms me down instead of stressing me out. It's clean, intuitive, and helps me focus instantly.",
    author: "Emily R.",
    role: "UX Designer",
    image: "/images/Emily.jpg",
  },
  {
    text: "My routine, travel plans, grocery lists — everything just fits. The customization makes it feel personal and actually enjoyable to use.",
    author: "Mark T.",
    role: "Product Manager",
    image: "/images/Mark.jpg",
  },
  {
    text: "Rechecker finally gave me a system I actually stick to. I've tried so many checklist apps, but they all felt overwhelming. This helps me stay focused.",
    author: "Anna G.",
    role: "Marketing Manager",
    image: "/images/Anna.jpg",
  },
  {
    text: "I use nested checklists for all my client projects. Finally, I can see the whole structure without losing the details.",
    author: "Daniel K.",
    role: "Freelance Developer",
    image: "/images/Daniel.jpg",
  },
  {
    text: "I tried dozens of task apps. This one is the only one that doesn't overwhelm me. It's fast, minimal, and beautifully designed.",
    author: "Hannah J.",
    role: "Content Creator",
    image: "/images/Hannah.jpg",
  },
  {
    text: "As someone who overthinks everything, the simplicity of Rechecker is a lifesaver. It makes planning feel effortless.",
    author: "Sofia M.",
    role: "University Student",
    image: "/images/Sofia.jpg",
  },
  {
    text: "Rechecker is a quiet, clutter-free workspace in my pocket that helps me think clearly and move through my day with confidence.",
    author: "Mia L.",
    role: "Interior Designer",
    image: "/images/Mia.jpg",
  },
  {
    text: "For travel planning, this app is unbeatable. Nested checklists + customization = absolute trip-planning perfection.",
    author: "Kamil O.",
    role: "Travel Blogger",
    image: "/images/Kamil.jpg",
  },
  {
    text: "What I love most is how fast everything is. No clutter, no complicated menus — just my tasks, beautifully organized.",
    author: "Antony T.",
    role: "Developer",
    image: "/images/Antony.jpg",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-12 sm:mb-16 md:mb-20 text-center text-white">
            What People Say?
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reviews.map((review, index) => (
          <ScrollReveal key={index} delay={0.05 * index}>
          <WobbleCard
            key={index}
            containerClassName="!bg-neutral-800"
            className="p-4 sm:p-6"
            disableGradient
          >
            <div className="flex gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star.svg"
                  alt="Star"
                  width={17}
                  height={16}
                  className="w-4 h-4 sm:w-[17px] sm:h-4"
                />
              ))}
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed">
              {review.text}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.image}
                  alt={review.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-white">{review.author}</p>
                <p className="text-xs sm:text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
          </WobbleCard>
          </ScrollReveal>
        ))}
      </div>
      </div>
    </section>
  );
}


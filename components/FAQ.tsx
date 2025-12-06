"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

const faqs = [
  {
    question: "What makes Rechecker different from other checklist apps?",
    answer: "Rechecker focuses on clarity and calm. No clutter, no overwhelming features — just a clean, intuitive space where you can organize your day without stress. Everything is designed to help your mind breathe while staying productive.",
  },
  {
    question: "Is Rechecker free to use?",
    answer: "Yes! You can use the core features of Rechecker completely for free. There's also a Pro plan with additional customization options that help you personalize your workflow even more.",
  },
  {
    question: "What features are included in the Pro plan?",
    answer: "The Pro plan unlocks: • advanced customization (backgrounds, colors, fonts) • unlimited folders and enhanced organization • upcoming exclusive features. It's perfect for those who want deeper personalization and a more powerful structure.",
  },
  {
    question: "Can I use Rechecker offline?",
    answer: "Absolutely. Rechecker works fully offline, so all your checklists are always available — even without an internet connection.",
  },
  {
    question: "Does Rechecker sync across devices?",
    answer: "Currently, Rechecker works on a single device. However, multi-device sync is in the roadmap and will be added in a future update.",
  },
  {
    question: "Can I customize the look of my checklists?",
    answer: "Yes! Rechecker includes beautiful color themes, backgrounds, and layout options — especially in Pro. You can shape your workspace to match your mood or aesthetic.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
        <ScrollReveal direction="right">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-black/70 mb-6 sm:mb-8">
              If you have any other questions, please email us.
            </p>
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-neutral-900 text-white rounded-lg hover:opacity-80 transition text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </ScrollReveal>
        
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
          <ScrollReveal direction="left" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/50 rounded-lg border border-gray-200 overflow-hidden"
              >
                <AccordionTrigger
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 hover:bg-white/70 hover:no-underline"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-black pr-4 text-left">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
  );
}


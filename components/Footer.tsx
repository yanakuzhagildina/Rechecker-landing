"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6 sm:mb-8">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Image
                src="/icons/logotype.svg"
                alt="Rechecker"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold">Rechecker</span>
            </div>
            <div className="mt-2 sm:mt-4">
              <a href="#download">
                <Image
                  src="/buttons/app-store.svg"
                  alt="Download on App Store"
                  width={160}
                  height={46}
                  className="h-9 sm:h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h3 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm sm:text-base text-black/70 hover:text-black transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm sm:text-base text-black/70 hover:text-black transition">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm sm:text-base text-black/70 hover:text-black transition">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm sm:text-base text-black/70 hover:text-black transition">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <ScrollReveal delay={0.3}>
        <div className="pt-6 sm:pt-8 border-t border-gray-200 text-center text-xs sm:text-sm text-black/60">
          © 2025 — All rights reserved.
        </div>
      </ScrollReveal>
      </div>
    </footer>
  );
}


"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
  buttonContent,
  logo,
  alwaysVisible = false,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  buttonContent?: React.ReactNode;
  logo?: React.ReactNode;
  alwaysVisible?: boolean;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(alwaysVisible);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: alwaysVisible ? 1 : 0,
          y: alwaysVisible ? 0 : -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/40 bg-white/40 backdrop-blur-md z-[5000] px-4 sm:px-6 md:px-8 py-2 sm:py-3 items-center justify-center space-x-4 sm:space-x-6 md:space-x-8",
          className
        )}
      >
        {logo && <div className="flex items-center">{logo}</div>}
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 cursor-pointer"
            )}
          >
            <span className="block md:hidden">{navItem.icon}</span>
            <span className="hidden md:block text-sm sm:text-base">{navItem.name}</span>
          </a>
        ))}
        {buttonContent && buttonContent}
      </motion.div>
    </AnimatePresence>
  );
};

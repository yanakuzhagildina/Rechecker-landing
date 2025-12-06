"use client";

import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Header() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Advantages",
      link: "#advantages",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const logo = (
    <Link href="/" className="flex items-center cursor-pointer">
      <Image
        src="/icons/logotype.svg"
        alt="Rechecker"
        width={32}
        height={32}
        className="w-8 h-8 rounded-lg"
      />
      <span className="ml-3 text-xl font-semibold">Rechecker</span>
    </Link>
  );

  return (
    <FloatingNav
      navItems={navItems}
      logo={logo}
      alwaysVisible={true}
      className="[&>a]:hidden lg:[&>a]:flex"
    />
  );
}


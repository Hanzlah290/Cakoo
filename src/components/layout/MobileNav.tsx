"use client";

import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <button
      className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-[#4A2E20]
      text-white
      transition
      hover:scale-105
      md:hidden
      "
    >
      <Menu size={20} />
    </button>
  );
}
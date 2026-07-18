"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="group relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#7A4E2D]"
          >
            {link.name}

            <span
              className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#C7A46A] transition-all duration-300 ${
                active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        overflow-hidden
        shadow-[0_8px_35px_rgba(43,23,14,.10)]
        transition-all
        duration-500
        border-b border-[#D4AF37]/10
        ${
        scrolled
          ? "bg-[#2B170E]/70 backdrop-blur-2xl shadow-[0_8px_35px_rgba(0,0,0,.12)]"
          : "bg-white/[0.02] backdrop-blur-lg"
        }
      `}
    >

      {/* Bottom Border */}

      {/* Gold Accent */}
      {scrolled && (
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-40
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            z-20
          "
        />
      )}

      <div className="relative z-20 mx-auto flex h-24 max-w-[1700px] items-center justify-between px-10 lg:px-20">
        {/* Logo */}

        <Link
          href="/"
          className="
            transition-transform
            duration-500
            hover:scale-[1.03]
          "
        >
          <Image
            src="/images/cakoo-v1.png"
            alt="Cakoo Bakery"
            width={280}
            height={110}
            priority
            className="
              h-24
              w-auto
              object-contain
              select-none
            "
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-16 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.title}
                href={link.href}
                className="
                  group
                  relative
                  py-2
                  uppercase
                  transition-all
                  duration-300
                  text-[13px]
                  tracking-[0.28em]
                  font-medium
                "
              >
<span
  className={`
    inline-block
    transition-all
    duration-300
    ${
      active
        ? "text-[#D4AF37]"
        : "text-[#2B170E] group-hover:text-[#D4AF37] group-hover:-translate-y-[2px]"
    }
  `}
>
                  {link.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
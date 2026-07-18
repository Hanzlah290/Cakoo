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
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-[#251f1c]/70 backdrop-blur-2xl"
            : "bg-transparent"
        }
      `}
    >
      {/* Bottom Border */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Animated Gold Accent */}

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
          "
        />
      )}

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8 lg:px-16">

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
            width={220}
            height={90}
            priority
            className="
              h-20
              w-auto
              object-contain
              select-none
            "
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-14 md:flex">
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
                  text-[12px]
                  uppercase
                  tracking-[0.38em]
                  transition-all
                  duration-300
                "
              >
                <span
                  className={
                    active
                      ? "text-[#D4AF37]"
                      : "text-white/80 group-hover:text-[#D4AF37]"
                  }
                >
                  {link.title}
                </span>

                <motion.span
                  layoutId="navbar-indicator"
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-px
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
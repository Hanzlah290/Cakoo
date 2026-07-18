"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090503]">

      {/* Top Fade */}

<div
  className="
    absolute
    inset-x-0
    top-0
    h-52
    bg-gradient-to-b
    from-[#120C09]/40
    via-[#0D0705]/70
    to-transparent
  "
/>

      {/* Gold Ambient Glow */}
<motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.08, 0.15, 0.08],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[-100px]
    top-[-120px]
    h-[700px]
    w-[700px]
    rounded-full
    bg-[#D4AF37]/15
    blur-[220px]
  "
/>

      {/* Chocolate Glow */}

      <div
        className="
          absolute
          left-0
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#2A170D]/40
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-5 lg:px-16">

        <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-10
    -translate-x-1/2
    select-none
  "
>

  <h1
    className="
      font-[family:var(--font-heading)]
      text-[180px]
      font-semibold
      tracking-[-0.08em]
      text-white/[0.02]
      lg:text-[520px]
    "
  >
    CAKOO
  </h1>

</div>

        {/* Logo */}

        <motion.div
initial={{
    opacity:0,
    y:35,
    scale:.96
}}

whileInView={{
    opacity:1,
    y:0,
    scale:1
}}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <h2
            className="
              font-[family:var(--font-heading)]
              text-6xl
              text-white
              md:text-7xl
            "
          >
            
         Crafted With Passion

            <span className="block font-light italic text-[#D4AF37]">
             One handcrafted cake at a time.
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-lg
              leading-7
              text-white/55
            "
          >
            Crafting unforgettable celebrations,
            one handcrafted cake at a time.
          </p>

        </motion.div>
        <motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ delay: .2, duration: .8 }}
  className="
    mx-auto
    mt-10
    flex
    items-center
    justify-center
    gap-6
  "
>

  <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />

  <span className="text-[#D4AF37] text-xl">
    ✦
  </span>

  <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />

</motion.div>
<nav className="mt-16 flex justify-center gap-14">

  {links.map((link) => (

    <Link
      key={link.name}
      href={link.href}
      className="
        group
        relative
        text-sm
        uppercase
        tracking-[0.35em]
        text-white/75
        transition
        duration-300
        hover:text-[#D4AF37]
      "
    >
      {link.name}

      <span
        className="
          absolute
          -bottom-2
          left-0
          h-px
          w-0
          bg-[#D4AF37]
          transition-all
          duration-300
          group-hover:w-full
        "
      />

    </Link>

  ))}

</nav>
<div className="mt-12 grid grid-cols-2 gap-12 text-center">

  <div>

    <h4 className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs">
      Wah Cantt
    </h4>

    <p className="mt-4 text-white/60">
      Open Daily
      <br />
      7:00 AM – 11:00 PM
    </p>

  </div>

  <div>

    <h4 className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs">
      Attock
    </h4>

    <p className="mt-4 text-white/60">
      Open Daily
      <br />
      11:00 AM – 11:00 PM
    </p>

  </div>

</div>
<div className="mt-16 text-center">

  <div className="mx-auto mb-10 h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

<div className="text-center">

  <p className="text-sm text-white/35">
    © 2026 Cakoo Bakery
  </p>

  <p
    className="
      mt-3
      text-xs
      uppercase
      tracking-[0.35em]
      text-white/25
    "
  >
    Crafted With Passion • Wah Cantt • Pakistan
  </p>

</div>

</div>
      </div>
    </footer>
  );
}
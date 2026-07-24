"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Image from "next/image";



export default function Footer() {
  return (
    <footer
     className="
     relative
     overflow-visible
     pt-0
     bg-[#382116]
     "
    >

    <div
      className="
        absolute
        top-0
        left-0
        w-full
        top-[-132px]
        overflow-hidden
        leading-none
        z-20
      "
    >
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 120"
      className="block w-full h-33"
      preserveAspectRatio="none"
    >
      <path
        fill="#382116"
        d="
         M0,120
         C180,70 420,20 720,70
         C1020,120 1260,70 1440,95
         L1440,120
         L0,120
         Z
        "
      />
    </svg>

  
</div>
<div
  className="
    absolute
    inset-0
    bg-[linear-gradient(180deg,#382116_0%,#26150E_45%,#180D08_100%)]
    -z-10
  "
/>


      {/* Top Fade */}


      {/* Gold Ambient Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-[-100px]
          top-[-120px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D4AF37]/15
          blur-[220px]
          animate-footer-glow
        "
      />

      {/* Chocolate Glow */}

      <div
      aria-hidden="true"
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

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-8 pb-6 lg:px-16">

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

  <div
    aria-hidden="true"
    className="
      font-[family:var(--font-heading)]
      text-[190px]
      font-semibold
      tracking-[-0.08em]
      text-[#D4AF37]/[0.025]
      tracking-[-0.1em]
      lg:text-[350px]
    "
  >
    CAKOO
  </div>

</div>

        {/* Logo */}

        <div
          aria-hidden="true"      
          className="
            mt-3
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/25
          "
        >
    <div
      className="
      absolute
      left-1/2
      top-20
      h-44
      w-44
      -translate-x-1/2
      rounded-full
      bg-[#D4AF37]/8
      blur-[90px]
      "
      />
    <Image
    src="/images/cakoo-v3.png"
    alt="Cakoo"
    width={190}
    height={78}
    className="mx-auto mb-5"
/>


  </div>

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
              text-4xl
              text-[#D4AF37]
              md:text-5xl
            "
          >
            
         Crafted With Passion

          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-xl
              leading-7
              text-white/55
            "
          >
            Crafting unforgettable celebrations,
            one handcrafted cake at a time.
          </p>

        </motion.div>
        
        <div
          className="
            mx-auto
            mt-7
            flex
            items-center
            justify-center
            gap-6
          "
        >
        
          <div className="h-px w-40 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
        
          <span className="text-[#D4AF37] text-xl">
            ✦
          </span>
        
          <div className="h-px w-40 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
        
        </div>

        <div
          className="
            mt-8
            flex
            justify-center
            items-start
            gap-40
          "
        >

  <div className="text-center w-40">

    <h4 className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
      {siteConfig.address}
    </h4>

    <p className="mt-4 text-white/60 text-lg">
      Open Daily
      <br />
      7 AM – 11 PM
    </p>

  </div>

  <div className="text-center w-40">

    <h4 className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
      Attock
    </h4>

    <p className="mt-4 text-white/60 text-lg">
      Open Daily
      <br />
      11 AM – 11 PM
    </p>

  </div>

</div>
     <div className="mt-4 text-center">
     
       <div className="mx-auto mb-10 h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />
     
         <div className="text-center">
         
           <p className="text-sm text-white/35">
             © 2026 {siteConfig.name}
         
             Premium Cakes • {siteConfig.address} • Pakistan
           </p>
         
         </div>
       </div>
     </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  viewport,
} from "@/lib/animations";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <section
  className="
    relative
    overflow-hidden
    bg-[#FFFDD0]
    px-6
    py-26
  "
>

  

<div
aria-hidden="true"
className="
relative
mx-auto
max-w-6xl
text-center
pb-[320px]
"
>

        {/* Top Highlight */}


        {/* Main Gold Glow */}
<div
aria-hidden="true"
className="
absolute
left-1/2
top-[60%]
h-[850px]
w-[850px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#F3D78C]/12
blur-[180px]
"
/>
<div
aria-hidden="true"
className="
absolute
left-[15%]
top-[35%]
h-[350px]
w-[350px]
rounded-full
bg-white/40
blur-[120px]
"
/>


        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-40"
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
              text-sm
            "
          >
            Premium Handcrafted Cakes
          </p>

          <h2
            className="
              mt-8
              font-[family:var(--font-heading)]
              text-5xl
              leading-[0.92]
              text-[#1B130D]
              md:text-6xl
            "
          >
            Ready To Create

            <span className="block">
              Your Next
            </span>

            <span className="block italic font-light text-[#D4AF37]">
              Celebration?
            </span>
          </h2>

          <div
          aria-hidden="true"
            className="
              mx-auto
              mt-12
              h-px
              w-28
              bg-gradient-to-r
              from-transparent
              via-[#D4AF37]
              to-transparent
            "
          />

          <p
            className="
              mx-auto
              mt-12
              max-w-xl
              text-lg
              leading-8
              text-[#5E4A3E]
            "
          >
            Every handcrafted cake is baked with premium
            ingredients, timeless recipes and a passion
            for creating unforgettable celebrations.
          </p>

<div className="mt-14 flex justify-center gap-5 flex-wrap">
  <a
    href={siteConfig.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-[#BF8D1B]
      via-[#D4AF37]
      to-[#F1D882]
      px-10
      py-5
      font-semibold
      text-[#120C09]
      shadow-lg
      shadow-[#D4AF37]/20
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-[#D4AF37]/35
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#D4AF37]
      focus-visible:ring-offset-2
    "
  >
    Order on WhatsApp
  </a>

  <Link
    href="/contact"
    className="
      inline-flex
      items-center
      justify-center
      rounded-full
      border
      border-[#2A1A13]/10
      bg-white/70
      px-10
      py-5
      text-[#1B130D]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white/90
      hover:border-[#D4AF37]/40
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-[#D4AF37]
      focus-visible:ring-offset-2
    "
  >
    Contact Us
  </Link>
</div>
        </motion.div>

        {/* Luxury Ring */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-[-40px]
            left-1/2
            z-10
            h-[620px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            border
            border-[#D4AF37]/18
            animate-rotate-slow
          "
        />

         {/* Sparkles */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[20%]
              top-[72%]
              z-20
              h-2
              w-2
              rounded-full
              bg-[#D4AF37]
              animate-sparkle-float
            "
          />
                   
          <div
            aria-hidden="true"
            className="
              absolute
              left-[30%]
              top-[84%]
              z-20
              text-xl
              text-[#D4AF37]/60
              animate-sparkle-rotate
            "
          >
            ✦
          </div>

        {/* Floating Cake */}


          <div
          aria-hidden="true"
          className="
          absolute
          left-1/2
          bottom-[70px]
          h-[560px]
          w-[560px]
          -translate-x-1/2
          rounded-full
          border
          border-[#D4AF37]/6
          "
          />

  
         <motion.div
           initial={{
             opacity: 0,
             y: 50,
             scale: 0.97,
           }}
           whileInView={{
             opacity: 1,
             y: 0,
             scale: 1,
           }}
           viewport={viewport}
           transition={{
             duration: 0.9,
             ease: "easeOut",
           }}
           className="
             absolute
             bottom-0
             left-1/2
             z-30
             -translate-x-1/2
           "
         >
           <div
             aria-hidden="true"
             className="
               absolute
               left-1/2
               bottom-[80px]
               h-12
               w-72
               -translate-x-1/2
               rounded-full
               bg-black/25
               blur-3xl
             "
           />
         
           <motion.div
             aria-hidden="true"
             animate={{
               y: [0, -6, 0],
             }}
             transition={{
               duration: 5,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           >
             <Image
               src="/images/cta-cake.png"
               alt="Elegant handcrafted celebration cake from Cakoo Bakery"
               width={350}
               height={350}
               className="
                 rotate-[-4deg]
                 select-none
                 pointer-events-none
                 drop-shadow-[0_40px_80px_rgba(0,0,0,.4)]
               "
             />
           </motion.div>
         </motion.div>

        <div className="h-10" />

      </div>


    </section>
  );
}
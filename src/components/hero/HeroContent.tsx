"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (

    <div
  className="
    relative
    z-20
    w-full
    max-w-xl
    px-10
    py-8
    md:px-12
    md:py-7
  "
>
    <div className="relative z-20 w-full max-w-xl">
        {/* Decorative Lighting */}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-12 flex items-center gap-5">
            <div className="h-px w-16 bg-[#D4AF37]" />

            <div>

              <p className="mt-1 text-sm uppercase tracking-[0.45em] text-[#D7A72A]">
                Premium Bakery
              </p>
            </div>
          </div>
        </motion.div>


        <div
  className="
    absolute
    -left-24
    top-16
    h-[420px]
    w-[420px]
    rounded-full
    bg-[#D4AF37]/10
    blur-[120px]
    -z-10
  "
/>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
          className="
            relative
            z-10
            font-[family:var(--font-heading)]
            text-6xl
            font-semibold
            leading-[0.94]
            tracking-tight
            
            md:text-8xl
            xl:text-[6rem]
            text-[#2B170E]
drop-shadow-[0_3px_10px_rgba(43,23,14,.12)]
          "
        >
          Where Every

          <span className="block font-light italic text-[#D9AE2F]">
            Celebration
          </span>

          Begins
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.35,
            duration: 0.5,
          }}
          className="relative z-10 mt-16 h-px w-24 origin-left bg-[#D4AF37]/70"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
              delay: 0.5,
              duration: 0.7,
          }}
          className="
            relative
            z-10
            mt-8
            max-w-md
            text-[17px]
            leading-8
            text-[#3F2E23]
          "
        >
          Premium cakes, handcrafted desserts, and timeless recipes
          made with passion to turn every celebration into an
          unforgettable memory.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
transition={{
  delay: 0.7,
  duration: 0.7,
}}
          className="relative z-10 mt-12 flex flex-wrap gap-5"
        >
          <button
            className="
              group
              relative
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-[#BF8D1B]
              via-[#D4AF37]
              to-[#F1D882]
              px-10
              py-4
              font-semibold
              text-[#120C09]
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(212,175,55,.35)]
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            <span
              className="
                absolute
                left-[-120%]
                top-0
                h-full
                w-16
                rotate-12
                bg-white/35
                transition-all
                duration-700
                group-hover:left-[120%]
              "
            />
          </button>

          <button
            className="
            border-[#7A5A3B]/30
bg-[#FFF7E7]/45
text-[#2B170E]
backdrop-blur-md
hover:bg-white/35

              rounded-full
              border
              px-10
              py-4
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
            "
          >
            Visit Bakery
          </button>
        </motion.div>
      </div>
    </div>
  );
}
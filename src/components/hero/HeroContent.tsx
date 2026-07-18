"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-xl">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#F5D58C]/12
          bg-[#2B1D16]/42
          backdrop-blur-3xl
          px-10
          py-8
          md:px-12
          md:py-7
          shadow-[0_30px_90px_rgba(0,0,0,.45)]
          transition-all
          duration-700
          hover:border-[#D4AF37]/20
        "
      >
        {/* Decorative Lighting */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#D4AF37]/6 blur-[90px]" />

        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#2A170D]/50 blur-[90px]" />

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
              <p className="text-[11px] uppercase tracking-[0.45em] text-white/35">
                Wah Cantt
              </p>

              <p className="mt-1 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
                Premium Bakery
              </p>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.9,
          }}
          className="
            relative
            z-10
            font-[family:var(--font-heading)]
            text-6xl
            font-semibold
            leading-[0.88]
            tracking-tight
            text-white
            md:text-8xl
            xl:text-[6rem]
          "
        >
          Where Every

          <span className="block font-light italic text-[#D4AF37]">
            Celebration
          </span>

          Begins
        </motion.h1>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="relative z-10 mt-16 h-px w-24 origin-left bg-[#D4AF37]/70"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
          className="
            relative
            z-10
            mt-8
            max-w-md
            text-[17px]
            leading-8
            text-white/68
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
            delay: 0.8,
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
              rounded-full
              border
              border-white/15
              bg-black/10
              px-10
              py-4
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/10
            "
          >
            Visit Bakery
          </button>
        </motion.div>
      </div>
    </div>
  );
}
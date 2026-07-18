"use client";

import { motion } from "framer-motion";

const words = [
  "Cakoo Bakery",
  "Luxury Pâtisserie",
  "Premium Cakes",
  "Freshly Baked",
  "Sweet Celebrations",
];

const marqueeItems = [...words, ...words];

export default function Marquee() {
  return (

      <section
        className="
        relative
        overflow-hidden
        bg-[#F7F2EB]
        py-10
        border-y
        border-[#D8C9B4]
        "
        >
              <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[450px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D4AF37]/6
        blur-[120px]
        "
        />
        {/* Left Fade */}
         <div
           className="
             pointer-events-none
             absolute
             left-0
             top-0
             z-10
             h-full
             w-40
             bg-gradient-to-r
             from-[#F7F2EB]
             to-transparent
           "
         />
         
         {/* Right Fade */}
         <div
           className="
             pointer-events-none
             absolute
             right-0
             top-0
             z-10
             h-full
             w-40
             bg-gradient-to-l
             from-[#F7F2EB]
             to-transparent
           "
         />

         <div
             className="
                 absolute
                 inset-0
                 opacity-[0.03]
                 mix-blend-multiply
                 pointer-events-none
             "
             style={{
                 backgroundImage:
                     "radial-gradient(circle, #000 1px, transparent 1px)",
                 backgroundSize: "18px 18px",
             }}
         />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        {marqueeItems.map((word, index) => (
          <div
            key={index}
            className="flex items-center whitespace-nowrap"
          >
            <h2
             className="
             font-[family:var(--font-heading)]
             text-[95px]
             lg:text-[160px]
             font-light
             italic
             leading-[0.82]
             tracking-[-0.05em]
             text-[#120C09]/90
             "
            >
              {word}
            </h2>

            <motion.span
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.12, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    mx-10
                    text-[60px]
                    text-[#D4AF37]
                    lg:mx-16
                    lg:text-[60px]
                "
            >
                ✺
            </motion.span>
          </div>
        ))}
      </motion.div>
      </section>
    
  );
}
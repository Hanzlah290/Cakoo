"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.015, 1],
          y: [0, -6, 0],
          rotate: [0, -0.5, 0.5, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
            className="relative mt-20 flex flex-1 justify-end md:mt-0 pr-10 lg:pr-20"
          >
      <div
        className="
          absolute
          bottom-10
          left-1/2
          h-14
          w-[340px]
          -translate-x-1/2
          rounded-full
          bg-black/45
          blur-3xl
        "
      />
      <div
  className="
    absolute
    top-[8%]
    left-1/2
    h-[220px]
    w-[220px]
    -translate-x-1/2
    rounded-full
    bg-white/8
    blur-[80px]
    pointer-events-none
  "
/>
      <Image
        src="/images/hero-cake.png"
        alt="Lava Cake"
        width={650}
        height={650}
        priority
        className="drop-shadow-[0_35px_60px_rgba(0,0,0,.25)]"
      />
    </motion.div>
  );
}
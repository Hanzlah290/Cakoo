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
          scale: [1, 1.025, 1],
          y: [0, -9, 0],
          rotate: [0, -0.5, 0.5, 0],
        }}
        transition={{
          opacity: {
            delay: 0.9,
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
{/* Ambient Chocolate Glow */}
<div
aria-hidden="true"
  className="
    absolute
    bottom-2
    left-1/2
    h-[180px]
    w-[500px]
    -translate-x-1/2
    rounded-full
    bg-[#6A3D25]/20
    blur-[100px]
    pointer-events-none
  "
/>

{/* Ground Shadow */}
<div
aria-hidden="true"
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

{/* Warm Glow Behind Cake */}
<div
aria-hidden="true"
  className="
    absolute
    top-[5%]
    left-1/2
    h-[340px]
    w-[340px]
    -translate-x-1/2
    rounded-full
    bg-[#F3D27A]/18
    blur-[120px]
    pointer-events-none
  "
/>
      <Image
        src="/images/hero-cake.png"
        alt="Cakoo Bakery signature chocolate lava cake."
        width={650}
        height={650}
        priority
        className="drop-shadow-[0_45px_80px_rgba(0,0,0,.32)]"
      />
    </motion.div>
  );
}
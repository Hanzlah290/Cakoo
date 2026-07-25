"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { left: 22, x: [-8, 10], duration: 9, delay: 0 },
  { left: 28, x: [10, -12], duration: 11, delay: 1 },
  { left: 34, x: [-6, 8], duration: 8.5, delay: 2.2 },
  { left: 40, x: [12, -10], duration: 10, delay: 0.8 },
  { left: 46, x: [-10, 12], duration: 9.5, delay: 3 },
  { left: 52, x: [8, -8], duration: 12, delay: 1.6 },
  { left: 58, x: [-12, 10], duration: 9, delay: 4 },
  { left: 64, x: [10, -6], duration: 10.5, delay: 2.8 },
  { left: 70, x: [-8, 8], duration: 11.5, delay: 0.5 },
  { left: 76, x: [6, -10], duration: 9.8, delay: 3.5 },
  { left: 82, x: [-10, 6], duration: 10.8, delay: 1.2 },
  { left: 88, x: [8, -12], duration: 9.2, delay: 4.5 },
];

export default function FloatingParticles() {
  return (
    <>
      {PARTICLES.map((particle, index) => (
        <motion.div
        aria-hidden="true"
          key={particle.left}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: [0.1, 0.35, 0.1],
            y: [-20, -180],
            x: particle.x,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#D9AE2F]"
          style={{
            left: `${particle.left}%`,
            bottom: "-20px",
          }}
        />
      ))}
    </>
  );
}
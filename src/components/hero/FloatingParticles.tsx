"use client";

import { motion } from "framer-motion";

const particles = [...Array(12)];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: [0.1, 0.35, 0.1],
            y: [-20, -180],
            x: [
              Math.random() * 20,
              Math.random() * -20,
            ],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#D9AE2F]"
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: "-20px",
          }}
        />
      ))}
    </>
  );
}
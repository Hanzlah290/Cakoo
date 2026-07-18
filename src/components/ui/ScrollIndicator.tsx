"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8,
        duration: 1,
      }}
      className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">

        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Scroll
        </p>

        <div className="flex h-12 w-6 justify-center rounded-full border border-white/30">

          <motion.div
            animate={{
              y: [4, 22, 4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37]"
          />

        </div>

      </div>
    </motion.div>
  );
}
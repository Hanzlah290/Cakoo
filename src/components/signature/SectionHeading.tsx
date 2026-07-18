"use client";

import { motion } from "framer-motion";

export default function SectionHeading() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          uppercase
          tracking-[0.45em]
          text-[#D4AF37]
          text-sm
        "
      >
        Signature Collection
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        viewport={{ once: true }}
        className="
          mt-5
          font-[family:var(--font-heading)]
          text-5xl
          md:text-7xl
          text-white
        "
      >
        Crafted To

        <span className="block italic font-light text-[#D4AF37]">
          Perfection
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .2 }}
        viewport={{ once: true }}
        className="
          mx-auto
          mt-8
          max-w-xl
          text-white/60
          leading-8
        "
      >
        Every cake is handcrafted using premium ingredients,
        timeless recipes and an obsession with detail.
      </motion.p>

    </div>
  );
}
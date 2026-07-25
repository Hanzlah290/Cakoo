"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";

import StatItem from "./StatItem";

export default function StatsMotion() {
  return (
    <>
      {/* Heading */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center"
      >
        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[#E6C15A]
            text-sm
          "
        >
          Crafted With Passion
        </p>

        <h2
          className="
            mt-5
            font-[family:var(--font-heading)]
            text-5xl
            text-white
            md:text-7xl
          "
        >
          Every Celebration

          <span className="block font-light italic text-[#E6C15A]">
            Leaves A Memory
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-lg
            leading-9
            text-[#F7F0E7]/65"
          >
            Every handcrafted cake tells a story.
            Every celebration creates another memory.
            Every smile inspires us to bake even better.
        </p>
      </motion.div>

      {/* Stats */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="
          mt-28
          grid
          grid-cols-2
          gap-y-16
          lg:grid-cols-4
          lg:gap-8
          xl:gap-12
        "
      >
        <StatItem
          value={10}
          suffix="+"
          label="Years of Excellence"
          showDivider
        />

        <StatItem
          value={5000}
          suffix="+"
          label="Happy Customers"
          showDivider
        />

        <StatItem
          value={100}
          suffix="+"
          label="Custom Cakes"
          showDivider
        />

        <StatItem
          value={2}
          label="Bakery Branches"
        />
      </motion.div>
    </>
  );
}
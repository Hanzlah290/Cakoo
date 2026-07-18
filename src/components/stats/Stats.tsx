"use client";

import { motion } from "framer-motion";
import StatItem from "./StatItem";

export default function Stats() {
  return (
    <section
  className="
    relative
    overflow-hidden
    py-32
    bg-[linear-gradient(180deg,#2A1A13_0%,#170E09_45%,#100805_100%)]
  "
>

      {/* Ambient Gold Glow */}
      <div
      className="
      absolute
      left-[53%]
      top-[24%]
      h-[520px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#F8E3B5]/10
      blur-[170px]
      "
      />
      
      <div
      className="
      absolute
      left-1/2
      bottom-[12%]
      h-[420px]
      w-[900px]
      -translate-x-1/2
      rounded-full
      bg-[#D4AF37]/6
      blur-[150px]
      "
      />
      
      <div
      className="
      absolute
      -left-40
      top-1/2
      h-[500px]
      w-[500px]
      -translate-y-1/2
      rounded-full
      bg-[#FFF3E0]/5
      blur-[180px]
      "
      />
      
      <div
      className="
      absolute
      left-[-10%]
      bottom-[-15%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#7A4E1A]/8
      blur-[180px]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
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
              text-[#F7F0E7]/65
            "
          >
            Every handcrafted cake tells a story.
            Every celebration creates another memory.
            Every smile inspires us to bake even better.
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
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

        {/* Bottom Divider */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-24
            h-px
            w-40
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/40
            to-transparent
          "
        />

      </div>

    </section>
  );
}
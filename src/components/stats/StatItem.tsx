"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { staggerItem } from "@/lib/animations";

type StatItemProps = {
  value: number;
  suffix?: string;
  label: string;
  showDivider?: boolean;
};

export default function StatItem({
  value,
  suffix = "",
  label,
  showDivider = false,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;

    const duration = 1200;
    const increment = Math.max(1, Math.ceil(value / 100));
    const interval = duration / 100;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="relative flex flex-col items-center"
    >
      <div
      aria-hidden="true"
      className="
      absolute
      left-1/2
      top-1/2
      h-32
      w-32
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#D4AF37]/5
      blur-3xl
      "
      />

      <h3
        className="
          font-[family:var(--font-heading)]
          text-6xl
          font-semibold
          leading-none
          text-[#D4AF37]/95
          md:text-7xl
          xl:text-7xl
        "
      >
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p
        className="
          mt-5
          text-center
          text-xs
          uppercase
          tracking-[0.45em]
          text-white/55
        "
      >
        {label}
      </p>

      {showDivider && (
        <div
          className="
            absolute
            right-0
            top-1/2
            hidden
            h-20
            w-px
            -translate-y-1/2
            origin-center
            bg-gradient-to-b
            from-transparent
            via-[#F6E2A8]/20
            to-transparent
            lg:block
          "
        />
      )}
    </motion.div>
  );
}
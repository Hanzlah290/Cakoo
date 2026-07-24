"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/animations";

export default function SignatureMotion() {
  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
          Signature Collection
        </p>

        <h2
          className="
            mt-5
            font-[family:var(--font-heading)]
            text-6xl
            text-white
          "
        >
          Our Signature

          <span className="block font-light italic text-[#D4AF37]">
            Collection
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/60">
          Handcrafted cakes made with premium ingredients for
          unforgettable celebrations.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-20 grid gap-14 lg:grid-cols-3"
      >
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={staggerItem}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-20 text-center"
      >
        <Link
          href="/products"
          className="
            rounded-full
            border
            border-[#D4AF37]/30
            px-10
            py-4
            text-white
            transition
            duration-300
            hover:bg-[#D4AF37]
            hover:text-[#120C09]
          "
        >
          Explore Full Collection →
        </Link>
      </motion.div>
    </>
  );
}
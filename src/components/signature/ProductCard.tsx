"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  featured: boolean;
  highlight: boolean;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        backdrop-blur-xl
        transition-all
        duration-500
        ${
          product.highlight
            ? "scale-[1.08] -translate-y-6 border-[#D4AF37]/40 bg-[#342116]/90 shadow-2xl shadow-[#D4AF37]/15"
            : "border-white/6 bg-[#2A1A13]/80"
        }
      `}
    >
      {product.highlight && (
        <div
          className="
            absolute
            left-6
            top-6
            z-20
            rounded-full
            bg-[#D4AF37]
            px-4
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#120C09]
          "
        >
          Featured
        </div>
      )}

      <div className="relative h-[320px] overflow-hidden">

        <div
className="
absolute
inset-0
bg-gradient-to-b
from-white/5
to-transparent
pointer-events-none
"
/>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
            -rotate-1
          "
        />
      </div>

      <div className="p-8">
        <h3
          className="
            font-[family:var(--font-heading)]
            text-3xl
            text-white
          "
        >
          {product.name}
        </h3>

        <p className="mt-4 leading-7 text-white/65">
          {product.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-2xl font-semibold text-[#D4AF37]">
            {product.price}
          </span>

          <button
            disabled={true}
            className="
              rounded-full
              border
              border-[#D4AF37]/25
              px-5
              py-3
              text-sm
              text-white
              transition
              duration-300
              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-[#120C09]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#D4AF37]
              focus-visible:ring-offset-2
            "
          >
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}
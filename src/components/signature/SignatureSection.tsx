"use client";

import { featuredProducts } from "@/data/featuredProducts";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/animations";

export default function Signature() {
  return (

    
    <section className="relative bg-[linear-gradient(180deg,#1A100B_0%,#24160F_100%)] py-32">
      <div
  className="
    absolute
    inset-x-0
    top-0
    h-32
    bg-gradient-to-b
    from-[#2A1A13]
    to-transparent
    pointer-events-none
  "
/>

      <div
  className="
    absolute
    inset-0
    pointer-events-none
  "
>
  <div
    className="
      absolute
      left-1/2
      top-32
      h-[450px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-[#FFF3DD]/8
      blur-[170px]
    "
  />
</div>
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >

          <p className="tracking-[0.45em] text-[#D4AF37] uppercase text-sm">
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
            <span className="block italic font-light text-[#D4AF37]">
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
        
          <button
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
          </button>
      
      </motion.div>
      </div>
    </section>
  );
}
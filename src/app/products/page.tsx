"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Search,
  RotateCcw,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import {
  fadeUp,
  viewport,
} from "@/lib/animations";

import {
  products,
  categories,
} from "@/data/products";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" || product.category === category;

      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  return (
    <>
      <Navbar />

      <main
        className="
          relative
          overflow-hidden
          pt-36
          bg-[#FFFDD0]
        "
      >

        <div
          className="
            absolute
            -left-44
            top-24
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#8A5A3B]/10
            blur-[180px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            top-[420px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#7A4C31]/8
            blur-[190px]
            pointer-events-none
          "
        />

        {/* Hero */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#FFFDD0]
            pb-20
          "
        >

          <div
            className="
            -translate-x-1/2
            absolute
            left-[18%]
            top-[20%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#FFF8E5]/60
            blur-[140px]
          "
          />

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
              text-md
            "
            >
              Premium Collection
            </motion.p>

            <motion.h1
              className="
              mt-6
              font-[family:var(--font-heading)]
              text-6xl
              md:text-8xl
              text-[#1B130D]
            "
            >
              Sweet

<motion.span
  variants={fadeUp}
  transition={{
    delay: 0.15,
  }}
  className="block italic font-light text-[#D4AF37]"
>
                Creations
              </motion.span>

            </motion.h1>

            <motion.p
              className="
              mt-8
              max-w-3xl
              text-lg
              leading-6
              text-[#5E4A3E]
            "
            >
              Explore handcrafted cakes, cheesecakes,
              premium desserts and celebration favorites
              baked fresh every day.
            </motion.p>
            </motion.div>

          </div>

        </section>

        {/* Filters */}

        <section className="py-20">

          <div className="mx-auto max-w-7xl px-8 lg:px-16">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap gap-3">

                {categories.map((item) => (

                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`
                      rounded-full
                      px-6
                      py-3
                      text-sm
                      transition-all
                      duration-300
                      ${
                        category === item
                          ? "bg-gradient-to-r from-[#BF8D1B] via-[#D4AF37] to-[#F1D882] text-[#120C09] shadow-lg shadow-[#D4AF37]/20"
                          : "border border-[#D4AF37]/20 bg-white/70 shadow-sm hover:shadow-md text-[#1B130D] backdrop-blur-xl hover:bg-white/90 hover:border-[#D4AF37]/30"
                      }
                    `}
                  >
                    {item}
                  </button>

                ))}

              </div>

              <div className="relative w-full lg:w-[350px]">

                <Search
                  className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#8A7B6A]
                "
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search cakes..."
                  className="
                  w-full
                  rounded-full
                  border
                  bg-white/90
                  shadow-sm
                  border-[#D4AF37]/12
                  text-[#1B130D]
                  placeholder:text-[#8A7B6A]
                  backdrop-blur-xl
                  py-4
                  pl-14
                  pr-6
                  outline-none
                  backdrop-blur-xl
                "
                />

              </div>

            </div>

            <div
              className="
              mt-10
              flex
              items-start
              gap-4
              rounded-2xl
              border
              bg-white/75
              shadow-sm
              border-[#D4AF37]/15
              backdrop-blur-xl
              p-6
              mt-8
            "
            >

              <AlertTriangle
                className="text-[#D4AF37]"
              />

              <p className="text-[#5E4A3E] leading-7">

                Prices shown are estimated.

                Final pricing depends on cake size,
                customization and availability.

              </p>

            </div>
            </div>
         </section>

        {/* Product Grid */}

        <div
          className="
            absolute
            left-[-220px]
            top-[1200px]
            h-[350px]
            w-[400px]
            rounded-full
            bg-[#8D6547]/8
            blur-[230px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            right-[-260px]
            top-[1900px]
            h-[350px]
            w-[400px]
            rounded-full
            bg-[#A0724D]/7
            blur-[240px]
            pointer-events-none
          "
        />
        {/* ========================================= */}

        <section className="pb-32">

          <div className="mx-auto max-w-7xl px-8 lg:px-16">

          <AnimatePresence mode="wait">

            {filteredProducts.length > 0 ? (

              <motion.div
                layout
                className="
                  grid
                  gap-8
                  md:grid-cols-2
                  xl:grid-cols-3
                "
              >

                {filteredProducts.map((product, index) => (

                  <motion.div
                    key={product.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: .95,
                    }}
                    transition={{
                      delay: index * .08,
                      duration: .5,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[34px]
                      border
                      border-[#D4AF37]/18
                      bg-[#382116]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-[#D4AF37]/25
                      shadow-[0_35px_80px_rgba(28,18,12,0.18)]
                      hover:shadow-[0_45px_90px_rgba(28,18,12,0.28)]
                    "
                  >

                    {/* Gold Glow */}

                    <div
                      className="
                        absolute
                        -right-20
                        -top-20
                        h-56
                        w-56
                        rounded-full
                        bg-[#F3D78C]/12
                        blur-[90px]
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:opacity-100
                      "
                    />

                    {/* Image */}

                    <div
                      className="
                        relative
                        h-[320px]
                        overflow-hidden
                      "
                    >

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />

                    </div>

                    {/* Content */}

                    <div className="relative z-10 p-8">

                      <span
                        className="
                          rounded-full
                          border
                          bg-[#F3D78C]/14
                          border-[#D4AF37]/15
                          px-4
                          py-2
                          text-[11px]
                          uppercase
                          tracking-[0.35em]
                          text-[#D4AF37]
                        "
                      >
                        {product.category}
                      </span>

                      <h3
                        className="
                          mt-6
                          font-[family:var(--font-heading)]
                          text-4xl
                          text-white
                        "
                      >
                        {product.name}
                      </h3>

                      <p
                        className="
                          mt-5
                          leading-8
                          text-white/60
                        "
                      >
                        {product.description}
                      </p>

                      <div
                        className="
                          mt-10
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <div>

                          <p className="text-white/40 text-sm">
                            Starting From
                          </p>

                          <p
                            className="
                              mt-1
                              text-3xl
                              font-semibold
                              text-[#D4AF37]
                            "
                          >
                            {product.price}
                          </p>

                        </div>

                        <button
                          className="
                            group/button
                            relative
                            overflow-hidden
                            rounded-full
                            bg-gradient-to-r
                            from-[#BF8D1B]
                            via-[#D4AF37]
                            to-[#F1D882]
                            px-7
                            py-4
                            font-semibold
                            text-[#120C09]
                            transition-all
                            duration-500
                            hover:scale-105
                          "
                        >

                          <span
                            className="
                              relative
                              z-10
                              flex
                              items-center
                              gap-2
                            "
                          >

                            View

                            <ArrowRight
                              size={16}
                              className="
                                transition-transform
                                duration-300
                                group-hover/button:translate-x-1
                              "
                            />

                          </span>

                          <span
                            className="
                              absolute
                              left-[-120%]
                              top-0
                              h-full
                              w-16
                              rotate-12
                              bg-white/40
                              transition-all
                              duration-700
                              group-hover/button:left-[120%]
                            "
                          />

                        </button>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </motion.div> 
              
            
            ) : (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  rounded-[36px]
                  border
                  border-white/5
                  bg-[#17100B]
                  py-28
                  text-center
                  backdrop-blur-xl
                "
              >

                <RotateCcw
                  size={42}
                  className="mb-6 text-[#D4AF37]"
                />

                <h3
                  className="
                    font-[family:var(--font-heading)]
                    text-4xl
                  "
                >
                  No Products Found
                </h3>

                <p
                  className="
                    mt-5
                    max-w-lg
                    leading-8
                    bg-[#17100B]
                  "
                >
                  We couldn&apos;t find any products matching
                  your search or selected category.
                </p>

                <button
                  onClick={() => {
                    setCategory("All");
                    setSearch("");
                  }}
                  className="
                    mt-10
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    px-8
                    py-4
                    text-white
                    transition
                    duration-300
                    hover:bg-[#D4AF37]
                    hover:text-[#120C09]
                  "
                >
                  Reset Filters
                </button>

              </motion.div>

            )}

          </AnimatePresence>
          </div>

        </section>

        {/* ======================================= */}
        {/* CTA */}
        <div
          className="
            absolute
            left-[-180px]
            bottom-[320px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#8B5B3D]/10
            blur-[220px]
            pointer-events-none
          "
        />
        <div
          className="
            absolute
            right-[-220px]
            bottom-[-120px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#A77B55]/8
            blur-[200px]
            pointer-events-none
          "
        />
        {/* ======================================= */}

        <section className="pb-32">

          <div className="mx-auto max-w-7xl px-8 lg:px-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-[#D4AF37]/15
              bg-[#382116]
              px-10
              py-20
              text-center
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[550px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D4AF37]/10
                blur-[170px]
              "
            />

            <div className="relative z-10">

              <p className="uppercase tracking-[0.45em] text-[#D4AF37] text-sm">
                Handmade With Love
              </p>

              <h2
                className="
                  mt-6
                  font-[family:var(--font-heading)]
                  text-5xl
                  md:text-7xl
                "
              >
                Can&apos;t Find

                <span className="block italic font-light text-[#D4AF37]">
                  Your Dream Cake?
                </span>

              </h2>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-white/65
                "
              >
                Every celebration is unique.
                Let our pastry chefs create a completely
                custom cake tailored to your occasion.
              </p>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="
                  mt-12
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#BF8D1B]
                  via-[#D4AF37]
                  to-[#F1D882]
                  px-10
                  py-5
                  font-semibold
                  text-[#120C09]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_18px_45px_rgba(212,175,55,.28)]
                "
              >
                Request Custom Cake

                <ArrowRight size={18} />
              </a>

            </div>

          </div>
          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = [
  "All",
  "Birthday",
  "Chocolate",
  "Cheesecake",
  "Desserts",
];

const products = [
  {
    id: 1,
    name: "Blueberry Bliss",
    category: "Cheesecake",
    price: "Rs. 3,800",
    image: "/images/products/blueberry.png",
    description:
      "Creamy cheesecake layered with fresh blueberries.",
  },
  {
    id: 2,
    name: "Belgian Chocolate",
    category: "Chocolate",
    price: "Rs. 3,200",
    image: "/images/products/belgian.jpeg",
    description:
      "Rich Belgian chocolate finished with silky ganache.",
  },
  {
    id: 3,
    name: "New York Cheesecake",
    category: "Cheesecake",
    price: "Rs. 2,900",
    image: "/images/products/cheesecake.jpeg",
    description:
      "Classic baked cheesecake with buttery biscuit base.",
  },
  {
    id: 4,
    name: "Chocolate Fudge",
    category: "Birthday",
    price: "Rs. 3,600",
    image: "/images/products/fudge.jpeg",
    description:
      "Decadent chocolate cake perfect for celebrations.",
  },
  {
    id: 5,
    name: "Lotus Cake",
    category: "Desserts",
    price: "Rs. 3,900",
    image: "/images/products/lotus.jpeg",
    description:
      "Creamy lotus filling with caramel biscuit layers.",
  },
  {
    id: 6,
    name: "Ferrero Cake",
    category: "Chocolate",
    price: "Rs. 4,200",
    image: "/images/products/ferrero.jpeg",
    description:
      "Premium Ferrero Rocher inspired celebration cake.",
  },
];

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

      <main className="bg-[#090503] pt-36 text-white">

        {/* Hero */}

        <section className="relative overflow-hidden">

          <div
            className="
            absolute
            left-1/2
            top-0
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/10
            blur-[180px]
          "
          />

          <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
              text-sm
            "
            >
              Premium Collection
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .1 }}
              className="
              mt-6
              font-[family:var(--font-heading)]
              text-6xl
              md:text-8xl
            "
            >
              Sweet

              <span className="block italic font-light text-[#D4AF37]">
                Creations
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .2 }}
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-white/65
            "
            >
              Explore handcrafted cakes, cheesecakes,
              premium desserts and celebration favorites
              baked fresh every day.
            </motion.p>

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
                          ? "bg-[#D4AF37] text-[#120C09]"
                          : "border border-white/10 bg-white/5 text-white hover:border-[#D4AF37]/30"
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
                  text-white/40
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
                  border-white/10
                  bg-white/5
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
              border-[#D4AF37]/10
              bg-[#120C09]
              p-6
            "
            >

              <AlertTriangle
                className="text-[#D4AF37]"
              />

              <p className="text-white/60 leading-7">

                Prices shown are estimated.

                Final pricing depends on cake size,
                customization and availability.

              </p>

            </div>
            </div>
</section>
                    {/* ========================================= */}
        {/* Product Grid */}
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
                      border-white/5
                      bg-white/[0.03]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-[#D4AF37]/20
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
                        bg-[#D4AF37]/8
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
                          border-[#D4AF37]/20
                          bg-[#D4AF37]/10
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
                  bg-white/[0.03]
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
                    text-white/60
                  "
                >
                  We couldn't find any products matching
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
              bg-[#120C09]
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
                Can't Find

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
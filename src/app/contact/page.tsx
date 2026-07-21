"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090503] text-white pt-36">

        {/* Hero */}

        <section className="relative overflow-hidden">

          {/* Gold Glow */}

          <div
            className="
            absolute
            left-1/2
            top-10
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#D4AF37]/10
            blur-[170px]
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
              Get In Touch
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
              Visit

              <span className="block italic font-light text-[#D4AF37]">
                Cakoo Bakery
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
              Whether you&apos;re planning a birthday,
              wedding or special celebration,
              our team is ready to craft something unforgettable.
            </motion.p>

          </div>

        </section>

        {/* Contact Grid */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2 lg:px-16">

            {/* Left */}

            <div>

              <div
                className="
                rounded-[32px]
                border
                border-white/5
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
              "
              >

                <h2
                  className="
                  font-[family:var(--font-heading)]
                  text-4xl
                  text-white
                  "
                >
                  Let&apos;s Talk
                </h2>

                <p className="mt-6 leading-8 text-white/65">
                  Need a custom birthday cake,
                  wedding cake or premium desserts?

                  Contact our team directly and we&apos;ll help
                  you create something unforgettable.
                </p>

                <div className="mt-10 space-y-8">

                  <div className="flex gap-5">

                    <Phone className="text-[#D4AF37]" />

                    <div>

                      <p className="font-semibold">
                        Phone
                      </p>

                      <p className="text-white/60">
                        +92 300 1234567
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <MapPin className="text-[#D4AF37]" />

                    <div>

                      <p className="font-semibold">
                        Location
                      </p>

                      <p className="text-white/60">
                        Wah Cantt & Attock
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <Clock className="text-[#D4AF37]" />

                    <div>

                      <p className="font-semibold">
                        Opening Hours
                      </p>

                      <p className="text-white/60">
                        7:00 AM — 11:00 PM
                      </p>

                    </div>

                  </div>

                </div>

                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-8
                    py-4
                    font-semibold
                    text-[#120C09]
                    transition
                    hover:scale-105
                  "
                >
                  <MessageCircle size={18} />

                  WhatsApp Us

                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

            {/* Right */}

            <div
              className="
              rounded-[32px]
              border
              border-white/5
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
            "
            >

              <h2
                className="
                font-[family:var(--font-heading)]
                text-4xl
              "
              >
                Send an Inquiry
              </h2>

              <form className="mt-10 space-y-6">

                <input
                  placeholder="Your Name"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-4
                  outline-none
                "
                />

                <input
                  placeholder="Phone Number"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-4
                  outline-none
                "
                />

                <input
                  placeholder="Event Date"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-4
                  outline-none
                "
                />
                                <input
                  placeholder="Email Address"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    outline-none
                  "
                />

                <textarea
                  placeholder="Tell us about your celebration..."
                  rows={6}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-4
                    outline-none
                    resize-none
                  "
                />

                <button
                  className="
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-[#BF8D1B]
                    via-[#D4AF37]
                    to-[#F1D882]
                    py-4
                    font-semibold
                    text-[#120C09]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_15px_40px_rgba(212,175,55,.35)]
                  "
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* Branches */}
        {/* ========================================= */}

        <section className="pb-28">

          <div className="mx-auto max-w-7xl px-8 lg:px-16">

            <div className="text-center">

              <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm">
                Our Locations
              </p>

              <h2
                className="
                  mt-5
                  font-[family:var(--font-heading)]
                  text-5xl
                  md:text-7xl
                "
              >
                Visit Our Bakery
              </h2>

            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-2">

              {/* Wah */}

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/20
                "
              >

                <h3
                  className="
                    font-[family:var(--font-heading)]
                    text-3xl
                  "
                >
                  Wah Cantt
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  Main GT Road,
                  Wah Cantt,
                  Punjab
                </p>

                <div className="mt-10 space-y-4 text-white/70">

                  <p>Open Daily</p>

                  <p>7:00 AM — 11:00 PM</p>

                  <p>+92 300 1234567</p>

                </div>

              </div>

              {/* Attock */}

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D4AF37]/20
                "
              >

                <h3
                  className="
                    font-[family:var(--font-heading)]
                    text-3xl
                  "
                >
                  Attock
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  Main Commercial Area,
                  Attock,
                  Punjab
                </p>

                <div className="mt-10 space-y-4 text-white/70">

                  <p>Open Daily</p>

                  <p>11:00 AM — 11:00 PM</p>

                  <p>+92 300 7654321</p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}

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
                  h-[500px]
                  w-[500px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D4AF37]/10
                  blur-[160px]
                "
              />

              <div className="relative z-10">

                <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm">
                  Custom Cakes
                </p>

                <h2
                  className="
                    mt-6
                    font-[family:var(--font-heading)]
                    text-5xl
                    md:text-7xl
                  "
                >
                  Ready For Your

                  <span className="block italic font-light text-[#D4AF37]">
                    Next Celebration?
                  </span>

                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/65">
                  From birthdays to weddings,
                  our team crafts every cake with
                  premium ingredients and meticulous attention to detail.
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
                  <MessageCircle size={18} />

                  Inquire About Custom Cake

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
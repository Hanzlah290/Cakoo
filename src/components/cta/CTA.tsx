"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
  className="
    relative
    overflow-hidden
    bg-[linear-gradient(180deg,#F7F2EB_0%,#F3ECE3_100%)]
    px-6
    py-26
  "
>

  

<div
className="
relative
mx-auto
max-w-6xl
text-center
"
>

        {/* Top Highlight */}


        {/* Main Gold Glow */}
<div
className="
absolute
left-1/2
top-[60%]
h-[850px]
w-[850px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#F3D78C]/12
blur-[180px]
"
/>
<div
className="
absolute
left-[15%]
top-[35%]
h-[350px]
w-[350px]
rounded-full
bg-white/40
blur-[120px]
"
/>


        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="relative z-20"
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-[#D4AF37]
              text-sm
            "
          >
            Premium Handcrafted Cakes
          </p>

          <h2
            className="
              mt-8
              font-[family:var(--font-heading)]
              text-5xl
              leading-[0.92]
              text-[#1B130D]
              md:text-6xl
            "
          >
            Ready To Create

            <span className="block">
              Your Next
            </span>

            <span className="block italic font-light text-[#D4AF37]">
              Celebration?
            </span>
          </h2>

          <div className="mx-auto mt-10 h-px w-24 bg-[#D4AF37]/70" />

          <p
            className="
              mx-auto
              mt-12
              max-w-xl
              text-lg
              leading-9
              text-[#5E4A3E]
            "
          >
            Every handcrafted cake is baked with premium
            ingredients, timeless recipes and a passion
            for creating unforgettable celebrations.
          </p>

          <div className="mt-14 flex justify-center gap-5 flex-wrap">

            <button
              className="
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
                hover:-translate-y-1
              "
            >
              Order on WhatsApp
            </button>

            <button
              className="
                rounded-full
                border
                px-10
                py-5
                border-[#2A1A13]/15
bg-white/50
text-[#1B130D]
hover:bg-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#D4AF37]/40
              "
            >
              View Products
            </button>

          </div>
        </motion.div>

        {/* Luxury Ring */}

         <motion.div
           animate={{
             rotate: 360,
           }}
           transition={{
             duration: 45,
             repeat: Infinity,
             ease: "linear",
           }}
           className="
             absolute
             bottom-[-40px]
             left-1/2
             z-10
             h-[620px]
             w-[620px]
             -translate-x-1/2
             rounded-full
             border
             border-[#D4AF37]/18
           "
         />

         {/* Sparkles */}

         <motion.div
           animate={{
             y: [0, -12, 0],
             opacity: [0.2, 1, 0.2],
             scale: [1, 1.3, 1],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
           }}
           className="
             absolute
             left-[20%]
             top-[72%]
             z-20
             h-2
             w-2
             rounded-full
             bg-[#D4AF37]
           "
         />
         
         <motion.div
           animate={{
             y: [0, 10, 0],
             opacity: [1, .3, 1],
           }}
           transition={{
             duration: 5,
             repeat: Infinity,
           }}
           className="
             absolute
             right-[18%]
             top-[70%]
             z-20
             h-3
             w-3
             rounded-full
             bg-[#D4AF37]/70
           "
         />
         
         <motion.div
           animate={{
             opacity: [.2,1,.2],
             rotate:[0,180,360],
           }}
           transition={{
             duration:7,
             repeat:Infinity,
           }}
           className="
             absolute
             left-[30%]
             top-[84%]
             z-20
             text-[#D4AF37]/60
             text-xl
           "
         >
             ✦
         </motion.div>

        {/* Floating Cake */}

        <div
className="
relative
mx-auto
max-w-6xl
text-center
pb-[320px]
"
>

<div
className="
absolute
left-1/2
bottom-[150px]
h-[560px]
w-[560px]
-translate-x-1/2
rounded-full
border
border-[#D4AF37]/6
"
/>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-260px]
            left-1/2
            z-30
            -translate-x-1/2
          "
        >
        <Image
          src="/images/cta-cake.png"
          alt="Premium Cake"
          width={450}
          height={450}
          priority
          className="
            rotate-[-4deg]
            select-none
            pointer-events-none
            drop-shadow-[0_70px_120px_rgba(0,0,0,.55)]
          "
        />
        </motion.div>

        <div className="h-10" />

      </div>
      </div>
      <div
className="
absolute
bottom-0
left-0
h-40
w-full
bg-gradient-to-b
from-transparent
to-[#2A1A13]
"
/>

    </section>
  );
}
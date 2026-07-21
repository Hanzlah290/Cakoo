"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {

const [exiting, setExiting] = useState(false);

useEffect(() => {
  const exitTimer = setTimeout(() => {
    setExiting(true);
  }, 2500);

  const completeTimer = setTimeout(() => {
    onComplete();
  }, 3600);

  return () => {
    clearTimeout(exitTimer);
    clearTimeout(completeTimer);
  };
}, [onComplete]);

  return (

    

  <motion.div
    key="loading-screen"
    exit={{
      opacity: 0,
      transition: {
        duration: 0.35,
      },
    }}
    className="fixed inset-0 z-[9999] overflow-hidden bg-[#382116]"
  >
<div
className="
absolute
inset-0
opacity-[0.03]
pointer-events-none
bg-[url('/images/noise.png')]
"
/>
  {/* Top Left Cocoa Glow */}
  <div
    className="
      absolute
      left-[-200px]
      top-[80px]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#8B5B3D]/14
      blur-[200px]
      pointer-events-none
    "
  />

  {/* Top Right Gold Glow */}
  <div
    className="
      absolute
      right-[-180px]
      top-[-120px]
      h-[520px]
      w-[520px]
      rounded-full
      bg-[#D4AF37]/10
      blur-[200px]
      pointer-events-none
      
    "  
    />

<motion.div
animate={{

scale:
    exiting
        ? .85
        : [1,1.08,1],

opacity:
    exiting
        ? 0
        : [.05,.13,.05],

}}

transition={{
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut",
}}
  className="
    absolute
    left-1/2
    top-1/2
    h-[500px]
    w-[500px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#D4AF37]/18
    blur-[150px]
  "
/><div
  className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.18)_100%)]
    pointer-events-none
  "
/>

          {/* Center Content */}
{/* Center Content */}

<div className="relative z-30 flex h-full -translate-y-20 flex-col items-center justify-center">


<motion.div
    initial={{
        opacity:0,
        scale:.88,
        y:20,
    }}

    animate={{
        opacity: exiting ? 0 : 1,
        scale: exiting ? .92 : 1,
        y: exiting ? -20 : 0,
    }}

    transition={{
        delay:.7,
        duration:.8,
        ease:[0.22,1,0.36,1],
    }}
>

<motion.div
    animate={{
        scale:[1,1.018,1],
        y:[0,-2,0],
    }}

    transition={{
        duration:4,
        repeat:Infinity,
        ease:"easeInOut",
    }}
>
    <Image
      src="/images/cakoo-v3.png"
      alt="Cakoo Bakery"
      width={260}
      height={110}
      priority
      className="mx-auto w-[250px] h-auto select-none"
    />
  </motion.div>
  </motion.div>
  <motion.div
  animate={{
    y:[0,-20,0],
    opacity:[.2,.8,.2],
  }}
  transition={{
    duration:5,
    repeat:Infinity,
  }}
  className="
    absolute
    left-[42%]
    top-[42%]
    h-2
    w-2
    rounded-full
    bg-[#D4AF37]
    opacity-40
  "
/>
<motion.div
  animate={{
    y:[0,-20,0],
    opacity:[.2,.8,.2],
  }}
  transition={{
    duration:5,
    repeat:Infinity,
  }}
  className="
    absolute
    left-[92%]
    top-[92%]
    h-2
    w-2
    rounded-full
        bg-[#D4AF37]
    opacity-40
  "
/>
<motion.div
  animate={{
    y:[0,-20,0],
    opacity:[.2,.8,.2],
  }}
  transition={{
    duration:5,
    repeat:Infinity,
  }}
  className="
    absolute
    left-[24%]
    top-[24%]
    h-2
    w-2
    rounded-full
    bg-[#D4AF37]
    opacity-40
  "
/>

  {/* Tagline */}

  <motion.p
    initial={{
      opacity: 0,
      y: 15,
    }}
animate={{
    opacity: exiting ? 0 : .55,
    y: exiting ? -20 : 0,
}}
    transition={{
      delay: 1.1,
      duration: 0.7,
    }}
    className="
      mt-6
      text-xs
      uppercase
      tracking-[0.45em]
      text-white/60
    "
  >
    Crafted With Passion
  </motion.p>

  {/* Loading Line */}

<motion.div
    animate={{
        opacity: exiting ? 0 : 1,
    }}
    transition={{
        duration: 0.35,
    }}
    className="
        relative
        mt-10
        h-px
        w-40
        overflow-hidden
        bg-white/10
    "
>

    <motion.div

        animate={{
            x:["-100%","180%"],
        }}

        transition={{
            duration:2,
            repeat:Infinity,
            ease:"linear",
        }}

        className="
            absolute
            inset-y-0
            w-20
            bg-gradient-to-r
            from-transparent
            via-[#F1D882]
            to-transparent
        "
    />

</motion.div>

</div>

          {/* Chocolate Layer */}

<motion.div
initial={{
  y: "-120%",
  scaleY: 1.08,
}}
animate={{
  y: exiting ? "140%" : 0,

  scaleY: exiting ? 1.03 : 1,
}}
transition={{
  duration: 1.8,
  ease: [0.16, 1, 0.3, 1],
}}
  className="
    absolute
    inset-x-0
    top-0
    z-50
    h-[75vh]
  "
>
<motion.div
    animate={{
        y: exiting ? 0 : [0, 8, 0],
    }}
    transition={{
        delay: 1.4,
        duration: 0.45,
        ease: "easeOut",
    }}
    className="h-full w-full"
>
    <Image
        src="/svg/chocolate-drips.svg"
        alt=""
        fill
        priority
          className="
    object-fill
    -translate-y-20
    select-none
    pointer-events-none
  "
    />
</motion.div>
</motion.div>
        </motion.div>
      )
}
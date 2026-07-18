"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "../ui/ScrollIndicator";
import FloatingParticles from "./FloatingParticles";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <HeroBackground />
      <FloatingParticles />

<div
  className="
    relative
    z-20
    mx-auto
    flex
    h-full
    max-w-[1700px]
    items-start
    pt-40
    lg:pt-35
    px-8
    lg:px-16
  "
>
          <HeroContent />
          <HeroImage />
      </div>

      <ScrollIndicator />

    </section>
  );
}
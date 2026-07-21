"use client";


export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
<div
  className="
    absolute
    inset-0
    bg-[#FFFDD0]
  "
/>

<div
  className="absolute inset-0"
  style={{
    background: `
      linear-gradient(
        90deg,
        rgba(58,36,24,.70) 0%,
        rgba(58,36,24,.55) 28%,
        rgba(58,36,24,.35) 40%,
        rgba(58,36,24,.15) 52%,
        rgba(58,36,24,0) 68%
      )
    `,
  }}
/>

<div
  className="absolute inset-0"
  style={{
    background:
      "radial-gradient(circle at 18% 45%, rgba(212,175,55,.08), transparent 45%)",
  }}
/>

      {/* Main Cinematic Overlay */}


      {/* Gold Glow Behind Cake */}
<div
  className="
    absolute
    right-[18%]
    top-[44%]
    h-[700px]
    w-[520px]
    -translate-y-1/2
    rounded-full
    bg-[#F5D58C]/10
    blur-[140px]
  "
/>
<div
  className="
    absolute
    right-[10%]
    top-[18%]
    h-[700px]
    w-[420px]
    rotate-[-18deg]
    rounded-full
    bg-[#FFF2D8]/8
    blur-[140px]
  "
/>
<div
  className="
    absolute
    right-[28%]
    bottom-[12%]
    h-[260px]
    w-[260px]
    rounded-full
    bg-[#D4AF37]/8
    blur-[90px]
  "
/>

      {/* Cinematic Vignette */}


      {/* Soft Grain Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
        "
      />
    </>
  );
}
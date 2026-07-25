import StatsMotion from "./StatsMotion";

export default function Stats() {
  return (
    <section
  className="
    relative
    overflow-hidden
    py-32
    bg-[linear-gradient(180deg,#2A1A13_0%,#170E09_45%,#100805_100%)]
  "
>

      {/* Ambient Gold Glow */}
      <div
      aria-hidden="true"
      className="
      absolute
      left-[53%]
      top-[24%]
      h-[520px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#F8E3B5]/10
      blur-[170px]
      "
      />
      
      <div
      aria-hidden="true"
      className="
      absolute
      left-1/2
      bottom-[12%]
      h-[420px]
      w-[900px]
      -translate-x-1/2
      rounded-full
      bg-[#D4AF37]/6
      blur-[150px]
      "
      />
      
      <div
      aria-hidden="true"
      className="
      absolute
      -left-40
      top-1/2
      h-[500px]
      w-[500px]
      -translate-y-1/2
      rounded-full
      bg-[#FFF3E0]/5
      blur-[180px]
      "
      />
      
      <div
      aria-hidden="true"
      className="
      absolute
      left-[-10%]
      bottom-[-15%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#7A4E1A]/8
      blur-[180px]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">

        {/* Heading */}

       <StatsMotion />

        {/* Bottom Divider */}

        <div
          className="
            mx-auto
            mt-24
            h-px
            w-40
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/40
            to-transparent
          "
        />

      </div>

    </section>
  );
}
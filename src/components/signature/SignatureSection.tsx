import SignatureMotion from "./SignatureMotion";

export default function Signature() {
  return (

    
    <section className="relative bg-[linear-gradient(180deg,#1A100B_0%,#24160F_100%)] py-32">
      <div
        aria-hidden="true"
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
        aria-hidden="true"
        className="
          absolute
          inset-0
          pointer-events-none
        "
       >
      <div
        aria-hidden="true"
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

       <SignatureMotion />
      </div>
    </section>
  );
}
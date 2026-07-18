import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/loading/LoadingScreen";
import Hero from "@/components/hero/Hero";
import SignatureSection from "@/components/signature/SignatureSection";
import Stats from "@/components/stats/Stats";
import CTA from "@/components/cta/CTA";
import Marquee from "@/components/marquee/Marquee";

export default function Home() {
  return (
    <>
     <LoadingScreen />
      <Navbar />
      <Hero />
      <SignatureSection />
      
      <Stats/>
      <Marquee />
      <CTA />

      <Footer />
    </>
  );
}
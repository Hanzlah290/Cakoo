"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/loading/LoadingScreen";
import Hero from "@/components/hero/Hero";
import SignatureSection from "@/components/signature/SignatureSection";
import Stats from "@/components/stats/Stats";
import CTA from "@/components/cta/CTA";
import Marquee from "@/components/marquee/Marquee";

export default function Home() {

  const [loadingFinished, setLoadingFinished] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoadingFinished(true);
  }, 3600); // Same duration as LoadingScreen

  return () => clearTimeout(timer);
}, []);

  return (
<>
  {!loadingFinished ? (
    <LoadingScreen
      onComplete={() => setLoadingFinished(true)}
    />
  ) : (
    <>
      <Navbar />
      <Hero />
      <SignatureSection />
      <Marquee />
      <Stats />
      <CTA />
      <Footer />
    </>
  )}
</>
  );
}
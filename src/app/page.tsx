import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Premium Handcrafted Cakes",
  description:
    "Discover handcrafted cakes, desserts, and celebration treats made with premium ingredients for every special occasion.",
};

export default function Page() {
  return <HomePage />;
}
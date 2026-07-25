import type { Metadata } from "next";
import ProductsPage from "@/components/pages/ProductsPage";

export const metadata: Metadata = {
  title: "Our Cakes",
  description:
    "Browse our collection of handcrafted cakes, premium desserts, and celebration treats for birthdays, weddings, and special occasions.",
};

export default function Page() {
  return <ProductsPage />;
}
"use client";

import { featuredProducts } from "@/data/featuredProducts";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="mt-20 grid gap-10 lg:grid-cols-3">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
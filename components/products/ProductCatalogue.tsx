"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, PRODUCTS, type Category, type Product } from "./productsData";
import ProductModal from "./ProductModal";

export default function ProductCatalogue() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* ── Sticky filter tabs ── */}
      <div className="border-b border-border sticky top-16 md:top-20 bg-background z-30">
        <div className="px-6 md:px-10 lg:px-16">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-4 text-xs tracking-widest uppercase whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  active === cat
                    ? "border-foreground text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product grid ── */}
      <section className="px-6 md:px-10 lg:px-16 py-16 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-background"
              onClick={() => setSelected(product)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${product.name}`}
              onKeyDown={(e) => e.key === "Enter" && setSelected(product)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300" />
                {/* View details badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background text-foreground px-3 py-2 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    View Details
                    <ArrowRight size={12} aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
                  {product.category}
                </p>
                <h3 className="text-base font-black text-foreground mb-3">{product.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs text-muted-foreground border border-border px-2 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Modal ── */}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

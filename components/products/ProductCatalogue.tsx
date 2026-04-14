"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  CATEGORIES,
  PRODUCTS,
  type Category,
  type Product,
} from "./productsData";
import ProductModal from "./ProductModal";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function ProductCatalogue() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      {/* ── Sticky filter tabs ── */}
      <div className="border-b border-zinc-800 sticky top-16 md:top-20 bg-black z-30">
        <div className="px-6 md:px-10 lg:px-16 py-2">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-5 text-xs tracking-widest uppercase whitespace-nowrap border-b-2 transition-all duration-300 ${
                  active === cat
                    ? "border-white text-white font-medium"
                    : "border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product grid ── */}
      <section
        ref={ref}
        className="px-6 md:px-10 lg:px-16 py-24 border-b border-zinc-800 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              onClick={() => setSelected(product)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(product)}
              className="
                group cursor-pointer
                bg-zinc-950
                rounded-lg overflow-hidden
                transition-all duration-700
                hover:-translate-y-2 hover:shadow-2xl
                border border-zinc-900
              "
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(25px)",
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
              }}
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

                {/* CTA badge */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black text-white px-3 py-2 text-xs font-bold tracking-widest uppercase flex items-center gap-2 border border-zinc-700">
                    View Details
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="p-6 space-y-3">
                <p className="text-xs text-zinc-400 tracking-widest uppercase">
                  {product.category}
                </p>

                <h3 className="text-base font-black text-white group-hover:translate-x-1 transition-transform duration-300">
                  {product.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="
                        text-xs text-zinc-400
                        border border-zinc-800
                        px-2 py-1
                        transition-colors duration-300
                        group-hover:border-zinc-500
                        group-hover:text-white
                      "
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

"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import type { Product } from "./productsData";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={product.name}
    >
      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* ── Modal panel ── */}
      <div
        className="relative z-10 bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left — product image */}
        <div className="relative w-full md:w-[45%] min-h-[260px] md:min-h-0 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </div>

        {/* Right — product info */}
        <div className="flex flex-col p-8 md:p-10 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-foreground hover:bg-muted transition-colors duration-150"
          >
            <X size={18} />
          </button>

          {/* Category label */}
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            {product.category}
          </p>

          {/* Product name */}
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-3">
              Specifications
            </p>
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="text-xs text-muted-foreground border border-border px-3 py-1.5"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-3">
              Key Features
            </p>
            <ul className="space-y-2">
              {product.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={14} className="text-foreground shrink-0" aria-hidden="true" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-foreground text-background text-sm font-black tracking-widest uppercase hover:bg-foreground/80 transition-colors duration-200"
            >
              Get A Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

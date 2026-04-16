"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "./productsData";
import EnquiryModal from "@/components/EnquiryModal";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      <AnimatePresence>
        {/* ── Product detail modal ── */}
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label={product.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal container */}
          <motion.div
            className="relative z-10 bg-background w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 80, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Left — image */}
            <div className="relative w-full md:w-[45%] min-h-[260px] md:min-h-0 shrink-0 overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Right — info */}
            <div className="flex flex-col p-8 md:p-10 overflow-y-auto">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                aria-label="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-foreground hover:bg-muted transition-colors duration-150"
              >
                <X size={18} />
              </motion.button>

              {/* Content stagger */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                <motion.p
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3"
                >
                  {product.category}
                </motion.p>

                <motion.h2
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-4"
                >
                  {product.name}
                </motion.h2>

                <motion.p
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                  className="text-sm text-muted-foreground leading-relaxed mb-6"
                >
                  {product.description}
                </motion.p>

                {/* Specs */}
                <motion.div
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="mb-6"
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-3">
                    Specifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <motion.span
                        key={spec}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs text-muted-foreground border border-border px-3 py-1.5"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                  className="mb-8"
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-3">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <motion.li
                        key={feat}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <Check size={14} className="text-foreground shrink-0" />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* CTA */}
              <div className="mt-auto">
                <motion.button
                  onClick={() => setShowEnquiry(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#25D366] text-white text-sm font-black tracking-widest uppercase hover:bg-[#20b858] transition-colors duration-200"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <MessageCircle size={18} />
                  </motion.span>
                  Enquire on WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── Enquiry modal stacked on top ── */}
      {showEnquiry && (
        <EnquiryModal product={product} onClose={() => setShowEnquiry(false)} />
      )}
    </>
  );
}

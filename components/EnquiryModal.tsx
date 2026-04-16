"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, MessageCircle, Phone, ArrowRight } from "lucide-react";

export interface EnquiryProduct {
  name: string;
  category: string;
  image: string;
  specs: string[];
  features: string[];
  description: string;
}

interface EnquiryModalProps {
  product: EnquiryProduct;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "918144721458"; // Change to your actual number

function buildWhatsAppMessage(
  product: EnquiryProduct,
  name: string,
  phone: string,
  note: string,
) {
  const lines = [
    `*New Product Enquiry — Pristine Windows*`,
    ``,
    `*Product:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Specifications:* ${product.specs.join(", ")}`,
    ``,
    `*Customer Details*`,
    `Name: ${name || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    note ? `Note: ${note}` : "",
    ``,
    `_Sent via pristinewindows.in_`,
  ].filter((l) => l !== undefined);
  return encodeURIComponent(lines.join("\n"));
}

export default function EnquiryModal({ product, onClose }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  /* Escape key + body scroll lock */
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

  function handleWhatsApp() {
    const msg = buildWhatsAppMessage(product, name, phone, note);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  function handleCall() {
    window.location.href = `tel:+${WHATSAPP_NUMBER}`;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Enquire about ${product.name}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/65 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 bg-background w-full max-w-3xl max-h-[92vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Left: Product summary ── */}
        <div className="w-full md:w-[42%] shrink-0 flex flex-col">
          {/* Product image */}
          <div className="relative w-full h-52 md:h-64 shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </div>

          {/* Product info */}
          <div className="p-6 bg-muted/30 flex-1">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
              {product.category}
            </p>
            <h3 className="text-lg font-black text-foreground leading-tight mb-3">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Spec tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.specs.map((s) => (
                <span
                  key={s}
                  className="text-[10px] text-muted-foreground border border-border px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-1.5">
              {product.features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <Check
                    size={11}
                    className="text-foreground mt-0.5 shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right: Enquiry form ── */}
        <div className="flex flex-col p-7 md:p-9 flex-1">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <X size={18} />
          </button>

          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">
            Quick Enquiry
          </p>
          <h2 className="text-2xl font-black text-foreground leading-tight mb-1">
            Interested in this product?
          </h2>
          <p className="text-xs text-muted-foreground mb-7 leading-relaxed">
            Fill in your details and we&apos;ll send your enquiry directly to
            our team on WhatsApp — we respond within 2 hours.
          </p>

          {/* Form fields */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 00000 00000"
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground tracking-widest uppercase block mb-1.5">
                Additional Notes
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. 3 sliding windows, 1200×900 mm, first floor, ECR..."
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="space-y-3 mt-auto">
            {/* Primary — WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-sm font-black tracking-widest uppercase hover:bg-[#20b858] transition-colors duration-200"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Enquire on WhatsApp
            </button>

            {/* Secondary — Call */}
            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-border text-foreground text-sm font-bold tracking-widest uppercase hover:bg-muted transition-colors duration-200"
            >
              <Phone size={16} aria-hidden="true" />
              Call Us Instead
            </button>
          </div>

          <p className="text-[10px] text-muted-foreground text-center mt-4 leading-relaxed">
            By clicking Enquire on WhatsApp you&apos;ll open WhatsApp with your
            product details pre-filled.
          </p>
        </div>
      </div>
    </div>
  );
}

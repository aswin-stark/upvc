"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import EnquiryModal, { type EnquiryProduct } from "@/components/EnquiryModal";

export interface SubPageSpec {
  category: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  variants: {
    name: string;
    image: string;
    tags: string[];
    description: string;
  }[];
  whyPoints: { number: string; title: string; desc: string }[];
  relatedLinks: { href: string; label: string }[];
}

type Variant = SubPageSpec["variants"][number];

export default function SubPageTemplate({ data }: { data: SubPageSpec }) {
  const {
    category,
    title,
    tagline,
    heroImage,
    description,
    features,
    specs,
    variants,
    whyPoints,
  } = data;

  const [enquiryProduct, setEnquiryProduct] = useState<EnquiryProduct | null>(
    null,
  );

  const [visible, setVisible] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLElement | null>(null);
  const featureRef = useRef<HTMLElement | null>(null);
  const variantRef = useRef<HTMLElement | null>(null);
  const whyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-reveal");
          if (id && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.15 },
    );

    const targets = [
      ["hero", heroRef.current],
      ["features", featureRef.current],
      ["variants", variantRef.current],
      ["why", whyRef.current],
    ] as const;

    targets.forEach(([id, el]) => {
      if (el) {
        el.setAttribute("data-reveal", id);
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  function openEnquiry(v: Variant) {
    setEnquiryProduct({
      name: `${title} — ${v.name}`,
      category,
      image: v.image,
      specs: v.tags,
      features,
      description: v.description,
    });
  }

  function openGeneralEnquiry() {
    setEnquiryProduct({
      name: title,
      category,
      image: heroImage,
      specs: specs.map((s) => `${s.label}: ${s.value}`),
      features,
      description,
    });
  }

  // ✅ WHATSAPP FUNCTION (NEW)
  function openWhatsAppEnquiry() {
    const phoneNumber = "918144721458"; // 🔴 replace with your number

    const message = `
Hello,

I would like a quote for:
Product: ${title}

Category: ${category}

Specs:
${specs.map((s) => `- ${s.label}: ${s.value}`).join("\n")}

Please share pricing and availability.
    `.trim();

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  }

  const reveal = (key: string) =>
    visible[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative min-h-[70vh] flex items-end transition-all duration-700 ${reveal(
          "hero",
        )}`}
      >
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-16 text-white">
          <nav className="flex items-center gap-2 text-white/70 text-xs uppercase">
            <Link href="/products">Products</Link>
            <ChevronRight size={12} />
            <span>{category}</span>
            <ChevronRight size={12} />
            <span className="text-white">{title}</span>
          </nav>

          <h1 className="mt-6 text-5xl md:text-7xl font-black">
            {title}
            <br />
            <span className="italic font-light text-white/80">{tagline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-white/70">{description}</p>
        </div>
      </section>

      {/* FEATURES + SPECS */}
      <section
        ref={featureRef}
        className={`grid lg:grid-cols-2 border-t transition-all duration-700 ${reveal(
          "features",
        )}`}
      >
        <div className="p-10 lg:p-16">
          <h2 className="text-xs uppercase mb-8">Key Features</h2>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f} className="flex gap-4 items-start">
                <div className="w-5 h-5 border flex items-center justify-center mt-1">
                  <Check size={11} />
                </div>
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 lg:p-16 bg-black/[0.03]">
          <h2 className="text-xs uppercase mb-8">Specifications</h2>

          <div className="border rounded-xl overflow-hidden">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex flex-col sm:flex-row sm:justify-between px-5 py-4 border-b"
              >
                <span className="text-xs uppercase text-black/60">
                  {s.label}
                </span>
                <span className="text-sm font-medium sm:text-right">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      <section
        ref={variantRef}
        className={`px-6 md:px-12 py-20 ${reveal("variants")}`}
      >
        <h2 className="text-3xl font-black mb-10">
          Choose Your <span className="font-light italic">Configuration</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {variants.map((v) => (
            <div key={v.name} className="border rounded-xl overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-black">{v.name}</h3>
                <p className="text-xs text-black/60 mt-2">{v.description}</p>

                <button
                  onClick={() => openEnquiry(v)}
                  className="mt-5 w-full bg-black text-white py-3 text-xs uppercase font-bold"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section
        ref={whyRef}
        className={`px-6 md:px-12 py-20 border-t ${reveal("why")}`}
      >
        <h2 className="text-3xl font-black mb-10">
          Built for <span className="font-light italic">South India</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border rounded-xl overflow-hidden">
          {whyPoints.map((p) => (
            <div key={p.number} className="p-8">
              <div className="text-4xl font-black opacity-30">{p.number}</div>
              <h3 className="font-bold mt-3">{p.title}</h3>
              <p className="text-xs mt-2 opacity-70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-xs uppercase opacity-50">Ready to Order</p>
            <h2 className="text-3xl font-black mt-3">
              Get a Quote for <span className="italic font-light">{title}</span>
            </h2>
          </div>

          {/* ✅ UPDATED BUTTON */}
          <button
            onClick={openWhatsAppEnquiry}
            className="bg-green-500 px-8 py-4 text-xs uppercase font-black hover:scale-105 transition"
          >
            WhatsApp Enquiry
          </button>
        </div>
      </section>

      {/* MODAL */}
      {enquiryProduct && (
        <EnquiryModal
          product={enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
        />
      )}
    </div>
  );
}

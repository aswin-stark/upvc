"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Grade-A UPVC Profiles",
    desc: "German-engineered multi-chamber profiles for maximum thermal performance.",
  },
  {
    number: "02",
    title: "European Hardware",
    desc: "Roto, Siegenia, and Maco hardware for precision operation and security.",
  },
  {
    number: "03",
    title: "Custom Fabrication",
    desc: "Every unit made to your exact measurements — no standard sizes.",
  },
  {
    number: "04",
    title: "10-Year Warranty",
    desc: "Structural warranty on all profiles, 5 years on hardware and fittings.",
  },
];

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function ProductFeatures() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Manufacturing"
          fill
          className="object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div ref={ref} className="relative z-10 px-6 md:px-10 lg:px-16 py-20">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Built Different.
            <br />
            <span className="italic font-extralight text-zinc-400">
              Built Better.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
          {features.map(({ number, title, desc }, i) => (
            <div
              key={number}
              className={`
                group relative p-8 bg-black
                transition-all duration-700 ease-out
                hover:bg-zinc-950 hover:-translate-y-2
                hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.15)]
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: visible ? `${i * 120}ms` : "0ms",
              }}
            >
              {/* glow line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border border-white/10 rounded-none" />
              </div>

              {/* Number */}
              <p className="text-5xl font-black text-zinc-800 group-hover:text-white/10 mb-6 transition-all duration-500 group-hover:scale-110 origin-left">
                {number}
              </p>

              {/* Title */}
              <h3 className="text-base font-black text-white mb-3 transition-all duration-300 group-hover:translate-x-1">
                {title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                {desc}
              </p>

              {/* animated bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

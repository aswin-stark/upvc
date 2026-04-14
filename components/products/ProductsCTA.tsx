"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function ProductsCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80"
          alt="Beautiful home"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-white px-6 md:px-10 lg:px-16 py-28 md:py-40"
      >
        {/* Label */}
        <p
          className="text-xs font-bold tracking-[0.3em] uppercase text-black mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
          }}
        >
          Ready to Start?
        </p>

        {/* Heading */}
        <h2
          className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(25px)",
            transition: "all 0.8s ease-out",
          }}
        >
          Let&apos;s Build
          <br />
          <span className="italic font-extralight text-zinc-300">
            Something Great.
          </span>
        </h2>

        {/* Paragraph */}
        <p
          className="text-base text-white max-w-md mb-10 leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(25px)",
            transition: "all 0.9s ease-out",
          }}
        >
          Book a free consultation today. Our team will visit your site, take
          measurements, and provide a detailed quote — at no cost.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="
            inline-flex items-center gap-3
            px-10 py-5
            bg-white text-black
            text-sm font-black tracking-widest uppercase
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]
            active:scale-95
          "
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out",
          }}
        >
          Book Free Site Visit
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

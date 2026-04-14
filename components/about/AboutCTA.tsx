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
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function AboutCTA() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Beautiful home"
          fill
          className={`object-cover transition-transform duration-[8s] ${
            visible ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-white px-6 md:px-10 lg:px-16 py-28">
        {/* LABEL */}
        <p
          className={`text-xs font-bold tracking-widest uppercase text-white/40 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Work With Us
        </p>

        {/* TITLE */}
        <h2
          className={`text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Start Your <br />
          <span className="italic font-extralight text-white/80">
            Project Today.
          </span>
        </h2>

        {/* BUTTON */}
        <Link
          href="/contact"
          className="
            group relative inline-flex items-center gap-3
            px-10 py-5 bg-white text-black
            text-sm font-black tracking-widest uppercase
            transition-all duration-300
            hover:scale-105 hover:shadow-2xl
            overflow-hidden
          "
        >
          {/* light sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <span className="relative z-10 flex items-center gap-3">
            Get Free Consultation
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}

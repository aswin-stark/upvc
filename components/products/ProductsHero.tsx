"use client";

import Image from "next/image";
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

export default function ProductsHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-end overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="UPVC Windows"
          fill
          priority
          className={`object-cover transition-transform duration-[8s] ${
            visible ? "scale-110" : "scale-100"
          }`}
        />

        {/* animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16">
        {/* LABEL */}
        <p
          className={`label-sm mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Our Products
        </p>

        {/* TITLE */}
        <h1
          className={`text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight text-foreground leading-none mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          UPVC Windows <br />
          <span className="italic font-extralight text-foreground/80">
            &amp; Doors
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`text-sm max-w-xl leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Every product is custom-fabricated to your specifications using
          premium Grade-A UPVC profiles and European hardware.
        </p>
      </div>
    </section>
  );
}

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
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function ContactHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
          alt="Contact us"
          fill
          priority
          className="object-cover scale-110 animate-[slowZoom_12s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16"
      >
        {/* Label */}
        <p
          className="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s ease-out",
          }}
        >
          Contact
        </p>

        {/* Title */}
        <h1
          className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-none text-white mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease-out",
          }}
        >
          Let&apos;s Discuss
          <br />
          <span className="italic font-extralight text-zinc-300">
            Your Project
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-sm text-zinc-400 max-w-xl leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.1s ease-out",
          }}
        >
          Whether you&apos;re planning a new build, renovation, or replacement
          project, our team is ready to help. Schedule a free site visit and
          consultation.
        </p>
      </div>

      {/* subtle zoom animation */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}

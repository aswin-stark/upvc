"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const leaders = [
  {
    name: "Suresh Ramalingam",
    role: "Chief Executive Officer",
    bio: "20+ years in the building materials industry. Founded Pristine Windows with a vision to bring European-quality UPVC systems to South India.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Kavitha Nair",
    role: "Director of Operations",
    bio: "Oversees manufacturing quality, supply chain, and project delivery across all regional offices.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Dinesh Patel",
    role: "Head of Technical Services",
    bio: "Certified UPVC installation specialist with expertise in energy-efficient glazing systems.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Meera Chandrasekaran",
    role: "Sales & Business Development",
    bio: "Leads our commercial and residential sales teams across Tamil Nadu and Kerala.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

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

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 lg:px-16 py-24 border-t border-white/10 bg-black text-white"
    >
      {/* HEADER */}
      <div
        className={`mb-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
          Leadership
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          The People <br />
          <span className="italic font-extralight text-white/70">
            Behind the Brand
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[1200px]">
        {leaders.map((leader, i) => (
          <div
            key={leader.name}
            className={`
              group relative rounded-2xl overflow-hidden
              border border-white/10 bg-white/5
              backdrop-blur-md
              transition-all duration-500
              hover:-translate-y-3 hover:scale-[1.03]
              hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]
              will-change-transform
            `}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: visible ? `${i * 120}ms` : "0ms",
              transformStyle: "preserve-3d",
            }}
          >
            {/* IMAGE */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* spotlight glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-gradient from-white/10 to-transparent" />
            </div>

            {/* INFO */}
            <div className="p-6 relative">
              {/* NAME */}
              <h3 className="text-lg font-black group-hover:text-white/95 transition-colors">
                {leader.name}
              </h3>

              {/* ROLE */}
              <p className="text-xs tracking-[0.25em] uppercase text-white/40 mt-1 mb-3">
                {leader.role}
              </p>

              {/* BIO */}
              <p className="text-sm text-white/60 group-hover:text-white/80 leading-relaxed transition-colors">
                {leader.bio}
              </p>

              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* optional helper for radial glow (Tailwind fallback) */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.12),
            transparent 60%
          );
        }
      `}</style>
    </section>
  );
}

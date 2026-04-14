"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Arjun K.",
    role: "Lead Fabricator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Preethi S.",
    role: "Design Consultant",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Ravi M.",
    role: "Site Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Lakshmi V.",
    role: "Customer Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Karthik B.",
    role: "Installation Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    name: "Anitha R.",
    role: "Quality Control",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    name: "Vijay T.",
    role: "Logistics Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    name: "Deepa N.",
    role: "Accounts Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
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

export default function TeamGrid() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="border-t border-border bg-muted/20">
      <div className="px-6 md:px-10 lg:px-16 py-20">
        {/* HEADER */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="label-sm mb-4">Our People</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
            The Team <br />
            <span className="italic font-extralight">That Delivers</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {team.map(({ name, role, image }, i) => (
            <div
              key={name}
              className={`
                group text-center cursor-pointer
                transition-all duration-500
                hover:-translate-y-2
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
              }}
            >
              {/* IMAGE WRAPPER */}
              <div className="aspect-square overflow-hidden bg-muted mb-3 relative rounded-lg shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                {/* glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-black/10 to-transparent z-10" />

                <Image
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TEXT */}
              <p className="text-xs font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                {name}
              </p>

              <p className="text-xs text-muted-foreground mt-0.5 group-hover:text-foreground/60 transition-colors">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

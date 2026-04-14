"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const founderStats = [
  { value: "2,000+", label: "Projects Led" },
  { value: "20+", label: "Years Experience" },
];

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

export default function FounderSection(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b border-border overflow-hidden"
    >
      {/* IMAGE SIDE */}
      <div className="relative min-h-[500px] lg:min-h-0 overflow-hidden">
        {/* slow zoom background (lightweight CSS animation) */}
        <div
          className={`absolute inset-0 ${visible ? "animate-zoomSlow" : ""}`}
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
            alt="CEO Suresh Ramalingam"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-center object-cover bg-black"
            priority={false}
          />
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* quote card */}
        <div
          className={`absolute bottom-8 left-8 bg-foreground text-background p-5 max-w-xs transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs leading-relaxed opacity-80 italic">
            “Quality is not a feature — it&apos;s the foundation.”
          </p>
          <p className="text-xs font-bold mt-3 tracking-wide">
            — Suresh Ramalingam
          </p>
        </div>
      </div>

      {/* BIO SIDE */}
      <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-20">
        <p
          className={`label-sm mb-4 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Founder & CEO
        </p>

        <h2
          className={`text-4xl md:text-6xl font-black tracking-tight text-foreground mb-2 transition-all duration-700 delay-100
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Suresh <br /> Ramalingam
        </h2>

        <p
          className={`text-sm text-muted-foreground mb-8 tracking-wide transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          B.E. Civil Engineering, IIT Madras · 20+ Years Experience
        </p>

        {/* BIO TEXT */}
        <div
          className={`space-y-4 text-sm text-muted-foreground leading-relaxed transition-all duration-700 delay-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p>
            With over two decades in the building materials industry, Suresh
            founded Pristine Windows in 2008 with a singular mission: to make
            European-quality UPVC fenestration accessible to Indian homeowners
            and builders.
          </p>

          <p>
            Under his leadership, the company has grown from a small fabrication
            unit in Chennai to a regional leader across South India.
          </p>

          <p>
            His philosophy is simple: every window installed is a long-term
            relationship with the homeowner.
          </p>
        </div>

        {/* STATS */}
        <div
          className={`flex gap-8 mt-10 pt-8 border-t border-border transition-all duration-700 delay-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {founderStats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-black text-foreground">
                {value}
              </p>
              <p className="text-[10px] text-muted-foreground tracking-widest mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS ANIMATION (lightweight, no JS cost) */}
      <style jsx>{`
        @keyframes zoomSlow {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1.2);
          }
        }

        .animate-zoomSlow {
          animation: zoomSlow 10s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}

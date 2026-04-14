"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { value: 30, suffix: "+", label: "Year Lifespan" },
  { value: 40, suffix: "%", label: "Energy Savings" },
  { value: "Grade-A", suffix: "", label: "UPVC Profiles", static: true },
];

// 🔥 CountUp Hook
function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (typeof target !== "number") return;

    let startTime;
    const duration = 1200;

    function animate(time) {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setValue(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [start, target]);

  return value;
}

// 🔥 Intersection Observer Hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function AnimatedNumber({ value, suffix, start }) {
  const count = useCountUp(value, start);

  if (typeof value !== "number") {
    return <p className="text-2xl font-black text-foreground">{value}</p>;
  }

  return (
    <p className="text-2xl font-black text-foreground">
      {count}
      {suffix}
    </p>
  );
}

export default function WhySection() {
  const [leftRef, leftVisible] = useInView({ threshold: 0.2 });
  const [rightRef, rightVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-border overflow-hidden">
      {/* LEFT */}
      <div
        ref={leftRef}
        className={`flex flex-col justify-center px-6 md:px-10 lg:px-16 py-20 transition-all duration-1000 ease-out
        ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="label-sm mb-6">Why Pristine Windows</p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight mb-8">
          Not Just Windows.
          <br />
          <span className="italic font-extralight">A Better Way</span>
          <br />
          To Live.
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
          Every home deserves windows that work as hard as the people inside.
          Our UPVC systems are engineered to block noise, trap warmth, and stand
          up to decades of use — without ever needing a coat of paint.
        </p>

        {/* 🔥 Animated stats */}
        <div className="flex gap-8 mt-4 pt-8 border-t border-border">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`transition-all duration-700 ease-out delay-[${i * 150}ms]
              ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <AnimatedNumber
                value={item.value}
                suffix={item.suffix}
                start={leftVisible}
              />

              <p className="text-xs text-muted-foreground tracking-wide mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={rightRef}
        className={`relative min-h-[400px] lg:min-h-0 overflow-hidden transition-all duration-1000 ease-out
        ${rightVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
          alt="Premium UPVC window"
          fill
          className="object-cover"
        />

        {/* 🔥 Animated counter */}
        <div
          className={`absolute bottom-8 left-8 bg-foreground text-background p-6 transition-all duration-700 delay-300
          ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <CountUpBig start={rightVisible} />
        </div>
      </div>
    </section>
  );
}

// 🔥 Big counter for hero stat
function CountUpBig({ start }) {
  const value = useCountUp(2000, start);

  return (
    <>
      <p className="text-3xl font-black">{value.toLocaleString()}+</p>
      <p className="text-xs opacity-60 tracking-wide mt-1">Happy Customers</p>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 2000, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Years" },
  { value: 10, suffix: "yr", label: "Warranty" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

type CounterProps = {
  value: number;
  suffix: string;
};

// 🔢 Counter Component
function Counter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-1">
        <div className="max-w-5xl text-foreground">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            Premium UPVC Solutions — Chennai & South India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tight leading-none mb-8"
          >
            Windows
            <br />
            <span className="italic font-extralight">That Define</span>
            <br />
            Your Space.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Custom-fabricated UPVC doors and windows engineered for energy
            efficiency, acoustic comfort, and lasting elegance. Trusted by{" "}
            <strong>2,000+ homes</strong> across South India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-foreground/80 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-medium transition-all duration-300 hover:bg-muted hover:scale-105"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <div className="bg-foreground text-background flex divide-x divide-background/10">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="px-8 py-6 text-center"
            >
              <p className="text-xl font-black">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="text-xs opacity-50 tracking-widest uppercase mt-1">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

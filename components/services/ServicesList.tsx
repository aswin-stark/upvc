"use client";

import Image from "next/image";
import {
  ClipboardList,
  Ruler,
  Factory,
  HardHat,
  Wrench,
  Headphones,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Free Site Consultation",
    description:
      "Our experts visit your site at no cost, assess requirements, take precise measurements and recommend the best UPVC solutions for your space.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    icon: ClipboardList,
    badge: "No Cost",
  },
  {
    number: "02",
    title: "Custom Design & Quotation",
    description:
      "We create a tailored design proposal with material samples, colour options and a fully transparent, itemised quotation — no hidden charges.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    icon: Ruler,
    badge: null,
  },
  {
    number: "03",
    title: "Precision Fabrication",
    description:
      "Every unit is manufactured at our in-house facility using Grade-A UPVC profiles and certified European hardware to exact measurements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    icon: Factory,
    badge: null,
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "Our certified installation teams ensure perfect fit, alignment and weatherproofing with minimal disruption to your daily routine.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    icon: HardHat,
    badge: "Certified",
  },
  {
    number: "05",
    title: "Maintenance & Repair",
    description:
      "Annual maintenance contracts, hardware servicing and rapid-response repair visits keep your windows and doors performing for decades.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    icon: Wrench,
    badge: null,
  },
  {
    number: "06",
    title: "After-Sales Support",
    description:
      "Dedicated after-sales care with a direct support line, documented warranty claims and priority scheduling for all previous customers.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    icon: Headphones,
    badge: null,
  },
];

// 👇 scroll animation hook
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

export default function ServicesList() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section className="border-b border-border">
      <div className="px-6 md:px-10 lg:px-16 py-20">
        {/* Heading */}
        <div className="mb-16">
          <p className="label-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
            Six Services,
            <br />
            <span className="italic font-extralight">One Trusted Team</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(
            ({ number, title, description, image, icon: Icon, badge }, i) => (
              <div
                key={number}
                className="group relative overflow-hidden rounded-xl border border-border bg-background cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-background text-foreground px-2 py-1">
                      {badge}
                    </span>
                  )}

                  {/* Number */}
                  <span className="text-xs font-black tracking-widest text-background/40 mb-2 group-hover:text-background/70 transition">
                    {number}
                  </span>

                  {/* Icon */}
                  <Icon
                    size={20}
                    className="text-background/70 mb-3 transition-transform duration-300 group-hover:scale-125"
                  />

                  {/* Title */}
                  <h3 className="text-base font-black text-background mb-2">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-background/70 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

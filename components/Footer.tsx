"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  "Sliding Windows",
  "Casement Windows",
  "Sliding Doors",
  "French Doors",
  "Tilt & Turn Windows",
  "Fixed Windows",
];

const socials = [
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaFacebook },
  { href: "#", icon: FaLinkedin },
];

// scroll hook
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

export default function Footer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <footer className="relative text-white overflow-hidden">
      {/* NEW BIGGER BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6e0c0c2d?q=80&w=2000"
          alt="UPVC factory"
          className="w-full h-full object-cover scale-110"
        />

        {/* darker overlay for premium contrast */}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 lg:px-20 py-20">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14"
        >
          {/* BRAND */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-black text-xs font-bold tracking-widest">
                  PW
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-lg font-semibold tracking-wide">
                  PRISTINE
                </span>
                <span className="text-lg text-white/40 tracking-wide">
                  WINDOWS
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-[260px] mb-8">
              Premium UPVC doors and windows crafted for lasting performance,
              energy efficiency, and architectural elegance.
            </p>

            <div className="flex items-center gap-5">
              {socials.map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  className="group transition hover:scale-110"
                >
                  <Icon
                    size={18}
                    className="text-white/40 group-hover:text-white transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
              transitionDelay: "100ms",
            }}
          >
            <p className="text-sm tracking-[0.25em] text-white/30 mb-6">
              NAVIGATION
            </p>

            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-sm tracking-[0.25em] text-white/30 mb-6">
              PRODUCTS
            </p>

            <ul className="space-y-3">
              {productLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/products"
                    className="text-sm text-white/60 hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
              transitionDelay: "300ms",
            }}
          >
            <p className="text-sm tracking-[0.25em] text-white/30 mb-6">
              CONTACT
            </p>

            <ul className="space-y-5 text-sm text-white/60">
              <li className="flex gap-3">
                <FaMapMarkerAlt size={14} className="text-white/30 mt-1" />
                <span className="leading-relaxed">
                  42 Industrial Estate, Phase II
                  <br />
                  Chennai, Tamil Nadu 600096
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone size={14} className="text-white/30" />
                <a className="hover:text-white transition" href="#">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope size={14} className="text-white/30" />
                <a className="hover:text-white transition" href="#">
                  info@pristinewindows.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30 gap-3">
          <p>© 2026 Pristine Windows. All rights reserved.</p>
          <p className="tracking-wide">Premium UPVC Solutions Since 2008</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.touches[0].clientX;
    if (diff > 60) setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold">PW</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-black">PRISTINE</span>
              <span className="text-sm text-black ml-1">WINDOWS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-black hover:text-gray-600 transition"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 border-l border-gray-200 shadow-lg transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <span className="font-semibold text-black">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={22} className="text-black" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black text-sm hover:text-gray-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mt-4 px-5 py-3 bg-black text-white text-center text-sm rounded-md"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

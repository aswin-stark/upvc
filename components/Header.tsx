"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  DoorOpen,
  Wrench,
} from "lucide-react";

const PRODUCTS_DROPDOWN = [
  {
    group: "uPVC Windows",
    icon: LayoutGrid,
    items: [
      {
        href: "/products/upvc-windows/sliding-windows",
        label: "Sliding Windows",
      },
      {
        href: "/products/upvc-windows/casement-windows",
        label: "Casement Windows",
      },
      { href: "/products/upvc-windows/fixed-windows", label: "Fixed Windows" },
    ],
  },
  {
    group: "uPVC Doors",
    icon: DoorOpen,
    items: [
      { href: "/products/upvc-doors/sliding-doors", label: "Sliding Doors" },
      { href: "/products/upvc-doors/french-doors", label: "French Doors" },
      { href: "/products/upvc-doors/folding-doors", label: "Folding Doors" },
    ],
  },
  {
    group: "Accessories",
    icon: Wrench,
    items: [
      { href: "/products/accessories/glass-types", label: "Glass Types" },
      { href: "/products/accessories/hardware", label: "Hardware" },
      { href: "/products/accessories/mesh-screens", label: "Mesh / Screens" },
    ],
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);

  const pathname = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);

  const isProductsActive = pathname.startsWith("/products");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

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
              <span className="text-sm ml-1 text-black">WINDOWS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Home + About */}
            {navLinks.slice(0, 2).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition ${
                  pathname === href
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-sm ${
                  isProductsActive
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] bg-white border border-gray-200 shadow-xl rounded-lg transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-3 divide-x">
                  {PRODUCTS_DROPDOWN.map(({ group, items }) => (
                    <div key={group} className="p-5">
                      <p className="text-xs font-bold text-gray-500 mb-3 uppercase">
                        {group}
                      </p>
                      {items.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropdownOpen(false)}
                          className="block text-sm text-gray-600 hover:text-black py-1"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services + Contact */}
            {navLinks.slice(2).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition ${
                  pathname === href
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Get Quote */}
            <Link
              href="/contact"
              className="px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {/* Home + About */}
          {navLinks.slice(0, 2).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-700 hover:text-black"
            >
              {label}
            </Link>
          ))}

          {/* Products */}
          <div>
            <button
              onClick={() => setMobileProducts(!mobileProducts)}
              className="flex justify-between w-full text-sm font-medium"
            >
              Products
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  mobileProducts ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                mobileProducts ? "max-h-[1000px] mt-4" : "max-h-0"
              }`}
            >
              <div className="space-y-4">
                {PRODUCTS_DROPDOWN.map(({ group, items, icon: Icon }) => (
                  <div key={group} className="bg-gray-50 rounded-xl p-4 border">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-gray-500" />
                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        {group}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {items.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="flex justify-between text-sm text-gray-700 px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition active:scale-[0.97]"
                        >
                          {label}
                          <span>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services + Contact */}
          {navLinks.slice(2).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-700 hover:text-black"
            >
              {label}
            </Link>
          ))}

          {/* Get Quote */}
          <Link
            href="/contact"
            className="mt-4 px-5 py-3 bg-black text-white text-center rounded-md"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

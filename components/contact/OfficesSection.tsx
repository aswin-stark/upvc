"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offices = [
  {
    city: "Chennai",
    isHQ: true,
    address:
      "42 Industrial Estate, Phase II, Ambattur, Chennai, Tamil Nadu 600096",
    phone: "+91 98765 43210",
    phoneTel: "tel:+919876543210",
    email: "info@pristinewindows.in",
    hours: "Mon–Sat, 9AM–6PM",
  },
  {
    city: "Coimbatore",
    isHQ: false,
    address:
      "15 SIDCO Industrial Estate, Kurichi, Coimbatore, Tamil Nadu 641021",
    phone: "+91 98765 43211",
    phoneTel: "tel:+919876543211",
    email: "coimbatore@pristinewindows.in",
    hours: "Mon–Sat, 9AM–6PM",
  },
  {
    city: "Kochi",
    isHQ: false,
    address: "8 Marine Drive Business Park, Ernakulam, Kochi, Kerala 682031",
    phone: "+91 98765 43212",
    phoneTel: "tel:+919876543212",
    email: "kochi@pristinewindows.in",
    hours: "Mon–Sat, 9AM–6PM",
  },
];

// visibility hook
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

export default function OfficesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useInView(ref);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 border-b border-zinc-200 bg-white text-black">
      {/* Heading */}
      <div
        className="mb-16 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">
          Our Locations
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black">
          3 Offices Across
          <br />
          <span className="italic font-extralight text-zinc-700">
            South India
          </span>
        </h2>
      </div>

      {/* Office cards */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200"
      >
        {offices.map((office, i) => (
          <div
            key={office.city}
            className="
              bg-white p-8
              transition-all duration-700
              hover:-translate-y-2 hover:shadow-xl
              hover:bg-zinc-50
            "
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(25px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            {/* City + HQ badge */}
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-black text-black">{office.city}</h3>

              {office.isHQ && (
                <span className="text-xs font-black bg-black text-white px-2 py-0.5 tracking-widest uppercase">
                  HQ
                </span>
              )}
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {office.address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-zinc-500 shrink-0" />
                <a
                  href={office.phoneTel}
                  className="text-xs text-black hover:opacity-60 transition-opacity"
                >
                  {office.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-zinc-500 shrink-0" />
                <a
                  href={`mailto:${office.email}`}
                  className="text-xs text-black hover:opacity-60 transition-opacity"
                >
                  {office.email}
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock size={14} className="text-zinc-500 shrink-0" />
                <p className="text-xs text-zinc-600">{office.hours}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

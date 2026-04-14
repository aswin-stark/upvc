"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The quality of the windows exceeded our expectations. The installation team was professional and completed the work in a single day.",
    name: "Rajesh Menon",
    location: "Homeowner, Chennai",
    project: "4BHK Villa, ECR",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    quote:
      "Pristine Windows transformed our apartment. The noise reduction is incredible — we barely hear the traffic outside anymore.",
    name: "Priya Krishnamurthy",
    location: "Homeowner, Anna Nagar",
    project: "3BHK Apartment, OMR",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    quote:
      "We used them for our commercial project. Everything from design to installation was handled flawlessly.",
    name: "Suresh Babu",
    location: "Business Owner, T Nagar",
    project: "Office Complex, Guindy",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
  {
    quote:
      "After-sales support is amazing. A small issue was resolved within 24 hours. Highly recommend.",
    name: "Kavitha Sundaram",
    location: "Homeowner, Adyar",
    project: "Independent House, Velachery",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  },
  {
    quote:
      "Exceptional finishing quality and modern design. Truly premium craftsmanship.",
    name: "Arvind Ramesh",
    location: "Homeowner, Besant Nagar",
    project: "Sea-facing Apartment",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80",
  },
  {
    quote:
      "Transparent pricing and excellent communication throughout the project.",
    name: "Meera Iyer",
    location: "Homeowner, Porur",
    project: "Villa Renovation Project",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="fill-white/80 text-white/80" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white border-b border-white/10">
      <div className="px-6 md:px-10 lg:px-16 py-24">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase opacity-50 mb-4">
            What Clients Say
          </p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Trusted by
            <br />
            <span className="italic font-light">2,000+ Families</span>
          </h2>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0, // 🔥 continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000} // smoother infinite flow
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="py-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div
                className="
                  h-full p-8 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10

                  transition-all duration-500
                  scale-95 opacity-60
                  hover:scale-105 hover:opacity-100
                "
              >
                <StarRating />

                <p className="text-sm leading-relaxed opacity-80 mb-8 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs opacity-60">{t.location}</p>
                  </div>
                </div>

                <p className="text-[10px] tracking-widest uppercase opacity-40 mt-4 pt-4 border-t border-white/10">
                  {t.project}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

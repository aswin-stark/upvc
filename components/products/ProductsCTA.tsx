import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80"
          alt="Beautiful home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 text-background px-6 md:px-10 lg:px-16 py-28 md:py-40">
        <p className="text-xs font-bold tracking-widest uppercase opacity-40 mb-6">
          Ready to Start?
        </p>
        <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8">
          Let&apos;s Build
          <br />
          <span className="italic font-extralight">Something Great.</span>
        </h2>
        <p className="text-base opacity-60 max-w-md mb-10">
          Book a free consultation today. Our team will visit your site, take measurements,
          and provide a detailed quote — at no cost.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground text-sm font-black tracking-widest uppercase hover:bg-background/90 transition-colors duration-200"
        >
          Book Free Site Visit
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

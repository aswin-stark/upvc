import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* subtle animated glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-40" />

      <div className="px-6 md:px-10 lg:px-16 py-24 relative">
        <div className="max-w-4xl">
          {/* label */}
          <p className="label-sm mb-6 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Ready to Begin?
          </p>

          {/* heading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
            Get Your Free
            <br />
            <span className="italic font-extralight text-black/80">
              Consultation Today
            </span>
          </h2>

          {/* paragraph */}
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
            Our experts will visit your site, understand your needs, and provide
            a detailed, no-obligation quotation — all within 48 hours.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_1.2s_ease-out_forwards]">
            {/* primary button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 overflow-hidden group"
            >
              {/* shine effect */}
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              <span className="relative flex items-center gap-2">
                Book Consultation
                <ArrowRight size={16} />
              </span>
            </Link>

            {/* secondary button */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/5 hover:scale-105 active:scale-95 hover:border-white/30"
            >
              <Phone size={16} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

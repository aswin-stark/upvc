import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

export interface SubPageSpec {
  category: string;           // e.g. "uPVC Windows"
  title: string;              // e.g. "Sliding Windows"
  tagline: string;            // italic light subtitle
  heroImage: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  variants: {
    name: string;
    image: string;
    tags: string[];
    description: string;
  }[];
  whyPoints: { number: string; title: string; desc: string }[];
  relatedLinks: { href: string; label: string }[];
}

export default function SubPageTemplate({ data }: { data: SubPageSpec }) {
  const {
    category, title, tagline, heroImage, description,
    features, specs, variants, whyPoints, relatedLinks,
  } = data;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-5" aria-label="Breadcrumb">
            <Link href="/products" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase">
              Products
            </Link>
            <ChevronRight size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">{category}</span>
            <ChevronRight size={12} className="text-muted-foreground" />
            <span className="text-xs text-foreground font-medium tracking-widest uppercase">{title}</span>
          </nav>
          <p className="label-sm mb-4">{category}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-none mb-6">
            {title}
            <br />
            <span className="italic font-extralight">{tagline}</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* ── Features + Specs ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        {/* Key features */}
        <div className="px-6 md:px-10 lg:px-16 py-16 border-r border-border">
          <p className="label-sm mb-8">Key Features</p>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-4">
                <div className="w-5 h-5 border border-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-foreground" />
                </div>
                <span className="text-sm text-foreground leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical specs */}
        <div className="px-6 md:px-10 lg:px-16 py-16 bg-muted/10">
          <p className="label-sm mb-8">Specifications</p>
          <div className="space-y-0 border border-border">
            {specs.map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-4 ${
                  i < specs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-xs text-muted-foreground tracking-wide uppercase">{label}</span>
                <span className="text-sm font-medium text-foreground text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Variants grid ── */}
      <section className="border-b border-border">
        <div className="px-6 md:px-10 lg:px-16 py-20">
          <div className="mb-14">
            <p className="label-sm mb-4">Available Variants</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Choose Your
              <br />
              <span className="italic font-extralight">Configuration</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {variants.map(({ name, image, tags, description: vDesc }) => (
              <div key={name} className="group cursor-pointer bg-background relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-black text-foreground mb-2">{name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{vDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="text-xs text-muted-foreground border border-border px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose ── */}
      <section className="border-b border-border">
        <div className="px-6 md:px-10 lg:px-16 py-20">
          <div className="mb-14">
            <p className="label-sm mb-4">Why Choose This</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Built for
              <br />
              <span className="italic font-extralight">South India</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border">
            {whyPoints.map(({ number, title: wTitle, desc }) => (
              <div
                key={number}
                className="p-8 border-r border-border last:border-r-0 group hover:bg-foreground transition-colors duration-300"
              >
                <p className="text-5xl font-black text-border group-hover:text-background/20 mb-6 transition-colors">
                  {number}
                </p>
                <h3 className="text-base font-black text-foreground group-hover:text-background mb-3 transition-colors">
                  {wTitle}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      <section className="border-b border-border bg-muted/10">
        <div className="px-6 md:px-10 lg:px-16 py-16">
          <p className="label-sm mb-8">Also Explore</p>
          <div className="flex flex-wrap gap-0 border border-border">
            {relatedLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between gap-3 px-6 py-5 border-r border-b border-border hover:bg-foreground hover:text-background transition-colors duration-200 group min-w-[220px]"
              >
                <span className="text-sm font-medium tracking-wide group-hover:text-background transition-colors">{label}</span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-background transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-foreground text-background">
        <div className="px-6 md:px-10 lg:px-16 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase opacity-40 mb-3">Ready to Order?</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Get a Free Quote for<br />
              <span className="italic font-extralight">{title}</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-black tracking-widest uppercase hover:bg-background/90 transition-colors duration-200"
            >
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-background/30 text-background text-sm font-bold tracking-widest uppercase hover:bg-background/10 transition-colors duration-200"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

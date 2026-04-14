import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Our services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16">
        <p className="label-sm mb-4">Our Services</p>
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight text-foreground leading-none mb-6">
          Everything
          <br />
          <span className="italic font-extralight">You Need</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          From free site consultation to precision fabrication, professional installation and
          long-term after-care — we handle every step so you don&apos;t have to.
        </p>
      </div>
    </section>
  );
}

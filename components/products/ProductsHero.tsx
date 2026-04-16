import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="UPVC Windows"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16">
        <p className="label-sm mb-4">Our Products</p>
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tight text-foreground leading-none mb-6">
          UPVC Windows
          <br />
          <span className="italic font-extralight">&amp; Doors</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Every product is custom-fabricated to your specifications using premium Grade-A UPVC
          profiles and European hardware.
        </p>
      </div>
    </section>
  );
}

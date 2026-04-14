import Image from "next/image";

export default function AboutHero(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 scale-110 animate-slowZoom">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Manufacturing facility"
            fill
            priority
            className="object-cover blur-sm"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 animate-gradientMove" />
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-floatSlow" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full bottom-10 right-10 animate-floatSlow2" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16">
        <p className="label-sm mb-6 tracking-[0.3em] opacity-0 animate-fadeUp1">
          About Pristine Windows
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-none mb-6 opacity-0 animate-fadeUp2">
          Crafting Quality
          <br />
          <span className="italic font-extralight text-primary animate-pulseSlow">
            Since 2008.
          </span>
        </h1>

        <p className="text-base md:text-lg max-w-2xl leading-relaxed  opacity-0 animate-fadeUp3">
          From a small fabrication unit in Chennai to South India&apos;s most
          trusted UPVC fenestration company — our story is built on precision,
          integrity, and an obsession with quality.
        </p>
      </div>
    </section>
  );
}

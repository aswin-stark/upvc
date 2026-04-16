import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Grade-A UPVC Profiles",
    desc: "German-engineered multi-chamber profiles for maximum thermal performance.",
  },
  {
    number: "02",
    title: "European Hardware",
    desc: "Roto, Siegenia, and Maco hardware for precision operation and security.",
  },
  {
    number: "03",
    title: "Custom Fabrication",
    desc: "Every unit made to your exact measurements — no standard sizes.",
  },
  {
    number: "04",
    title: "10-Year Warranty",
    desc: "Structural warranty on all profiles, 5 years on hardware and fittings.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Subtle bg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Manufacturing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/93" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 py-20">
        <div className="mb-16">
          <p className="label-sm mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Built Different.
            <br />
            <span className="italic font-extralight">Built Better.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map(({ number, title, desc }) => (
            <div
              key={number}
              className="bg-background p-8 group hover:bg-foreground transition-colors duration-300"
            >
              <p className="text-4xl font-black text-border group-hover:text-background/20 mb-6 transition-colors">
                {number}
              </p>
              <h3 className="text-base font-black text-foreground group-hover:text-background mb-3 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

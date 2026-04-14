const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Free on-site visit to understand your requirements, take measurements, and recommend the best UPVC solutions.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Custom design proposal with 3D visualisations, material samples, and a transparent detailed quotation.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Precision manufacturing at our state-of-the-art facility using Grade-A UPVC profiles and German hardware.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Professional installation by certified technicians with minimal disruption to your daily life.",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "Quality inspection, full demonstration, and documentation of all warranty terms and maintenance tips.",
  },
];

export default function ProcessSection() {
  return (
    <section className="border-b border-border">
      <div className="px-6 md:px-10 lg:px-16 py-20">
        <div className="mb-16">
          <p className="label-sm mb-4">How It Works</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight">
            From Idea
            <br />
            <span className="italic font-extralight">To Installation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border border-border">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="
                relative p-8 border-r border-border last:border-r-0
                bg-transparent
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:bg-foreground
                hover:shadow-2xl
                group
              "
            >
              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />

              <p className="text-5xl font-black text-border group-hover:text-background/20 mb-6 transition-colors duration-300">
                {number}
              </p>

              <h3 className="text-base font-black text-foreground group-hover:text-background mb-3 transition-colors duration-300">
                {title}
              </h3>

              <p className="text-xs text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

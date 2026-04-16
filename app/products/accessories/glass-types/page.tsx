import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, {
  type SubPageSpec,
} from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Glass Types — Pristine Windows" };

const data: SubPageSpec = {
  category: "Accessories",
  title: "Glass Types",
  tagline: "The Right Glass Changes Everything.",
  heroImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  description:
    "The glass you choose defines the thermal, acoustic and safety performance of your windows and doors. We offer a full range of certified glazing options to suit every application.",
  features: [
    "Clear toughened safety glass — BS EN 12150 certified",
    "Double-glazed units with warm-edge spacer bar",
    "Argon gas filling for enhanced thermal performance",
    "Acoustic laminated glass — up to Rw 42 dB",
    "Solar control glass — blocks up to 70% solar heat",
    "Obscure / frosted glass for privacy applications",
  ],
  specs: [
    { label: "Toughened Single", value: "4mm, 5mm, 6mm, 8mm, 10mm" },
    { label: "Laminated Safety", value: "6.4mm, 8.8mm (2 layers)" },
    { label: "Double Glazed", value: "4-16-4 mm, 5-16-5 mm, 6-16-6 mm" },
    { label: "Argon Fill", value: "Available in all DGU units" },
    { label: "Solar Control", value: "Planibel G, SGG Cool-Lite SKN" },
    { label: "Acoustic", value: "Rw 32–42 dB rated laminated" },
    { label: "Obscure", value: "Satin, Flemish, Taffeta, Patterned" },
  ],
  variants: [
    {
      name: "Toughened Clear",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      tags: ["Safety rated", "5x stronger", "BS EN 12150"],
      description:
        "Standard safety glass for most residential applications — shatters into small safe cubes.",
    },
    {
      name: "Double Glazed Unit",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      tags: ["Thermal break", "Argon fill", "U-value 1.2"],
      description:
        "Two glass panes with an inert gas cavity — the gold standard for energy efficiency.",
    },
    {
      name: "Solar Control",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      tags: ["Blocks 70% heat", "Low-E coating", "Reduces AC cost"],
      description:
        "Coated glass that blocks solar heat gain — essential for west and south-facing facades in Chennai.",
    },
  ],
  whyPoints: [
    {
      number: "01",
      title: "Thermal Control",
      desc: "Double glazed with argon fill reduces heat transfer by up to 60% compared to single glazing.",
    },
    {
      number: "02",
      title: "Noise Reduction",
      desc: "Acoustic laminated units cut road noise by up to 42 dB — transforming noisy rooms.",
    },
    {
      number: "03",
      title: "Solar Management",
      desc: "Low-E solar control glass reduces AC load significantly — pays back in energy savings quickly.",
    },
    {
      number: "04",
      title: "Safety Certified",
      desc: "All glass is certified to Indian and European safety standards — BS EN and IS 2553 compliant.",
    },
  ],
  relatedLinks: [
    {
      href: "/products/upvc-windows/sliding-windows",
      label: "Sliding Windows",
    },
    {
      href: "/products/upvc-windows/casement-windows",
      label: "Casement Windows",
    },
    { href: "/products/accessories/hardware", label: "Hardware" },
    { href: "/products/accessories/mesh-screens", label: "Mesh / Screens" },
  ],
};

export default function GlassTypesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <SocialSidebar />
      <main className="pt-0">
        <SubPageTemplate data={data} />
      </main>
      <Footer />
    </div>
  );
}

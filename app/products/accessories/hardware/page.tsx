import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, {
  type SubPageSpec,
} from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Hardware — Pristine Windows" };

const data: SubPageSpec = {
  category: "Accessories",
  title: "Hardware",
  tagline: "European Precision. Lifetime Performance.",
  heroImage:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
  description:
    "Every Pristine Windows unit is fitted with certified European hardware from Roto, Siegenia and Maco — the same brands trusted by premium window manufacturers across Germany, Austria and the UK.",
  features: [
    "Roto NT tilt & turn and casement hardware",
    "Siegenia TITAN sliding door roller systems",
    "Maco multi-point espagnolette locking bars",
    "Stainless steel 316 marine-grade handles for coastal areas",
    "Friction stays for controlled casement opening angle",
    "Child-safety restrictors available on all window hardware",
  ],
  specs: [
    { label: "Window Hardware", value: "Roto NT, Maco, Siegenia" },
    { label: "Door Hardware", value: "Roto, Maco MULTI TREND" },
    { label: "Handle Finishes", value: "White, Anthracite, Chrome, Gold" },
    { label: "Locking Points", value: "2 to 6 hooks depending on size" },
    { label: "Roller Load", value: "Up to 120 kg per panel (door)" },
    { label: "Corrosion Rating", value: "Class 4 (coastal environments)" },
    { label: "Warranty", value: "5 years all hardware" },
  ],
  variants: [
    {
      name: "Roto NT System",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      tags: ["Tilt & turn", "Casement", "Multi-point"],
      description:
        "The world's leading tilt & turn hardware — used in millions of European window installations.",
    },
    {
      name: "Siegenia Rollers",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      tags: ["Sliding doors", "120kg load", "Smooth glide"],
      description:
        "Heavy-duty door rollers with anti-jump feature — Siegenia's premium sliding system.",
    },
    {
      name: "Maco Lock Bars",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      tags: ["6-point locking", "Espagnolette", "Security rated"],
      description:
        "Multi-point espagnolette system — up to 6 hooks engaging simultaneously for maximum security.",
    },
  ],
  whyPoints: [
    {
      number: "01",
      title: "European Brands",
      desc: "Roto, Siegenia and Maco are the top three hardware brands specified by premium European window makers.",
    },
    {
      number: "02",
      title: "Coastal Rated",
      desc: "SS316 marine-grade hardware resists salt air corrosion — certified Class 4 for coastal environments.",
    },
    {
      number: "03",
      title: "Security Certified",
      desc: "Multi-point locks meet RC2 burglar resistance — independently tested against forced entry.",
    },
    {
      number: "04",
      title: "5-Year Warranty",
      desc: "All hardware covered for 5 years against manufacturing defect, corrosion and mechanical failure.",
    },
  ],
  relatedLinks: [
    {
      href: "/products/upvc-windows/casement-windows",
      label: "Casement Windows",
    },
    { href: "/products/upvc-doors/sliding-doors", label: "Sliding Doors" },
    { href: "/products/accessories/glass-types", label: "Glass Types" },
    { href: "/products/accessories/mesh-screens", label: "Mesh / Screens" },
  ],
};

export default function HardwarePage() {
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

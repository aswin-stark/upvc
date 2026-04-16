import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "French Doors — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Doors",
  title: "French Doors",
  tagline: "Classic Elegance, Modern Performance.",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  description: "French doors flood your rooms with natural light and open up full-width access to gardens, terraces and balconies — combining timeless aesthetics with precision UPVC engineering.",
  features: [
    "Full-height double-glazed panels for maximum light",
    "Multi-point espagnolette locking system",
    "Astragal bar detail option for traditional look",
    "Outward or inward opening configuration",
    "Threshold options: flush, rebated or ramped",
    "Optional sidelights for even wider light span",
  ],
  specs: [
    { label: "Profile System",   value: "Grade-A UPVC, 70 mm door system" },
    { label: "Glass Options",    value: "6mm toughened / double-glazed 28mm" },
    { label: "Standard Width",   value: "1200–1800 mm per pair" },
    { label: "Standard Height",  value: "2100–2400 mm" },
    { label: "Opening",          value: "Outward or Inward" },
    { label: "Hardware",         value: "Espagnolette multi-point, 3 hooks" },
    { label: "Warranty",         value: "10 years structural, 5 years hardware" },
  ],
  variants: [
    { name: "Classic French",    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tags: ["Double leaf", "Full-height glass", "Multi-point lock"], description: "The timeless double-leaf French door — full-height glass, multi-point lock and a clean white profile." },
    { name: "With Sidelights",   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", tags: ["Fixed sidelights", "Wide span", "Feature entrance"], description: "Add fixed glass panels on one or both sides for a wider, grander entrance composition." },
    { name: "Astragal Bar",      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tags: ["Georgian bars", "Heritage look", "Decorative"], description: "Internal astragal bars create a heritage grid pattern — perfect for traditional and heritage properties." },
  ],
  whyPoints: [
    { number: "01", title: "Full-Width Access",  desc: "Both leaves open entirely, creating a wide, unobstructed opening that connects interior and exterior." },
    { number: "02", title: "Maximum Light",      desc: "Full-height glass panels flood rooms with natural daylight — reducing the need for artificial lighting." },
    { number: "03", title: "Elegant Profile",    desc: "Slim UPVC sightlines maintain the classic proportions of French doors without the rot of timber." },
    { number: "04", title: "Secure Lock",        desc: "Three-hook espagnolette engages at top, bottom and centre — one of the most secure door systems available." },
  ],
  relatedLinks: [
    { href: "/products/upvc-doors/sliding-doors",  label: "Sliding Doors" },
    { href: "/products/upvc-doors/folding-doors",  label: "Folding Doors" },
    { href: "/products/upvc-windows/casement-windows", label: "Casement Windows" },
    { href: "/products/accessories/hardware",      label: "Hardware" },
  ],
};

export default function FrenchDoorsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

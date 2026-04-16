import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Sliding Windows — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Windows",
  title: "Sliding Windows",
  tagline: "Smooth, Silent, Sealed.",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  description: "Our UPVC sliding windows deliver effortless operation, superior weatherproofing and a clean architectural profile — engineered for Chennai's humidity and coastal conditions.",
  features: [
    "Heavy-duty stainless steel roller system for smooth glide",
    "EPDM triple-seal weatherstripping on all sashes",
    "Multi-point locking bar for enhanced security",
    "Powder-coated aluminium track — corrosion-proof",
    "Mosquito mesh integration available",
    "Available in 2-track, 3-track and 4-track configurations",
  ],
  specs: [
    { label: "Profile System",   value: "Grade-A UPVC, multi-chamber" },
    { label: "Glass Options",    value: "5mm, 6mm toughened / double-glazed 24mm" },
    { label: "Max Width",        value: "Up to 3600 mm per panel" },
    { label: "Max Height",       value: "Up to 2100 mm per panel" },
    { label: "Track Config",     value: "2-track, 3-track, 4-track" },
    { label: "Hardware",         value: "Roto / Siegenia European hardware" },
    { label: "Warranty",         value: "10 years structural, 5 years hardware" },
  ],
  variants: [
    { name: "Classic 2-Track",   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tags: ["2-track", "5mm glass", "SS rollers"], description: "Best-selling residential sliding window — simple, durable and budget-friendly." },
    { name: "Premium 3-Track",   image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", tags: ["3-track", "Double glazed 24mm", "Thermal break"], description: "Enhanced triple-track system with double-glazed unit for high-rise and coastal homes." },
    { name: "Wide-Span 4-Track", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", tags: ["4-track", "Large openings", "Grille option"], description: "Ideal for large balcony openings and villa facades requiring maximum ventilation area." },
  ],
  whyPoints: [
    { number: "01", title: "Corrosion-Free", desc: "UPVC profiles never rust, pit or need repainting — vital for Chennai's coastal air." },
    { number: "02", title: "Noise Reduction", desc: "Double-glazed variants cut external noise by up to 32 dB for peaceful interiors." },
    { number: "03", title: "Energy Efficient", desc: "Multi-chamber profiles reduce heat transfer, lowering AC costs by up to 30%." },
    { number: "04", title: "Low Maintenance", desc: "Wipe-clean UPVC surface and sealed tracks keep maintenance to near zero." },
  ],
  relatedLinks: [
    { href: "/products/upvc-windows/casement-windows", label: "Casement Windows" },
    { href: "/products/upvc-windows/fixed-windows",    label: "Fixed Windows" },
    { href: "/products/upvc-doors/sliding-doors",      label: "Sliding Doors" },
    { href: "/products/accessories/glass-types",       label: "Glass Types" },
  ],
};

export default function SlidingWindowsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

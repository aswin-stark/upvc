import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Sliding Doors — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Doors",
  title: "Sliding Doors",
  tagline: "Open Up Your Living Space.",
  heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80",
  description: "Our UPVC sliding doors connect interior living areas to balconies, gardens and terraces effortlessly. Heavy-duty rollers handle panels up to 120 kg for buttery-smooth operation every time.",
  features: [
    "Heavy-duty anti-jump stainless steel roller system",
    "8 mm or 10 mm toughened safety glass options",
    "Multi-point stainless steel locking bar",
    "Built-in finger-guard channel on all panels",
    "Integrated fly-screen track available",
    "Soft-close damper system on premium range",
  ],
  specs: [
    { label: "Profile System",  value: "Grade-A UPVC, heavy-duty door frame" },
    { label: "Glass Options",   value: "8mm / 10mm toughened, double-glazed 28mm" },
    { label: "Panel Config",    value: "2-panel, 3-panel, 4-panel" },
    { label: "Max Panel Width", value: "Up to 1200 mm per panel" },
    { label: "Max Height",      value: "Up to 2400 mm" },
    { label: "Panel Weight",    value: "Up to 120 kg per panel" },
    { label: "Warranty",        value: "10 years structural, 5 years hardware" },
  ],
  variants: [
    { name: "2-Panel Sliding",  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", tags: ["2-panel", "8mm glass", "Anti-jump rollers"], description: "The most popular residential sliding door — clean sightlines and easy single-hand operation." },
    { name: "3-Panel Sliding",  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", tags: ["3-panel", "10mm glass", "Soft-close"], description: "Wider opening for living rooms and balconies — one fixed and two sliding panels." },
    { name: "4-Panel Sliding",  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", tags: ["4-panel", "Full-width opening", "Premium track"], description: "Maximum opening width — ideal for villas, hospitality and commercial applications." },
  ],
  whyPoints: [
    { number: "01", title: "Space Saving",   desc: "No swing radius required — sliding panels stack neatly to one side, maximising usable floor area." },
    { number: "02", title: "Weather Sealed", desc: "EPDM seals on all four sides keep monsoon rain, dust and wind outside where it belongs." },
    { number: "03", title: "Child Safe",     desc: "Finger-guard channel and anti-jump rollers prevent accidents. Locking bar secures against intrusion." },
    { number: "04", title: "Indoor–Outdoor", desc: "Floor-to-ceiling glass options blur the boundary between your interior and the outdoors." },
  ],
  relatedLinks: [
    { href: "/products/upvc-doors/french-doors",       label: "French Doors" },
    { href: "/products/upvc-doors/folding-doors",      label: "Folding Doors" },
    { href: "/products/upvc-windows/sliding-windows",  label: "Sliding Windows" },
    { href: "/products/accessories/hardware",          label: "Hardware" },
  ],
};

export default function SlidingDoorsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

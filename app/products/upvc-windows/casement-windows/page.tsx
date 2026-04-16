import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Casement Windows — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Windows",
  title: "Casement Windows",
  tagline: "Airtight. Elegant. European.",
  heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  description: "Casement windows open outward or inward on a single hinge, creating a fully unobstructed view and an airtight seal that no sliding system can match.",
  features: [
    "Espagnolette multi-point locking for maximum security",
    "EPDM triple-seal gasket — airtight and watertight",
    "European friction stays for controlled opening angle",
    "Tilt & turn variant available for two-mode ventilation",
    "Concealed hinges option for flush exterior look",
    "Rain deflector sill included on all outward-opening units",
  ],
  specs: [
    { label: "Profile System",  value: "Grade-A UPVC, 5-chamber" },
    { label: "Glass Options",   value: "6mm toughened / double-glazed 28mm" },
    { label: "Max Sash Width",  value: "Up to 900 mm" },
    { label: "Max Sash Height", value: "Up to 1500 mm" },
    { label: "Opening",         value: "Outward / Inward / Tilt & Turn" },
    { label: "Hardware",        value: "Roto NT multi-point system" },
    { label: "Warranty",        value: "10 years structural, 5 years hardware" },
  ],
  variants: [
    { name: "Outward Opening",  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", tags: ["Outward", "EPDM gasket", "Rain deflector"], description: "Classic outward-opening casement, ideal for bedrooms and living areas requiring full ventilation." },
    { name: "Tilt & Turn",      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tags: ["Tilt & Turn", "Double glazed", "Child lock"], description: "Two-position opening: tilt for secure ventilation, turn for full window access. Ideal for apartments." },
    { name: "Fixed + Casement", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", tags: ["Combo unit", "Large span", "Grille option"], description: "Combination unit with fixed centre panel flanked by operable casement sashes for wide openings." },
  ],
  whyPoints: [
    { number: "01", title: "Best Seal",      desc: "Multi-point espagnolette locks compress the sash against EPDM gaskets for an airtight closure." },
    { number: "02", title: "Full Ventilation", desc: "The entire sash opens — no obstructions — delivering maximum airflow compared to sliding types." },
    { number: "03", title: "Acoustic Grade", desc: "Double-glazed 28mm units achieve Rw 42 dB acoustic rating — ideal near busy roads." },
    { number: "04", title: "Security",       desc: "Multi-point lock with anti-lift pins makes forced entry virtually impossible." },
  ],
  relatedLinks: [
    { href: "/products/upvc-windows/sliding-windows", label: "Sliding Windows" },
    { href: "/products/upvc-windows/fixed-windows",   label: "Fixed Windows" },
    { href: "/products/upvc-doors/french-doors",      label: "French Doors" },
    { href: "/products/accessories/hardware",         label: "Hardware" },
  ],
};

export default function CasementWindowsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

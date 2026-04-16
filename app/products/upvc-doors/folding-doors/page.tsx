import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Folding Doors — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Doors",
  title: "Folding Doors",
  tagline: "The Full Opening Experience.",
  heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
  description: "Bi-fold and multi-fold UPVC doors stack neatly to one or both sides, creating an almost fully open wall — transforming your home into a seamless indoor-outdoor living space.",
  features: [
    "Panels fold and stack to 90% clear opening width",
    "Top-hung track system — no floor rail to trip over",
    "Stainless steel pivots and bottom guides",
    "Thermally broken aluminium threshold option",
    "2, 3, 4, 5 or 6 panel configurations",
    "Double-glazed panels standard across all variants",
  ],
  specs: [
    { label: "Profile System",  value: "Grade-A UPVC, 70 mm bi-fold system" },
    { label: "Glass Options",   value: "8mm toughened / double-glazed 28mm" },
    { label: "Panel Config",    value: "2-fold to 6-fold, left or right stack" },
    { label: "Max Panel Width", value: "Up to 1000 mm per panel" },
    { label: "Max Height",      value: "Up to 2400 mm" },
    { label: "Track System",    value: "Top-hung with bottom guide" },
    { label: "Warranty",        value: "10 years structural, 5 years hardware" },
  ],
  variants: [
    { name: "2-Panel Bi-Fold",  image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", tags: ["2-panel", "Compact", "Outswing option"], description: "The entry-level bi-fold — perfect for smaller openings and tight balcony spaces." },
    { name: "4-Panel Bi-Fold",  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", tags: ["4-panel", "2+2 stack", "Double-glazed"], description: "Two panels stack each side for a symmetrical opening — ideal for dining room garden access." },
    { name: "6-Panel Bi-Fold",  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", tags: ["6-panel", "Full-wall opening", "Villa spec"], description: "Maximum opening for large living areas and hospitality spaces — almost the entire wall opens." },
  ],
  whyPoints: [
    { number: "01", title: "90% Clear Opening", desc: "Panels fold flush — delivering more clear opening width than any other door system." },
    { number: "02", title: "Trip-Free Threshold", desc: "Top-hung track means no raised floor rail — safer for children, elderly and wheelchair users." },
    { number: "03", title: "Thermally Efficient", desc: "Double-glazed panels and EPDM seals maintain indoor temperature even when fully closed." },
    { number: "04", title: "Architecturally Stunning", desc: "Minimal vertical profile lines and maximum glass create an impressive design statement." },
  ],
  relatedLinks: [
    { href: "/products/upvc-doors/sliding-doors",  label: "Sliding Doors" },
    { href: "/products/upvc-doors/french-doors",   label: "French Doors" },
    { href: "/products/accessories/glass-types",   label: "Glass Types" },
    { href: "/products/accessories/hardware",      label: "Hardware" },
  ],
};

export default function FoldingDoorsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Fixed Windows — Pristine Windows" };

const data: SubPageSpec = {
  category: "uPVC Windows",
  title: "Fixed Windows",
  tagline: "Light, Views, Silence.",
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  description: "Fixed UPVC windows maximise natural light and uninterrupted views in any room. With no moving parts, they are the most thermally efficient and lowest-maintenance window available.",
  features: [
    "Minimal UPVC sight lines for maximum glass area",
    "Laminated or toughened safety glass options",
    "Structural silicone glazing for flush exterior face",
    "Custom shapes — arched, circular, triangular available",
    "Available in large spans up to 2400 × 1800 mm",
    "Ideal as fixed sections in combination window systems",
  ],
  specs: [
    { label: "Profile System",  value: "Grade-A UPVC, slimline fixed frame" },
    { label: "Glass Options",   value: "6mm toughened / laminated / double-glazed" },
    { label: "Max Width",       value: "Up to 2400 mm" },
    { label: "Max Height",      value: "Up to 1800 mm" },
    { label: "Custom Shapes",   value: "Rectangular, arched, circular, triangular" },
    { label: "Thermal Value",   value: "U-value from 1.2 W/m²K (double-glazed)" },
    { label: "Warranty",        value: "10 years structural" },
  ],
  variants: [
    { name: "Picture Window",   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", tags: ["Non-opening", "Large span", "Toughened glass"], description: "The classic picture window — a single large pane framing your outdoor view with zero obstruction." },
    { name: "Bay Window",       image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", tags: ["30°/45°/90° angles", "Structural support", "Custom angles"], description: "Multi-panel bay configuration in custom angles — creates depth and a dramatic architectural feature." },
    { name: "Shaped / Arch",    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", tags: ["Custom shape", "Arched", "Feature glazing"], description: "Arched, circular or any custom geometry — fabricated to your architect's exact design." },
  ],
  whyPoints: [
    { number: "01", title: "Maximum Light",   desc: "No sash rails or meeting stiles — just glass, delivering the most natural light of any window type." },
    { number: "02", title: "Best U-Value",    desc: "No opening means no air leakage. Fixed units achieve the best thermal and acoustic ratings possible." },
    { number: "03", title: "Zero Maintenance", desc: "No moving parts, no hardware to service. Wipe clean and forget." },
    { number: "04", title: "Any Shape",       desc: "Our CNC fabrication handles arches, circles and bespoke geometry that other suppliers cannot." },
  ],
  relatedLinks: [
    { href: "/products/upvc-windows/sliding-windows",  label: "Sliding Windows" },
    { href: "/products/upvc-windows/casement-windows", label: "Casement Windows" },
    { href: "/products/accessories/glass-types",       label: "Glass Types" },
    { href: "/products/accessories/mesh-screens",      label: "Mesh / Screens" },
  ],
};

export default function FixedWindowsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

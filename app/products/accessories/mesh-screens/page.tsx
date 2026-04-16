import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import SubPageTemplate, { type SubPageSpec } from "@/components/products/sub-pages/SubPageTemplate";

export const metadata: Metadata = { title: "Mesh / Screens — Pristine Windows" };

const data: SubPageSpec = {
  category: "Accessories",
  title: "Mesh / Screens",
  tagline: "Fresh Air. Zero Insects.",
  heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
  description: "Our integrated and retractable mosquito screens let you ventilate freely without insects, dust or debris entering your home — available for every window and door type we manufacture.",
  features: [
    "Integrated track system — no visible frame when open",
    "Fiberglass mesh — UV stable and corrosion-free",
    "Aluminium frame profiles in matching UPVC colours",
    "Retractable roller screens for sliding windows",
    "Pleated folding screens for casement and French doors",
    "Pet-resistant heavy-duty mesh available",
  ],
  specs: [
    { label: "Mesh Material",   value: "Fibreglass, SS304, Pet-resistant PVC" },
    { label: "Mesh Aperture",   value: "1.2 mm × 1.2 mm (standard insect)" },
    { label: "Frame Material",  value: "Aluminium, powder coated" },
    { label: "Frame Colours",   value: "White, Anthracite, Brown, Custom RAL" },
    { label: "Screen Types",    value: "Fixed, Retractable roller, Pleated" },
    { label: "Compatible With", value: "All Pristine Windows UPVC systems" },
    { label: "Warranty",        value: "3 years frame, 1 year mesh" },
  ],
  variants: [
    { name: "Fixed Insect Screen",    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", tags: ["Fixed frame", "Fibreglass mesh", "Budget-friendly"], description: "The simplest and most affordable option — a fixed aluminium-framed screen that slides in and out of a dedicated channel." },
    { name: "Retractable Roller",     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tags: ["Retractable", "Cassette housing", "Invisible when open"], description: "Rolls away into a slim cassette when not in use — completely invisible, preserving your window aesthetics." },
    { name: "Pleated Folding Screen", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", tags: ["Pleated", "French doors", "Wide openings"], description: "Accordion-fold screen ideal for wide casement windows, French doors and folding door openings." },
  ],
  whyPoints: [
    { number: "01", title: "Insect-Free Ventilation", desc: "Open your windows fully in monsoon season without mosquitoes, flies or dengue risk." },
    { number: "02", title: "UV Stable Mesh",     desc: "Fibreglass mesh does not corrode or discolour in Chennai's heat and coastal humidity." },
    { number: "03", title: "Invisible Design",   desc: "Retractable and pleated screens disappear when not in use — zero impact on your window aesthetics." },
    { number: "04", title: "Easy to Clean",      desc: "Remove the frame panel in seconds for cleaning — no tools required on most screen types." },
  ],
  relatedLinks: [
    { href: "/products/upvc-windows/sliding-windows",  label: "Sliding Windows" },
    { href: "/products/upvc-windows/casement-windows", label: "Casement Windows" },
    { href: "/products/accessories/glass-types",       label: "Glass Types" },
    { href: "/products/accessories/hardware",          label: "Hardware" },
  ],
};

export default function MeshScreensPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header /><SocialSidebar />
      <main className="pt-0"><SubPageTemplate data={data} /></main>
      <Footer />
    </div>
  );
}

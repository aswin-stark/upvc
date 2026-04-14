import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductCatalogue from "@/components/products/ProductCatalogue";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata: Metadata = {
  title: "Products — Pristine Windows",
  description:
    "Browse our complete range of custom UPVC windows and doors — sliding, casement, fixed, French doors and more. Every unit fabricated to your exact specifications.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <SocialSidebar />

      <main className="pt-0">
        <ProductsHero />
        {/* ProductCatalogue renders sticky tabs + filterable grid */}
        <ProductCatalogue />
        <ProductFeatures />
        <ProductsCTA />
      </main>

      <Footer />
    </div>
  );
}

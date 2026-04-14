import type { Metadata } from "next";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesStats from "@/components/services/ServicesStats";
import ServicesList from "@/components/services/ServicesList";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceGuarantees from "@/components/services/ServiceGuarantees";
import ServiceAreas from "@/components/services/ServiceAreas";

export const metadata: Metadata = {
  title: "Services — Pristine Windows",
  description:
    "Free site consultation, custom fabrication, certified installation, maintenance and after-sales support — complete UPVC service across South India.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <SocialSidebar />

      <main className="pt-0">
        <ServicesHero />
        <ServicesStats />
        <ServicesList />
        <ServiceProcess />
        <ServiceGuarantees />
        <ServiceAreas />
      </main>

      <Footer />
    </div>
  );
}

export type Category =
  | "All"
  | "Sliding Windows"
  | "Casement Windows"
  | "Fixed Windows"
  | "Sliding Doors"
  | "French Doors";

export interface Product {
  id: string;
  category: Exclude<Category, "All">;
  name: string;
  image: string;
  specs: string[];
  description: string;
  features: string[];
}

export const CATEGORIES: Category[] = [
  "All",
  "Sliding Windows",
  "Casement Windows",
  "Fixed Windows",
  "Sliding Doors",
  "French Doors",
];

export const PRODUCTS: Product[] = [
  {
    id: "sw-classic",
    category: "Sliding Windows",
    name: "Sliding Window — Classic",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    specs: [
      "2-track / 3-track",
      "5mm toughened glass",
      "Stainless steel rollers",
    ],
    description:
      "Our classic sliding window is built for everyday performance and easy operation. Ideal for residential homes, it combines smooth glide action with robust UPVC profiles and robust weathersealing.",
    features: [
      "Smooth stainless steel roller system",
      "EPDM weatherstrip seal",
      "Powder-coated aluminium track",
      "Mosquito mesh option available",
    ],
  },
  {
    id: "sw-premium",
    category: "Sliding Windows",
    name: "Sliding Window — Premium",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    specs: ["3-track system", "Double glazed 24mm", "Thermal break profile"],
    description:
      "Premium sliding window with double-glazed units for superior thermal and acoustic insulation. Ideal for high-rise and coastal applications.",
    features: [
      "Double glazed units",
      "Thermal break profile",
      "Argon gas filling",
      "UV-resistant glass",
    ],
  },
  {
    id: "cw-outward",
    category: "Casement Windows",
    name: "Casement Window — Outward",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    specs: ["Outward opening", "EPDM gaskets", "Espagnolette lock"],
    description:
      "Outward-opening casement windows deliver excellent ventilation and an airtight seal when closed. European hardware ensures smooth, reliable operation for decades.",
    features: [
      "Espagnolette multipoint lock",
      "EPDM triple-seal gasket",
      "Concealed hinges available",
      "Rain deflector included",
    ],
  },
  {
    id: "cw-tilt-turn",
    category: "Casement Windows",
    name: "Casement Window — Tilt & Turn",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    specs: ["Tilt & turn mechanism", "Double glazed", "Child safety lock"],
    description:
      "The tilt & turn system offers two distinct opening modes — tilt for secure ventilation, turn for full access. A favourite for apartments and upper floors.",
    features: [
      "Single-handle tilt & turn operation",
      "Child-safe restrictors",
      "Double-glazed 28mm unit",
      "Acoustic rated up to 42dB",
    ],
  },
  {
    id: "fw-picture",
    category: "Fixed Windows",
    name: "Fixed Window — Picture",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    specs: ["Non-opening", "Up to 2400×1800mm", "Laminated safety glass"],
    description:
      "Maximise natural light and views with our picture fixed windows. Available in large spans and custom shapes, they are structurally robust and thermally efficient.",
    features: [
      "Laminated or toughened safety glass",
      "Available in custom shapes",
      "Minimal sight line profiles",
      "Structural silicone glazing",
    ],
  },
  {
    id: "fw-bay",
    category: "Fixed Windows",
    name: "Bay Window System",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    specs: [
      "30°/45°/90° angles",
      "Combination units",
      "Structural support included",
    ],
    description:
      "Create dramatic architectural focal points with our bay window systems. Combines fixed and opening units at custom angles with full structural support brackets.",
    features: [
      "30°, 45° and 90° angle options",
      "Integrated structural posts",
      "Combination fixed and opening sashes",
      "Custom colour matching available",
    ],
  },
  {
    id: "sd-2panel",
    category: "Sliding Doors",
    name: "Sliding Door — 2-Panel",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
    specs: ["2-panel system", "8mm toughened glass", "Anti-jump rollers"],
    description:
      "Our 2-panel sliding door opens up living spaces to the outdoors effortlessly. Heavy-duty rollers handle panels up to 100kg for smooth, secure operation every time.",
    features: [
      "Heavy-duty anti-jump roller system",
      "8mm toughened safety glass",
      "Multi-point stainless steel lock",
      "Built-in finger-guard channel",
    ],
  },
  {
    id: "sd-3panel",
    category: "Sliding Doors",
    name: "Sliding Door — 3-Panel",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    specs: ["3-panel system", "10mm toughened glass", "Soft-close mechanism"],
    description:
      "The 3-panel sliding door creates an expansive opening ideal for living rooms, balconies, and hospitality spaces. Soft-close dampers ensure a quiet, gentle close.",
    features: [
      "Soft-close hydraulic dampers",
      "10mm toughened safety glass",
      "Concealed floor guide rail",
      "Available with integrated blinds",
    ],
  },
  {
    id: "fd-classic",
    category: "French Doors",
    name: "French Door — Classic",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    specs: ["Double leaf", "Full-height glass", "Multi-point lock"],
    description:
      "Classic French doors add elegance to any home, flooding rooms with natural light. Double-leaf design with full-height glass panels and secure multi-point locking.",
    features: [
      "Multi-point espagnolette lock",
      "Full-height double-glazed panels",
      "Astragal bar detail option",
      "Outward or inward opening",
    ],
  },
];

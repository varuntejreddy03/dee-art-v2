import kitchen from "@/assets/kitchen.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import living from "@/assets/living.jpg";
import ceiling from "@/assets/ceiling.jpg";
import tvunit from "@/assets/tvunit.jpg";
import turnkey from "@/assets/turnkey.jpg";

export type PortfolioCategory =
  | "Kitchen"
  | "Wardrobe"
  | "Living Room";

export interface PortfolioItem {
  src: string;
  category: PortfolioCategory;
  title: string;
}

export const portfolioItems: PortfolioItem[] = [
  { src: kitchen, category: "Kitchen", title: "Modular Kitchen — Gachibowli" },
  { src: living, category: "Living Room", title: "Contemporary Living Space" },
  { src: wardrobe, category: "Wardrobe", title: "Glass Display & Crockery Unit" },
  { src: ceiling, category: "Living Room", title: "Elegant Living — Round Table Accent" },
  { src: tvunit, category: "Living Room", title: "Dining & Display Zone" },
  { src: turnkey, category: "Living Room", title: "Turnkey Living — Column Detail" },
];

export const portfolioCategories: ("All" | PortfolioCategory)[] = [
  "All",
  "Kitchen",
  "Wardrobe",
  "Living Room",
];

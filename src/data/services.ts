import {
  ChefHat,
  DoorClosed,
  Sofa,
  BedDouble,
  Lightbulb,
  Tv,
  Building2,
  KeyRound,
  Home,
  type LucideIcon,
} from "lucide-react";

import kitchen from "@/assets/kitchen.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import living from "@/assets/living.jpg";
import about from "@/assets/about.jpg";
import ceiling from "@/assets/ceiling.jpg";
import tvunit from "@/assets/tvunit.jpg";
import turnkey from "@/assets/turnkey.jpg";
import hero from "@/assets/hero.jpg";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "Ergonomic, elegant kitchens built around how you cook and live.",
    description:
      "Bespoke modular kitchens engineered for daily life — smart storage, premium hardware, moisture-resistant finishes and layouts planned around your workflow. From sleek handleless designs to warm classic looks, every detail is tailored to your space and taste.",
    icon: ChefHat,
    image: kitchen,
  },
  {
    slug: "wardrobes-storage",
    title: "Wardrobes & Storage Solutions",
    short: "Custom wardrobes and clever storage that make every inch count.",
    description:
      "Sliding, hinged and walk-in wardrobes with intelligent internal organisation, soft-close fittings and integrated lighting. We design storage that stays beautiful and functional for years, perfectly matched to your interiors.",
    icon: DoorClosed,
    image: wardrobe,
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    short: "Inviting living spaces that balance comfort and character.",
    description:
      "Feature walls, curated furniture, layered lighting and refined finishes that turn your living room into the heart of the home — sophisticated, comfortable and unmistakably yours.",
    icon: Sofa,
    image: living,
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    short: "Restful, personalised bedrooms designed for calm and comfort.",
    description:
      "Serene bedrooms with upholstered headboards, warm cove lighting, thoughtful storage and calming palettes. We craft private retreats that feel as good as they look.",
    icon: BedDouble,
    image: about,
  },
  {
    slug: "false-ceiling-lighting",
    title: "False Ceiling & Lighting",
    short: "Architectural ceilings and layered lighting that set the mood.",
    description:
      "Elegant false ceilings paired with layered, energy-efficient lighting schemes — ambient, task and accent — to add depth, warmth and a premium finish to every room.",
    icon: Lightbulb,
    image: ceiling,
  },
  {
    slug: "tv-units-custom-furniture",
    title: "TV Units & Custom Furniture",
    short: "Statement media walls and made-to-measure furniture pieces.",
    description:
      "Custom TV units, crockery cabinets, study tables and bespoke furniture crafted with premium materials and precise detailing to fit your space and lifestyle perfectly.",
    icon: Tv,
    image: tvunit,
  },
  {
    slug: "office-commercial-interiors",
    title: "Office & Commercial Interiors",
    short: "Productive, brand-forward workspaces and commercial fit-outs.",
    description:
      "Functional and inspiring interiors for offices, retail and commercial spaces — from space planning and workstations to reception areas and meeting rooms, built to reflect your brand.",
    icon: Building2,
    image: turnkey,
  },
  {
    slug: "turnkey-interior-projects",
    title: "Turnkey Interior Projects",
    short: "End-to-end interiors delivered on time and on budget.",
    description:
      "Sit back while we manage everything — design, materials, execution and finishing. Our turnkey projects deliver a move-in-ready home with a single point of accountability.",
    icon: KeyRound,
    image: turnkey,
  },
  {
    slug: "home-automation-services",
    title: "Home Automation Services",
    short: "Smart living with intuitive lighting, climate and security control.",
    description:
      "Integrated home automation for lighting, climate, curtains, entertainment and security — controlled from a panel or your phone. Modern convenience woven seamlessly into your interiors.",
    icon: Home,
    image: hero,
  },
];

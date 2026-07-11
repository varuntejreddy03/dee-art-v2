export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

// TODO: Replace with real client testimonials once available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Dee Art transformed our apartment into a home that feels warm, elegant and completely us. The team understood our vision and delivered every detail with care.",
    name: "Ananya & Rohit",
    detail: "3 BHK Apartment, Gachibowli",
  },
  {
    quote:
      "From the modular kitchen to the wardrobes, the craftsmanship is outstanding. Everything was delivered on time and the finishing is truly premium.",
    name: "Srinivas Reddy",
    detail: "Villa Interiors, Hyderabad",
  },
  {
    quote:
      "Professional, creative and reliable. They managed the entire project end-to-end so we could simply move in. Highly recommended for turnkey interiors.",
    name: "Meera Nair",
    detail: "Turnkey Home Project",
  },
];

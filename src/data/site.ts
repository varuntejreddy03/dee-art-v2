// Central site configuration — edit contact details, social links and
// placeholders here as they become available.

export const site = {
  name: "Dee Art Modulars and Interiors",
  shortName: "Dee Art",
  tagline: "Where creativity meets functionality.",
  email: "deeartmodularsandinteriors2026@gmail.com",
  // TODO: Replace with the live business phone / WhatsApp number when available.
  // Format: country code + number, digits only, e.g. "919876543210".
  whatsapp: "919876543210",
  whatsappLive: false, // set true once a real number is added above
  phoneDisplay: "Coming soon",
  address:
    "JSM Towers, 6th Floor, Plot No.02, Jayabheri Enclave, DLF Road, Next to Bloom Hotel, Gachibowli, Hyderabad", // TODO: verify pincode
  hours: "10 AM – 7 PM, Monday to Sunday",
  area: "Gachibowli, Hyderabad",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61589454552364",
    instagram: "https://www.instagram.com/deeartmodularsandinteriors/",
    linkedin: "", // Coming soon
  },
  mapEmbed:
    "https://www.google.com/maps?q=Gachibowli,+Hyderabad&output=embed",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

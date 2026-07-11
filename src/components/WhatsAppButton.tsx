import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Dee Art, I'd like to know more about your interior services.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}

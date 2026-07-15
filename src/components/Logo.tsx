import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export function Logo({ light, className }: LogoProps) {
  return (
    <img
      src={logoMark}
      alt="Dee Art Modulars and Interiors"
      className={cn(
        "h-11 w-auto object-contain transition-all duration-300 sm:h-12",
        light
          ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          : "drop-shadow-none",
        className,
      )}
    />
  );
}

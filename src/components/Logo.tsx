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
        "h-12 w-auto object-contain sm:h-14",
        className,
      )}
    />
  );
}

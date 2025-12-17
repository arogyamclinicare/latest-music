import Image from "next/image";
import { IMAGES } from "@/lib/images";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Logo component that displays your Earthquakestudio logo
 */
export function LogoImage({ 
  width = 40, 
  height = 40,
  className = "" 
}: LogoProps) {
  const logoSrc = IMAGES.logo.main;
  
  return (
    <Image
      src={logoSrc}
      alt="Earthquakestudio Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}


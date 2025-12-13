import Image from "next/image";
import { IMAGES } from "@/lib/images";

interface LogoProps {
  variant?: "main" | "white";
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Logo component that displays your Earthquakestudio logo
 * 
 * Usage:
 * <Logo /> - Default main logo
 * <Logo variant="white" /> - White version for dark backgrounds
 * <Logo width={150} height={50} /> - Custom size
 */
export function LogoImage({ 
  variant = "main", 
  width = 40, 
  height = 40,
  className = "" 
}: LogoProps) {
  const logoSrc = variant === "white" ? IMAGES.logo.white : IMAGES.logo.main;
  
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


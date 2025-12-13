interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({ children, className = "", as: Component = "h2" }: HeadingProps) {
  const styles = {
    h1: "text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none",
    h2: "text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight",
    h3: "text-3xl md:text-4xl font-light tracking-tight",
    h4: "text-2xl md:text-3xl font-normal",
    h5: "text-xl md:text-2xl font-normal",
    h6: "text-lg md:text-xl font-medium",
  };
  
  return (
    <Component className={`${styles[Component]} ${className}`}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl";
  variant?: "default" | "muted" | "light";
}

export function Text({ 
  children, 
  className = "", 
  size = "base",
  variant = "default" 
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  };
  
  const variants = {
    default: "text-black",
    muted: "text-black/60",
    light: "text-black/40",
  };
  
  return (
    <p className={`${sizes[size]} ${variants[variant]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}


"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className = "", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "text-black hover:scale-105 active:scale-95",
      secondary: "bg-white text-black hover:bg-gray-50 hover:scale-105 active:scale-95 border border-black/10",
      outline: "border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105 active:scale-95",
      ghost: "text-black hover:bg-black/5 active:bg-black/10",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    
    const primaryStyle = variant === "primary" 
      ? { backgroundColor: "#f6f2e6", "--hover-bg": "rgba(246, 242, 230, 0.9)" } as React.CSSProperties
      : {};
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        style={primaryStyle}
        onMouseEnter={(e) => {
          if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "rgba(246, 242, 230, 0.9)";
          }
        }}
        onMouseLeave={(e) => {
          if (variant === "primary") {
            e.currentTarget.style.backgroundColor = "#f6f2e6";
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";


"use client";

import { TextEffect } from "@/components/core/text-effect";
import { NotificationCenter } from "@/components/kokonutui/liquid-glass-card";

// Reusable animation variants (DRY)
const textAnimationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, rotateX: 90, y: 10 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { duration: 0.2 },
    },
  },
};

const heroTextClass = "text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight font-basement text-white";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/waveform-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="text-left">
          <div className="flex flex-col space-y-0 mb-6">
            <TextEffect per="char" delay={0.5} variants={textAnimationVariants} className={heroTextClass}>
              A Record Label built to shake
            </TextEffect>
            <TextEffect per="char" delay={1.5} variants={textAnimationVariants} className={heroTextClass}>
              the industry, with rising talent.
            </TextEffect>
          </div>

          <div className="max-w-xs">
            <NotificationCenter />
          </div>
        </div>
      </div>
    </section>
  );
}

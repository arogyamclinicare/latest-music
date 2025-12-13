"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TextEffect } from "@/components/core/text-effect";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background SVG - Flipped horizontally to the right */}
      <div 
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/Untitled%20design.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(-1)',
        }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Left side - Text + CTA */}
          <div className="text-left">
            <div className="flex flex-col space-y-0 mb-8">
              <TextEffect
                per="char"
                delay={0.5}
                variants={{
                  container: {
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      rotateX: 90,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      rotateX: 0,
                      y: 0,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  },
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight font-basement text-white"
              >
                A Record Label built to shake
              </TextEffect>
              <TextEffect
                per="char"
                delay={1.5}
                variants={{
                  container: {
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      rotateX: 90,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      rotateX: 0,
                      y: 0,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  },
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight font-basement text-white"
              >
                the industry, with rising talent.
              </TextEffect>
            </div>

            <Link href="/login">
              <Button size="lg" className="text-base px-10 py-4">
                Create Account
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}


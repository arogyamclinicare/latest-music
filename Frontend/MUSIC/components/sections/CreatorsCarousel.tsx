"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/Animations";
import { Heading, Text } from "@/components/ui/Typography";

export function CreatorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let animationFrameId: number;
    let lastTime = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = (currentTime: number) => {
      if (currentTime - lastTime >= 16) { // ~60fps
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const creators = [
    "TechReviewer Pro",
    "Daily Vlog Studio",
    "Gaming Legends",
    "Fitness Journey",
    "Food Explorer",
    "Travel Tales",
    "Business Insights",
    "Creative Corner",
    "Music Vibes",
    "Podcast Hub",
  ];

  // Duplicate for seamless loop (reduced from 3x to 2x for performance)
  const duplicatedCreators = [...creators, ...creators];

  return (
    <section className="py-20 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <Text size="sm" variant="muted" className="uppercase tracking-wider mb-4">
              Trusted by artists worldwide
            </Text>
            <Heading as="h2" className="text-3xl">
              Join up and coming Music Artists
            </Heading>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8f8f8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8f8f8] to-transparent z-10" />
            
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden whitespace-nowrap"
              style={{ scrollBehavior: 'auto' }}
            >
              {duplicatedCreators.map((creator, index) => (
                <div
                  key={`creator-${index}-${creator}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-2xl border border-black/10 flex-shrink-0"
                >
                  <span className="text-lg font-medium">{creator}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


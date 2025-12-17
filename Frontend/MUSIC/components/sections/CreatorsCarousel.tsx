"use client";

import { FadeIn } from "@/components/ui/Animations";
import { Heading, Text } from "@/components/ui/Typography";

export function CreatorsCarousel() {
  const creators = [
    "Gukbap",
    "MVRLLIN",
    "Themio",
  ];

  // Duplicate multiple times for seamless infinite loop
  const duplicatedCreators = [...creators, ...creators, ...creators, ...creators];

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
            <div
              className="flex gap-8 whitespace-nowrap animate-scroll"
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

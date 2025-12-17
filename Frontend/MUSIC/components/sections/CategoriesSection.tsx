"use client";

import { FadeIn } from "@/components/ui/Animations";
import { Heading, Text } from "@/components/ui/Typography";
import "./categories.css";

export function CategoriesSection() {
  const categories = [
    {
      icon: "🎬",
      title: "Cinematic",
      description: "Epic scores for dramatic moments",
    },
    {
      icon: "⚡",
      title: "Energetic",
      description: "High-energy tracks for action content",
    },
    {
      icon: "🌊",
      title: "Ambient",
      description: "Calm backgrounds for focus content",
    },
    {
      icon: "🎸",
      title: "Rock & Pop",
      description: "Contemporary hits for modern creators",
    },
    {
      icon: "🎹",
      title: "Electronic",
      description: "Digital beats for tech content",
    },
    {
      icon: "🎵",
      title: "Lo-Fi",
      description: "Chill beats for study & work",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              What genres have we helped produce
            </Heading>
            <Text size="lg" variant="muted">
              Perfectly organized by mood, genre, and use case
            </Text>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FadeIn key={category.title} delay={0.1 * index}>
              <div className="electric-card group p-8 rounded-3xl bg-white/50 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-light mb-2">{category.title}</h3>
                <Text size="sm" variant="muted" className="mb-4">
                  {category.description}
                </Text>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}



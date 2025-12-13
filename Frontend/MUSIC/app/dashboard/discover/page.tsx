import { DashboardNav } from "@/components/DashboardNav";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";

export default function DiscoverPage() {
  const categories = [
    { name: "Trending Now", icon: "🔥", count: 120 },
    { name: "New Releases", icon: "⭐", count: 89 },
    { name: "Chill Vibes", icon: "🌊", count: 234 },
    { name: "Energetic", icon: "⚡", count: 456 },
    { name: "Cinematic", icon: "🎬", count: 189 },
    { name: "Lo-Fi Beats", icon: "🎧", count: 312 },
  ];

  return (
    <>
      <DashboardNav />
      
      <main className="pt-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Section>
          <FadeIn>
            <Heading as="h1" className="mb-4">
              Discover Music
            </Heading>
            <Text size="lg" variant="muted" className="mb-16">
              Curated collections to inspire your next project
            </Text>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={category.name} delay={0.1 * index}>
                <div className="group p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-light mb-2">{category.name}</h3>
                  <Text size="sm" variant="muted">{category.count} tracks</Text>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}


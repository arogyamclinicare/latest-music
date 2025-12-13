import { DashboardNav } from "@/components/DashboardNav";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";

export default function LikedPage() {
  return (
    <>
      <DashboardNav />
      
      <main className="pt-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Section>
          <FadeIn>
            <Heading as="h1" className="mb-4">
              Liked Songs
            </Heading>
            <Text size="lg" variant="muted" className="mb-16">
              Your personal collection of favorite tracks
            </Text>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl border border-black/10 p-16 text-center">
              <div className="text-6xl mb-4">❤️</div>
              <Heading as="h3" className="mb-4">
                No Liked Songs Yet
              </Heading>
              <Text variant="muted" className="mb-8">
                Start exploring and save your favorite tracks here.
                They'll sync across all your devices.
              </Text>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
}


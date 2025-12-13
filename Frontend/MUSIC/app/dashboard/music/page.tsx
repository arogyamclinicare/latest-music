import { DashboardNav } from "@/components/DashboardNav";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";

export default function MusicPage() {
  const genres = [
    "All", "Electronic", "Cinematic", "Hip Hop", "Rock", 
    "Ambient", "Pop", "Jazz", "Classical"
  ];

  return (
    <>
      <DashboardNav />
      
      <main className="pt-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Section>
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div>
                <Heading as="h1" className="mb-2">
                  Full Music Library
                </Heading>
                <Text variant="muted">50,000+ premium tracks at your fingertips</Text>
              </div>
              <Button variant="outline">
                Upload Your Own
              </Button>
            </div>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <input
                type="search"
                placeholder="Search by track name, artist, mood, or genre..."
                className="w-full px-6 py-4 rounded-2xl border border-black/10 bg-white focus:outline-none focus:border-black/30 transition-colors text-lg"
              />
            </div>
          </FadeIn>

          {/* Genre Filters */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-12">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className="px-6 py-2 rounded-full border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all text-sm font-medium"
                >
                  {genre}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Placeholder for music player and tracks list */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-3xl border border-black/10 p-12 text-center">
              <div className="text-6xl mb-4">🎵</div>
              <Heading as="h3" className="mb-4">
                Music Player Coming Soon
              </Heading>
              <Text variant="muted">
                Full music player with waveform visualization, playlists, and download functionality 
                will be integrated in the next phase.
              </Text>
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
}


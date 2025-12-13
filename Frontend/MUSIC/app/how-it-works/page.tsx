import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Listen for Free",
      description: "Create a free account and start listening to our entire library of 50,000+ tracks. No subscription required to stream and discover music.",
    },
    {
      number: "02",
      title: "Browse & Discover",
      description: "Explore our vast library organized by genre, mood, and use case. Create playlists and preview tracks before subscribing.",
    },
    {
      number: "03",
      title: "Subscribe to Download",
      description: "When you're ready, subscribe to download tracks and use them commercially. Unlimited downloads in high quality (MP3 + WAV). No attribution required.",
    },
    {
      number: "04",
      title: "Publish With Confidence",
      description: "Use downloaded tracks in YouTube videos, Instagram posts, TikTok, podcasts, or any platform. You're fully covered with our commercial license.",
    },
  ];

  return (
    <>
      <GradientBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Heading as="h1" className="mb-8">
              How It Works
            </Heading>
            
            <Text size="xl" variant="muted">
              Listen free, subscribe when you're ready to download and use commercially.
            </Text>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-light">
                  {step.number}
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl font-light mb-4">{step.title}</h3>
                  <Text size="lg" variant="muted">{step.description}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}


import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/Animations";
import AnimatedLogo from "./Logo/AnimatedLogo";

export default function AboutPage() {
  return (
    <>
      <GradientBackground />
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* SIDE BY SIDE SECTION */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

            {/* LEFT: Animated Logo */}
            <FadeIn>
              <AnimatedLogo />
            </FadeIn>

            {/* RIGHT: CONTENT */}
            <div>
              <FadeIn>
                <Heading as="h1" className="mb-6">
                  About Earthquake Studio
                </Heading>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Text size="xl" variant="muted" className="max-w-xl">
                  We're on a mission to empower content creators with the perfect
                  soundtrack for their stories. Listen to our entire library for
                  free, and subscribe when you're ready to download and use
                  commercially.
                </Text>
              </FadeIn>
            </div>
          </div>

          {/* STORY + MISSION */}
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-2xl font-light mb-4">Our Story</h3>
                <Text variant="muted">
                  Founded in 2024, Earthquake Studio emerged from a simple
                  observation: content creators deserve music that's as unique
                  and dynamic as their content. We've curated a growing library
                  of premium tracks crafted with creators in mind.
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-2xl font-light mb-4">Our Mission</h3>
                <Text variant="muted">
                  To give creators unlimited access to premium music. Listen
                  freely, subscribe when you're ready to download and use tracks
                  commercially — simple, transparent, and creator-first.
                </Text>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* WHY CREATORS CHOOSE US */}
        <div className="bg-black/[0.02] py-20 mt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
            <FadeIn>
              <Heading as="h2" className="mb-12">
                Why Creators Choose Us
              </Heading>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-10">
              <FadeIn delay={0.2}>
                <div>
                  <div className="text-5xl mb-4">🎵</div>
                  <h4 className="text-xl font-medium mb-3">Premium Quality</h4>
                  <Text size="sm" variant="muted">
                    Every track is professionally produced and mastered.
                  </Text>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <div className="text-5xl mb-4">⚡</div>
                  <h4 className="text-xl font-medium mb-3">Fast Discovery</h4>
                  <Text size="sm" variant="muted">
                    Quickly find the perfect track for your content.
                  </Text>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <div className="text-5xl mb-4">🔒</div>
                  <h4 className="text-xl font-medium mb-3">Creator-Safe</h4>
                  <Text size="sm" variant="muted">
                    Commercial-ready music with clear licensing.
                  </Text>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/Animations";
import AnimatedLogo from "./Logo/AnimatedLogo";

export default function AboutPage() {
  return (
    <>
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
                  We&apos;re on a mission to empower content creators with the perfect
                  soundtrack for their stories. Listen to our entire library for
                  free, and subscribe when you&apos;re ready to download and use
                  commercially.
                </Text>
              </FadeIn>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

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
                  Earthquake studio is a record label, publisher and distributor dedicated to empowering
                  up and coming artists through a modern strategy of viral marketing. We focus on smaller artists 
                  that have undiscovered talent, that needs to be heard.
                  <br /><br />
                  While most record labels stick to a traditional approach, we focus more on what works
                  and what doesn&apos;t. Partnering up with creators and artists from all over the world. We aim to SHAKE the
                  music industry.
                  <br /><br />
                  <strong>Established in LONDON 2025</strong>
                </Text>
              </FadeIn>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

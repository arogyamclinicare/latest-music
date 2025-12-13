import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/Animations";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-md mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <Heading as="h1" className="mb-4">
                  Create Your Account
                </Heading>
                <Text variant="muted">
                  Start exploring our music library today
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex justify-center">
                <SignUp 
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "bg-white/50 backdrop-blur-sm border border-black/10 shadow-lg",
                    },
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
}


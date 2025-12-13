import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <Heading as="h1" className="mb-4">
                Welcome Back
              </Heading>
              <Text variant="muted">
                Sign in to access your music library
              </Text>
            </div>

            <div className="flex justify-center">
              <SignIn 
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-white/50 backdrop-blur-sm border border-black/10 shadow-lg",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


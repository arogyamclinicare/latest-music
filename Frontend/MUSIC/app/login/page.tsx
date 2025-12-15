import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import Link from "next/link";

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
                Welcome to Earthquakestudio
              </Heading>
              <Text variant="muted">
                Start exploring our music library - no login required!
              </Text>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-black/10 shadow-lg rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-black/5 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>
                
                <div>
                  <h2 className="text-xl font-medium text-black mb-2">
                    Free Access to All Music
                  </h2>
                  <p className="text-black/60 text-sm">
                    Browse and listen to our entire collection without any account required.
                  </p>
                </div>

                <Link 
                  href="/music-library"
                  className="inline-block w-full rounded-full bg-black px-7 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-black/90 hover:scale-105"
                >
                  Browse Music Library
                </Link>

                <Link 
                  href="/dashboard/discover"
                  className="inline-block w-full rounded-full border-2 border-black/20 px-7 py-4 text-base font-medium text-black transition-all duration-200 hover:border-black/40 hover:scale-105"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

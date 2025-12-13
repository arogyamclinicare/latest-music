"use client";

import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export default function ForArtistsPage() {
  return (
    <>
      {/* Background SVG - Full Page */}
      <div 
        className="fixed inset-0 -z-10 opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'url("/Untitled%20design%20(4).svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
        aria-hidden="true"
      />
      
      <Navbar />
      
      <main className="relative pt-32 pb-20 min-h-screen bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Heading as="h1" className="mb-8">
              Artist Application
            </Heading>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfd7xM0tCAY4H5UwSdEvIUFjHwqx5ompWR_ff-S7BywFgaB-g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-base px-10 py-4 text-white"
                style={{
                  backgroundColor: "#9a6030",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(154, 96, 48, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#9a6030";
                }}
              >
                Click Here to Fill Form
              </Button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}


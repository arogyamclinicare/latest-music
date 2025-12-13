"use client";

import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <GradientBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 rounded-3xl border-2 bg-black text-white border-black transition-all">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-light mb-4">Custom License</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Designed for any party who has interest in utilising our music. Whether its certain licenses like a Digital Ads license, or just the rights to use a track. Please contact us below.
                </p>
              </div>

              <div className="text-center mb-8">
                <Link href="/contact">
                  <Button 
                    variant="secondary"
                    size="lg" 
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-sm text-white/70 mb-6">
                  We'll design a plan that fits your needs.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      Unlimited licensing for any media
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      World-class indemnification coverage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      Dedicated Customer Success Manager & music consultation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      Optimized workflows with plugins & API integrations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      Multiple user seats & SSO
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-sm text-white/90">
                      For businesses over $10M and agencies over $5M yearly turnover
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


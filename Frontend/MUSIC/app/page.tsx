import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy load below-the-fold components
const CreatorsCarousel = dynamic(() => import("@/components/sections/CreatorsCarousel").then(mod => ({ default: mod.CreatorsCarousel })), {
  loading: () => <div className="py-20 bg-black/[0.02]" />,
  ssr: true,
});

const CategoriesSection = dynamic(() => import("@/components/sections/CategoriesSection").then(mod => ({ default: mod.CategoriesSection })), {
  loading: () => <div className="py-32" />,
  ssr: true,
});

const FeaturedMusicSection = dynamic(() => import("@/components/sections/FeaturedMusicSection").then(mod => ({ default: mod.FeaturedMusicSection })), {
  loading: () => <div className="py-32 bg-black/[0.02]" />,
  ssr: true,
});

const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="py-32" />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64 bg-[#f7f7f7]" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="bg-gradient-to-b from-white via-white to-purple-50/50">
        <HeroSection />
        <CreatorsCarousel />
        <CategoriesSection />
        <FeaturedMusicSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}


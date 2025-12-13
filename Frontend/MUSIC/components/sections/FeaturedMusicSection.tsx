"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Play, Pause } from "lucide-react";
import { LiquidGlassCard } from "@/components/MusicPlayer";

export function FeaturedMusicSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const featuredTracks = [
    {
      title: "Summer Vibes",
      artist: "DJ Chill",
      genre: "Electronic",
      duration: "3:24",
      image: "/images/music/featured-1.jpg",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Epic Journey",
      artist: "Cinematic Sounds",
      genre: "Cinematic",
      duration: "4:15",
      image: "/images/music/featured-2.jpg",
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Urban Pulse",
      artist: "Street Beats",
      genre: "Hip Hop",
      duration: "2:48",
      image: "/images/music/featured-3.jpg",
      color: "from-pink-400 to-red-500",
    },
    {
      title: "Calm Waters",
      artist: "Ambient Flow",
      genre: "Ambient",
      duration: "5:32",
      image: "/images/music/featured-4.jpg",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const handlePlayPause = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <section className="py-32 bg-black/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <Heading as="h2" className="mb-4">
            Featured This Week
          </Heading>
          <Text size="lg" variant="muted">
            Handpicked tracks our creators love
          </Text>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredTracks.map((track, index) => (
            <LiquidGlassCard key={track.title} variant="primary" hover="glow" className="p-0 overflow-hidden">
              {/* Album Art with Play Overlay */}
              <div className="relative aspect-square overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color}`} />
                <div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => handlePlayPause(index)}
                >
                  <div className="w-16 h-16 rounded-full bg-white/0 group-hover:bg-white/95 backdrop-blur-sm flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100 shadow-xl">
                    {playingIndex === index ? (
                      <Pause className="size-6 text-black" />
                    ) : (
                      <Play className="size-6 text-black ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Track Info + Mini Player */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-medium mb-1">{track.title}</h3>
                  <p className="text-sm text-black/60 mb-2">{track.artist}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black/50">{track.genre}</span>
                    <span className="text-black/40">{track.duration}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-zinc-200/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20" />
                  <div
                    className="absolute inset-y-0 left-0 bg-black/50 transition-all duration-200"
                    style={{ width: playingIndex === index ? "45%" : "0%" }}
                  />
                </div>

                {/* Mini Controls */}
                <div className="flex items-center justify-between">
                  <button 
                    className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
                    onClick={() => handlePlayPause(index)}
                  >
                    {playingIndex === index ? (
                      <Pause className="size-3.5 text-black" />
                    ) : (
                      <Play className="size-3.5 text-black ml-0.5" />
                    )}
                  </button>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors text-xs">
                      ❤️
                    </button>
                    <button className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors text-xs">
                      ⬇️
                    </button>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link href="/music-library">
            <Button size="lg" variant="outline" className="text-lg px-12 py-5">
              Explore All Music
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useState } from "react";
import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export default function MusicLibraryPage() {
  const [tracks, setTracks] = useState([]);

  // Fetch tracks on page load
  console.log("RUNNING CLIENT COMPONENT");
useEffect(() => {
  console.log("USE EFFECT STARTED");

  fetch("https://latest-music.onrender.com/api/v1/tracks/")
    .then(res => {
      console.log("STATUS:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("DATA:", data);
      setTracks(data.results || []);
    })
    .catch(err => console.error("FETCH ERROR:", err));
}, []);

  return (
    <>
      <GradientBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <Heading as="h1" className="mb-8">
              Explore Our Latest Tracks
            </Heading>

            <Button size="lg">Library Loaded</Button>
          </div>

          {/* Music Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tracks.length === 0 && (
              <p className="text-center text-gray-400 col-span-4">
                Loading music...
              </p>
            )}

            {tracks.map((track: any) => (
              <div
                key={track.id}
                className="group p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 hover:border-black/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Cover Image */}
                {track.cover_url ? (
                  <img
                    src={track.cover_url}
                    alt={track.title}
                    className="rounded-xl mb-4 w-full h-40 object-cover"
                  />
                ) : (
                  <div className="h-40 mb-4 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                    No Cover
                  </div>
                )}

                {/* Track Title */}
                <h3 className="text-xl font-light">{track.title}</h3>

                {/* Artist */}
                <Text size="sm" variant="muted">
                  {track.artist?.name || "Unknown Artist"}
                </Text>

                {/* Audio Player */}
                <audio controls className="w-full mt-4">
                  <source src={track.audio_url} type="audio/wav" />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

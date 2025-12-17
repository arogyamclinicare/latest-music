"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Loader2 } from "lucide-react";

// Track data with pre-defined durations (best practice - no need to load metadata)
const tracks = [
  {
    id: 1,
    title: "MONTAGEM AURORA",
    artist: "MVRLLIN",
    genre: "Electronic",
    duration: 102, // 1:42
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765968572/MONTAGEM_AURORA_phl1a9.wav",
    cover: "/covers/MVRLLIN_-_MONTAGEM_AURORA_4_fix.jpg",
  },
  {
    id: 2,
    title: "Amusement",
    artist: "Gukbap",
    genre: "Electronic",
    duration: 109, // 1:49
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765970751/gukbap_-_Amusement_jddodz.wav",
    cover: "/covers/AMUSEMENT LOGO COVER ART.png",
  },
  {
    id: 3,
    title: "Energee",
    artist: "Gukbap",
    genre: "Electronic",
    duration: 66, // 1:06
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765971290/gukbap_-_Energee_whoijq.wav",
    cover: "/covers/ENERGEE LOGO COVER ART.png",
  },
  {
    id: 4,
    title: "Japanese Summer",
    artist: "Gukbap",
    genre: "Lo-Fi",
    duration: 151, // 2:31
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765971497/gukbap_-_Japanese_Summer_knw1rq.wav",
    cover: "/covers/JAPANEASE SUMMER LOGO COVER ART.png",
  },
  {
    id: 5,
    title: "Killers Dance",
    artist: "Gukbap",
    genre: "Electronic",
    duration: 88, // 1:28
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765971808/gukbap_-_Killers_Dance_zg1nfw.wav",
    cover: "/covers/KILLERS DANCE LOGO COVER ART.png",
  },
  {
    id: 6,
    title: "Meet Me at the Coffee Shop",
    artist: "Gukbap",
    genre: "Lo-Fi",
    duration: 105, // 1:45
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765972110/gukbap_-_Meet_me_at_the_Coffee_Shop_iyx8ee.wav",
    cover: "/covers/MEET ME AT THE  LOGO COVER ART.png",
  },
  {
    id: 7,
    title: "Nostalgia",
    artist: "Themio",
    genre: "Ambient",
    duration: 84, // 1:24
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765972394/Themio_-_Nostalgia_m0wrdu.wav",
    cover: "/covers/NOSTALGIA LOGO COVER ART.png",
  },
  {
    id: 8,
    title: "Progression",
    artist: "Themio",
    genre: "Electronic",
    duration: 65, // 1:05
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765972715/Themio_-_Progression_wjtvps.wav",
    cover: "/covers/PROGRESSION LOGO COVER ART.png",
  },
  {
    id: 9,
    title: "The Intermission",
    artist: "Themio",
    genre: "Cinematic",
    duration: 278, // 4:38
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765973282/Themio_-_The_Intermission_dzuzjc.wav",
    cover: "/covers/THE INTERMSSION LOGO COVER ART.png",
  },
  {
    id: 10,
    title: "Walking Confidence",
    artist: "Themio",
    genre: "Hip Hop",
    duration: 89, // 1:29
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765973398/Walking_Confidence_rwlrx6.wav",
    cover: "/covers/WALKING CONFIDENCE LOGO COVER ART.png",
  },
];

export default function MusicLibraryPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<{ [key: number]: number }>({});
  const [volume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format time helper
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle play/pause with loading state
  const handlePlayPause = async (trackId: number) => {
    const track = tracks.find(t => t.id === trackId);
    if (!track) return;

    // If clicking same track that's playing, pause it
    if (playingId === trackId && audioRef.current) {
      audioRef.current.pause();
      setPlayingId(null);
      return;
    }

    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Show loading state
    setLoadingId(trackId);
    setPlayingId(null);

    // Create new audio element
    const audio = new Audio(track.audio_url);
    audio.volume = isMuted ? 0 : volume;
    audioRef.current = audio;

    // Set up event listeners
    audio.oncanplay = () => {
      setLoadingId(null);
      setPlayingId(trackId);
      audio.play();
    };

    audio.ontimeupdate = () => {
      setCurrentTime(prev => ({ ...prev, [trackId]: audio.currentTime }));
    };

    audio.onended = () => {
      setPlayingId(null);
      setCurrentTime(prev => ({ ...prev, [trackId]: 0 }));
    };

    audio.onerror = () => {
      setLoadingId(null);
      setPlayingId(null);
    };

    // Start loading
    audio.load();
  };

  // Handle seek
  const handleSeek = (trackId: number, e: React.MouseEvent<HTMLDivElement>) => {
    const track = tracks.find(t => t.id === trackId);
    if (!track || !audioRef.current || playingId !== trackId) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * track.duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(prev => ({ ...prev, [trackId]: newTime }));
  };

  // Handle skip
  const handleSkip = (trackId: number, direction: "back" | "forward") => {
    if (!audioRef.current || playingId !== trackId) return;
    const skipAmount = direction === "back" ? -10 : 10;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime + skipAmount);
  };

  // Handle volume
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? volume : 0;
    }
    setIsMuted(!isMuted);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <div className="mb-12">
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Music Library
            </Heading>
            <Text className="text-lg text-black/60 max-w-2xl">
              Browse our collection of premium tracks. Click play to preview any track.
            </Text>
          </div>

          {/* Tracks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => {
              const isPlaying = playingId === track.id;
              const isLoading = loadingId === track.id;
              const progress = ((currentTime[track.id] || 0) / track.duration) * 100;

              return (
                <div
                  key={track.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100">
                    <Image
                      src={track.cover}
                      alt={track.title}
                      fill
                      className="object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Playing indicator */}
                    {isPlaying && (
                      <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Playing
                      </div>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg truncate">{track.title}</h3>
                    <p className="text-black/60 text-sm">
                      {track.artist} • {track.genre}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div
                        className="h-1.5 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
                        onClick={(e) => handleSeek(track.id, e)}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-black/50">
                        <span>{formatTime(currentTime[track.id] || 0)}</span>
                        <span>{formatTime(track.duration)}</span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => handleSkip(track.id, "back")}
                        className="p-2 text-black/40 hover:text-black transition-colors disabled:opacity-30"
                        disabled={!isPlaying}
                      >
                        <SkipBack className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handlePlayPause(track.id)}
                        className="p-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors flex items-center justify-center"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 ml-0.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleSkip(track.id, "forward")}
                        className="p-2 text-black/40 hover:text-black transition-colors disabled:opacity-30"
                        disabled={!isPlaying}
                      >
                        <SkipForward className="w-5 h-5" />
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 text-black/40 hover:text-black transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

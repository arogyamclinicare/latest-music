"use client";

import * as React from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface MiniPlayerProps {
  title: string;
  artist: string;
  duration: string;
  gradient: string;
  imageSrc?: string;
}

function GlassFilter() {
  const filterId = React.useId();

  return (
    <svg className="hidden">
      <title>Glass Effect Filter</title>
      <defs>
        <filter
          id={filterId}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function TrackCard({ title, artist, duration, gradient }: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const filterId = React.useId();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album Art with Play Button */}
      <div className={cn(
        "relative aspect-square rounded-3xl mb-4 overflow-hidden transition-all duration-300",
        "bg-gradient-to-br",
        gradient,
        "group-hover:scale-105"
      )}>
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        {/* Play button overlay */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isHovered ? "bg-black/20" : "bg-black/0"
        )}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
              "w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg",
              isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0"
            )}
          >
            {isPlaying ? (
              <Pause className="size-7 text-black" />
            ) : (
              <Play className="size-7 text-black ml-1" />
            )}
          </button>
        </div>

        <GlassFilter />
      </div>

      {/* Track Info with Liquid Glass Effect */}
      <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-[2px] border border-black/10 p-4">
        {/* Glass shadow effect */}
        <div className="absolute inset-0 shadow-[inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.1),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.1),inset_0_0_6px_6px_rgba(0,0,0,0.05)]" />
        
        <div className="relative z-10">
          <h3 className="text-lg font-medium mb-1 truncate">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-black/60">{artist}</p>
            <span className="text-xs text-black/40">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Volume2,
  Repeat,
  Shuffle,
} from "lucide-react";

// Liquid Glass Card Variants
const liquidGlassCardVariants = cva(
  "relative overflow-hidden rounded-3xl transition-all duration-500 ease-out",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10",
        primary:
          "bg-primary/10 border border-primary/20 dark:border-primary/30",
        destructive:
          "bg-destructive/10 border border-destructive/20 dark:border-destructive/30",
        secondary:
          "bg-secondary/10 border border-secondary/20 dark:border-secondary/30",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        default: "hover:bg-white/15 dark:hover:bg-black/15",
        none: "",
        glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default",
    },
  }
);

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof liquidGlassCardVariants> {
  asChild?: boolean;
  glassEffect?: boolean;
}

const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  (
    {
      className,
      variant,
      size,
      hover,
      asChild = false,
      glassEffect = true,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(
          liquidGlassCardVariants({ variant, size, hover }),
          glassEffect && "backdrop-blur-xl",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Liquid distortion effect */}
        {glassEffect && (
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <defs>
                <filter id="liquid-glass">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.01"
                    numOctaves="3"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="5"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
            </svg>
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"
              style={{ filter: "url(#liquid-glass)" }}
            />
          </div>
        )}

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </Comp>
    );
  }
);
LiquidGlassCard.displayName = "LiquidGlassCard";

// Liquid Button Variants
const liquidButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-white/20 dark:bg-white/10 text-foreground hover:bg-white/30 dark:hover:bg-white/20 border border-white/30 dark:border-white/20",
        destructive:
          "bg-destructive/20 text-destructive-foreground hover:bg-destructive/30 border border-destructive/30",
        outline:
          "border border-white/30 dark:border-white/20 bg-transparent hover:bg-white/10",
        secondary:
          "bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 border border-secondary/30",
        ghost: "hover:bg-white/10 dark:hover:bg-white/5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6",
        xl: "h-14 px-8 text-base",
        xxl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
LiquidButton.displayName = "LiquidButton";

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-4 mb-4", className)}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 dark:bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/20">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="text-lg font-semibold text-foreground truncate">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

// Card Content Component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props} />;
});
CardContent.displayName = "CardContent";

// Music Player / Notification Center Component
function NotificationCenter() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(102); // 1:42
  const [isShuffled, setIsShuffled] = React.useState(false);
  const [isRepeating, setIsRepeating] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const track = {
    title: "MONTAGEM AURORA",
    artist: "MVRLLIN",
    audio_url: "https://res.cloudinary.com/dew8vh4qt/video/upload/v1765968572/MONTAGEM_AURORA_phl1a9.wav",
    cover: "/covers/MVRLLIN_-_MONTAGEM_AURORA_4_fix.jpg",
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <LiquidGlassCard
      variant="default"
      size="sm"
      hover="glow"
      className="w-full"
    >
      <audio
        ref={audioRef}
        src={track.audio_url}
        onTimeUpdate={(e) => e.currentTarget && setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => e.currentTarget && setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        loop={isRepeating}
      />

      {/* Album Art & Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={track.cover}
            alt={track.title}
            className="w-full h-full object-cover"
          />
          {/* Playing indicator */}
          <div
            className={cn(
              "absolute inset-0 border border-white/20 rounded-xl",
              isPlaying && "animate-pulse"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-black dark:text-white truncate">
            {track.title}
          </h3>
          <p className="text-xs text-black/60 dark:text-white/60 truncate">
            {track.artist}
          </p>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={cn(
            "p-1.5 rounded-full transition-all duration-300",
            isLiked
              ? "text-red-500 bg-red-500/20"
              : "text-black/40 dark:text-white/40 hover:text-red-400 hover:bg-white/10"
          )}
        >
          <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div 
          className="relative h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg transition-all duration-100"
            style={{ left: `calc(${progress}% - 4px)` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-[10px] text-black/50 dark:text-white/50">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-1">
        <button
          onClick={() => setIsShuffled(!isShuffled)}
          className={cn(
            "p-1.5 rounded-full transition-all duration-300",
            isShuffled
              ? "text-purple-500 bg-purple-500/20"
              : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-white/10"
          )}
        >
          <Shuffle className="w-3 h-3" />
        </button>

        <button 
          onClick={() => audioRef.current && (audioRef.current.currentTime = 0)}
          className="p-2 rounded-full text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>

        <button 
          onClick={() => audioRef.current && (audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration))}
          className="p-2 rounded-full text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsRepeating(!isRepeating)}
          className={cn(
            "p-1.5 rounded-full transition-all duration-300",
            isRepeating
              ? "text-purple-500 bg-purple-500/20"
              : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-white/10"
          )}
        >
          <Repeat className="w-3 h-3" />
        </button>
      </div>
    </LiquidGlassCard>
  );
}

export {
  LiquidGlassCard,
  liquidGlassCardVariants,
  LiquidButton,
  liquidButtonVariants,
  CardHeader,
  CardContent,
  NotificationCenter,
};


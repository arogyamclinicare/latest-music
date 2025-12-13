"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Play, Pause } from "lucide-react";

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
      },
      size: {
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "icon",
    },
  }
);

interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean;
}

function ButtonGlassFilter() {
  const filterId = React.useId();
  return (
    <svg className="hidden">
      <title>Glass Effect Filter</title>
      <defs>
        <filter
          id={filterId}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
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
            scale="70"
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

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const filterId = React.useId();

    return (
      <>
        <Comp
          data-slot="button"
          className={cn("relative", liquidbuttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all" />
          <div
            className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
            style={{ backdropFilter: `url("#${filterId}")` }}
          />
          <div className="pointer-events-none z-10">{children}</div>
          <ButtonGlassFilter />
        </Comp>
      </>
    );
  }
);

LiquidButton.displayName = "LiquidButton";

const cardVariants = cva(
  "relative overflow-hidden rounded-lg transition-all duration-300 group bg-background/20",
  {
    variants: {
      variant: {
        default: "hover:scale-[1.01] text-foreground backdrop-blur-[2px]",
        primary: "bg-primary/5 hover:bg-primary/5 text-foreground backdrop-blur-[2px]",
      },
      size: {
        default: "p-6",
      },
      hover: {
        default: "hover:scale-[1.02]",
        glow: "hover:shadow-lg hover:shadow-primary/20",
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
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  glassEffect?: boolean;
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

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

function CardHeader({ title, subtitle, icon, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)} {...props}>
      <div className="space-y-1.5">
        <h3 className="font-semibold leading-none tracking-tight text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground/80">{subtitle}</p>}
      </div>
      {icon && <div className="text-muted-foreground/70">{icon}</div>}
    </div>
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-6 text-foreground", className)} {...props} />;
}

const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  (
    { className, variant, size, hover, asChild = false, glassEffect = true, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const filterId = React.useId();

    return (
      <Comp
        ref={ref}
        className={cn("relative", cardVariants({ variant, size, hover, className }))}
        {...props}
      >
        <div className="absolute inset-0 z-0 h-full w-full rounded-lg border border-black/5 shadow-[0_0_6px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-all pointer-events-none backdrop-blur-sm" />
        {glassEffect && (
          <div
            className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-lg"
            style={{ backdropFilter: `url("#${filterId}")` }}
          />
        )}
        <div className="relative z-10">{children}</div>
        <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none" />
        {glassEffect && <GlassFilter />}
      </Comp>
    );
  }
);

export { LiquidGlassCard };

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(45);
  const totalDuration = React.useMemo(() => 225, []);

  const formatTime = React.useCallback((timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  const progress = (currentTime / totalDuration) * 100;

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying && currentTime < totalDuration) {
      intervalId = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            clearInterval(intervalId);
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, currentTime, totalDuration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (
    e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const bar = e.currentTarget.parentElement;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    let percent: number;

    if ("clientX" in e) {
      const x = e.clientX - rect.left;
      percent = x / rect.width;
    } else {
      switch (e.key) {
        case "ArrowLeft":
          percent = (currentTime - 5) / totalDuration;
          break;
        case "ArrowRight":
          percent = (currentTime + 5) / totalDuration;
          break;
        default:
          return;
      }
    }

    const newTime = percent * totalDuration;
    setCurrentTime(Math.min(Math.max(0, newTime), totalDuration));
  };

  return (
    <div className="w-full">
      <LiquidGlassCard variant="primary" className="relative z-30 p-4" hover="glow">
        <div className="flex items-start gap-2.5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-pink-400 to-orange-400">
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold leading-none tracking-tight text-sm">Now Playing</h3>
            <p className="text-xs text-muted-foreground/80 mt-1">Lofi Beats - Chill Mix</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="space-y-1.5">
            <div
              className="relative h-1 w-full overflow-hidden rounded-full bg-zinc-200/50"
              role="presentation"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-300/20 via-zinc-300/30 to-zinc-300/20" />
              <div
                className="absolute inset-y-0 left-0 flex bg-gradient-to-r from-black/50 via-black/50 to-black/50 transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-white/5" />
              </div>
              <button
                type="button"
                className="absolute inset-0 h-full w-full cursor-pointer"
                onClick={handleSeek}
                onKeyDown={handleSeek}
                aria-label={`Seek to ${formatTime(currentTime)} of ${formatTime(totalDuration)}`}
                aria-valuemin={0}
                aria-valuemax={totalDuration}
                aria-valuenow={currentTime}
                role="slider"
              />
            </div>
            <div className="flex justify-between text-[10px] font-medium">
              <span className="tabular-nums text-zinc-600">{formatTime(currentTime)}</span>
              <span className="tabular-nums text-zinc-600">{formatTime(totalDuration)}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <LiquidButton
              variant="default"
              size="icon"
              className="rounded-full text-zinc-600 hover:text-zinc-900 w-8 h-8"
              aria-label="Previous track"
            >
              <ArrowLeft className="size-3.5" />
            </LiquidButton>
            <LiquidButton
              variant="default"
              size="icon"
              className="rounded-full text-zinc-600 hover:text-zinc-900 w-8 h-8"
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            </LiquidButton>
            <LiquidButton
              variant="default"
              size="icon"
              className="rounded-full text-zinc-600 hover:text-zinc-900 w-8 h-8"
              aria-label="Next track"
            >
              <ArrowRight className="size-3.5" />
            </LiquidButton>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}


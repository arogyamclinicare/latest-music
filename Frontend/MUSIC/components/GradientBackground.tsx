"use client";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8f8f8]">
      {/* Gradient blob - exact from reference */}
      <div
        className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}


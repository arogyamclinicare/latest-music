// Image path constants for easy management
// Update these paths when you add your actual logo files

export const IMAGES = {
  // Main logo
  logo: {
    main: "/images/logos/LOGOPNG.png",
    svg: "/images/logos/logo.svg",
    white: "/images/logos/logo-white.png",
  },
  
  // Creator logos for carousel
  creators: [
    "/images/creators/creator-1.png",
    "/images/creators/creator-2.png",
    "/images/creators/creator-3.png",
    "/images/creators/creator-4.png",
    "/images/creators/creator-5.png",
  ],
  
  // Music covers
  music: {
    featured: [
      "/images/music/featured-1.jpg",
      "/images/music/featured-2.jpg",
      "/images/music/featured-3.jpg",
      "/images/music/featured-4.jpg",
    ],
  },
  
  // Placeholder image (add a placeholder.png to your logos folder)
  placeholder: "/images/logos/placeholder.png",
} as const;

export type ImagePaths = typeof IMAGES;


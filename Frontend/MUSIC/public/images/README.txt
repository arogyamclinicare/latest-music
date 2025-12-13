# Image Assets Folder

This folder contains all images for the Earthquakestudio website.

## Folder Structure

```
public/images/
├── logos/           → Your Earthquakestudio logo files
│   ├── logo.png     (Main logo)
│   ├── logo.svg     (Vector version)
│   └── logo-white.png (White version for dark backgrounds)
│
├── creators/        → Creator/brand logos for carousel
│   ├── creator-1.png
│   ├── creator-2.png
│   └── ...
│
└── music/           → Music covers, artist images
    ├── album-1.jpg
    ├── album-2.jpg
    └── ...
```

## How to Add Images

1. Place your logo files in the appropriate folder
2. Use these paths in your code:
   - Main logo: `/images/logos/logo.png`
   - Creator logos: `/images/creators/creator-1.png`
   - Music covers: `/images/music/album-1.jpg`

## Supported Formats

- PNG (recommended for logos with transparency)
- SVG (best for scalable logos)
- JPG/JPEG (for photos and album covers)
- WebP (modern format, smaller file size)

## Image Guidelines

- **Logos**: Transparent background (PNG or SVG)
- **Creator logos**: Max 200x200px, optimized
- **Music covers**: Square format (500x500px or larger)
- Keep file sizes under 500KB for faster loading


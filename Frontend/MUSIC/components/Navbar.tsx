"use client";

import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Music Library", href: "/music-library" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" prefetch={true} className="flex items-center gap-4 group">
      {/* Logo Image */}
      <div className="relative w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-105">
        <Image
          src={IMAGES.logo.main}
          alt="Earthquakestudio"
          width={56}
          height={56}
          className="object-contain"
          priority
        />
      </div>
      {/* Brand Name */}
      <span className="text-2xl font-light text-black tracking-[0.2em] leading-tight">
        EARTHQUAKE<br />STUDIO
      </span>
    </Link>
  );
}

function NavItem({ link }: { link: NavLink }) {
  return (
    <Link
      href={link.href}
      prefetch={true}
      className="relative px-2 py-2 text-base font-medium text-black/70 transition-colors hover:text-black flex items-center group"
    >
      {link.label}
      {/* Animated underline */}
      <span className="absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ease-out w-0 opacity-0 group-hover:w-full group-hover:opacity-100" />
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="flex items-center justify-between py-4 min-h-[70px]">
          {/* Logo - Aligned to match hero content */}
          <Logo />

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <NavItem 
                key={link.href} 
                link={link}
              />
            ))}
          </div>

          {/* Browse Music Button */}
          <Link 
            href="/music-library"
            className="rounded-full bg-black px-7 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-black/90 hover:scale-105 flex items-center justify-center"
          >
            Browse Music
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

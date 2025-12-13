"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { IMAGES } from "@/lib/images";

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { label: "Discover", href: "/dashboard/discover", icon: "✨" },
  { label: "Music", href: "/dashboard/music", icon: "🎵" },
  { label: "Liked", href: "/dashboard/liked", icon: "❤️" },
  { label: "Contact Support", href: "/dashboard/support", icon: "💬" },
];

export function DashboardNav() {
  const [activeLink, setActiveLink] = useState("/dashboard/discover");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/dashboard/discover" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src={IMAGES.logo.main}
                alt="Earthquakestudio"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-light text-black tracking-wide hidden md:block">
              Earthquakestudio
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeLink === link.href
                    ? "bg-black text-white"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                <span>{link.icon}</span>
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            ))}
            
            {/* User Button */}
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}


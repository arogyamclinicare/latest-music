import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Earthquakestudio - Music for Content Creators",
  description: "UK record label, helping new artists into the spotlight.",
  keywords: ["royalty free music", "content creator music", "background music", "youtube music", "podcast music", "video music"],
  authors: [{ name: "Earthquakestudio" }],
  openGraph: {
    title: "Earthquakestudio - Music for Content Creators",
    description: "UK record label, helping new artists into the spotlight.",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

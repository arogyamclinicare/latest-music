# 🔌 Integration Guide - Phase 2

This guide will help you integrate Clerk (auth), Supabase (database), and Stripe (payments) into your Earthquakestudio platform.

---

## 1️⃣ Clerk Authentication

### Step 1: Create Clerk Account
1. Go to https://clerk.com
2. Sign up and create a new application
3. Choose "Next.js" as your framework

### Step 2: Install Clerk
```bash
npm install @clerk/nextjs
```

### Step 3: Add Environment Variables
Create `.env.local` in your project root:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/login
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/discover
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/discover
```

### Step 4: Wrap Your App
Update `app/layout.tsx`:
```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable} suppressHydrationWarning>
        <body className="font-sans antialiased" suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
```

### Step 5: Replace Login Page
Update `app/login/page.tsx`:
```tsx
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}
```

### Step 6: Protect Dashboard Routes
Create `middleware.ts` in project root:
```tsx
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/music-library",
    "/how-it-works",
    "/faq",
    "/for-artists",
    "/contact",
    "/pricing",
    "/login"
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

### Step 7: Update Dashboard Nav
In `components/DashboardNav.tsx`:
```tsx
import { UserButton, useUser } from "@clerk/nextjs";

export function DashboardNav() {
  const { user } = useUser();
  
  return (
    <nav>
      {/* ... existing nav ... */}
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
```

---

## 2️⃣ Supabase Database

### Step 1: Create Supabase Project
1. Go to https://supabase.com
2. Create a new project
3. Wait for database to be provisioned

### Step 2: Install Supabase
```bash
npm install @supabase/supabase-js
```

### Step 3: Add Environment Variables
Add to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 4: Create Database Tables
In Supabase SQL Editor, run:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Songs table
CREATE TABLE songs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  genre TEXT NOT NULL,
  duration INTEGER NOT NULL,
  file_url TEXT NOT NULL,
  cover_image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Liked Songs table
CREATE TABLE liked_songs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  song_id UUID REFERENCES songs(id) ON DELETE CASCADE,
  liked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, song_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE songs ENABLE ROW LEVEL SECURITY;
ALTER TABLE liked_songs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read all songs" 
  ON songs FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Users can manage their liked songs" 
  ON liked_songs 
  FOR ALL 
  TO authenticated 
  USING (auth.uid()::text = user_id::text);
```

### Step 5: Create Supabase Client
Create `lib/supabase.ts`:
```tsx
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Step 6: Create Storage Bucket
1. In Supabase Dashboard, go to Storage
2. Create bucket named `music`
3. Set to public
4. Upload your MP3 files

### Step 7: Sync Users with Clerk
Create `app/api/webhooks/clerk/route.ts`:
```tsx
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  const evt = wh.verify(body, {
    "svix-id": svix_id!,
    "svix-timestamp": svix_timestamp!,
    "svix-signature": svix_signature!,
  });

  if (evt.type === 'user.created') {
    await supabase.from('users').insert({
      clerk_user_id: evt.data.id,
      email: evt.data.email_addresses[0].email_address,
    });
  }

  return new Response('', { status: 200 });
}
```

---

## 3️⃣ Stripe Payments

### Step 1: Create Stripe Account
1. Go to https://stripe.com
2. Create account and verify
3. Get API keys from Dashboard

### Step 2: Install Stripe
```bash
npm install stripe @stripe/stripe-js
npm install -D @stripe/react-stripe-js
```

### Step 3: Add Environment Variables
Add to `.env.local`:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

### Step 4: Create Stripe Products
In Stripe Dashboard, create:
- **Creator Plan**: $15/month or $144/year
- **Studio Plan**: $49/month or $468/year

### Step 5: Create Checkout Session
Create `app/api/checkout/route.ts`:
```tsx
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  const { userId } = auth();
  const { priceId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard/discover?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    client_reference_id: userId,
  });

  return Response.json({ sessionId: session.id });
}
```

### Step 6: Update Pricing Page
In `app/pricing/page.tsx`, add checkout button:
```tsx
const handleCheckout = async (priceId: string) => {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({ priceId }),
  });
  const { sessionId } = await res.json();
  
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  await stripe?.redirectToCheckout({ sessionId });
};
```

---

## 4️⃣ Music Player Implementation

### Install Audio Library
```bash
npm install wavesurfer.js
```

### Create Music Player Component
Create `components/MusicPlayer.tsx`:
```tsx
"use client";

import { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export function MusicPlayer({ url }: { url: string }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!waveformRef.current) return;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#000',
      progressColor: '#666',
      height: 80,
    });

    ws.load(url);
    setWavesurfer(ws);

    return () => ws.destroy();
  }, [url]);

  const handlePlayPause = () => {
    wavesurfer?.playPause();
    setPlaying(!playing);
  };

  return (
    <div className="space-y-4">
      <div ref={waveformRef} />
      <button onClick={handlePlayPause}>
        {playing ? '⏸️ Pause' : '▶️ Play'}
      </button>
    </div>
  );
}
```

---

## 5️⃣ Environment Variables Summary

Create `.env.local` with all keys:
```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# App
NEXT_PUBLIC_URL=http://localhost:3000
```

---

## 6️⃣ Deployment to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Import your GitHub repository
3. Add all environment variables
4. Deploy!

### Step 3: Update URLs
After deployment, update:
- Clerk: Add production domain to allowed origins
- Stripe: Add production webhook endpoint
- Supabase: Add production domain to allowed origins

---

## 📚 Additional Resources

- [Clerk Docs](https://clerk.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

## 🎯 Testing Checklist

After integration:
- [ ] Users can sign up with Google
- [ ] Users can sign up with email
- [ ] Dashboard routes are protected
- [ ] User data syncs to Supabase
- [ ] Songs display from database
- [ ] Liked songs save/delete works
- [ ] Stripe checkout redirects correctly
- [ ] Webhooks receive events
- [ ] Music player plays audio
- [ ] Downloads work
- [ ] Logout works

---

**Need help?** All the structure is ready. Just follow these steps in order and you'll have a fully functional music platform! 🚀


# 🧭 Site Navigation Map

## Public Pages (Before Login)

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `/` | Hero, value prop, stats, CTAs |
| **About Us** | `/about` | Company story, mission, values |
| **Music Library** | `/music-library` | Genre preview, track counts |
| **How It Works** | `/how-it-works` | 4-step process explanation |
| **FAQ** | `/faq` | Common questions (accordion) |
| **For Artists** | `/for-artists` | Artist info, waitlist |
| **Contact** | `/contact` | Contact form |
| **Pricing** | `/pricing` | 3 tiers, monthly/annual toggle |
| **Login** | `/login` | Auth page (Clerk ready) |

## Authenticated Pages (After Login)

| Page | URL | Purpose |
|------|-----|---------|
| **Discover** | `/dashboard/discover` | Curated collections |
| **Music** | `/dashboard/music` | Full library + player |
| **Liked** | `/dashboard/liked` | Saved favorite tracks |
| **Support** | `/dashboard/support` | Contact support form |
| **Logout** | (nav link) | Returns to `/` |

---

## Quick Start Guide

### To Run Dev Server:
```bash
npm install
npm run dev
```
Visit: `http://localhost:3000`

### To Test Navigation:
1. Start on homepage (`/`)
2. Click navbar links to explore
3. Click "Login" to see auth page
4. Navigate to `/dashboard/discover` to see authenticated layout

### To Add Your Logo:
1. Place logo in `public/images/logos/`
2. Update path in `lib/images.ts`
3. Logo auto-updates everywhere

---

## Component Usage

### Import Button:
```tsx
import { Button } from "@/components/ui/Button";
<Button variant="primary" size="lg">Click Me</Button>
```

### Import Typography:
```tsx
import { Heading, Text } from "@/components/ui/Typography";
<Heading as="h1">Title</Heading>
<Text size="lg" variant="muted">Body text</Text>
```

### Import Animations:
```tsx
import { FadeIn } from "@/components/ui/Animations";
<FadeIn delay={0.2}>
  <div>Content fades in</div>
</FadeIn>
```

---

## Color Reference

- `text-black` - Primary text
- `text-black/70` - Secondary text
- `text-black/60` - Muted text
- `text-black/40` - Light text
- `bg-black` - Primary buttons
- `bg-white/50` - Cards/surfaces
- `border-black/10` - Subtle borders
- `border-black/20` - Hover borders

---

## Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

All pages are mobile-first and fully responsive!


# 🚀 Deployment Guide - Earthquakestudio

## ✅ Pre-Deployment Checklist

### 1. Environment Variables
Make sure you have these set in your deployment platform (Vercel/Netlify):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=https://your-clerk-frontend-api
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard/discover
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard/discover
```

### 2. Build Test
Run locally to ensure build works:
```bash
npm run build
npm run start
```

### 3. Clerk Dashboard Configuration
1. Go to https://dashboard.clerk.com
2. Navigate to **Paths** section
3. Add your production domain to allowed origins
4. Update sign-in/sign-up URLs if needed

---

## 📦 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Click **"New Project"**
3. Import your GitHub repository
4. Add all environment variables from `.env.local.example`
5. Click **"Deploy"**

### Step 3: Update Clerk Settings
After deployment, update Clerk Dashboard:
- Add your Vercel domain (e.g., `your-app.vercel.app`) to allowed origins
- Update redirect URLs if using custom domain

---

## 🌐 Deploy to Other Platforms

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Self-Hosted
1. Run `npm run build`
2. Run `npm run start`
3. Configure reverse proxy (nginx/Apache)
4. Set up SSL certificate

---

## 🔍 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works instantly
- [ ] Clerk authentication works
- [ ] Images load properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All links work
- [ ] Forms submit (if backend connected)

---

## 🐛 Troubleshooting

### Build Fails
- Check TypeScript errors: `npm run build`
- Verify all dependencies installed: `npm install`
- Check environment variables are set

### Clerk Not Working
- Verify environment variables in deployment platform
- Check Clerk Dashboard for domain whitelist
- Verify API keys are correct

### Images Not Loading
- Check image paths in `lib/images.ts`
- Verify images exist in `public/images/`
- Check Next.js image optimization settings

---

## 📊 Performance

The site is optimized for:
- ✅ Fast page loads (< 2s)
- ✅ Instant navigation
- ✅ Optimized images
- ✅ Code splitting
- ✅ Production minification

---

## 🔐 Security

- ✅ Environment variables secured
- ✅ CSP headers configured
- ✅ Clerk authentication enabled
- ✅ Protected routes working

---

## 📝 Notes

- Console.log statements are automatically removed in production builds
- All animations are optimized for performance
- Code splitting is enabled for faster loads
- Images are optimized with Next.js Image component


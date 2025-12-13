# Push to GitHub - Quick Guide

## Step 1: Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Music Studio Deploy"
4. Select scope: **repo** (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

## Step 2: Push Using Token
Run this command:
```bash
git push -u origin main
```

When prompted:
- **Username**: `arogyamclinicare`
- **Password**: Paste your token (NOT your GitHub password)

---

## Alternative: Use Vercel Dashboard
1. Go to https://vercel.com
2. Click "New Project"
3. Import from GitHub
4. Select `arogyamclinicare/music`
5. Vercel will handle the connection automatically















# 三代目 文治 — Sandaime Bunji

Official website for **Sandaime Bunji Gyutan & Oden Izakaya**, Millenia Walk, Singapore.

Built with **Next.js 16 + TypeScript + Tailwind CSS**, ready for Vercel deployment.

---

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Playfair Display & Inter (Google Fonts)
- next/image for optimized images

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import `tttkadoya1029-blip/Sandaime_Bunji`
4. Leave all settings as default → **Deploy**

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Build & Type Check

```bash
npm run build    # production build
npm run lint     # ESLint
```

---

## Project Structure

```
sandaime-bunji/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Main page (all sections)
│   └── globals.css       # Global styles & CSS variables
├── components/
│   ├── Navigation.tsx    # Sticky header with mobile menu
│   ├── Hero.tsx          # Full-screen hero with CTAs
│   ├── About.tsx         # Restaurant story section
│   ├── FeaturedMenu.tsx  # 6-item featured dishes grid
│   ├── OmakaseCourse.tsx # 3-course omakase cards
│   ├── MenuSections.tsx  # Beef tongue / skewers / yakitori
│   ├── OdenSection.tsx   # Oden with à la carte items
│   ├── Gallery.tsx       # Photo gallery grid
│   ├── Location.tsx      # Map + contact + CTA buttons
│   └── Footer.tsx        # Footer
└── public/
    └── images/           # All restaurant photos
```

---

## Key Links (update in components as needed)

| Purpose | URL |
|---|---|
| Reservation | `https://www.tablecheck.com/en/shops/sandaime-bunji/reserve` |
| Google Map | `https://maps.google.com/?q=Sandaime+Bunji+Millenia+Walk+Singapore` |
| Phone | `+65 6509 3480` |

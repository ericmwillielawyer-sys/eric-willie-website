# Eric M. Willie, P.C. — Website Deployment Package

**Domain:** williedasherlaw.net  
**Stack:** Next.js 15 + React 19 on Vercel  
**Pages:** 20 (15 service pages + home + about + reviews + contact + blog)  
**Content:** ~19,600 words, 121 sections, 163 FAQs across service pages

---

## Quick Deploy (5 minutes)

### Step 1: Push to GitHub
```bash
# From this directory:
git init
git add .
git commit -m "Initial deploy — Eric M. Willie website"
git remote add origin https://github.com/YOUR_USERNAME/eric-willie-law.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Wait ~60 seconds for build to complete

### Step 3: Add Custom Domain
1. In Vercel dashboard → **Settings** → **Domains**
2. Add: `williedasherlaw.net`
3. Add: `www.williedasherlaw.net`

### Step 4: Update DNS Records
At your domain registrar (GoDaddy, Namecheap, etc.):

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 76.76.21.21              |
| CNAME | www  | cname.vercel-dns.com     |

Wait 5-30 minutes for DNS propagation.

### Step 5: Submit Sitemap to Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.williedasherlaw.net`
3. Verify ownership (HTML tag or DNS)
4. Go to **Sitemaps** → Submit: `https://www.williedasherlaw.net/sitemap.xml`

---

## Project Structure

```
eric-willie-nextjs/
├── app/
│   ├── [[...slug]]/
│   │   └── page.jsx          # Catch-all route — handles ALL pages
│   ├── layout.jsx             # Root layout — global meta, fonts
│   ├── globals.css            # Base styles
│   ├── sitemap.js             # Dynamic sitemap (auto-generates /sitemap.xml)
│   └── robots.js              # Robots.txt generator
├── components/
│   └── Website.jsx            # Full site — ALL components & content (~2,300 lines)
├── lib/
│   └── seo.js                 # Per-page metadata, schema config, URL definitions
├── public/
│   └── images/
│       ├── headshot.jpg       # Eric's headshot (27KB)
│       ├── courthouse.jpg     # Austin courthouse (53KB)
│       ├── icon-white.png     # Logo icon white (5KB)
│       └── icon-color.png     # Logo icon color (6KB)
├── next.config.js             # 301 redirects (32 rules) + security headers
├── vercel.json                # Region (iad1), HSTS, image caching
├── package.json               # Next.js 15, React 19
├── .gitignore                 # Standard Next.js ignores
└── README.md                  # This file
```

---

## How It Works

This is a **single-page application rendered via Next.js catch-all routing**.

- `app/[[...slug]]/page.jsx` catches every URL
- It generates proper SEO metadata per page (title, description, canonical, OG tags)
- It injects JSON-LD schema (Attorney on homepage, LegalService on service pages)
- It renders `<Website initialPage={path} />` which handles all client-side routing
- `generateStaticParams()` pre-renders all 20 pages at build time for SEO

This architecture gives you:
- **Full SEO:** Each page has unique metadata, canonical URL, and schema
- **Fast navigation:** Client-side routing after initial load (no page reloads)
- **Static generation:** All pages pre-rendered at build time
- **Zero API calls:** All content is embedded in the component

---

## URL Structure (20 pages)

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/austin-divorce-lawyer` | Divorce |
| `/austin-child-custody-lawyer` | Child Custody |
| `/austin-child-support-lawyer` | Child Support |
| `/austin-military-divorce-lawyer` | Military Divorce |
| `/austin-lgbtq-divorce-lawyer` | LGBTQ Divorce |
| `/high-net-worth-divorce-austin` | High Net Worth Divorce |
| `/austin-property-division-lawyer` | Property Division |
| `/alimony-lawyer-austin-texas` | Alimony / Spousal Support |
| `/austin-collaborative-divorce-lawyer` | Collaborative & Uncontested Divorce |
| `/austin-adoption-lawyer` | Adoption |
| `/austin-domestic-violence-lawyer` | Domestic Violence & Protective Orders |
| `/austin-paternity-lawyer` | Paternity & Father's Rights |
| `/austin-grandparent-rights-lawyer` | Grandparent Rights |
| `/austin-family-law-mediation` | Mediation |
| `/austin-custody-modification-lawyer` | Modification & Enforcement |
| `/about-eric-willie` | About Eric |
| `/austin-divorce-lawyer-reviews` | Reviews |
| `/contact-austin-family-lawyer` | Contact |
| `/austin-family-law-blog` | Blog |

---

## 301 Redirects (32 rules)

All old URLs permanently redirect to new SEO-optimized URLs. This preserves any existing link equity from Google and prevents 404 errors. Redirects are configured in `next.config.js`.

Three categories:
1. **SEO slug changes** (3 rules): spousal-support → alimony, high-net-worth shortened, client-reviews → divorce-lawyer-reviews
2. **Original short slugs** (17 rules): /divorce → /austin-divorce-lawyer, etc.
3. **Legacy site paths** (12 rules): /attorneys.html → /about-eric-willie, etc.

---

## SEO Features

- **Unique metadata** per page (title, description, canonical, OG)
- **JSON-LD schema** — Attorney (homepage), LegalService (15 service pages)
- **Dynamic sitemap** with priority weighting (1.0 homepage, 0.95 core services, 0.8 others)
- **Robots.txt** allowing all crawlers, blocking /api/ and /_next/
- **32 permanent 301 redirects** preserving link equity
- **Security headers** — HSTS, X-Frame-Options DENY, nosniff, strict referrer
- **AVIF/WebP** image optimization
- **Pre-rendered static pages** for fastest possible load time

---

## Post-Deploy Checklist

- [ ] Verify all 20 pages load correctly
- [ ] Test all 32 redirects (e.g., visit /divorce → should 301 to /austin-divorce-lawyer)
- [ ] Check /sitemap.xml renders with all 20 URLs
- [ ] Check /robots.txt renders correctly
- [ ] Submit sitemap to Google Search Console
- [ ] Verify SSL certificate is active (green lock)
- [ ] Test mobile responsiveness on phone
- [ ] Update Google Business Profile website URL if changed
- [ ] Set up Google Analytics or Plausible
- [ ] Set up CallRail or call tracking
- [ ] Replace form submission with real backend (GHL webhook, etc.)
- [ ] Replace Google Maps embed with real API key
- [ ] Update `YOUR_GOOGLE_VERIFICATION_CODE` in layout.jsx
- [ ] Connect chatbot to real backend if desired

---

## Phone Numbers & Contact

- **Main:** (512) 478-0834
- **Address:** 3755 S Capital of Texas Hwy #295, Austin, TX 78704
- **Hours:** 6:00 AM - 10:00 PM, 7 days/week
- **Google Reviews:** 4.8 stars, 198 reviews

---

*Built by PowerFrame AI — March 2026*

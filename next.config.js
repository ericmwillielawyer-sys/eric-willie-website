/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permanent 301 redirects — old URLs → new SEO-optimized URLs
  async redirects() {
    return [
      // ── Changed URL slugs (from this SEO rebuild) ──
      { source: "/austin-spousal-support-lawyer", destination: "/alimony-lawyer-austin-texas", permanent: true },
      { source: "/austin-high-net-worth-divorce-lawyer", destination: "/high-net-worth-divorce-austin", permanent: true },
      { source: "/client-reviews", destination: "/austin-divorce-lawyer-reviews", permanent: true },

      // ── Original short slugs (from initial site build) ──
      { source: "/divorce", destination: "/austin-divorce-lawyer", permanent: true },
      { source: "/custody", destination: "/austin-child-custody-lawyer", permanent: true },
      { source: "/support", destination: "/austin-child-support-lawyer", permanent: true },
      { source: "/military-divorce", destination: "/austin-military-divorce-lawyer", permanent: true },
      { source: "/lgbtq-divorce", destination: "/austin-lgbtq-divorce-lawyer", permanent: true },
      { source: "/high-net-worth", destination: "/high-net-worth-divorce-austin", permanent: true },
      { source: "/property-division", destination: "/austin-property-division-lawyer", permanent: true },
      { source: "/spousal-support", destination: "/alimony-lawyer-austin-texas", permanent: true },
      { source: "/collaborative-divorce", destination: "/austin-collaborative-divorce-lawyer", permanent: true },
      { source: "/adoption", destination: "/austin-adoption-lawyer", permanent: true },
      { source: "/domestic-violence", destination: "/austin-domestic-violence-lawyer", permanent: true },
      { source: "/paternity", destination: "/austin-paternity-lawyer", permanent: true },
      { source: "/grandparent-rights", destination: "/austin-grandparent-rights-lawyer", permanent: true },
      { source: "/mediation", destination: "/austin-family-law-mediation", permanent: true },
      { source: "/enforcement-modification", destination: "/austin-custody-modification-lawyer", permanent: true },
      { source: "/about", destination: "/about-eric-willie", permanent: true },
      { source: "/reviews", destination: "/austin-divorce-lawyer-reviews", permanent: true },
      { source: "/contact", destination: "/contact-austin-family-lawyer", permanent: true },
      { source: "/blog", destination: "/austin-family-law-blog", permanent: true },

      // ── Legacy williedasherlaw.net paths (from old site) ──
      { source: "/attorneys.html", destination: "/about-eric-willie", permanent: true },
      { source: "/attorneys", destination: "/about-eric-willie", permanent: true },
      { source: "/practice-areas.html", destination: "/austin-divorce-lawyer", permanent: true },
      { source: "/practice-areas", destination: "/austin-divorce-lawyer", permanent: true },
      { source: "/family-law.html", destination: "/austin-divorce-lawyer", permanent: true },
      { source: "/family-law", destination: "/austin-divorce-lawyer", permanent: true },
      { source: "/contact-us.html", destination: "/contact-austin-family-lawyer", permanent: true },
      { source: "/contact-us", destination: "/contact-austin-family-lawyer", permanent: true },
      { source: "/testimonials.html", destination: "/austin-divorce-lawyer-reviews", permanent: true },
      { source: "/testimonials", destination: "/austin-divorce-lawyer-reviews", permanent: true },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Trailing slash consistency
  trailingSlash: false,

  // Powered-by header removal
  poweredByHeader: false,
};

module.exports = nextConfig;

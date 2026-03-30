import { getPageSeo, getPath, ALL_PAGES, DOMAIN, PHONE, FIRM } from "@/lib/seo";
import { PAGE_FAQS } from "@/lib/faqs";
import Website from "@/components/Website";

// Generate static params for all known pages
export async function generateStaticParams() {
  return ALL_PAGES.map((path) => ({
    slug: path === "/" ? [] : path.slice(1).split("/"),
  }));
}

// Dynamic SEO metadata per page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = getPageSeo(slug);
  const path = getPath(slug);
  const url = `${DOMAIN}${path}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: "website",
      siteName: FIRM,
      images: [{ url: `${DOMAIN}/images/headshot.jpg`, width: 400, height: 500, alt: "Eric M. Willie, Austin Family Law Attorney" }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: { index: true, follow: true },
  };
}

// Build all JSON-LD schemas for the page
function buildSchemas(seo, path) {
  const url = `${DOMAIN}${path}`;
  const schemas = [];

  // ── ATTORNEY SCHEMA (homepage) ──
  if (path === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Attorney",
      "name": FIRM,
      "url": DOMAIN,
      "telephone": "+15124780834",
      "image": `${DOMAIN}/images/headshot.jpg`,
      "description": "Experienced Austin family law attorney with 20+ years. Divorce, custody, child support, military divorce, adoption. 4.8 stars, 198 Google reviews.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3755 S Capital of Texas Hwy #295",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78704",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.2562,
        "longitude": -97.8008
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "06:00",
        "closes": "22:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "198",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Austin" },
        { "@type": "AdministrativeArea", "name": "Travis County" },
        { "@type": "AdministrativeArea", "name": "Williamson County" },
        { "@type": "AdministrativeArea", "name": "Hays County" },
        { "@type": "AdministrativeArea", "name": "Bastrop County" }
      ],
      "knowsAbout": [
        "Divorce", "Child Custody", "Child Support", "Military Divorce",
        "LGBTQ Divorce", "High Net Worth Divorce", "Property Division",
        "Alimony", "Adoption", "Domestic Violence", "Protective Orders",
        "Paternity", "Father's Rights", "Grandparent Rights", "Mediation"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Family Law Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Divorce" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Child Custody" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Child Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Military Divorce" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adoption" } }
        ]
      },
      "priceRange": "$$$$",
      "sameAs": [
        "https://www.williedasherlaw.net",
        "https://www.google.com/maps/place/Eric+M.+Willie,+P.C.",
        "https://www.avvo.com/attorneys/78735-tx-eric-willie-84906.html",
        "https://www.yelp.com/biz/eric-m-willie-austin"
      ]
    });
  }

  // ── LEGALSERVICE SCHEMA (service pages) ──
  if (seo.schema === "LegalService") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": seo.service ? `${seo.service} — ${FIRM}` : seo.title,
      "description": seo.description,
      "url": url,
      "provider": {
        "@type": "Attorney",
        "name": FIRM,
        "telephone": "+15124780834",
        "image": `${DOMAIN}/images/headshot.jpg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3755 S Capital of Texas Hwy #295",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78704"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "198"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Austin" },
        { "@type": "AdministrativeArea", "name": "Travis County" }
      ],
      "serviceType": seo.service || "Family Law"
    });
  }

  // ── FAQPAGE SCHEMA (service pages with FAQs) ──
  const faqs = PAGE_FAQS[path];
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  // ── BREADCRUMBLIST SCHEMA (all pages except homepage) ──
  if (path !== "/") {
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": DOMAIN
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": seo.service || seo.title.split(" — ")[0].split(" | ")[0],
          "item": url
        }
      ]
    };
    schemas.push(breadcrumb);
  }

  return schemas;
}

export default async function Page({ params }) {
  const { slug } = await params;
  const path = getPath(slug);
  const seo = getPageSeo(slug);
  const schemas = buildSchemas(seo, path);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Website initialPage={path} />
    </>
  );
}

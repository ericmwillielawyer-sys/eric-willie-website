import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.williedasherlaw.net"),
  title: {
    default: "Austin Divorce Lawyer | Eric M. Willie, P.C.",
    template: "%s | Eric M. Willie, P.C.",
  },
  description: "Experienced Austin family law attorney. Divorce, custody, child support, military divorce. 20+ years. 4.8 stars. Free consultation: (512) 478-0834.",
  icons: {
    icon: "/images/icon-color.png",
    apple: "/images/icon-color.png",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "ai-content-declaration": "Original expert legal content by Eric M. Willie, P.C. — Austin, TX family law attorney with 20+ years experience.",
    "geo.region": "US-TX",
    "geo.placename": "Austin",
    "geo.position": "30.2562;-97.8008",
    "ICBM": "30.2562, -97.8008",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2740",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

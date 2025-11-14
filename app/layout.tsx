// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import StickyCallBar from "@/components/StickyCallBar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

// Use environment variable if set, fallback to your Google Ads ID
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-17691850954";

export const metadata = {
  title: "Green Choice Excavation",
  description: "Excavation & skid steer services in your local area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-svg.svg" type="image/svg+xml" />

        {/* ------------------ Google tag (gtag.js) ------------------ */}
        <Script
          id="gtag-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* ------------------ Google Ads Phone Snippet ------------------ */}
        <Script id="google-ads-phone-snippet" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17691850954/Ll1kCKiyncAbEMrxkPRB', {
              'phone_conversion_number': '704-290-6688'
            });
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {children}

        {/* Site footer */}
        <Footer />

        {/* Sticky mobile + desktop call bar */}
        <StickyCallBar />

        <Analytics />
      </body>
    </html>
  );
}

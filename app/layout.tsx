// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// Make sure this matches the tag Google showed: AW-17691850954
// You can also set NEXT_PUBLIC_GOOGLE_TAG_ID in Vercel to this same value.
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

        {/* ---- Google tag (gtag.js) ---- */}
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

        {/* ---- Google Ads phone snippet (for forwarding numbers) ----
           After you finish creating the “Calls from website visits”
           conversion, Google will show you a block called “Phone snippet”.

           Copy that EXACT JS and paste it inside the template below,
           replacing ONLY the comment.
        */}
        <Script id="google-ads-phone-snippet" strategy="afterInteractive">
          {`
            // PASTE THE EXACT PHONE SNIPPET FROM GOOGLE HERE
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

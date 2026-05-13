import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://khwsolutions.com"),
  title: {
    default: "KHW Solutions — Premium Synthetic Thatch & Bamboo Catalogue",
    template: "%s | KHW Solutions",
  },
  description:
    "Asia's most authentic synthetic thatch roofing and bamboo products. Palm Thatch, Reed Thatch, Straw Thatch, Bamboo Rolls, Mats, Poles, Panels, and Fences. TUV SUD certified. 20-year warranty.",
  keywords: "synthetic thatch, bamboo, palm thatch, reed thatch, KHW Solutions, Bangalore, India",
  alternates: {
    canonical: "https://khwsolutions.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://khwsolutions.com",
    siteName: "KHW Solutions",
    title: "KHW Solutions — Premium Synthetic Thatch & Bamboo Catalogue",
    description:
      "Asia's most authentic synthetic thatch roofing and bamboo products. Palm Thatch, Reed Thatch, Straw Thatch, Bamboo Rolls, Mats, Poles, Panels, and Fences. TUV SUD certified. 20-year warranty.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KHW Solutions — Synthetic Thatch & Bamboo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KHW Solutions — Premium Synthetic Thatch & Bamboo",
    description:
      "Asia's most authentic synthetic thatch roofing and bamboo products. TUV SUD certified. 20-year warranty.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Raj | ESG & Sustainability Reporting Professional",
  description:
    "Senior ESG & Sustainability professional specializing in CSRD, EU Taxonomy, Power BI dashboards, Financial Controlling, and sustainability reporting frameworks.",
  keywords: [
    "ESG", "Sustainability Reporting", "CSRD", "EU Taxonomy",
    "Power BI", "Financial Controlling", "ESRS", "SAP", "Carbon Reporting",
  ],
  authors: [{ name: "Akhil Raj" }],
  creator: "Akhil Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Akhil Raj | ESG & Sustainability Reporting Professional",
    description:
      "Senior ESG & Sustainability professional specializing in CSRD, EU Taxonomy, Power BI dashboards, and Financial Controlling.",
    siteName: "Akhil Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Raj | ESG & Sustainability Reporting Professional",
    description:
      "Senior ESG & Sustainability professional specializing in CSRD, EU Taxonomy, and Power BI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}

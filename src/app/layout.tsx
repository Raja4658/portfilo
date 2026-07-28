import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajam.dev"),
  title: {
    default: "Raja M — AI Engineer & Full Stack Developer",
    template: "%s | Raja M",
  },
  description:
    "Raja M is an AI Engineer and Full Stack Developer from Coimbatore, India. Building intelligent software powered by AI, Next.js, React, and cloud technologies.",
  keywords: [
    "Raja M",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Machine Learning",
    "OpenAI",
    "Gemini AI",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Coimbatore",
    "India",
  ],
  authors: [{ name: "Raja M", url: "https://rajam.dev" }],
  creator: "Raja M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajam.dev",
    title: "Raja M — AI Engineer & Full Stack Developer",
    description:
      "Building intelligent software powered by AI, Next.js, React, and cloud technologies.",
    siteName: "Raja M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja M — AI Engineer & Full Stack Developer",
    description: "Building intelligent software powered by AI and modern web technologies.",
    creator: "@rajam",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#050816" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

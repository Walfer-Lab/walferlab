import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

export const metadata: Metadata = {
  title: 'Walfer Lab | Digital Innovation Agency',
  description: 'Walfer Lab is a forward-thinking digital agency specializing in cutting-edge web development, design, and innovative digital solutions.',
  keywords: ['digital agency', 'web development', 'Walfer Lab', 'design agency', 'software development', 'UI/UX'],
  authors: [{ name: 'Walfer Lab' }],
  creator: 'Walfer Lab',
  metadataBase: new URL('https://www.walferlab.com'), // Replace with your actual domain
  
  // Open Graph (For LinkedIn, Facebook, Slack previews)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.walferlab.com',
    title: 'Walfer Lab | Digital Innovation Agency',
    description: 'Building cutting-edge digital experiences and innovative solutions.',
    siteName: 'Walfer Lab',
    images: [
      {
        url: '/Logo.png', // Place this image in your public folder (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Walfer Lab Agency Portfolio and Services',
      },
    ],
  },
  
  // Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Walfer Lab | Digital Innovation Agency',
    description: 'Building cutting-edge digital experiences and innovative solutions.',
    images: ['/Logo.png'], // Place in public folder
    creator: '@walferlab', // Replace with your agency handle
  },
  
  // Search Engine Crawling Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Add canonical links to prevent duplicate content issues
  alternates: {
    canonical: 'https://www.walferlab.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&f[]=satoshi@400,500,700,900&f[]=switzer@700,800,801,900,901&f[]=general-sans@200,300,400,500,600,700,1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col scrollbar-none">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

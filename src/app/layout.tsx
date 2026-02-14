import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nalar — AI Code Architect",
    template: "%s | Nalar",
  },
  description:
    "Rakit logika pemrograman dan arsitektur kode secara instan dengan kecerdasan buatan tingkat lanjut.",
  keywords: [
    "AI Code Generator",
    "Code Architect",
    "Programming AI",
    "Nalar AI",
    "Software Engineering Roadmap",
  ],
  authors: [{ 
    name: "Ghifari Ezra Ramadhan", 
    url: "https://www.ezdev.xyz/"
   }],
  creator: "Ezdev",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nalar-api.com",
    title: "Nalar — AI Code Architect",
    description: "Tingkatkan produktivitas kodingmu dengan arsitektur yang dirakit oleh AI.",
    siteName: "Nalar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nalar AI Code Architect Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalar — AI Code Architect",
    description: "Rakit logika pemrogramanmu lebih cepat.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Icon untuk bookmark iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100 selection:bg-indigo-500/30  custom-scrollbar`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-zinc-900 border border-zinc-800 text-zinc-100",
          }}
        />
      </body>
    </html>
  );
}

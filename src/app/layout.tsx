import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JetPack Service",
  description: "Countdown to the official launch of the JetPack Service on January 1, 2025. Stay updated and be part of the next big thing in cryptocurrency.",
  openGraph: {
    title: "JetPack Service",
    description: "Join us as we count down to the launch of JetPack Service on January 1, 2025. Discover the future of cryptocurrency.",
    url: "https://jetpack.ws/",
    siteName: "JetPack",
    images: [{
      url: "https://jetpack.ws/jetpack.svg", // Adjust URL to the actual image path
      width: 500,
      height: 500,
      alt: "A cute baby astronaut rabbit heralding the launch of JetPack Service",
    },],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JetPack Service",
    description: "Join us for the countdown to the JetPack Service launch on January 1, 2025.",
    images: ["https://jetpack.ws/jetpack.svg"], // Adjust URL to the actual image path
  },
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  {children}
  </body>
  </html>);
}

import React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Oluwatofunmisin Akinwumi | Project Manager & PRINCE2 Practitioner",
  description:
    "Oluwatofunmisin Akinwumi is a PRINCE2 certified Project Manager based in the Germany, specialising in Project Delivery, Risk & Change Control, and Stakeholder Management.",
  keywords: [
    "Oluwatofunmisin Akinwumi",
    "Project Manager",
    "PRINCE2 Practitioner",
    "PRINCE2 Foundation",
    "Project Delivery",
    "Risk and Change Control",
    "Stakeholder Management",
    "Programme Management",
    "UK Project Manager",
    "Remote Project Manager",
  ],
  authors: [
    {
      name: "Oluwatofunmisin Akinwumi",
      url: "mailto:oluwatofunmisin4@gmail.com",
    },
  ],
  creator: "Oluwatofunmisin Akinwumi",
  openGraph: {
    title: "Oluwatofunmisin Akinwumi | Project Manager & PRINCE2 Practitioner",
    description:
      "PRINCE2 Practitioner specialising in Project Delivery, Risk and Change Control, and Stakeholder Management. Based in the Germany.",
    type: "website",
    locale: "en_GB",
    siteName: "Oluwatofunmisin Akinwumi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwatofunmisin Akinwumi | Project Manager",
    description:
      "PRINCE2 Practitioner specialising in Project Delivery, Risk and Change Control, and Stakeholder Management.",
    creator: "@Tofunmiomiremi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${onest.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

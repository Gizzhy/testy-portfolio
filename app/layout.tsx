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
  title: "Oluwatofunmisin Akinwumi | Lawyer, IP & Data Law Student",
  description:
    "Oluwatofunmisin Akinwumi is a qualified lawyer and M.Sc. student in International Studies in Intellectual Property and Data Law at Technische Universität Dresden, with experience in legal research, contract review, compliance, IP law, and legal technology.",

  keywords: [
    "Oluwatofunmisin Akinwumi",
    "Qualified Lawyer",
    "IP Law",
    "Data Law",
    "Intellectual Property Law",
    "Legal Research",
    "Contract Review",
    "Regulatory Compliance",
    "Legal Tech",
    "Legal Technology",
    "NLP Legal Tools",
    "Python Legal Tech",
    "TU Dresden",
    "International Studies in Intellectual Property and Data Law",
    "Lawyer in Germany",
  ],

  authors: [
    {
      name: "Oluwatofunmisin Akinwumi",
      url: "mailto:testimonyakinwumi4@gmail.com",
    },
  ],

  creator: "Oluwatofunmisin Akinwumi",

  openGraph: {
    title: "Oluwatofunmisin Akinwumi | Lawyer, IP & Data Law Student",
    description:
      "Qualified lawyer and M.Sc. student in IP & Data Law, combining legal research, contract experience, compliance knowledge, and legal tech projects.",
    type: "website",
    locale: "en_GB",
    siteName: "Oluwatofunmisin Akinwumi Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Oluwatofunmisin Akinwumi | Lawyer & Legal Tech Enthusiast",
    description:
      "Qualified lawyer focused on IP, data law, legal research, compliance, and legal technology.",
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

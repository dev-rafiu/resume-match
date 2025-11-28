import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeMatch | AI Resume Tailoring Platform",
  description:
    "Upload any resume and job description, then let ResumeMatch tailor your application with AI precision.",
  openGraph: {
    title: "ResumeMatch | AI Resume Tailoring Platform",
    description:
      "Upload any resume and job description, then let ResumeMatch tailor your application with AI precision.",
    url: "https://resume-match-one.vercel.app/",
    siteName: "ResumeMatch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeMatch - AI Resume Tailoring Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeMatch | AI Resume Tailoring Platform",
    description:
      "Upload any resume and job description, then let ResumeMatch tailor your application with AI precision.",
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

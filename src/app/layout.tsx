import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";
import "react-photo-view/dist/react-photo-view.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Global Talent School & College | Quality Education & Modern Facilities",
  description:
    "Global Talent School & College provides a safe, engaging, and modern learning environment for students. Experienced teachers, advanced classrooms, and holistic education to ensure student success.",
  keywords: [
    "school",
    "Global Talent School & College",
    "education",
    "primary school",
    "secondary school",
    "teachers",
    "classrooms",
    "student success",
    "admissions",
    "learning",
  ],
  authors: [{ name: "Global Talent School & College" }],
  openGraph: {
    title:
      "Global Talent School & College | Quality Education & Modern Facilities",
    description:
      "Discover our vibrant classrooms, playgrounds, and school events at Global Talent School & College. Experienced teachers, modern facilities, and holistic education ensure student success.",
    url: "https://www.globaltalentschool.com",
    siteName: "Global Talent School & College",
    images: [
      {
        url: "https://www.globaltalentschool.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global Talent School & College",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Global Talent School & College | Quality Education & Modern Facilities",
    description:
      "Discover our vibrant classrooms, playgrounds, and school events at Global Talent School & College. Experienced teachers, modern facilities, and holistic education ensure student success.",
    images: ["https://www.globaltalentschool.com/images/og-image.jpg"],
    site: "@GlobalTalentSchool",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}

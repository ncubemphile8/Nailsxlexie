import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nailsxlexie | Nail Art & Care in Bulawayo",
  description: "Beautiful nails, thoughtful detail and a little time for you. Discover Nailsxlexie, a nail studio in Bulawayo.",
  metadataBase: new URL("https://nailsxlexie.vercel.app"),
  openGraph: {
    title: "Nailsxlexie — Nails • Beauty • Self Care",
    description: "Your next favourite set starts here.",
    type: "website",
    images: ["/work-01.webp"]
  },
  icons: { icon: "/nailsxlexie-mark.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
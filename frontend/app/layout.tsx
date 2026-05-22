import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Discovery Hub",
  description: "Next.js course listing with Flask validation API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
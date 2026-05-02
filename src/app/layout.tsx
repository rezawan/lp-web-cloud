import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteShell } from "@/components/SiteShell";
import { ThemeInit } from "../components/ThemeInit";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Cloud Host | High-Performance Cloud Hosting",
  description: "Enterprise-grade cloud hosting solutions powered by cutting-edge hardware and a global fiber-optic network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "scroll-smooth", plusJakartaSans.variable)}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeInit />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

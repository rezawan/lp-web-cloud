import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const storageKey = 'theme';
  const root = document.documentElement;

  try {
    const storedTheme = localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark;

    root.classList.toggle('dark', shouldUseDark);
  } catch {
    root.classList.toggle('dark', false);
  }
})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <div className="pt-16 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

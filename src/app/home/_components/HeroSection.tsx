"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";

interface HeroSectionContent {
  badge: string;
  headline: string;
  highlight?: string;
  description: string;
  ctas: Array<{ label: string }>;
  image: {
    src: string;
    alt: string;
  };
}

interface HeroSectionProps {
  content?: HeroSectionContent;
}

const DEFAULT_CONTENT: HeroSectionContent = {
  badge: 'Next-Gen Infrastructure',
  headline: 'Infinite Scalability for the Modern Web',
  highlight: 'Scalability',
  description:
    'Cloud Host provides high-performance cloud solutions engineered for mission-critical applications. Experience 99.99% uptime with global edge connectivity.',
  ctas: [{ label: 'Deploy Your Server Now' }, { label: 'View Pricing' }],
  image: {
    src: '/assets/images/home-hero.png',
    alt: 'Modern server room with glowing blue LED lights on racks, symmetrical perspective, clean high-tech architectural datacenter environment',
  },
};

export function HeroSection({ content = DEFAULT_CONTENT }: HeroSectionProps) {
 
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-200 h-200 bg-blue-200 dark:bg-cyan-500/35 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-purple-200 dark:bg-violet-500/35 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-wider uppercase">
              <Zap className="w-4 h-4" />
              {content.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
              {content.headline}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-semibold rounded-xl bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] transition-transform"
              >
                {content.ctas[0]?.label ?? 'Deploy Your Server Now'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-semibold rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                {content.ctas[1]?.label ?? 'View Pricing'}
              </Button>
            </div>

            {/* Client Logos */}
            <div className="flex items-center gap-6 pt-6 grayscale opacity-60">
              {/* <div className="relative h-6 w-16">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-F9BvUcXJkpdqHaNXzdK2T-PeX5lMkF6p3HY9PAuJtJ_gcRkbg_QDYHuC2QUATdFm-Fz1yHWNqH87zqpzEU_ldIHXXCglw6ioh7w8lJ-ZprijS5Sx3D9OvyZLlHIHd9Ls5ydzIapP39fgus31UN24ilWYVoTnOy0WqfvB1I5u8TVM5tvxZGJZEJfApnfNIja88Pp3y78v03NUnl6akLz370b4HE7L___xICPBcEVQ4CX05E4lDbPME34mYPZ3DE_RyKTxyweX2a9I"
                  alt="Tech company logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-16">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz6vhXbouHTOwMLaBkK2NtP7tutFIeQwY36lDo9rE5LXSRyU6VIPk9CHfypi3Lxd5fim8ye55-DtmRpBUVgR8N2a9flrBl8i59g33NeCRcTz1ptx8Go7RosPlPx3heYXhr2up6WFjR8yPLCmUgivT2ew1k1TbHhYcj1OOceELkjIJ9vFDlKoDRng3nwFVw_uIzN0FFLfHT0U4cx6m0-uHS-nmF10BFpp_AktW-XPAUGnNTYPoFhtgpeJynnF_K05Xc8gmu52NZP9Pf"
                  alt="Software company logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-6 w-16">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNwfRJy_ILWiDTC8bRQilZHttdUSvUXvbwZPUnE9Ey9cTG3EWXbaklI3HaKMTTGLOvYRUGRlGe7nTwVfZSMIx___bL9A-TDWQgK1gvnYPvUevtSWFirMRJoBNNcqncn_636nhtxQmwfl6pNsZKfdnDV7HjALMZPF1Xx1TJHD_ceanYNMs6JZiAHlcRgDtiwJ_5F5IIEZGKzBquJ4Gf6ixUU5AY59xv9mm9xYCU5LYAY3GuAGt3LIU4hQPAlNbKKG5KeOg9OWRA5pfR"
                  alt="Fintech startup logo"
                  fill
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>

          {/* Right Column - Image & Stat Box */}

          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden kinetic-shadow">
              <Image
                className="w-full h-full object-cover rounded-2xl"
                alt={content.image.alt}
                src={content.image.src}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface AboutHeroContent {
  badge: string;
  headline: string;
  description: string;
  ctas: Array<{ label: string }>;
  image: {
    src: string;
    alt: string;
  };
}

interface AboutHeroSectionProps {
  content?: AboutHeroContent;
}

const DEFAULT_CONTENT: AboutHeroContent = {
  badge: 'Established 2014',
  headline: 'Architecting the Digital Future.',
  description:
    'Cloud Host provides high-performance cloud infrastructure designed for reliability, scalability, and extreme speed. We don\'t just host; we empower.',
  ctas: [{ label: 'Our Story' }, { label: 'Global Network' }],
  image: {
    src: '/assets/images/about1.png',
    alt: 'Cloud Infrastructure',
  },
};

export function AboutHeroSection({ content = DEFAULT_CONTENT }: AboutHeroSectionProps) {
  return (
    <section className="relative h-150 flex items-center overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/60 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">
            {content.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
            {content.headline}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-medium mb-10">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-white px-7 text-base font-semibold text-blue-900 shadow-lg shadow-black/20 hover:bg-slate-100"
            >
              {content.ctas[0]?.label ?? 'Our Story'}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-xs hover:bg-white/15"
            >
              {content.ctas[1]?.label ?? 'Global Network'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

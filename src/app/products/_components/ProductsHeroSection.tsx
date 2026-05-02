'use client';

import { Zap } from 'lucide-react';
import Image from 'next/image';

interface ProductsHeroContent {
  headline: string;
  description: string;
  image: { src: string; alt: string };
  floatingBadge: { label: string; value: string };
}

interface ProductsHeroSectionProps {
  content?: ProductsHeroContent;
}

export function ProductsHeroSection({ content }: ProductsHeroSectionProps) {
  const headline = content?.headline ?? 'High-Performance Cloud Infrastructure';
  const description =
    content?.description ??
    'Experience lightning-fast hosting with NVMe storage, enterprise-grade security, and 24/7 expert support designed for the next generation of web applications.';
  const image = content?.image ?? { src: '/assets/images/products1.png', alt: 'Cloud server infrastructure' };
  const floatingBadge = content?.floatingBadge ?? { label: 'NVMe Speed', value: '10x Faster Performance' };

  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-12">
              {description}
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{floatingBadge.label}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{floatingBadge.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

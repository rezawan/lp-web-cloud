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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-200/70 blur-[120px] dark:bg-blue-500/25"></div>
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-200/60 blur-[140px] dark:bg-cyan-500/20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-white/20 dark:from-slate-950/70 dark:to-slate-950/10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-300"></span>
              Enterprise-ready hosting
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              {headline}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-12">
              {description}
            </p>
            {/* <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: '99.99% uptime', value: 'SLA backed' },
                { label: '18 regions', value: 'Global edge' },
                { label: '24/7 support', value: '15 min avg' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div> */}
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

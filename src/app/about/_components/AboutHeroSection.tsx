'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function AboutHeroSection() {
  return (
    <section className="relative h-150 flex items-center overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/assets/images/unamed (4).png"
          alt="Cloud Infrastructure"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/60 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6">
            Established 2014
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
            Architecting the <span className="text-blue-200">Digital Future.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-medium mb-10">
            Cloud Host provides high-performance cloud infrastructure designed for reliability, scalability, and extreme
            speed. We don&apos;t just host; we empower.
          </p>
          <div className="flex gap-4">
            <Button className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-4 text-lg font-bold">
              Our Story
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-bold"
            >
              Global Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

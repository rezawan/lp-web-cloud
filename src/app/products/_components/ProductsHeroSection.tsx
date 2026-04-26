'use client';

import { Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function ProductsHeroSection() {
  const tabs = ['Web Hosting', 'Turbo', 'VPS', 'Enterprise'];

  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              High-Performance <br />
              <span className="text-blue-600 dark:text-blue-400">Cloud Infrastructure</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mb-12">
              Experience lightning-fast hosting with NVMe storage, enterprise-grade security, and 24/7 expert support
              designed for the next generation of web applications.
            </p>

            {/* Tabs */}
            <div className="flex-wrap gap-2 p-1.5 bg-slate-200/50 dark:bg-slate-800 rounded-xl inline-flex border border-slate-300/20 dark:border-slate-700">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    index === 0
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <Image
                src="/assets/images/products1.png"
                alt="Cloud server infrastructure"
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
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">NVMe Speed</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">10x Faster Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

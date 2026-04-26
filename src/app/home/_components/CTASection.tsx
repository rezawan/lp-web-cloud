'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTASectionContent {
  heading: string;
  description: string;
  ctas: Array<{ label: string, href?: string }>;
}

interface CTASectionProps {
  content?: CTASectionContent;
}

const DEFAULT_CONTENT: CTASectionContent = {
  heading: 'Ready to Scale?',
  description: 'Join over 10,000 developers and businesses who trust Cloud Host for their infrastructure needs.',
  ctas: [{ label: 'Create Free Account', href: '/signup' }, { label: 'Contact Sales', href: '/contact' }],
};

export function CTASection({ content = DEFAULT_CONTENT }: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 p-12 text-center text-white shadow-2xl shadow-blue-900/30 lg:p-20">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_45%)]"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
              {content.heading}
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              {content.description}
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-white px-7 text-base font-semibold text-blue-700 shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <Link href={content.ctas[0]?.href ?? '/signup'}>
                  {content.ctas[0]?.label ?? 'Create Free Account'}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/35 bg-white/10 px-7 text-base font-semibold text-white hover:text-white backdrop-blur-xs transition-colors hover:bg-white/20"
              >
                <Link href={content.ctas[1]?.href ?? '/contact'}>
                  {content.ctas[1]?.label ?? 'Contact Sales'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

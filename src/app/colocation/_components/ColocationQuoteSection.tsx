import Link from 'next/link';
import { Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ColocationQuoteContent {
  heading: string;
  description: string;
  cta: {
    label: string;
    href?: string;
  };
}

interface ColocationQuoteSectionProps {
  content: ColocationQuoteContent;
}

export function ColocationQuoteSection({ content }: ColocationQuoteSectionProps) {
  return (
    <section className="bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-emerald-600 to-teal-700 p-10 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-16">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-extrabold md:text-4xl">{content.heading}</h3>
            <p className="mt-4 text-lg text-emerald-50/90">{content.description}</p>
          </div>
          <div className="relative z-10 mt-6 md:mt-0">
            <Button asChild size="lg" className="h-12 rounded-xl bg-white px-6 text-base font-semibold text-emerald-800">
              <Link href={content.cta.href ?? '/contact'}>
                <span className="inline-flex items-center gap-2">
                  <Headset className="h-4 w-4" />
                  {content.cta.label}
                </span>
              </Link>
            </Button>
          </div>
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

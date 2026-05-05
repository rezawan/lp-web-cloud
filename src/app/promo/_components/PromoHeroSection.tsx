import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromoHeroContent {
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
}

interface PromoHeroSectionProps {
  content: PromoHeroContent;
}

export function PromoHeroSection({ content }: PromoHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-8 text-center">
        <span className="inline-flex rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-secondary-fixed">
          {content.badge}
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-on-surface md:text-7xl">
          {content.headline} <span className="text-primary">{content.highlight}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-on-surface-variant md:text-xl">
          {content.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-8 text-base font-semibold text-white shadow-xl shadow-primary/25"
          >
            <Link href={content.ctas[0]?.href ?? '/products'}>{content.ctas[0]?.label ?? 'Explore All Deals'}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-transparent bg-surface-container-lowest px-8 text-base font-semibold text-on-surface shadow-md hover:bg-surface-container"
          >
            <Link href={content.ctas[1]?.href ?? '/contact'}>
              <span className="inline-flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                {content.ctas[1]?.label ?? 'Support Center'}
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 translate-y-1/2 -translate-x-1/4 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}

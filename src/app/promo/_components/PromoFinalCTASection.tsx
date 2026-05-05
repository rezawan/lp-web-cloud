import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromoFinalCTAContent {
  heading: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href?: string };
  secondaryCta: { label: string; href?: string };
  image: { src: string; alt: string };
  statCard: {
    label: string;
    description: string;
  };
}

interface PromoFinalCTASectionProps {
  content: PromoFinalCTAContent;
}

export function PromoFinalCTASection({ content }: PromoFinalCTASectionProps) {
  const heading = content.heading.replace(content.highlight, '').trim();

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-24 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        <h2 className="text-3xl font-extrabold text-on-surface md:text-4xl">
          {heading} <span className="text-primary">{content.highlight}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-on-surface-variant">{content.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button asChild size="lg" className="h-12 rounded-xl bg-on-surface px-8 text-base font-semibold text-white">
            <Link href={content.primaryCta.href ?? '/contact'}>{content.primaryCta.label}</Link>
          </Button>
          <Link href={content.secondaryCta.href ?? '/products'} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
            {content.secondaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="relative lg:col-span-5">
        <div className="aspect-square overflow-hidden rounded-3xl bg-surface-container-high">
          <Image src={content.image.src} alt={content.image.alt} fill className="object-cover" />
        </div>
        <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl border border-outline-variant/10 bg-white p-5 shadow-xl">
          <div className="mb-2 flex items-center gap-2 text-primary">
            <BadgeCheck className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">{content.statCard.label}</span>
          </div>
          <p className="text-xs text-on-surface-variant">{content.statCard.description}</p>
        </div>
      </div>
    </section>
  );
}

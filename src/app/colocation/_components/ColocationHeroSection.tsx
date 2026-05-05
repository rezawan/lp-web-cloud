import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Bolt } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ColocationHeroContent {
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
  startingPrice: {
    label: string;
    price: string;
    suffix: string;
  };
  image: {
    src: string;
    alt: string;
  };
  statCard: {
    label: string;
    value: string;
    icon: string;
  };
}

interface ColocationHeroSectionProps {
  content: ColocationHeroContent;
}

export function ColocationHeroSection({ content }: ColocationHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 -skew-x-12 bg-surface-container-low lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-primary-fixed">
            <BadgeCheck className="h-4 w-4" />
            {content.badge}
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-on-surface md:text-6xl lg:text-7xl">
            {content.headline}
            <span className="block text-primary">{content.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant md:text-xl">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-8 text-base font-semibold text-white shadow-xl shadow-blue-600/25"
            >
              <Link href={content.ctas[0]?.href ?? '/products'}>{content.ctas[0]?.label ?? 'Select Rack Space'}</Link>
            </Button>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-on-surface-variant">{content.startingPrice.label}</span>
              <span className="text-2xl font-extrabold text-primary">
                {content.startingPrice.price} <span className="text-base font-normal text-on-surface-variant">{content.startingPrice.suffix}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image src={content.image.src} alt={content.image.alt} width={560} height={560} className="h-auto w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-xl bg-surface-container-lowest p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Bolt className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{content.statCard.label}</p>
              <p className="text-lg font-bold text-on-surface">{content.statCard.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

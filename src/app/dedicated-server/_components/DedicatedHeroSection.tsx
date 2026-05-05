import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface DedicatedHeroContent {
  badge: string;
  headline: string;
  highlight?: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
  image: {
    src: string;
    alt: string;
  };
}

interface DedicatedHeroSectionProps {
  content: DedicatedHeroContent;
}

export function DedicatedHeroSection({ content }: DedicatedHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:px-12">
        <div className="lg:w-3/5">
          <span className="inline-flex items-center rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-secondary-fixed-variant">
            {content.badge}
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-on-surface lg:text-7xl">
            {content.headline}
            {content.highlight && (
              <span className="block text-primary">{content.highlight}</span>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-surface-variant lg:text-xl">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-7 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              <Link href={content.ctas[0]?.href ?? '/products'}>{content.ctas[0]?.label ?? 'Select Your Server'}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border border-outline-variant bg-surface-container-high px-7 text-base font-semibold text-on-primary-fixed-variant hover:bg-surface-container-highest"
            >
              <Link href={content.ctas[1]?.href ?? '/contact'}>{content.ctas[1]?.label ?? 'Free Consultation'}</Link>
            </Button>
          </div>
        </div>

        <div className="relative lg:w-2/5">
          <div className="absolute -right-16 -top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image src={content.image.src} alt={content.image.alt} width={520} height={520} className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ColocationCTAContent {
  heading: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
}

interface ColocationCTASectionProps {
  content: ColocationCTAContent;
}

export function ColocationCTASection({ content }: ColocationCTASectionProps) {
  return (
    <section className="bg-surface-container-highest py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-on-surface md:text-5xl">{content.heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">{content.description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl bg-linear-to-r from-blue-600 to-blue-800 px-8 text-base font-semibold text-white shadow-xl sm:w-auto"
          >
            <Link href={content.ctas[0]?.href ?? '/products'}>{content.ctas[0]?.label ?? 'Order Now'}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl bg-surface-container-lowest px-8 text-base font-semibold text-primary shadow-md sm:w-auto"
          >
            <Link href={content.ctas[1]?.href ?? '/contact'}>{content.ctas[1]?.label ?? 'Consult with Expert'}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

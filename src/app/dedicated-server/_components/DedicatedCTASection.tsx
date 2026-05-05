import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface DedicatedCTAContent {
  heading: string;
  description: string;
  ctas: Array<{ label: string; href?: string }>;
  backgroundImage: {
    src: string;
    alt: string;
  };
}

interface DedicatedCTASectionProps {
  content: DedicatedCTAContent;
}

export function DedicatedCTASection({ content }: DedicatedCTASectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-primary-container px-6 py-12 text-center lg:px-20 lg:py-20">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={content.backgroundImage.src}
              alt={content.backgroundImage.alt}
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white lg:text-5xl">{content.heading}</h2>
            <p className="mt-6 text-lg text-primary-fixed/90">{content.description}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-white px-8 text-base font-semibold text-primary shadow-xl hover:-translate-y-0.5"
              >
                <Link href={content.ctas[0]?.href ?? '/products'}>{content.ctas[0]?.label ?? 'Select Your Server'}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                <Link href={content.ctas[1]?.href ?? '/products'}>{content.ctas[1]?.label ?? 'View Semi-Dedicated'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

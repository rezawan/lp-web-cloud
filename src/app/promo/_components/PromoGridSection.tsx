import Image from 'next/image';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PromoItem {
  title: string;
  label: string;
  description: string;
  code: string;
  tag: string;
  image: {
    src: string;
    alt: string;
  };
}

interface PromoGridContent {
  items: PromoItem[];
}

interface PromoGridSectionProps {
  content: PromoGridContent;
}

export function PromoGridSection({ content }: PromoGridSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <Card key={item.title} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-lg shadow-primary/5 transition-all hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <Image src={item.image.src} alt={item.image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                {item.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-2xl font-extrabold text-on-surface">{item.title}</h3>
                <span className="text-sm font-bold text-tertiary">{item.label}</span>
              </div>
              <p className="mb-6 flex-1 text-sm text-on-surface-variant">{item.description}</p>
              <div className="mb-6 flex items-center justify-between rounded-lg bg-surface-container-low p-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Promo Code</span>
                  <div className="font-mono text-lg font-bold text-primary">{item.code}</div>
                </div>
                <Button size="icon" variant="ghost" className="text-primary" aria-label="Copy promo code">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button className="rounded-lg bg-linear-to-r from-blue-600 to-blue-800 text-sm font-semibold text-white">
                  Claim Promo
                </Button>
                <Button variant="secondary" className="rounded-lg text-sm font-semibold">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

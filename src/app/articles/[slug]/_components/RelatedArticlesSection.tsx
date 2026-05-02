import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedArticleItem {
  slug: string;
  category: string;
  title: string;
  heroImage: { src: string; alt: string };
}

interface RelatedArticlesSectionProps {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  items: RelatedArticleItem[];
}

export function RelatedArticlesSection({ title, ctaLabel, ctaHref, items }: RelatedArticlesSectionProps) {
  return (
    <section className="border-t border-outline-variant/20 bg-surface-container-low py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Next up</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-on-surface md:text-3xl">{title}</h2>
          </div>
          <Link href={ctaHref} className="flex items-center gap-2 text-sm font-bold text-primary">
            {ctaLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.slug} href={`/articles/${item.slug}`} className="group">
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-sm transition-shadow group-hover:shadow-md">
                <Image
                  src={item.heroImage.src}
                  alt={item.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 260px, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-tertiary">{item.category}</p>
              <h3 className="mt-2 text-lg font-extrabold tracking-tight text-on-surface transition-colors group-hover:text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

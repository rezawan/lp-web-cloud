import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticlesHeroContent {
  badge: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  author: { name: string; role: string; avatar: string };
  image: { src: string; alt: string };
}

interface ArticlesHeroSectionProps {
  content: ArticlesHeroContent;
}

export function ArticlesHeroSection({ content }: ArticlesHeroSectionProps) {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative w-full aspect-video">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[#001848]/90 via-[#001848]/45 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <span className="inline-flex items-center rounded-full bg-primary-container px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white">
              {content.badge}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {content.category}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide">{content.readTime}</span>
              <span className="text-xs font-semibold uppercase tracking-wide">{content.date}</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={content.author.avatar}
                    alt={content.author.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{content.author.name}</p>
                  <p className="text-xs text-white/60">{content.author.role}</p>
                </div>
              </div>
              <Button asChild className="h-10 rounded-xl bg-white px-5 text-xs font-bold uppercase tracking-[0.2em] text-[#003d9b]">
                <Link href={content.cta.href}>
                  {content.cta.label}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

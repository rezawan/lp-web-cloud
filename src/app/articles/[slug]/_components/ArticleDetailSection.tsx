import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ArticleBodyBlock {
  type: string;
  id?: string;
  text?: string;
  src?: string;
  alt?: string;
  caption?: string;
  images?: Array<{ src: string; alt: string }>;
}

interface ArticleDetail {
  category: string;
  readTime: string;
  title: string;
  date: string;
  author: { name: string; role: string; avatar: string };
  heroImage: { src: string; alt: string };
  intro: string;
  toc: Array<{ id: string; label: string }>;
  body: ArticleBodyBlock[];
  callout: { title: string; description: string; ctaLabel: string; ctaHref: string };
}

interface ArticleDetailSectionProps {
  article: ArticleDetail;
}

export function ArticleDetailSection({ article }: ArticleDetailSectionProps) {
  const renderBlock = (block: ArticleBodyBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return (
          <h2
            key={`${block.type}-${index}`}
            id={block.id}
            className="scroll-mt-28 text-2xl font-extrabold tracking-tight text-on-surface md:text-3xl"
          >
            {block.text}
          </h2>
        );
      case 'subheading':
        return (
          <h3
            key={`${block.type}-${index}`}
            id={block.id}
            className="scroll-mt-28 text-xl font-bold text-on-surface md:text-2xl"
          >
            {block.text}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={`${block.type}-${index}`} className="text-base leading-relaxed text-on-surface-variant md:text-lg">
            {block.text}
          </p>
        );
      case 'image':
        return (
          <figure key={`${block.type}-${index}`} className="rounded-2xl bg-surface-container-low p-6">
            <Image
              src={block.src ?? article.heroImage.src}
              alt={block.alt ?? article.heroImage.alt}
              width={1200}
              height={720}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full rounded-xl"
            />
            {block.caption && (
              <figcaption className="mt-4 text-center text-xs text-on-surface-variant">{block.caption}</figcaption>
            )}
          </figure>
        );
      case 'image-grid':
        return (
          <div key={`${block.type}-${index}`} className="grid gap-4 md:grid-cols-2">
            {(block.images ?? []).map((image, imageIndex) => (
              <Image
                key={`${image.src}-${imageIndex}`}
                src={image.src}
                alt={image.alt}
                width={600}
                height={420}
                sizes="(min-width: 1024px) 320px, 90vw"
                className="h-64 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full bg-secondary-fixed px-3 py-1 text-on-secondary-fixed">
              {article.category}
            </span>
            <span className="text-on-surface-variant">{article.readTime}</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-on-surface md:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 border-b border-outline-variant/20 pb-6">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-bold text-on-surface">{article.author.name}</p>
              <p className="text-xs text-on-surface-variant">
                {article.author.role} | {article.date}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative h-105 w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="space-y-8">
            <p className="border-l-4 border-primary pl-6 text-lg italic leading-relaxed text-on-surface">
              {article.intro}
            </p>
            {article.body.map((block, index) => renderBlock(block, index))}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Table of Contents</p>
                <ul className="mt-4 space-y-3">
                  {article.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block border-l-2 border-transparent pl-4 text-sm font-medium text-on-surface transition-colors hover:border-primary hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-high p-6">
                <p className="text-sm font-bold text-on-surface">{article.callout.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
                  {article.callout.description}
                </p>
                <Button asChild className="mt-4 h-10 w-full rounded-xl text-xs font-bold uppercase tracking-[0.2em]">
                  <Link href={article.callout.ctaHref}>{article.callout.ctaLabel}</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

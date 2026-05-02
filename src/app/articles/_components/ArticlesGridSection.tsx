import Image from 'next/image';
import Link from 'next/link';

interface ArticlePost {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  author: { name: string; initials: string };
  image: { src: string; alt: string };
}

interface ArticlesGridContent {
  posts: ArticlePost[];
}

interface ArticlesGridSectionProps {
  content: ArticlesGridContent;
}

export function ArticlesGridSection({ content }: ArticlesGridSectionProps) {
  return (
    <section className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {content.posts.map((post) => (
            <article key={post.slug} className="flex h-full flex-col">
              <Link href={`/articles/${post.slug}`} className="group block">
                <div className="relative mb-6 aspect-16/10 overflow-hidden rounded-2xl">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                    {post.category}
                  </span>
                </div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-outline-variant">
                  {post.readTime} | {post.date}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-on-surface transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {post.excerpt}
                </p>
              </Link>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-primary">
                  {post.author.initials}
                </div>
                <span className="text-sm font-bold text-on-surface">{post.author.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

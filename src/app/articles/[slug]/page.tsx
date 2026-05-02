import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleDetailSection } from '@/app/articles/[slug]/_components/ArticleDetailSection';
import { RelatedArticlesSection } from '@/app/articles/[slug]/_components/RelatedArticlesSection';
import articleDetailContent from '@/content/cms/article-detail.json';

interface ArticleParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articleDetailContent.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleParams): Promise<Metadata> {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug).toLowerCase();

  const article = articleDetailContent.articles.find(
    (item) => item.slug.toLowerCase() === normalizedSlug
  );

  if (!article) {
    return articleDetailContent.meta;
  }

  return {
    title: `${article.title} | Herza.id Insights`,
    description: article.intro,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleParams) {
  const { slug } = await params;

  const normalizedSlug = decodeURIComponent(slug).toLowerCase();

  console.log('SLUG', normalizedSlug);

  const article = articleDetailContent.articles.find(
    (item) => item.slug.toLowerCase() === normalizedSlug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = articleDetailContent.articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col">
      <ArticleDetailSection article={article} />
      <RelatedArticlesSection
        title={articleDetailContent.continueReading.label}
        ctaLabel={articleDetailContent.continueReading.ctaLabel}
        ctaHref={articleDetailContent.continueReading.ctaHref}
        items={relatedArticles}
      />
    </main>
  );
}
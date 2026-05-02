import type { Metadata } from 'next';
import { ArticlesHeroSection } from './_components/ArticlesHeroSection';
import { ArticlesFilterSection } from './_components/ArticlesFilterSection';
import { ArticlesGridSection } from './_components/ArticlesGridSection';
import { ArticlesPagination } from './_components/ArticlesPagination';
import { ArticlesNewsletterSection } from './_components/ArticlesNewsletterSection';
import articlesPageContent from '@/content/cms/articles.json';

type ArticleSections = (typeof articlesPageContent.sections)[number];

function getSection<TType extends ArticleSections['type']>(type: TType) {
  return articlesPageContent.sections.find((section): section is Extract<ArticleSections, { type: TType }> => section.type === type);
}

export const metadata: Metadata = {
  title: articlesPageContent.meta.title,
  description: articlesPageContent.meta.description,
};

export default function ArticlesPage() {
  const hero = getSection('hero');
  const filters = getSection('filters');
  const grid = getSection('grid');
  const pagination = getSection('pagination');
  const newsletter = getSection('newsletter');

  if (!hero || !filters || !grid || !pagination || !newsletter) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ArticlesHeroSection content={hero} />
      <ArticlesFilterSection content={filters} />
      <ArticlesGridSection content={grid} />
      <ArticlesPagination content={pagination} />
      <ArticlesNewsletterSection content={newsletter} />
    </main>
  );
}

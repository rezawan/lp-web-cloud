import { HeroSection } from '@/app/home/_components/HeroSection';
import { SolutionsGrid } from '@/app/home/_components/SolutionsGrid';
import { SecuritySection } from '@/app/home/_components/SecuritySection';
import { CustomerReviewsSection } from '@/app/home/_components/CustomerReviewsSection';
import { PartnersSection } from '@/app/home/_components/PartnersSection';
import { CTASection } from '@/app/home/_components/CTASection';
import homePageContent from '@/content/cms/home.json';

type HomeSections = (typeof homePageContent.sections)[number];

function getSection<TType extends HomeSections['type']>(type: TType) {
  return homePageContent.sections.find((section): section is Extract<HomeSections, { type: TType }> => section.type === type);
}

export default function HomePage() {
  const hero = getSection('hero');
  const solutions = getSection('solutions-grid');
  const security = getSection('security');
  const reviews = getSection('reviews');
  const partners = getSection('partners');
  const cta = getSection('cta');

  if (!hero || !solutions || !security || !reviews || !partners || !cta) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection content={hero} />
      <SolutionsGrid content={solutions} />
      <SecuritySection content={security} />
      <CustomerReviewsSection content={reviews} />
      <PartnersSection content={partners} />
      <CTASection content={cta} />
    </main>
  );
}

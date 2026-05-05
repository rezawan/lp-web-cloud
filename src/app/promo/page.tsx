import type { Metadata } from 'next';
import promoPageContent from '@/content/cms/promo.json';
import { PromoHeroSection } from '@/app/promo/_components/PromoHeroSection';
import { PromoFiltersSection } from '@/app/promo/_components/PromoFiltersSection';
import { PromoGridSection } from '@/app/promo/_components/PromoGridSection';
import { PromoNewsletterSection } from '@/app/promo/_components/PromoNewsletterSection';
import { PromoFinalCTASection } from '@/app/promo/_components/PromoFinalCTASection';

export const metadata: Metadata = {
  title: 'Promos | Cloud Host',
  description: 'Exclusive hosting promos and limited-time offers on cloud, VPS, dedicated servers, and colocation.',
};

type PromoSections = (typeof promoPageContent.sections)[number];

function getSection<TType extends PromoSections['type']>(type: TType) {
  return promoPageContent.sections.find((section): section is Extract<PromoSections, { type: TType }> => section.type === type);
}

export default function PromoPage() {
  const hero = getSection('hero');
  const filters = getSection('filters');
  const promos = getSection('promos');
  const newsletter = getSection('newsletter');
  const finalCta = getSection('final-cta');

  if (!hero || !filters || !promos || !newsletter || !finalCta) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <PromoHeroSection content={hero} />
      <PromoFiltersSection content={filters} />
      <PromoGridSection content={promos} />
      <PromoNewsletterSection content={newsletter} />
      <PromoFinalCTASection content={finalCta} />
    </main>
  );
}

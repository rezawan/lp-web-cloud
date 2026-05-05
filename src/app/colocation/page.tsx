import type { Metadata } from 'next';
import colocationPageContent from '@/content/cms/colocation.json';
import { ColocationHeroSection } from '@/app/colocation/_components/ColocationHeroSection';
import { ColocationPricingSection } from '@/app/colocation/_components/ColocationPricingSection';
import { ColocationQuoteSection } from '@/app/colocation/_components/ColocationQuoteSection';
import { ColocationFacilitiesSection } from '@/app/colocation/_components/ColocationFacilitiesSection';
import { ColocationProcessSection } from '@/app/colocation/_components/ColocationProcessSection';
import { ColocationFAQSection } from '@/app/colocation/_components/ColocationFAQSection';
import { ColocationCTASection } from '@/app/colocation/_components/ColocationCTASection';

export const metadata: Metadata = {
  title: 'Colocation | Cloud Host',
  description: 'Enterprise colocation services with Tier-3 facilities, redundant power, and 24/7 monitoring.',
};

type ColocationSections = (typeof colocationPageContent.sections)[number];

function getSection<TType extends ColocationSections['type']>(type: TType) {
  return colocationPageContent.sections.find((section): section is Extract<ColocationSections, { type: TType }> => section.type === type);
}

export default function ColocationPage() {
  const hero = getSection('hero');
  const pricing = getSection('pricing');
  const quote = getSection('quote');
  const facilities = getSection('facilities');
  const process = getSection('process');
  const faq = getSection('faq');
  const cta = getSection('cta');

  if (!hero || !pricing || !quote || !facilities || !process || !faq || !cta) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ColocationHeroSection content={hero} />
      <ColocationPricingSection content={pricing} />
      <ColocationQuoteSection content={quote} />
      <ColocationFacilitiesSection content={facilities} />
      <ColocationProcessSection content={process} />
      <ColocationFAQSection content={faq} />
      <ColocationCTASection content={cta} />
    </main>
  );
}

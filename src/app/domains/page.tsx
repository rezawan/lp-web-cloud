import type { Metadata } from 'next';
import { DomainHeroSection } from './_components/DomainHeroSection';
import { DomainPricingSection } from './_components/DomainPricingSection';
import { DomainFeaturesSection } from './_components/DomainFeaturesSection';
import { DomainFAQSection } from './_components/DomainFAQSection';
import { DomainCTASection } from './_components/DomainCTASection';
import domainsPageContent from '@/content/cms/domains.json';

export const metadata: Metadata = {
  title: 'Domains | Cloud Host',
  description: 'Search, register, transfer, and manage domains with transparent pricing and free DNS privacy protection.',
};

type DomainSections = (typeof domainsPageContent.sections)[number];

function getSection<TType extends DomainSections['type']>(type: TType) {
  return domainsPageContent.sections.find((section): section is Extract<DomainSections, { type: TType }> => section.type === type);
}

export default function DomainsPage() {
  const hero = getSection('hero');
  const pricing = getSection('pricing-table');
  const features = getSection('features-showcase');
  const faq = getSection('faq');
  const cta = getSection('cta');

  if (!hero || !pricing || !features || !faq || !cta) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <DomainHeroSection content={hero} />
      <DomainPricingSection content={pricing} />
      <DomainFeaturesSection content={features} />
      <DomainFAQSection content={faq} />
      <DomainCTASection content={cta} />
    </main>
  );
}
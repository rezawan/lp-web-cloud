import type { Metadata } from 'next';
import { DomainHeroSection } from './_components/DomainHeroSection';
import { DomainPricingSection } from './_components/DomainPricingSection';
import { DomainFeaturesSection } from './_components/DomainFeaturesSection';
import { DomainFAQSection } from './_components/DomainFAQSection';
import { DomainCTASection } from './_components/DomainCTASection';

export const metadata: Metadata = {
  title: 'Domains | Herza.id',
  description: 'Search, register, transfer, and manage domains with transparent pricing and free DNS privacy protection.',
};

export default function DomainsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DomainHeroSection />
      <DomainPricingSection />
      <DomainFeaturesSection />
      <DomainFAQSection />
      <DomainCTASection />
    </main>
  );
}
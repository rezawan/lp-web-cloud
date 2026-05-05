import type { Metadata } from 'next';
import dedicatedPageContent from '@/content/cms/dedicated-server.json';
import { DedicatedHeroSection } from '@/app/dedicated-server/_components/DedicatedHeroSection';
import { DedicatedServersSection } from '@/app/dedicated-server/_components/DedicatedServersSection';
import { DedicatedAdvantagesSection } from '@/app/dedicated-server/_components/DedicatedAdvantagesSection';
import { DedicatedUseCasesSection } from '@/app/dedicated-server/_components/DedicatedUseCasesSection';
import { DedicatedFAQSection } from '@/app/dedicated-server/_components/DedicatedFAQSection';
import { DedicatedCTASection } from '@/app/dedicated-server/_components/DedicatedCTASection';

export const metadata: Metadata = {
  title: 'Dedicated Servers | Cloud Host',
  description: 'Enterprise-grade dedicated servers with exclusive hardware, Tier-3 data centers, and 99.9% uptime SLA.',
};

type DedicatedSections = (typeof dedicatedPageContent.sections)[number];

function getSection<TType extends DedicatedSections['type']>(type: TType) {
  return dedicatedPageContent.sections.find((section): section is Extract<DedicatedSections, { type: TType }> => section.type === type);
}

export default function DedicatedServerPage() {
  const hero = getSection('hero');
  const selection = getSection('server-selection');
  const advantages = getSection('advantages');
  const useCases = getSection('use-cases');
  const faq = getSection('faq');
  const cta = getSection('cta');

  if (!hero || !selection || !advantages || !useCases || !faq || !cta) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <DedicatedHeroSection content={hero} />
      <DedicatedServersSection content={selection} />
      <DedicatedAdvantagesSection content={advantages} />
      <DedicatedUseCasesSection content={useCases} />
      <DedicatedFAQSection content={faq} />
      <DedicatedCTASection content={cta} />
    </main>
  );
}

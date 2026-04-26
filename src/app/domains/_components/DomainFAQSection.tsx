'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ_ITEMS = [
  {
    question: 'How long does it take for a domain to become active?',
    answer:
      'Most domain registrations are instant. However, global propagation of DNS settings can take anywhere from a few minutes to 24-48 hours.',
  },
  {
    question: 'Can I transfer my existing domain to Herza?',
    answer:
      'Yes. Our automated transfer tool makes it simple. Unlock your domain at your current registrar and get an EPP authorization code.',
  },
  {
    question: 'Is WHOIS privacy protection really free?',
    answer:
      "Absolutely. We believe your privacy shouldn't be a paid feature. We hide your personal information from the public WHOIS database at no extra cost.",
  },
  {
    question: 'Do you offer discounts for bulk registration?',
    answer:
      'Yes, we have a specialized reseller and bulk program for users managing more than 50 domains. Contact our sales team for custom pricing.',
  },
];

interface DomainFAQContent {
  heading: string;
  description: string;
  items: typeof FAQ_ITEMS;
}

interface DomainFAQSectionProps {
  content?: DomainFAQContent;
}

export function DomainFAQSection({ content }: DomainFAQSectionProps) {
  const heading = content?.heading ?? 'Frequently Asked Questions';
  const description = content?.description ?? 'Everything you need to know about domain registration at Herza.';
  const items = content?.items ?? FAQ_ITEMS;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-on-surface">{heading}</h2>
          <p className="mt-4 text-on-surface-variant">{description}</p>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="rounded-2xl bg-surface-container-low px-6 border-none">
              <AccordionTrigger className="gap-4 py-6 text-left text-lg font-bold text-on-surface hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="mt-0 pb-6 text-base leading-relaxed text-on-surface-variant">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
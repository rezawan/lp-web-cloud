'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const faqItems: FAQItem[] = [
    {
      question: 'How do I migrate my existing website to Cloud Host?',
      answer:
        'We provide free migration assistance. Simply contact our support team with your current hosting details, and we\'ll handle the transfer for you within 24 hours.',
    },
    {
      question: 'What type of storage do you use?',
      answer:
        'We exclusively use enterprise-grade NVMe (Non-Volatile Memory Express) SSDs which are up to 10x faster than traditional SSDs and 50x faster than HDDs.',
    },
    {
      question: 'Is there a limit on bandwidth?',
      answer:
        'No limits on bandwidth! Our plans include unlimited bandwidth (except the basic GO plan which comes with 100 GB). This means you can scale your business without worrying about data transfer costs.',
    },
  ];

  return (
    <SectionContainer bgColor="lighter" className="py-20">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-12 text-center">Explore FAQ&apos;s</h2>

      <Accordion type="single" collapsible defaultValue="faq-1" className="mx-auto max-w-3xl space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="rounded-2xl border-none bg-surface-container-low px-6"
          >
            <AccordionTrigger className="gap-4 py-6 text-left text-lg font-bold text-on-surface hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:text-primary">
              {item.question}
            </AccordionTrigger>

            <AccordionContent className="mt-0 pb-6 text-base leading-relaxed text-on-surface-variant">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
}

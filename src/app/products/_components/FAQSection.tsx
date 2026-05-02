'use client';

import { SectionContainer } from '@/components/SectionContainer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionContent {
  heading: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  content?: FAQSectionContent;
}

export function FAQSection({ content }: FAQSectionProps) {
  const faqItems: FAQItem[] = content?.items ?? [
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

  const heading = content?.heading ?? "Explore FAQ's";
  return (
    <SectionContainer bgColor="lighter" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">{heading}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-10">Helpful answers to common questions about our hosting, migration, and support.</p>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="faq-0"
        className="mx-auto max-w-3xl space-y-4"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="rounded-2xl border border-outline-variant/10 bg-card shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="w-full px-6 py-5 text-left">
              <div className="flex items-start gap-4 w-full">
                <span className="flex-none inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-semibold text-xs">{index + 1}</span>
                <span className="flex-1 text-base md:text-lg font-semibold text-on-surface dark:text-white">{item.question}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-on-surface-variant bg-surface-container-lowest">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionContainer>
  );
}

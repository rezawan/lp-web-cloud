'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface ColocationFAQContent {
  heading: string;
  items: FAQItem[];
}

interface ColocationFAQSectionProps {
  content: ColocationFAQContent;
}

export function ColocationFAQSection({ content }: ColocationFAQSectionProps) {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="text-center text-3xl font-extrabold text-on-surface md:text-4xl">{content.heading}</h2>
        <Accordion type="single" collapsible defaultValue="faq-0" className="mt-12 space-y-4">
          {content.items.map((item, index) => (
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

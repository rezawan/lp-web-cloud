'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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

export function DomainFAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-on-surface">Frequently Asked Questions</h2>
          <p className="mt-4 text-on-surface-variant">Everything you need to know about domain registration at Herza.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const open = expandedIndex === index;

            return (
              <div key={item.question} className="rounded-2xl bg-surface-container-low p-6">
                <button
                  type="button"
                  onClick={() => setExpandedIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-lg font-bold text-on-surface">{item.question}</span>
                  {open ? (
                    <ChevronUp className="size-5 shrink-0 text-primary transition-transform" />
                  ) : (
                    <ChevronDown className="size-5 shrink-0 text-primary transition-transform" />
                  )}
                </button>

                {open && <p className="mt-4 leading-relaxed text-on-surface-variant">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionContainer bgColor="lighter" className="py-20">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-12 text-center">Explore FAQ&apos;s</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex justify-between items-center text-left p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span className="font-bold text-slate-900 dark:text-white">{item.question}</span>
              {expandedIndex === index ? (
                <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              )}
            </button>

            {expandedIndex === index && (
              <div className="border-t border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50 dark:bg-slate-900/50">
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

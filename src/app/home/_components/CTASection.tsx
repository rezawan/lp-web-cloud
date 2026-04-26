'use client';

import { Button } from '@/components/ui/button';

interface CTASectionContent {
  heading: string;
  description: string;
  ctas: Array<{ label: string }>;
}

interface CTASectionProps {
  content?: CTASectionContent;
}

const DEFAULT_CONTENT: CTASectionContent = {
  heading: 'Ready to Scale?',
  description: 'Join over 10,000 developers and businesses who trust Cloud Host for their infrastructure needs.',
  ctas: [{ label: 'Create Free Account' }, { label: 'Contact Sales' }],
};

export function CTASection({ content = DEFAULT_CONTENT }: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
              {content.heading}
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                {content.ctas[0]?.label ?? 'Create Free Account'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold"
              >
                {content.ctas[1]?.label ?? 'Contact Sales'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

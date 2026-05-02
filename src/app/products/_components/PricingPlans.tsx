'use client';

import { useMemo, useState } from 'react';
import { PricingCard } from './PricingCard';

const PRICING_PLANS = [
  {
    name: 'GO',
    tier: 'Basic',
    price: '9.36',
    period: '/year',
    features: [
      { name: '1 GB NVMe Storage', included: true },
      { name: '100 GB Bandwidth', included: true },
      { name: '1 Website', included: true },
      { name: 'Free Domain', included: false },
    ],
  },
  {
    name: 'STARTER',
    tier: 'Standard',
    price: '24.99',
    period: '/year',
    features: [
      { name: '5 GB NVMe Storage', included: true },
      { name: 'Unlimited Bandwidth', included: true },
      { name: '5 Websites', included: true },
      { name: 'Free Domain (.com)', included: true },
    ],
    featured: true,
  },
  {
    name: 'MEDIUM',
    tier: 'Business',
    price: '49.50',
    period: '/year',
    features: [
      { name: '20 GB NVMe Storage', included: true },
      { name: 'Unlimited Bandwidth', included: true },
      { name: 'Unlimited Websites', included: true },
      { name: 'Daily Backups', included: true },
    ],
  },
  {
    name: 'ADVANCED',
    tier: 'Enterprise',
    price: '89.99',
    period: '/year',
    features: [
      { name: '50 GB NVMe Storage', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'Advanced Security Shield', included: true },
      { name: 'Free Domain & SSL', included: true },
    ],
  },
];

const BILLING_COPY = {
  annualLabel: 'Annual billing',
  monthlyLabel: 'Monthly billing',
  note: 'Save 20% with annual commitments. Cancel anytime.',
};

const REGIONS = [
  { id: 'us', label: 'North America (USD)', multiplier: 1, currencySymbol: '$' },
  { id: 'eu', label: 'Europe (USD)', multiplier: 1.08, currencySymbol: '$' },
  { id: 'apac', label: 'Asia Pacific (USD)', multiplier: 0.96, currencySymbol: '$' },
];

interface PricingPlansProps {
  content?: {
    plans: typeof PRICING_PLANS;
    billing?: {
      annualLabel?: string;
      monthlyLabel?: string;
      note?: string;
    };
    regions?: Array<{
      id: string;
      label: string;
      multiplier: number;
      currencySymbol?: string;
    }>;
  };
}

export function PricingPlans({ content }: PricingPlansProps) {
  const plans = content?.plans ?? PRICING_PLANS;
  const billingCopy = { ...BILLING_COPY, ...content?.billing };
  const regions = content?.regions?.length ? content.regions : REGIONS;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [regionId, setRegionId] = useState(regions[0]?.id ?? 'us');
  const activeRegion = useMemo(
    () => regions.find((region) => region.id === regionId) ?? regions[0],
    [regionId, regions]
  );

  return (
    <section className="py-20 bg-surface-container-low dark:bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Flexible billing
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Choose the plan that fits your release cycle
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-xl">
              {billingCopy.note}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="inline-flex rounded-full bg-white/70 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
                }`}
                aria-pressed={billingCycle === 'monthly'}
              >
                {billingCopy.monthlyLabel}
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
                }`}
                aria-pressed={billingCycle === 'annual'}
              >
                {billingCopy.annualLabel}
              </button>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Prices adjust by region and billing cycle.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingCycle={billingCycle}
              regions={regions}
              regionId={regionId}
              onRegionChange={setRegionId}
              activeRegion={activeRegion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

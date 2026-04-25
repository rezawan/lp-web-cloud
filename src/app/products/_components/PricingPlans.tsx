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

export function PricingPlans() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

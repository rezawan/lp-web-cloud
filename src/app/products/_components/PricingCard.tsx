import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  tier: string;
  price: string;
  period: string;
  features: PricingFeature[];
  featured?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-8 flex flex-col h-full transition-all duration-300',
        plan.featured
          ? 'bg-white dark:bg-slate-900 border-2 border-blue-600 shadow-lg lg:scale-105 z-10 relative'
          : 'bg-white dark:bg-slate-900 shadow-md hover:shadow-lg hover:-translate-y-1 border border-slate-200 dark:border-slate-800'
      )}
    >
      {/* "Most Popular" Badge */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {plan.tier}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{plan.name}</h3>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">${plan.price}</span>
          <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10 grow">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={cn('flex items-center gap-3 text-sm', {
              'opacity-50': !feature.included,
            })}
          >
            {feature.included ? (
              <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
            ) : (
              <X className="w-5 h-5 text-slate-400 shrink-0" />
            )}
            <span className={cn('text-slate-900 dark:text-white', { 'line-through': !feature.included })}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        className={cn('w-full py-4 font-bold rounded-lg transition-all', {
          'bg-linear-to-br from-blue-600 to-blue-800 text-white hover:shadow-lg':
            plan.featured,
          'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white':
            !plan.featured,
        })}
      >
        Get Started
      </Button>
    </div>
  );
}

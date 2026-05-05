import { Globe, Gauge, Router, Zap } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingPlan {
  name: string;
  price: string;
  suffix: string;
  features: string[];
  cta: string;
  badge?: string;
}

interface ColocationPricingContent {
  heading: string;
  billing: {
    primary: string;
    secondary: string;
  };
  plans: PricingPlan[];
}

interface ColocationPricingSectionProps {
  content: ColocationPricingContent;
}

const featureIcons = [Globe, Gauge, Router, Zap];

export function ColocationPricingSection({ content }: ColocationPricingSectionProps) {
  return (
    <SectionContainer bgColor="lighter">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-on-surface md:text-4xl">{content.heading}</h2>
        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-surface-container p-1">
          <Button variant="ghost" className="h-8 rounded-full px-4 text-sm font-semibold text-on-surface-variant">
            {content.billing.primary}
          </Button>
          <div className="relative h-7 w-14 rounded-full bg-primary" />
          <Button className="h-8 rounded-full bg-surface-container-lowest px-4 text-sm font-semibold text-on-surface shadow-sm">
            {content.billing.secondary}
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {content.plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative flex h-full flex-col gap-6 rounded-2xl border ${
              plan.badge
                ? 'border-primary shadow-xl shadow-primary/20 scale-[1.03]'
                : 'border-transparent shadow-sm'
            } bg-surface-container-lowest p-8 transition-all hover:border-primary/20`}
          >
            {plan.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                {plan.badge}
              </span>
            )}
            <div>
              <span className="text-lg font-bold text-primary">{plan.name}</span>
              <div className="mt-3">
                <span className="text-3xl font-extrabold text-on-surface">{plan.price}</span>
                <span className="text-sm text-on-surface-variant">{plan.suffix}</span>
              </div>
            </div>
            <ul className="flex-1 space-y-3 text-sm text-on-surface-variant">
              {plan.features.map((feature, index) => {
                const Icon = featureIcons[index] ?? Globe;

                return (
                  <li key={feature} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                );
              })}
            </ul>
            <Button className="w-full rounded-xl bg-surface-container-high text-on-primary-fixed-variant hover:bg-primary hover:text-white">
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

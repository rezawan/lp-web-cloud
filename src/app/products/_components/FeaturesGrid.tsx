import { ShieldCheck, Zap, Code } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function FeaturesGrid() {
  const features: Feature[] = [
    {
      icon: ShieldCheck,
      title: '30 Day Guarantee',
      description:
        'Risk-free trial. If you aren\'t satisfied, we refund your payment within 30 days.',
    },
    {
      icon: Zap,
      title: '99.9% Uptime',
      description:
        'Enterprise-grade SLAs ensuring your business is always online for your customers.',
    },
    {
      icon: Code,
      title: 'Softaculous',
      description:
        'Install 400+ applications including WordPress and Joomla with a single click.',
    },
  ];

  return (
    <SectionContainer bgColor="lighter" className="py-20">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-12 text-center">
        Engineered for Performance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

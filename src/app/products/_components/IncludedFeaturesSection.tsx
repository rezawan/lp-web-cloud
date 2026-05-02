import type { ComponentType } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Gauge,
  Settings,
  Cpu,
  Database,
  LifeBuoy,
  Lock,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface IncludedFeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface IncludedFeaturesContent {
  label?: string;
  heading?: string;
  description?: string;
  items?: IncludedFeatureItem[];
}

interface IncludedFeaturesSectionProps {
  content?: IncludedFeaturesContent;
}

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  gauge: Gauge,
  settings: Settings,
  cpu: Cpu,
  database: Database,
  lifebuoy: LifeBuoy,
  lock: Lock,
};

const DEFAULT_ITEMS: IncludedFeatureItem[] = [
  {
    title: 'Flexible Control',
    description: 'Full control panels with role-based access and automation hooks.',
    icon: 'settings',
  },
  {
    title: 'Filtered Bandwidth',
    description: 'Smart traffic filtering keeps your sites responsive and protected.',
    icon: 'shield',
  },
  {
    title: 'Improve Site Speed',
    description: 'NVMe storage and edge caching for faster page delivery.',
    icon: 'gauge',
  },
  {
    title: 'Premium Tooling',
    description: 'One-click installs, staging environments, and Git deploys.',
    icon: 'sparkles',
  },
  {
    title: 'Dedicated Power',
    description: 'Guaranteed CPU allocations on every plan tier.',
    icon: 'cpu',
  },
  {
    title: 'Maximum Security',
    description: 'WAF rules, malware scanning, and automated backups.',
    icon: 'lock',
  },
  {
    title: 'Always-on Support',
    description: '24/7 global support engineers ready to help.',
    icon: 'lifebuoy',
  },
  {
    title: 'Resilient Storage',
    description: 'Multi-zone replication keeps your data safe.',
    icon: 'database',
  },
];

export function IncludedFeaturesSection({ content }: IncludedFeaturesSectionProps) {
  const label = content?.label ?? 'Exciting Features';
  const heading = content?.heading ?? 'All Plans Included';
  const description =
    content?.description ??
    'Build confidently with a platform that bundles performance, security, and support.';
  const items = content?.items ?? DEFAULT_ITEMS;

  return (
    <SectionContainer bgColor="dark" className="py-20 bg-slate-50 dark:bg-on-primary-fixed">
      <div className="flex flex-col gap-4 text-left mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          {label}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-on-surface">
          {heading}
        </h2>
        <p className="text-slate-600 dark:text-on-surface-variant max-w-2xl">
          {description}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = ICONS[item.icon ?? 'sparkles'] ?? Sparkles;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-outline-variant/50 dark:bg-surface-container"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-surface-container-high dark:text-on-surface">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-on-surface">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-on-surface-variant mt-2">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

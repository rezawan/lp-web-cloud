import type { ComponentType } from 'react';
import { Globe, Zap, Server, Shield, Cloud, Cpu } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { cn } from '@/lib/utils';

interface ProductTab {
  label: string;
  icon?: string;
  description?: string;
}

interface ProductTabsSectionContent {
  heading?: string;
  tabs?: ProductTab[];
}

interface ProductTabsSectionProps {
  content?: ProductTabsSectionContent;
  fallbackTabs?: string[];
}

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  globe: Globe,
  zap: Zap,
  server: Server,
  shield: Shield,
  cloud: Cloud,
  cpu: Cpu,
};

const DEFAULT_TABS: ProductTab[] = [
  { label: 'Web Hosting', icon: 'globe', description: 'Fast NVMe hosting for modern sites.' },
  { label: 'Turbo', icon: 'zap', description: 'Extra power for growing traffic spikes.' },
  { label: 'VPS', icon: 'server', description: 'Dedicated resources and full control.' },
  { label: 'Enterprise', icon: 'shield', description: 'Mission-critical infrastructure at scale.' },
];

function getIconKey(label: string) {
  const key = label.toLowerCase();

  if (key.includes('turbo')) return 'zap';
  if (key.includes('vps')) return 'server';
  if (key.includes('enterprise')) return 'shield';
  if (key.includes('cloud')) return 'cloud';

  return 'globe';
}

export function ProductTabsSection({ content, fallbackTabs }: ProductTabsSectionProps) {
  const heading = content?.heading ?? 'Pick the platform that matches your workload';
  const tabsFromContent = content?.tabs ?? DEFAULT_TABS;
  const tabs: ProductTab[] = fallbackTabs?.length
    ? fallbackTabs.map((label) => ({ label, icon: getIconKey(label) }))
    : tabsFromContent;

  return (
    <SectionContainer bgColor="light" className="py-12">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Product tracks
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
            {heading}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tabs.map((tab, index) => {
            const iconKey = tab.icon ?? getIconKey(tab.label);
            const Icon = ICONS[iconKey] ?? Globe;
            const isActive = index === 0;

            return (
              <button
                key={tab.label}
                type="button"
                className={cn(
                  'group flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-all',
                  'border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm',
                  'dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-600/60',
                  isActive && 'border-blue-600/50 bg-blue-50 dark:bg-blue-900/20'
                )}
              >
                <span
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-xl',
                    'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                    isActive && 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {tab.label}
                  </span>
                  {tab.description && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {tab.description}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

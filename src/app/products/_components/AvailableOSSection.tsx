import type { ComponentType } from 'react';
import { Cpu, Monitor, Mountain, Server, Shield, Terminal } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface OsItem {
  name: string;
  icon?: string;
  description?: string;
}

interface AvailableOSContent {
  heading?: string;
  description?: string;
  items?: OsItem[];
}

interface AvailableOSSectionProps {
  content?: AvailableOSContent;
}

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  terminal: Terminal,
  server: Server,
  shield: Shield,
  mountain: Mountain,
  monitor: Monitor,
  cpu: Cpu,
};

const DEFAULT_ITEMS: OsItem[] = [
  { name: 'Ubuntu LTS', icon: 'terminal', description: 'Stable, long-term support images.' },
  { name: 'Debian', icon: 'server', description: 'Minimal, reliable server builds.' },
  { name: 'AlmaLinux', icon: 'shield', description: 'Enterprise-ready RHEL compatible.' },
  { name: 'Rocky Linux', icon: 'mountain', description: 'Community-driven RHEL alternative.' },
  { name: 'Windows Server', icon: 'monitor', description: 'Compatible with .NET workloads.' },
  { name: 'Fedora', icon: 'cpu', description: 'Latest kernels for modern stacks.' },
];

export function AvailableOSSection({ content }: AvailableOSSectionProps) {
  const heading = content?.heading ?? 'Available OS templates';
  const description =
    content?.description ??
    'Launch instantly with curated images optimized for security and performance.';
  const items = content?.items ?? DEFAULT_ITEMS;

  return (
    <SectionContainer bgColor="lighter" className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          {heading}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4">
          {description}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = ICONS[item.icon ?? 'terminal'] ?? Terminal;

          return (
            <div
              key={item.name}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

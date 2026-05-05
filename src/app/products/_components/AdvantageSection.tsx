'use client';

import { Settings, Lock, Zap } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { ICON_COLORS } from '@/lib/iconColors';

interface Advantage {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface AdvantageSectionContent {
  label: string;
  heading: string;
  items: Array<{ title: string; description: string }>;
}

interface AdvantageSectionProps {
  content?: AdvantageSectionContent;
}


export function AdvantageSection({ content }: AdvantageSectionProps) {
  const advantages: Advantage[] = (content?.items ?? [
    {
      icon: Settings,
      title: 'Flexible Control',
      description:
        'Full cPanel or DirectAdmin access giving you complete control over your hosting environment.',
    },
    {
      icon: Lock,
      title: 'Filtered Bandwidth',
      description:
        'DDoS protection and traffic filtering included by default to keep malicious actors at bay.',
    },
    {
      icon: Zap,
      title: 'Improve Site Speed',
      description:
        'Litespeed Web Server technology ensures your static and dynamic content loads instantly.',
    },
  ]).map((item, index) => ({
    ...item,
    icon: [Settings, Lock, Zap][index] ?? Settings,
  }));

  const label = content?.label ?? 'All Plans Included';
  const heading = content?.heading ?? 'The Herza Advantage';

  return (
    <SectionContainer bgColor="light">
      <div className="text-center mb-16">
        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">
          {label}
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          const colors = ICON_COLORS[index % ICON_COLORS.length];

          return (
            <div key={advantage.title} className="text-center group">
              <div className={`w-24 h-24 rounded-3xl mx-auto flex items-center justify-center mb-8 transition-colors duration-300 ${colors.bg}`}>
                <Icon className={`w-12 h-12 transition-colors duration-300 ${colors.text}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{advantage.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{advantage.description}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

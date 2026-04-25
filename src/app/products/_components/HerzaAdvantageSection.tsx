'use client';

import { Settings, Lock, Zap } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface Advantage {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function HerzaAdvantageSection() {
  const advantages: Advantage[] = [
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
  ];

  return (
    <SectionContainer bgColor="light">
      <div className="text-center mb-16">
        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">
          All Plans Included
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4">The Herza Advantage</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {advantages.map((advantage) => {
          const Icon = advantage.icon;

          return (
            <div key={advantage.title} className="text-center group">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-3xl mx-auto flex items-center justify-center mb-8 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300">
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
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

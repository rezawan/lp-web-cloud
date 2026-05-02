'use client';

import Image from 'next/image';
import { Rocket, Briefcase, Cloud, Globe } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

interface TimelineSectionContent {
  heading: string;
  description: string;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
    icon?: 'rocket' | 'briefcase' | 'cloud' | 'globe';
    image: string;
    imageAlt: string;
  }>;
}

interface TimelineSectionProps {
  content?: TimelineSectionContent;
}

export function TimelineSection({ content }: TimelineSectionProps) {
  const iconMap = {
    rocket: Rocket,
    briefcase: Briefcase,
    cloud: Cloud,
    globe: Globe,
  } as const;

  const milestones: Milestone[] = (content?.milestones ?? [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'First boutique VPS hosting service launched in Jakarta.',
      icon: 'rocket',
      image: '/assets/images/unamed (4).png',
      imageAlt: 'Jakarta Office',
    },
    {
      year: '2017',
      title: 'Enterprise Pivot',
      description: 'Introduced Tier III Data Center services for corporate clients.',
      icon: 'briefcase',
      image: '/assets/images/unamed (4).png',
      imageAlt: 'Enterprise DC',
      reverse: true,
    },
    {
      year: '2020',
      title: 'Cloud Revolution',
      description: 'Launched Cloud Host Platform with NVMe-only storage.',
      icon: 'cloud',
      image: '/assets/images/unamed (4).png',
      imageAlt: 'NVMe Cloud',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Opened regional nodes in Singapore, Tokyo, and Sydney.',
      icon: 'globe',
      image: '/assets/images/unamed (4).png',
      imageAlt: 'Global Nodes',
      reverse: true,
    },
  ]).map((milestone, index) => ({
    ...milestone,
    icon: iconMap[milestone.icon ?? 'rocket'] ?? Rocket,
    reverse: index % 2 === 1,
  }));

  const heading = content?.heading ?? 'Our Journey';
  const description = content?.description ?? 'A decade of pioneering cloud infrastructure';

  return (
    <SectionContainer bgColor="lighter" className="py-24 overflow-hidden border-y border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {heading}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4">{description}</p>
      </div>

      <div className="space-y-12 relative">
        {/* Vertical line connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block -translate-x-1/2"></div>

        {/* Milestones */}
        {milestones.map((milestone) => {
          const Icon = milestone.icon;
          const isReverse = milestone.reverse;

          return (
            <div key={milestone.year} className={`flex ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              {/* Content */}
              <div className={`md:w-1/2 ${isReverse ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="group p-6 bg-card rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-black text-2xl">{milestone.year}</span>
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-1">
                    {milestone.title}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{milestone.description}</p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="md:w-auto flex justify-center">
                <div className="w-12 h-12 bg-card rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg z-10 relative">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Image */}
              <div className={`md:w-1/2 ${isReverse ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all">
                  <Image src={milestone.image} alt={milestone.imageAlt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

'use client';

import { Shield, Lock, CheckCircle, type LucideIcon } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import Image from 'next/image';

type SecurityFeature = {
  icon?: LucideIcon;
  title: string;
  description: string;
};

interface SecuritySectionContent {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  statusCard?: {
    title: string;
  };
  features: SecurityFeature[];
}

interface SecuritySectionProps {
  content?: SecuritySectionContent;
}

export function SecuritySection({ content }: SecuritySectionProps) {
  const securityFeatures: SecurityFeature[] = content?.features ?? [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description:
        'AI-powered systems analyze traffic patterns to mitigate attacks before they reach your server.',
    },
    {
      icon: Lock,
      title: 'Encrypted Storage',
      description:
        'All data at rest is encrypted using AES-256 standards, ensuring privacy and compliance.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Certified for ISO 27001, SOC2 Type II, and GDPR readiness for global operations.',
    },
  ];

  const heading = content?.heading ?? 'Enterprise Grade Security';
  const description =
    content?.description ??
    'Your data is your most valuable asset. We protect it with multi-layered security protocols and 24/7 monitoring.';
  const image = content?.image ?? {
    src: '/assets/images/home3.png',
    alt: 'Fiber optic cables with security icons',
  };
  const statusTitle = content?.statusCard?.title ?? 'DDoS Shield Active';

  return (
    <SectionContainer bgColor="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
            <Image src={image.src} alt={image.alt} fill className="object-cover rounded-2xl" />
          </div>

          <div className="absolute top-8 right-8 bg-surface-container-lowest/90 dark:bg-surface-container/90 backdrop-blur p-6 rounded-xl shadow-xl border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-bold text-slate-900 dark:text-white">{statusTitle}</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="h-2 w-24 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{heading}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>

          <div className="space-y-6">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon ?? Shield;
              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

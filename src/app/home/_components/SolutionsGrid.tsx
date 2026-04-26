'use client';

import {
  Cloud,
  Cpu,
  GlobeLock,
  Leaf,
  Shield,
  Radio,
  type LucideIcon,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { SolutionCard } from './SolutionCard';

interface SolutionCardContent {
  variant: string;
  title: string;
  description: string;
  features?: string[];
  cta?: { text: string; href?: string };
  className?: string;
  image?: string | { src: string; alt?: string };
  imageAlt?: string;
}

interface SolutionsGridContent {
  heading: string;
  description: string;
  cards: SolutionCardContent[];
}

interface SolutionsGridProps {
  content?: SolutionsGridContent;
}

export function SolutionsGrid({ content }: SolutionsGridProps) {
  const iconByTitle: Record<string, LucideIcon> = {
    'Cloud Hosting': Cloud,
    'VPS Elite': Cpu,
    'Bare Metal': Radio,
    'Fortified Security': Shield,
    'Expert Support': GlobeLock,
    'Tier III Certified Infrastructure': Radio,
    'Green Cloud': Leaf,
  };

  const defaultCards = [
    {
      variant: 'featured',
      title: 'Cloud Hosting',
      description:
        'Optimized for CMS like WordPress and custom React/Next.js applications. Scalable resources with automated backups and NVMe SSD storage.',
      features: ['Unlimited Bandwidth', 'Free SSL Certificates'],
      cta: { text: 'Explore Plans', href: '/products' },
      className: 'md:col-span-2',
    },
    {
      variant: 'primary',
      title: 'VPS Elite',
      description: 'Dedicated resources with full root access. Choose your OS and scale instantly as your user base grows.',
      cta: { text: '$12.99/mo • Configure Server', href: '/products' },
    },
    {
      variant: 'default',
      title: 'Bare Metal',
      description: 'Maximum performance with raw hardware access. No virtualization layer overhead for compute-intensive workloads.',
      cta: { text: 'Custom Quote' },
    },
    {
      variant: 'image-wide',
      title: 'Global Infrastructure',
      description: '24 data centers strategically located across 5 continents to ensure your content is always close to your users.',
      image: '/assets/images/home2.png',
      imageAlt: 'World map with data connection nodes',
    },
    {
      variant: 'default',
      title: 'Fortified Security',
      description: 'Multi-layer DDoS protection, automatic backups, and hardware-level encryption are standard features.',
    },
    {
      variant: 'default',
      title: 'Expert Support',
      description: 'Real humans. Real engineers. 24/7/365 availability with a 15-minute response guarantee.',
    },
    {
      variant: 'dark',
      title: 'Tier III Certified Infrastructure',
      description: 'Our data centers meet the highest global standards for availability and power redundancy, featuring N+1 configurations.',
      className: 'md:col-span-2',
    },
    {
      variant: 'default',
      title: 'Green Cloud',
      description: 'Committed to carbon-neutral operations by 2030 through renewable energy.',
    },
  ];

  const heading = content?.heading ?? 'Precision Engineered Solutions';
  const description =
    content?.description ??
    'We offer a range of products designed to handle everything from light blog traffic to massive enterprise-scale data processing.';
  const cards = content?.cards ?? defaultCards;

  return (
    <SectionContainer bgColor="lighter">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {heading}
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => {
          if (card.variant === 'image-wide' || card.variant === 'image') {
            const resolvedImageSrc = typeof card.image === 'string' ? card.image : card.image?.src;
            const resolvedImageAlt = card.imageAlt ?? (typeof card.image === 'object' ? card.image?.alt : undefined) ?? card.title;

            return (
              <SolutionCard
                key={card.title}
                variant={card.variant as 'image-wide' | 'image'}
                title={card.title}
                description={card.description}
                className={card.className}
                image={resolvedImageSrc ?? '/assets/images/home2.png'}
                imageAlt={resolvedImageAlt}
              />
            );
          }

          return (
            <SolutionCard
              key={card.title}
              variant={card.variant as 'featured' | 'primary' | 'default' | 'dark'}
              icon={iconByTitle[card.title]}
              title={card.title}
              description={card.description}
              features={card.features}
              cta={card.cta}
              className={card.className}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
}

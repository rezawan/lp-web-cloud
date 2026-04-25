'use client';

import { Card } from '@/components/ui/card';
import { LucideIcon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { isValidElement, JSX, ReactNode } from 'react';

interface BaseSolutionCardProps {
  icon?: LucideIcon | ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface StandardSolutionCardProps extends BaseSolutionCardProps {
  variant?: 'default' | 'featured' | 'primary' | 'dark';
  features?: string[];
  cta?: {
    text: string;
    variant?: 'default' | 'secondary';
  };
}

interface ImageSolutionCardProps extends BaseSolutionCardProps {
  variant: 'image' | 'image-wide';
  image: string;
  imageAlt: string;
}

export function SolutionCard(
  props: StandardSolutionCardProps | ImageSolutionCardProps
): JSX.Element {
  // Standard card variants
  if ('variant' in props && (props.variant === 'image' || props.variant === 'image-wide')) {
    const { title, description, image, imageAlt, className } = props as ImageSolutionCardProps;
    const isWide = props.variant === 'image-wide';

    return (
      <div
        className={`relative group overflow-hidden rounded-2xl shadow-lg h-100 ${
          isWide ? 'md:col-span-2' : ''
        } ${className || ''}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 ${
            isWide
              ? 'bg-linear-to-t from-black/90 via-black/40 to-transparent'
              : 'bg-linear-to-t from-blue-900/90 via-blue-900/40 to-transparent'
          }`}
        ></div>
        <div className="absolute bottom-0 left-0 p-10 text-white">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className={`${isWide ? 'text-slate-200' : 'text-blue-100'} text-lg max-w-md leading-relaxed`}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  const {
    icon: IconComponent,
    title,
    description,
    variant = 'default',
    features,
    cta,
    className,
  } = props as StandardSolutionCardProps;

  // Determine styles based on variant
  const variantStyles = {
    default: {
      container: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      titleColor: 'text-slate-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      ctaColor: 'text-blue-600 dark:text-blue-400',
    },
    featured: {
      container: 'md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800',
      iconBg: 'bg-blue-600',
      iconColor: 'text-white',
      titleColor: 'text-slate-900 dark:text-white',
      descColor: 'text-slate-600 dark:text-slate-400',
      ctaColor: 'text-blue-600',
    },
    primary: {
      container: 'bg-blue-600 dark:bg-blue-700',
      iconBg: 'bg-white/10',
      iconColor: 'text-white',
      titleColor: 'text-white',
      descColor: 'text-blue-100 dark:text-blue-100',
      ctaColor: 'text-white',
    },
    dark: {
      container: 'bg-slate-900 border border-slate-800',
      iconBg: 'bg-slate-800',
      iconColor: 'text-slate-300',
      titleColor: 'text-white',
      descColor: 'text-slate-400',
      ctaColor: 'text-slate-200',
    },
  };

  const styles = variantStyles[variant];

  const iconContent = (() => {
    if (!IconComponent) return null;

    if (
      typeof IconComponent === 'function' ||
      (typeof IconComponent === 'object' && IconComponent !== null && 'render' in IconComponent)
    ) {
      const ComponentIcon = IconComponent as LucideIcon;
      return <ComponentIcon className={`w-6 h-6 ${styles.iconColor}`} />;
    }

    if (isValidElement(IconComponent)) {
      return IconComponent;
    }

    return null;
  })();

  return (
    <Card className={`p-8 rounded-2xl h-full flex flex-col justify-between group ${styles.container} ${className}`}>
      <div>
        {/* Icon */}
        {iconContent && (
          <div className={`w-12 h-12 ${styles.iconBg} rounded-lg flex items-center justify-center mb-8`}>
            {iconContent}
          </div>
        )}

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 ${styles.titleColor}`}>{title}</h3>

        {/* Description */}
        <p className={`${styles.descColor} text-sm mb-6 leading-relaxed`}>{description}</p>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <div className={`w-1.5 h-1.5 rounded-full ${variant === 'primary' ? 'bg-blue-200' : 'bg-blue-600'}`}></div>
                <span className={styles.descColor}>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA */}
      {cta && (
        <button className={`flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all ${styles.ctaColor}`}>
          {cta.text}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </Card>
  );
}

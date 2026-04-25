import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'light' | 'lighter' | 'dark';
}

export function SectionContainer({
  children,
  className,
  bgColor = 'light',
}: SectionContainerProps) {
  const bgClasses = {
    light: 'bg-surface',
    lighter: 'bg-surface-container-low',
    dark: 'bg-on-primary-fixed',
  };

  return (
    <section
      className={cn(
        'py-24',
        bgClasses[bgColor],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}

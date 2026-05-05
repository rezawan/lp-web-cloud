import { SectionContainer } from '@/components/SectionContainer';
import { Card } from '@/components/ui/card';
import { Bolt, Cloud, Gauge, Settings, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

interface DedicatedAdvantagesContent {
  heading: string;
  description: string;
  items: AdvantageItem[];
}

interface DedicatedAdvantagesSectionProps {
  content: DedicatedAdvantagesContent;
}

const iconMap = {
  gauge: Gauge,
  bolt: Bolt,
  'shield-check': ShieldCheck,
  settings: Settings,
  cloud: Cloud,
  'arrow-up': ArrowUpRight,
};

export function DedicatedAdvantagesSection({ content }: DedicatedAdvantagesSectionProps) {
  return (
    <SectionContainer bgColor="light">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl font-extrabold text-on-surface lg:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-lg text-on-surface-variant">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Cloud;

          return (
            <Card key={item.title} className="gap-4 rounded-2xl border border-outline-variant/50 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-fixed">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">{item.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{item.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}

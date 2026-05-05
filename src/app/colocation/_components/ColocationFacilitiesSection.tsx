import { SectionContainer } from '@/components/SectionContainer';
import { Card } from '@/components/ui/card';
import { Power, PlugZap, Snowflake, Globe, Fingerprint, Headset } from 'lucide-react';

interface FacilityItem {
  title: string;
  description: string;
  icon: string;
}

interface ColocationFacilitiesContent {
  heading: string;
  description: string;
  items: FacilityItem[];
}

interface ColocationFacilitiesSectionProps {
  content: ColocationFacilitiesContent;
}

const iconMap = {
  power: Power,
  plug: PlugZap,
  snowflake: Snowflake,
  globe: Globe,
  fingerprint: Fingerprint,
  headset: Headset,
};

export function ColocationFacilitiesSection({ content }: ColocationFacilitiesSectionProps) {
  return (
    <SectionContainer bgColor="light">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-on-surface md:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-lg text-on-surface-variant">{content.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Power;

          return (
            <Card key={item.title} className="rounded-2xl bg-surface-container-low p-8 shadow-sm transition-colors hover:bg-primary-container/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container-lowest text-primary shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-on-surface">{item.title}</h3>
              <p className="mt-3 text-sm text-on-surface-variant">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}

import { Button } from '@/components/ui/button';

interface PromoFilterItem {
  label: string;
  active?: boolean;
}

interface PromoFiltersContent {
  items: PromoFilterItem[];
}

interface PromoFiltersSectionProps {
  content: PromoFiltersContent;
}

export function PromoFiltersSection({ content }: PromoFiltersSectionProps) {
  return (
    <section className="sticky top-16 z-40 border-y border-outline-variant/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl overflow-x-auto px-8 py-4">
        <div className="flex min-w-max items-center gap-2">
          {content.items.map((item) => (
            <Button
              key={item.label}
              size="sm"
              variant={item.active ? 'default' : 'secondary'}
              className={item.active ? 'rounded-full bg-primary px-6 text-on-primary' : 'rounded-full bg-surface-container-high px-6 text-on-surface-variant hover:bg-surface-container-highest'}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

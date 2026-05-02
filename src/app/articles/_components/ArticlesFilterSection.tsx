import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ArticlesFilterContent {
  searchPlaceholder: string;
  categories: string[];
}

interface ArticlesFilterSectionProps {
  content: ArticlesFilterContent;
}

export function ArticlesFilterSection({ content }: ArticlesFilterSectionProps) {
  return (
    <section className="bg-surface-container-low py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {content.categories.map((category, index) => (
            <button
              key={category}
              className={`whitespace-nowrap rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-white hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
          <Input
            type="text"
            placeholder={content.searchPlaceholder}
            className="h-11 w-full rounded-xl border-0 bg-surface-container-high pl-12 pr-4 text-sm focus-visible:ring-2 focus-visible:ring-primary/20"
          />
        </div>
      </div>
    </section>
  );
}

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const POPULAR_TLDS = [
  { label: '.com', price: '$12.99' },
  { label: '.id', price: '$9.99' },
  { label: '.net', price: '$14.50' },
  { label: '.cloud', price: '$4.99' },
];

interface DomainHeroContent {
  badge: string;
  headline: string;
  description: string;
  search: {
    placeholder: string;
    buttonLabel: string;
  };
  popularTlds: Array<{ label: string; price: string }>;
}

interface DomainHeroSectionProps {
  content?: DomainHeroContent;
}

export function DomainHeroSection({ content }: DomainHeroSectionProps) {
  const popularTlds = content?.popularTlds ?? POPULAR_TLDS;
  const badge = content?.badge ?? 'World-Class Registration';
  const headline = content?.headline ?? 'Find the perfect domain name';
  const description =
    content?.description ??
    'Search from hundreds of extensions, compare pricing instantly, and launch your next brand with free DNS management.';
  const search = content?.search ?? {
    placeholder: 'Enter your dream domain name here...',
    buttonLabel: 'Search',
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#021431] via-[#053170] to-[#0a4a9f] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(125,211,252,0.45) 0%, transparent 35%), radial-gradient(circle at 82% 28%, rgba(59,130,246,0.45) 0%, transparent 33%), radial-gradient(circle at 52% 75%, rgba(147,197,253,0.35) 0%, transparent 38%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#010918]/35 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white/90 ring-1 ring-white/15">
            {badge}
          </div>

          <h1 className="text-5xl font-bold tracking-tighter text-white md:text-7xl leading-[1.05]">
            {headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            {description}
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl shadow-black/10 md:flex-row md:items-center">
              <div className="flex-1">
                <Label htmlFor="domain-search" className="sr-only">
                  Search domain name
                </Label>
                <Input
                  id="domain-search"
                  type="text"
                  placeholder={search.placeholder}
                  className="h-14 w-full border-0 bg-transparent px-4 text-base text-slate-900 outline-none shadow-none placeholder:text-slate-400 focus-visible:ring-0"
                />
              </div>

              <Button className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/20" asChild={false}>
                <span className="inline-flex items-center gap-2">
                  {search.buttonLabel}
                  <Search className="size-4" />
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
              {popularTlds.map((tld, index) => (
                <div key={tld.label} className="inline-flex items-center gap-3">
                  <span>
                    {tld.label} <b className="text-white">{tld.price}</b>
                  </span>
                  {index < popularTlds.length - 1 && <span className="opacity-30">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
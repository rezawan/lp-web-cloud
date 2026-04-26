import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const POPULAR_TLDS = [
  { label: '.com', price: '$12.99' },
  { label: '.id', price: '$9.99' },
  { label: '.net', price: '$14.50' },
  { label: '.cloud', price: '$4.99' },
];

export function DomainHeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-[#0048b8] to-[#0c56d0] py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 20%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25) 0, transparent 18%), radial-gradient(circle at 50% 70%, rgba(255,255,255,0.2) 0, transparent 22%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white/90 ring-1 ring-white/15">
            World-Class Registration
          </div>

          <h1 className="text-5xl font-bold tracking-tighter text-white md:text-7xl leading-[1.05]">
            Find the perfect <span className="text-primary-fixed">domain name</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Search from hundreds of extensions, compare pricing instantly, and launch your next brand with free DNS management.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl shadow-black/10 md:flex-row md:items-center">
              <div className="flex-1">
                <label htmlFor="domain-search" className="sr-only">
                  Search domain name
                </label>
                <input
                  id="domain-search"
                  type="text"
                  placeholder="Enter your dream domain name here..."
                  className="h-14 w-full border-0 bg-transparent px-4 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0"
                />
              </div>

              <Button className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/20" asChild={false}>
                <span className="inline-flex items-center gap-2">
                  Search
                  <Search className="size-4" />
                </span>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
              {POPULAR_TLDS.map((tld, index) => (
                <div key={tld.label} className="inline-flex items-center gap-3">
                  <span>
                    {tld.label} <b className="text-white">{tld.price}</b>
                  </span>
                  {index < POPULAR_TLDS.length - 1 && <span className="opacity-30">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
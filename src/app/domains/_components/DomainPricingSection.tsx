const PRICING_ROWS = [
  { tld: '.com', registration: '$12.99', renewal: '$14.99', transfer: '$12.99' },
  { tld: '.net', registration: '$14.50', renewal: '$16.50', transfer: '$14.50' },
  { tld: '.id', registration: '$9.99', renewal: '$12.99', transfer: '$9.99' },
  { tld: '.io', registration: '$39.99', renewal: '$44.99', transfer: '$39.99' },
  { tld: '.cloud', registration: '$4.99', renewal: '$19.99', transfer: '$4.99' },
];

interface DomainPricingContent {
  heading: string;
  description: string;
  filters: string[];
  rows: Array<{ tld: string; registration: string; renewal: string; transfer: string; duration?: string }>;
}

interface DomainPricingSectionProps {
  content?: DomainPricingContent;
}

export function DomainPricingSection({ content }: DomainPricingSectionProps) {
  const heading = content?.heading ?? 'Domain Pricing';
  const description =
    content?.description ??
    'Transparent pricing with no hidden fees. All registrations include basic DNS management and domain theft protection.';
  const filters = content?.filters ?? ['Popular', 'International', 'New TLDs'];
  const rows = content?.rows ?? PRICING_ROWS;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter text-on-surface">{heading}</h2>
            <p className="text-lg text-on-surface-variant">
              {description}
            </p>
          </div>

          <div className="flex rounded-xl bg-surface-container-low p-1">
            <button className="rounded-lg bg-surface-container-lowest px-4 py-2 text-sm font-bold text-primary shadow-sm">
              {filters[0] ?? 'Popular'}
            </button>
            <button className="px-4 py-2 text-sm font-medium text-on-surface-variant">{filters[1] ?? 'International'}</button>
            <button className="px-4 py-2 text-sm font-medium text-on-surface-variant">{filters[2] ?? 'New TLDs'}</button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,24,72,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-outline-variant/10 bg-surface-container-low">
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-on-surface-variant">TLD</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-on-surface-variant">Duration</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-on-surface-variant">Registration</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-on-surface-variant">Renewal</th>
                  <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider text-on-surface-variant">Transfer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {rows.map((row) => (
                  <tr key={row.tld} className="transition-colors hover:bg-surface-container-low/60">
                    <td className="px-8 py-6 text-lg font-extrabold text-primary">{row.tld}</td>
                    <td className="px-8 py-6 text-on-surface-variant">{row.duration ?? '1 Year'}</td>
                    <td className="px-8 py-6 font-bold text-on-surface">{row.registration}</td>
                    <td className="px-8 py-6 text-on-surface-variant">{row.renewal}</td>
                    <td className="px-8 py-6 text-on-surface-variant">{row.transfer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
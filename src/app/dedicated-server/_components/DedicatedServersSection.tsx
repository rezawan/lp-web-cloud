import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/SectionContainer';
import { Card } from '@/components/ui/card';

interface DedicatedServerRow {
  name: string;
  location: string;
  cpu: string;
  ram: string;
  storage: string;
  price: string;
  priceSuffix: string;
  cta: string;
  badge?: string;
}

interface DedicatedServersContent {
  heading: string;
  billing: {
    primary: string;
    secondary: string;
  };
  columns: string[];
  servers: DedicatedServerRow[];
}

interface DedicatedServersSectionProps {
  content: DedicatedServersContent;
}

export function DedicatedServersSection({ content }: DedicatedServersSectionProps) {
  return (
    <SectionContainer bgColor="lighter">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-on-surface lg:text-4xl">{content.heading}</h2>
        <div className="mt-6 inline-flex rounded-xl bg-surface-container-high p-1">
          <Button className="h-9 rounded-lg bg-white px-6 text-sm font-semibold text-primary shadow-sm">
            {content.billing.primary}
          </Button>
          <Button variant="ghost" className="h-9 rounded-lg px-6 text-sm font-semibold text-on-surface-variant">
            {content.billing.secondary}
          </Button>
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <div className="hidden grid-cols-12 px-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 lg:grid">
          <div className="col-span-3">{content.columns[0]}</div>
          <div className="col-span-2">{content.columns[1]}</div>
          <div className="col-span-2">{content.columns[2]}</div>
          <div className="col-span-2">{content.columns[3]}</div>
          <div className="col-span-3 text-right">{content.columns[4]}</div>
        </div>

        {content.servers.map((server) => (
          <Card
            key={server.name}
            className="relative grid grid-cols-1 items-center gap-6 rounded-2xl border border-outline-variant bg-white p-6 shadow-none transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 lg:grid-cols-12 lg:gap-0 lg:p-10"
          >
            {server.badge && (
              <span className="absolute -top-4 left-10 rounded-full bg-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                {server.badge}
              </span>
            )}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-on-surface">{server.name}</h3>
              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {server.location}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase text-on-surface-variant lg:hidden">CPU</p>
              <p className="font-semibold text-on-surface">{server.cpu}</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase text-on-surface-variant lg:hidden">RAM</p>
              <p className="font-semibold text-on-surface">{server.ram}</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase text-on-surface-variant lg:hidden">Storage</p>
              <p className="font-semibold text-on-surface">{server.storage}</p>
            </div>
            <div className="flex items-center justify-between gap-6 lg:col-span-3 lg:justify-end">
              <div className="text-right">
                <p className="text-2xl font-extrabold text-primary leading-none">{server.price}</p>
                <p className="text-xs text-on-surface-variant">{server.priceSuffix}</p>
              </div>
              <Button className="h-11 rounded-xl px-6 font-semibold shadow-lg shadow-primary/20">
                {server.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

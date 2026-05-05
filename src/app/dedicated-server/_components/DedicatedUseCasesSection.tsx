import Image from 'next/image';
import { Database, Gamepad2, Building2, Rss } from 'lucide-react';

interface UseCaseItem {
  title: string;
  description: string;
  icon: string;
}

interface DedicatedUseCasesContent {
  heading: string;
  description: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  items: UseCaseItem[];
}

interface DedicatedUseCasesSectionProps {
  content: DedicatedUseCasesContent;
}

const iconMap = {
  database: Database,
  gamepad: Gamepad2,
  building: Building2,
  rss: Rss,
};

export function DedicatedUseCasesSection({ content }: DedicatedUseCasesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={content.backgroundImage.src}
          alt={content.backgroundImage.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold lg:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-lg text-primary-fixed/80">{content.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Database;

            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <Icon className="mb-4 h-8 w-8" />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

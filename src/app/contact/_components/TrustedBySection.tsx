import Image from 'next/image';

interface TrustedByContent {
  heading: string;
  description: string;
  items: Array<{
    name: string;
    logoSrc: string;
  }>;
}

interface TrustedBySectionProps {
  content: TrustedByContent;
}

export function TrustedBySection({ content }: TrustedBySectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-on-surface">{content.heading}</h3>
          <p className="text-sm text-on-surface-variant mt-2">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 opacity-70">
          {content.items.map((partner) => (
            <div
              key={partner.name}
              className="rounded-lg border border-outline-variant/50 bg-surface-container-lowest flex flex-col items-center justify-center p-4 gap-2"
            >
              <div className="relative h-6 w-16 md:h-7 md:w-20">
                <Image src={partner.logoSrc} alt={`${partner.name} logo`} fill className="object-contain" />
              </div>
              <span className="text-xs mt-2 font-semibold text-on-surface-variant text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

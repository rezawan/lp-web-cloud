interface TrustedByContent {
  heading: string;
  description: string;
  items: string[];
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
              key={partner}
              className="h-14 rounded-lg border border-outline-variant/50 bg-surface-container-lowest flex items-center justify-center text-xs md:text-sm font-semibold text-on-surface-variant"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

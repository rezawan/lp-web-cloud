interface ContactHeroContent {
  badge: string;
  headline: string;
  description: string;
}

interface ContactHeroSectionProps {
  content: ContactHeroContent;
}

export function ContactHeroSection({ content }: ContactHeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-on-primary-fixed-variant font-bold tracking-widest text-xs uppercase mb-4 block">
          {content.badge}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          {content.headline}
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
      </div>
    </section>
  );
}

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/60 blur-[120px] dark:bg-blue-500/25"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-indigo-200/60 blur-[140px] dark:bg-indigo-500/20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-white/80 via-transparent to-white/30 dark:from-slate-950/70 dark:to-slate-950/10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 mb-4">
          Always here · {content.badge}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          {content.headline}
        </h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
        {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Live chat', value: 'Instant response' },
            { label: 'Email support', value: 'Within 2 hours' },
            { label: 'Call center', value: '24/7 coverage' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {item.value}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

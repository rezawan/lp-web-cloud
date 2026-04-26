import { Button } from '@/components/ui/button';

export function DomainCTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-12 text-center md:p-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #003d9b, transparent 68%)',
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to secure your digital territory?
            </h2>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="h-14 rounded-xl px-10 text-lg font-bold shadow-xl shadow-primary/20" asChild={false}>
                <span>Get Started Now</span>
              </Button>
              <Button
                variant="outline"
                className="h-14 rounded-xl border-white/20 bg-white/10 px-10 text-lg font-bold text-white backdrop-blur hover:bg-white/20"
                asChild={false}
              >
                <span>Speak to an Expert</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
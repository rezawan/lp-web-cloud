import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PromoNewsletterContent {
  heading: string;
  description: string;
  placeholder: string;
  button: string;
  disclaimer: string;
}

interface PromoNewsletterSectionProps {
  content: PromoNewsletterContent;
}

export function PromoNewsletterSection({ content }: PromoNewsletterSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-10 text-white lg:p-20">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-extrabold md:text-5xl">{content.heading}</h2>
              <p className="mt-4 text-lg text-on-primary-container/90">{content.description}</p>
            </div>
            <div className="w-full max-w-md">
              <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    type="email"
                    placeholder={content.placeholder}
                    className="h-12 flex-1 rounded-lg border-none bg-white text-on-surface"
                  />
                  <Button size="lg" className="h-12 rounded-lg bg-white px-6 text-base font-semibold text-primary">
                    {content.button}
                  </Button>
                </form>
              </div>
              <p className="mt-4 text-center text-xs text-white/60 lg:text-left">
                {content.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

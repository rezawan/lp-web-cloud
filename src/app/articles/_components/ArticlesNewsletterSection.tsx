import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ArticlesNewsletterContent {
  heading: string;
  description: string;
  inputPlaceholder: string;
  buttonLabel: string;
  note: string;
  image: { src: string; alt: string };
}

interface ArticlesNewsletterSectionProps {
  content: ArticlesNewsletterContent;
}

export function ArticlesNewsletterSection({ content }: ArticlesNewsletterSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white lg:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{content.heading}</h2>
        <p className="mt-4 text-base text-blue-100 md:text-lg">{content.description}</p>
        <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Input
            type="email"
            placeholder={content.inputPlaceholder}
            className="h-12 flex-1 rounded-xl border-0 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white/40"
          />
          <Button className="h-12 rounded-xl bg-white px-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {content.buttonLabel}
          </Button>
        </form>
        <p className="mt-4 text-xs text-blue-200/80">{content.note}</p>
      </div>
    </section>
  );
}

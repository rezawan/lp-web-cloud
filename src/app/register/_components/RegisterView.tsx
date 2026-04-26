import Link from 'next/link';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LinkItem {
  label: string;
  href: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'password' | 'select';
  placeholder?: string;
  span?: number;
  options?: string[];
}

interface RegisterViewProps {
  hero: {
    headline: string;
    description: string;
  };
  form: {
    socialTitle: string;
    socialProviders: Array<{ label: string; initial: string }>;
    dividerLabel: string;
    groups: Array<{
      title: string;
      fields: FormField[];
    }>;
    newsletter: {
      label: string;
      description: string;
    };
    submitLabel: string;
    terms: {
      prefix: string;
      links: LinkItem[];
    };
    signInPrompt: {
      text: string;
      label: string;
      href: string;
    };
  };
  footer: {
    copyright: string;
    links: LinkItem[];
  };
}

function RenderField({ field }: { field: FormField }) {
  const spanClass = field.span === 2 ? 'md:col-span-2' : '';

  return (
    <div className={`space-y-2 ${spanClass}`.trim()}>
      <Label htmlFor={field.name} className="ml-1 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
        {field.label}
      </Label>
      {field.type === 'select' ? (
        <select
          id={field.name}
          name={field.name}
          className="h-12 w-full rounded-lg border-0 bg-surface-container-high/70 px-4 text-sm text-on-surface transition-colors focus-visible:bg-surface-container-highest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
          defaultValue={field.options?.[0]}
        >
          {(field.options ?? []).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <Input
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          className="h-12 border-0 bg-surface-container-high/70 px-4 focus-visible:bg-surface-container-highest focus-visible:ring-2 focus-visible:ring-primary/20"
        />
      )}
    </div>
  );
}

export function RegisterView({ hero, form, footer }: RegisterViewProps) {
  return (
    <main className="relative flex min-h-screen flex-col bg-surface text-on-surface">
      <div className="pointer-events-none absolute -right-20 -top-24 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[100px]" />

      <header className="relative z-10 border-b border-outline-variant/20 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-6 md:px-8">
          <Link href="/home" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-primary">
            <Cloud className="size-6" />
            CloudArch
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 py-12 md:px-8 md:py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">{hero.headline}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-on-surface-variant">{hero.description}</p>
        </div>

        <Card className="overflow-hidden border-outline-variant/60 bg-surface-container-lowest py-0 shadow-xl shadow-primary/10">
          <CardContent className="space-y-8 px-6 py-8 md:px-10 md:py-10">
            <div className="space-y-5">
              <p className="text-center text-xs font-bold uppercase tracking-[0.1em] text-outline">{form.socialTitle}</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {form.socialProviders.map((provider) => (
                  <Button key={provider.label} variant="outline" className="h-11 gap-3 border-0 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high">
                    <span aria-hidden="true" className="text-base font-bold tracking-wide">{provider.initial}</span>
                    <span className="font-semibold">{provider.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative flex items-center py-1">
              <div className="h-px flex-1 bg-outline-variant/30" />
              <span className="px-4 text-xs font-bold uppercase tracking-widest text-outline">{form.dividerLabel}</span>
              <div className="h-px flex-1 bg-outline-variant/30" />
            </div>

            <form className="space-y-10">
              {form.groups.map((group) => (
                <section key={group.title} className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-1 rounded-full bg-linear-to-b from-primary to-primary-container" />
                    <h2 className="text-xl font-bold tracking-tight text-on-surface">{group.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    {group.fields.map((field) => (
                      <RenderField key={field.name} field={field} />
                    ))}
                  </div>
                </section>
              ))}

              <label className="flex items-start gap-4 text-sm text-on-surface-variant">
                <input type="checkbox" className="mt-0.5 size-5 rounded border-outline-variant text-primary focus:ring-primary/20" />
                <span>
                  <strong className="block font-semibold text-on-surface">{form.newsletter.label}</strong>
                  {form.newsletter.description}
                </span>
              </label>

              <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
                <Button type="submit" size="lg" className="h-12 w-full bg-linear-to-r from-primary to-primary-container px-10 text-lg font-extrabold text-on-primary shadow-lg shadow-primary/25 hover:opacity-90 md:w-auto">
                  {form.submitLabel}
                </Button>
                <p className="text-sm text-on-surface-variant">
                  {form.terms.prefix}{' '}
                  {form.terms.links.map((link, index) => (
                    <span key={link.label}>
                      <Link href={link.href} className="font-bold text-primary hover:underline">
                        {link.label}
                      </Link>
                      {index < form.terms.links.length - 1 ? ' and ' : ''}
                    </span>
                  ))}
                  .
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm font-medium text-on-surface-variant">
          {form.signInPrompt.text}{' '}
          <Link href={form.signInPrompt.href} className="font-bold text-primary hover:underline">
            {form.signInPrompt.label}
          </Link>
        </p>
      </section>

      <footer className="relative z-10 border-t border-outline-variant/20 bg-surface-container-low px-6 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs font-medium uppercase tracking-wide text-on-surface-variant md:text-left">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footer.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs font-medium uppercase tracking-wide text-outline transition-colors hover:text-primary hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

import Link from 'next/link';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthLink {
  label: string;
  href: string;
}

interface LoginViewProps {
  promo: {
    badge: string;
    headline: string;
    highlight: string;
    description: string;
    cta: AuthLink;
    microcopy: string;
  };
  form: {
    overline: string;
    headline: string;
    email: { label: string; placeholder: string };
    password: { label: string; placeholder: string };
    forgotPassword: AuthLink;
    rememberMeLabel: string;
    submitLabel: string;
    dividerLabel: string;
    socialProviders: Array<{ label: string; initial: string }>;
    registerPrompt: { text: string; label: string; href: string };
  };
  footer: {
    copyright: string;
    links: AuthLink[];
  };
}

export function LoginView({ promo, form, footer }: LoginViewProps) {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <div className="flex min-h-screen flex-col md:flex-row">
        <section className="hidden w-2/5 flex-col justify-between overflow-hidden bg-linear-to-br from-primary to-primary-container p-12 text-on-primary md:flex">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary">
              <Cloud className="size-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">CloudArch</span>
          </div>

          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-primary-fixed/30 bg-primary-fixed/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-fixed">
              {promo.badge}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              {promo.headline.replace(promo.highlight, '')}
              <span className="text-primary-fixed">{promo.highlight}</span>
            </h1>
            <p className="max-w-sm text-primary-fixed/80">{promo.description}</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-fixed">
              <Link href={promo.cta.href}>{promo.cta.label}</Link>
            </Button>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-primary-fixed/70">{promo.microcopy}</p>
        </section>

        <section className="flex flex-1 items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-xl border-outline-variant bg-surface-container-lowest py-0 shadow-md">
            <CardContent className="space-y-8 px-8 py-10 md:px-10">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">{form.overline}</p>
                <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">{form.headline}</h2>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{form.email.label}</Label>
                  <Input type="email" placeholder={form.email.placeholder} className="h-12 border-outline-variant bg-surface-container-low" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{form.password.label}</Label>
                    <Link href={form.forgotPassword.href} className="text-xs font-semibold text-primary hover:underline">
                      {form.forgotPassword.label}
                    </Link>
                  </div>
                  <Input type="password" placeholder={form.password.placeholder} className="h-12 border-outline-variant bg-surface-container-low" />
                </div>

                <label className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <input type="checkbox" className="size-4 rounded border-outline-variant text-primary" />
                  {form.rememberMeLabel}
                </label>

                <Button type="submit" size="lg" className="h-12 w-full bg-linear-to-r from-primary to-primary-container text-base font-bold text-on-primary hover:opacity-90">
                  {form.submitLabel}
                </Button>
              </form>

              <div className="relative flex items-center">
                <div className="h-px flex-1 bg-outline-variant/40" />
                <span className="px-3 text-xs font-bold uppercase tracking-widest text-outline">{form.dividerLabel}</span>
                <div className="h-px flex-1 bg-outline-variant/40" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {form.socialProviders.map((provider) => (
                  <Button key={provider.label} variant="outline" className="h-11 border-outline-variant bg-surface-container-low text-on-surface-variant hover:bg-surface-container">
                    <span aria-hidden="true" className="text-sm font-bold">{provider.initial}</span>
                    <span className="sr-only">{provider.label}</span>
                  </Button>
                ))}
              </div>

              <p className="text-center text-sm text-on-surface-variant">
                {form.registerPrompt.text}{' '}
                <Link href={form.registerPrompt.href} className="font-bold text-primary hover:underline">
                  {form.registerPrompt.label}
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="border-t border-outline-variant/20 bg-surface-container-low px-6 py-5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-center text-xs font-medium uppercase tracking-wide text-on-surface-variant md:text-left">{footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs font-medium uppercase tracking-wide text-outline transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

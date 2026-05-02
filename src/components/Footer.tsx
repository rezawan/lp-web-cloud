'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import homePageContent from '@/content/cms/home.json';
import aboutPageContent from '@/content/cms/about.json';
import contactPageContent from '@/content/cms/contact.json';
import domainsPageContent from '@/content/cms/domains.json';
import productsPageContent from '@/content/cms/products.json';

export function Footer() {
  const pathname = usePathname();

  const footerByRoute = {
    '/': homePageContent.footer,
    '/home': homePageContent.footer,
    '/about': aboutPageContent.footer,
    '/contact': contactPageContent.footer,
    '/domains': domainsPageContent.footer,
    '/products': productsPageContent.footer,
  } as const;

  const rootPath = `/${pathname?.split('/')[1] ?? ''}`;
  const footerContent =
    footerByRoute[pathname as keyof typeof footerByRoute] ??
    footerByRoute[rootPath as keyof typeof footerByRoute] ??
    homePageContent.footer;

  const brand = footerContent.brand;
  const sections = footerContent.sections ?? [];
  const bottom = footerContent.bottom;
  const certifications = footerContent.certifications ?? [];
  const socialLinks = footerContent.socials ?? [];

  return (
    <footer className="bg-surface-container-low dark:bg-surface-container w-full border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 lg:px-12 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="text-lg font-bold text-blue-900 dark:text-white">{brand?.name ?? 'Cloud Host'}</div>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {brand?.description ?? 'Premium cloud hosting solutions with a focus on speed, security, and world-class support.'}
          </p>
        </div>

        {/* Footer Links */}
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest dark:text-white">
              {section.title}
            </h4>
            <ul className="space-y-2 text-xs">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 border-t border-slate-200/50 dark:border-slate-800/50 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest dark:text-white">Follow Us</h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-blue-500 dark:hover:border-blue-500"
              >
                <Image
                  src={item.iconSrc}
                  alt={item.label}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <h4 className="text-sm font-bold text-on-surface uppercase tracking-widest dark:text-white mb-4">ISO</h4>
          <div className="flex flex-wrap items-start gap-4 md:gap-5">
            {certifications.map((cert) => (
              <Link
                key={cert.name}
                href={cert.href ?? '/about#about-certifications'}
                className="group inline-flex flex-col items-center gap-2"
                aria-label={cert.name}
              >
                <div className="rounded-lg bg-card p-1.5 ring-1 ring-border">
                  <Image
                    src={cert.logoSrc}
                    alt={cert.name}
                    width={54}
                    height={54}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">{cert.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {bottom?.copyright ?? '© 2024 Cloud Host Cloud Hosting. All rights reserved.'}
        </p>
        <div className="flex gap-6">
          {(bottom?.links ?? []).map((link) => (
            <Link key={link.label} href={link.href} className="text-slate-500 dark:text-slate-400 text-xs hover:underline underline-offset-4">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

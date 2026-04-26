'use client';

import { Globe, Mail, Share2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Cloud Hosting', href: '#' },
        { label: 'Elite VPS', href: '#' },
        { label: 'Dedicated Servers', href: '#' },
        { label: 'Domain Names', href: '/domains' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Affiliate Program', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Support', href: '#' },
        { label: 'Knowledge Base', href: '#' },
        { label: 'Status Page', href: '#' },
        { label: 'SLA Guarantee', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 lg:px-12 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="text-lg font-bold text-blue-900 dark:text-white">Cloud Host</div>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Premium cloud hosting solutions with a focus on speed, security, and world-class support.
          </p>
          <div className="flex gap-4">
            <button
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="Visit website"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="Contact via email"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="Share on social media"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        {footerSections.map((section) => (
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

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          © 2024 Cloud Host Cloud Hosting. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-slate-500 dark:text-slate-400 text-xs hover:underline underline-offset-4">
            Legal
          </Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 text-xs hover:underline underline-offset-4">
            Cookies
          </Link>
          <Link href="#" className="text-slate-500 dark:text-slate-400 text-xs hover:underline underline-offset-4">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}

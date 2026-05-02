'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Cloud, Menu, X, ChevronDown, Globe, Zap, Server, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface MenuItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
  additionalLinks?: SubMenuItem[];
  icon?: React.ReactNode;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Web Hosting',
      href: '/products',
      children: [
        {
          label: 'Web Hosting',
          href: '/products',
          description: 'Advanced NVMe SSD',
          icon: <Globe className="w-5 h-5" />,
        },
        {
          label: 'Turbo Hosting',
          href: '/products',
          description: 'Enhanced Performance',
          icon: <Zap className="w-5 h-5" />,
        },
        {
          label: 'Hosting',
          href: '/products',
          description: 'Fast, Local Performance',
          icon: <Server className="w-5 h-5" />,
        },
        {
          label: 'Reseller Hosting',
          href: '/products',
          description: 'Start Hosting Business',
          icon: <ShoppingCart className="w-5 h-5" />,
        },
      ],
      additionalLinks: [
        {
          label: 'WordPress Hosting',
          href: '/products',
        },
        {
          label: 'Windows Hosting',
          href: '/products',
        },
        {
          label: 'Reseller Hosting',
          href: '/products',
        },
      ],
    },
    { label: 'Servers', href: '/products' },
    { label: 'Domains', href: '/domains' },
    // { label: 'Addons', href: '#' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/contact' ,
      children: [
        {
          'label': 'Contact Us',
          'href': '/contact',
          'description': 'Get in touch with our support team',
          'icon': <Globe className="w-5 h-5" />,
        },
        {
          'label': 'Articles',
          'href': '/articles',
          'description': 'Find answers in our help center',
          'icon': <Zap className="w-5 h-5" />,
        },
      ]
    },
  ];


  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm shadow-blue-900/5">
      <div className="flex justify-between items-center h-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-900 dark:text-white flex items-center gap-2">
          <span className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white">
            <Cloud className="w-5 h-5" />
          </span>
          Cloud Host
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        item.label === 'Web Hosting'
                          ? 'text-blue-700 dark:text-blue-400 font-bold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-blue-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      item.label === 'Web Hosting'
                        ? 'text-blue-700 dark:text-blue-400 font-bold'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[90vw] max-w-275 bg-white dark:bg-slate-900">
                    <div className="flex gap-4 p-2 w-full">
                      {/* Main Menu Items - Left Side */}
                      <div className="flex-1 min-w-[320px]  space-y-1">
                        {item.children.map((child) => (
                          <NavigationMenuLink
                            key={child.label}
                            asChild
                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                          >
                            <Link href={child.href}>
                              {child.icon && (
                                <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                                  {child.icon}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>

                      {/* Additional Links Section - Right Side */}
                      {item.additionalLinks && item.additionalLinks.length > 0 && (
                        <div className="w-40">
                          <div className="px-2 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Additional Links
                          </div>
                          <div className="space-y-0.5">
                            {item.additionalLinks.map((link) => (
                              <NavigationMenuLink
                                key={link.label}
                                asChild
                                className="block px-2 py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                              >
                                <Link href={link.href}>
                                  {link.label}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden lg:block text-slate-600 font-medium text-sm px-4 py-2 hover:bg-blue-50/50 rounded-lg transition-all">
            Login
          </button>
          <Button className="bg-blue-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-2 text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2 border-l-2 border-slate-200 dark:border-slate-700">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.icon && (
                              <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 text-sm">
                                {child.icon}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-slate-900 dark:text-white text-sm">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  {child.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                        {item.additionalLinks && item.additionalLinks.length > 0 && (
                          <>
                            <div className="border-t border-slate-200 dark:border-slate-700 my-2" />
                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2 py-1">
                              Additional Links
                            </div>
                            {item.additionalLinks.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block px-2 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

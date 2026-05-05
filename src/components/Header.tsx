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
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ICON_COLORS } from '@/lib/iconColors';

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
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClasses = (href: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActivePath(href)
        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-blue-700 hover:bg-blue-50/50 dark:hover:bg-slate-800'
    }`;

  const triggerClasses = (href: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActivePath(href)
        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 font-semibold'
        : 'text-slate-600 dark:text-slate-400 hover:text-blue-700 hover:bg-blue-50/50 dark:hover:bg-slate-800'
    }`;

  const navItems: MenuItem[] = [
    { label: 'Home', href: '/home' },
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
                    <Link href={item.href} className={navLinkClasses(item.href)}>
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className={triggerClasses(item.href)}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[90vw] max-w-275 bg-white dark:bg-slate-900">
                    <div className="flex gap-4 p-2 w-full">
                      {/* Main Menu Items - Left Side */}
                      <div className="flex-1 min-w-[320px]  space-y-1">
                        {item.children.map((child, index) => {
                          const colors = ICON_COLORS[index % ICON_COLORS.length];

                          return (
                            <NavigationMenuLink
                              key={child.label}
                              asChild
                              className={`flex items-start gap-2 p-2 rounded-lg transition-colors cursor-pointer group ${
                                isActivePath(child.href)
                                  ? 'bg-blue-50 dark:bg-blue-950/30 ring-1 ring-blue-200 dark:ring-blue-900'
                                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                            >
                              <Link href={child.href}>
                                {child.icon && (
                                  <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                                    isActivePath(child.href)
                                      ? `${colors.bg} ${colors.text}`
                                      : `${colors.bg} ${colors.text} group-hover:brightness-95`
                                  }`}>
                                    {child.icon}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className={`text-sm ${
                                    isActivePath(child.href)
                                      ? 'font-semibold text-blue-700 dark:text-blue-300'
                                      : 'font-semibold text-slate-900 dark:text-white'
                                  }`}>
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className={`text-xs mt-0.5 ${
                                      isActivePath(child.href)
                                        ? 'text-blue-600/80 dark:text-blue-300/80'
                                        : 'text-slate-500 dark:text-slate-400'
                                    }`}>
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
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
                                className={`block px-2 py-1.5 text-sm rounded-lg transition-colors cursor-pointer ${
                                  isActivePath(link.href)
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
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
                      className={`w-full flex items-center justify-between py-2 transition-colors font-medium ${
                        isActivePath(item.href)
                          ? 'text-blue-700 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-400 hover:text-blue-700'
                      }`}
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
                        {item.children.map((child, index) => {
                          const colors = ICON_COLORS[index % ICON_COLORS.length];

                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                                isActivePath(child.href)
                                  ? 'bg-blue-50 dark:bg-blue-950/30 ring-1 ring-blue-200 dark:ring-blue-900'
                                  : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.icon && (
                                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                                  isActivePath(child.href)
                                    ? `${colors.bg} ${colors.text}`
                                    : `${colors.bg} ${colors.text}`
                                }`}>
                                  {child.icon}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className={`text-sm ${
                                  isActivePath(child.href)
                                    ? 'font-semibold text-blue-700 dark:text-blue-300'
                                    : 'font-medium text-slate-900 dark:text-white'
                                }`}>
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className={`text-xs ${
                                    isActivePath(child.href)
                                      ? 'text-blue-600/80 dark:text-blue-300/80'
                                      : 'text-slate-500 dark:text-slate-400'
                                  }`}>
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
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
                                className={`block px-2 py-2 text-sm rounded-lg transition-colors ${
                                  isActivePath(link.href)
                                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
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
                    className={`block py-2 transition-colors ${
                      isActivePath(item.href)
                        ? 'text-blue-700 dark:text-blue-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-blue-700'
                    }`}
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

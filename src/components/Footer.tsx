import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const productLinks = [
  { label: 'Zambi Jr', href: '/products' },
  { label: 'Zambi Enterprise', href: '/products' },
  { label: 'App Demo', href: '/app-demo' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/homepage" className="flex items-center gap-2">
              <AppLogo size={32} />
              <span className="font-bold text-base tracking-tight text-foreground">
                ZamzamInfotech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smart billing & inventory software for Indian businesses. Fast, bilingual, reliable.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Products
              </p>
              <ul className="flex flex-col gap-3">
                {productLinks?.map((l) => (
                  <li key={l?.href}>
                    <Link
                      href={l?.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-3">
                {companyLinks?.map((l) => (
                  <li key={l?.href}>
                    <Link
                      href={l?.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Legal
              </p>
              <ul className="flex flex-col gap-3">
                {legalLinks?.map((l) => (
                  <li key={l?.href}>
                    <Link
                      href={l?.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ZamzamInfotech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@zamzaminfotech.com"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              info@zamzaminfotech.com
            </a>
            <a
              href="tel:+919840167910"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              +91 9840167910
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
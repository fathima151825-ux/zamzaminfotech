'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const products = [
  {
    name: 'Zambi Jr',
    tagline: 'Simple billing for small shops',
    description:
      'Zambi Jr is designed for kirana stores, boutiques, pharmacies, and any small retail business that needs fast, reliable billing without complexity.',
    features: [
      'GST-compliant bill generation in < 5 seconds',
      'Bilingual UI — English & Tamil',
      'Thermal printer support',
      'WhatsApp receipt sharing',
      'Daily & weekly sales summaries',
      'Customer purchase history',
      'Barcode scanner support',
      'Simple product catalogue',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-primary text-primary-foreground',
    theme: 'light',
    demoUrl: 'https://appdemo.zamzaminfotech.com',
    icon: 'ShoppingBagIcon' as const,
    price: 'Starting at ₹999/month',
  },
  {
    name: 'Zambi Enterprise',
    tagline: 'Advanced system for large businesses',
    description:
      'Built for supermarkets, wholesale distributors, multi-branch retailers, and businesses that need powerful inventory control with seamless offline operation.',
    features: [
      'Complete inventory management (10K+ SKUs)',
      'Works 100% offline, auto-syncs on reconnect',
      'Multi-branch with centralized dashboard',
      'Role-based staff access control',
      'Advanced P&L and stock reports',
      'Supplier purchase order management',
      'Expiry date tracking & alerts',
      'Integration-ready REST API',
    ],
    badge: 'Enterprise',
    badgeColor: 'bg-white/10 text-white border border-white/20',
    theme: 'dark',
    demoUrl: 'https://appdemo.zamzaminfotech.com',
    icon: 'BuildingOffice2Icon' as const,
    price: 'Custom pricing',
  },
];

export default function ProductsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Row 1: [col-1: ZambiJr] [col-2: ZambiEnterprise] */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ZambiJr */}
        <div className="reveal reveal-delay-1 bg-card border border-border rounded-3xl p-8 flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon name="ShoppingBagIcon" size={28} className="text-primary" />
            </div>
            <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-1">Zambi Jr</h2>
          <p className="text-sm font-semibold text-muted-foreground mb-4">Simple billing for small shops</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Zambi Jr is designed for kirana stores, boutiques, pharmacies, and any small retail business that needs fast, reliable billing without complexity.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['GST-compliant bill generation in < 5 seconds', 'Bilingual UI — English & Tamil', 'Thermal printer support', 'WhatsApp receipt sharing', 'Daily & weekly sales summaries', 'Customer purchase history', 'Barcode scanner support', 'Simple product catalogue'].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="CheckIcon" size={11} className="text-primary" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-border pt-6 flex flex-col gap-3">
            <p className="text-xs text-muted-foreground font-medium">Starting at ₹999/month</p>
            <a
              href="https://appdemo.zamzaminfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full py-3.5 text-sm font-bold text-center"
            >
              Try Demo →
            </a>
          </div>
        </div>

        {/* ZambiEnterprise */}
        <div className="reveal reveal-delay-2 bg-foreground border border-foreground rounded-3xl p-8 flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
              <Icon name="BuildingOffice2Icon" size={28} className="text-white" />
            </div>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full uppercase tracking-wider border border-white/20">
              Enterprise
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-1">Zambi Enterprise</h2>
          <p className="text-sm font-semibold text-white/50 mb-4">Advanced system for large businesses</p>
          <p className="text-sm text-white/70 leading-relaxed mb-8">
            Built for supermarkets, wholesale distributors, multi-branch retailers, and businesses that need powerful inventory control with seamless offline operation.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Complete inventory management (10K+ SKUs)', 'Works 100% offline, auto-syncs on reconnect', 'Multi-branch with centralized dashboard', 'Role-based staff access control', 'Advanced P&L and stock reports', 'Supplier purchase order management', 'Expiry date tracking & alerts', 'Integration-ready REST API'].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="CheckIcon" size={11} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-3">
            <p className="text-xs text-white/40 font-medium">Custom pricing — contact us for a quote</p>
            <a
              href="https://appdemo.zamzaminfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full py-3.5 text-sm font-bold text-center"
            >
              Try Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
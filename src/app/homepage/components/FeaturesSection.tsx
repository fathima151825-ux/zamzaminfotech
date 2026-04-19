'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    id: 'fast-billing',
    icon: 'BoltIcon',
    title: 'Fast Billing',
    description:
      'Generate GST-compliant bills in under 5 seconds. Keyboard shortcuts and barcode scanning keep checkout queues moving.',
    metric: '< 5 sec',
    metricLabel: 'per bill',
    span: 'lg:col-span-7',
    tall: false,
  },
  {
    id: 'inventory',
    icon: 'ArchiveBoxIcon',
    title: 'Inventory Management',
    description:
      'Track stock levels, set reorder alerts, and get low-stock notifications before you run out.',
    metric: '10K+',
    metricLabel: 'SKUs supported',
    span: 'lg:col-span-5',
    tall: false,
  },
  {
    id: 'offline',
    icon: 'WifiIcon',
    title: 'Works Offline',
    description:
      'Never stop billing during internet outages. Zambi Enterprise syncs all transactions automatically when you reconnect.',
    metric: '100%',
    metricLabel: 'offline capable',
    span: 'lg:col-span-5',
    tall: false,
  },
  {
    id: 'bilingual',
    icon: 'LanguageIcon',
    title: 'Bilingual Support',
    description:
      'Switch between English and Tamil instantly. Your staff works in the language they\'re most comfortable with.',
    metric: 'EN + தமிழ்',
    metricLabel: 'dual language',
    span: 'lg:col-span-7',
    tall: false,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="mb-12 reveal">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
          Core Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
          Everything your shop needs,<br className="hidden md:block" /> nothing it doesn&apos;t.
        </h2>
      </div>

      {/* Bento Grid */}
      {/* Row 1: [col-1 to 7: FastBilling cs-7] [col-8 to 12: Inventory cs-5] */}
      {/* Row 2: [col-1 to 5: OfflineSync cs-5] [col-6 to 12: Bilingual cs-7] */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Card: FastBilling — col-span-7 */}
        <div className="lg:col-span-7 reveal reveal-delay-1 bg-card border border-border rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px]">
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="BoltIcon" size={22} className="text-primary" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-foreground tracking-tight">{'< 5 sec'}</p>
              <p className="text-xs text-muted-foreground font-medium">per bill</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Fast Billing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Generate GST-compliant bills in under 5 seconds. Keyboard shortcuts and barcode scanning keep checkout queues moving.
            </p>
          </div>
        </div>

        {/* Card: Inventory — col-span-5 */}
        <div className="lg:col-span-5 reveal reveal-delay-2 bg-foreground text-background border border-foreground rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px]">
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
              <Icon name="ArchiveBoxIcon" size={22} className="text-white" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white tracking-tight">10K+</p>
              <p className="text-xs text-white/60 font-medium">SKUs supported</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Inventory Management</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Track stock levels, set reorder alerts, and get low-stock notifications before you run out.
            </p>
          </div>
        </div>

        {/* Card: OfflineSync — col-span-5 */}
        <div className="lg:col-span-5 reveal reveal-delay-1 bg-primary text-primary-foreground border border-primary rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 min-h-[220px]">
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon name="WifiIcon" size={22} className="text-white" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white tracking-tight">100%</p>
              <p className="text-xs text-white/70 font-medium">offline capable</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Works Offline</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Never stop billing during internet outages. Zambi Enterprise syncs all transactions automatically when you reconnect.
            </p>
          </div>
        </div>

        {/* Card: Bilingual — col-span-7 */}
        <div className="lg:col-span-7 reveal reveal-delay-2 bg-card border border-border rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px]">
          <div className="flex items-start justify-between mb-6">
            <div className="w-11 h-11 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Icon name="LanguageIcon" size={22} className="text-secondary" />
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-foreground tracking-tight">EN + தமிழ்</p>
              <p className="text-xs text-muted-foreground font-medium">dual language</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Bilingual Support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Switch between English and Tamil instantly. Your staff works in the language they&apos;re most comfortable with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
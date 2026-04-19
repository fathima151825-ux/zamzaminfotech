'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const rows = [
  { feature: 'GST-compliant billing', jr: true, ent: true },
  { feature: 'English + Tamil UI', jr: true, ent: true },
  { feature: 'Thermal printer support', jr: true, ent: true },
  { feature: 'WhatsApp receipts', jr: true, ent: true },
  { feature: 'Inventory management', jr: false, ent: true },
  { feature: 'Offline + auto-sync', jr: false, ent: true },
  { feature: 'Multi-branch support', jr: false, ent: true },
  { feature: 'Role-based access', jr: false, ent: true },
  { feature: 'Advanced reports (P&L)', jr: false, ent: true },
  { feature: 'REST API access', jr: false, ent: true },
];

export default function ProductsComparison() {
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
      { threshold: 0.1 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full h-px bg-border mb-12" />
      <div className="reveal mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
          Feature Comparison
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Which plan is right for you?
        </h2>
      </div>
      <div className="reveal reveal-delay-1 border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 bg-muted border-b border-border">
          <div className="p-4 text-sm font-semibold text-muted-foreground">Feature</div>
          <div className="p-4 text-sm font-bold text-foreground text-center border-l border-border">Zambi Jr</div>
          <div className="p-4 text-sm font-bold text-foreground text-center border-l border-border">Zambi Enterprise</div>
        </div>
        {rows?.map((row, i) => (
          <div
            key={row?.feature}
            className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}
          >
            <div className="p-4 text-sm text-foreground font-medium">{row?.feature}</div>
            <div className="p-4 flex items-center justify-center border-l border-border">
              {row?.jr ? (
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckIcon" size={12} className="text-primary" />
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="MinusIcon" size={12} className="text-muted-foreground" />
                </span>
              )}
            </div>
            <div className="p-4 flex items-center justify-center border-l border-border">
              {row?.ent ? (
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckIcon" size={12} className="text-primary" />
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="MinusIcon" size={12} className="text-muted-foreground" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
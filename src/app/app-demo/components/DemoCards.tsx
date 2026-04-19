'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const demoApps = [
  {
    id: 'zambi-jr',
    name: 'Zambi Jr',
    slug: 'zambijr',
    description:
      'Simple, fast billing for small shops. Try creating a bill, adding products, and generating a GST receipt in under a minute.',
    url: 'https://zambijr.zamzaminfotech.com',
    features: ['Fast billing demo', 'Tamil/English toggle', 'Receipt preview'],
    badge: 'Small Business',
    badgeColor: 'bg-primary/10 text-primary',
    theme: 'light',
    icon: 'ShoppingBagIcon' as const,
    status: 'Live',
  },
  {
    id: 'zambi-enterprise',
    name: 'Zambi Enterprise',
    slug: 'zambienterprise',
    description:
      'Full-featured inventory and billing system. Explore multi-branch management, stock alerts, and advanced reporting dashboards.',
    url: 'https://zambienterprise.zamzaminfotech.com',
    features: ['Inventory dashboard', 'Offline mode simulation', 'Branch overview'],
    badge: 'Enterprise',
    badgeColor: 'bg-foreground/10 text-foreground',
    theme: 'light',
    icon: 'BuildingOffice2Icon' as const,
    status: 'Live',
  },
];

export default function DemoCards() {
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
        {demoApps.map((app, i) => (
          <div
            key={app.id}
            className={`reveal reveal-delay-${i + 1} bg-card border border-border rounded-3xl p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name={app.icon} size={28} className="text-primary" />
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 ${app.badgeColor} text-[10px] font-bold rounded-full uppercase tracking-wider`}>
                  {app.badge}
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-green-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {app.status}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-1">{app.name}</h2>
            <p className="text-xs text-muted-foreground font-mono mb-4">{app.slug}.zamzaminfotech.com</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{app.description}</p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {app.features.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full flex items-center justify-center gap-2 py-4 text-sm group-hover:gap-3"
              >
                Open Demo
                <Icon name="ArrowTopRightOnSquareIcon" size={16} className="text-white/80" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Info note */}
      <div className="reveal reveal-delay-3 mt-8 bg-muted rounded-2xl p-6 flex items-start gap-4">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="InformationCircleIcon" size={18} className="text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground mb-1">About these demos</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            These are live preview environments with sample data. No real transactions are processed. For a full walkthrough, contact our team.
          </p>
        </div>
      </div>
    </section>
  );
}
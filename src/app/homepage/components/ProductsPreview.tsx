'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const products = [
  {
    name: 'Zambi Jr',
    tagline: 'Simple billing for small shops',
    description:
      'Everything a kirana store, boutique, or small retail shop needs — fast billing, Tamil/English support, and daily sales reports.',
    features: ['Fast GST billing', 'English + Tamil UI', 'Daily sales summary', 'Customer receipts via WhatsApp'],
    badge: 'Most Popular',
    badgeColor: 'bg-primary text-primary-foreground',
    cardBg: 'bg-card',
    demoUrl: 'https://appdemo.zamzaminfotech.com',
    icon: 'ShoppingBagIcon',
    price: 'Affordable',
  },
  {
    name: 'Zambi Enterprise',
    tagline: 'Advanced system for large businesses',
    description:
      'Multi-branch inventory, offline sync, advanced reports, and role-based access for growing businesses and retail chains.',
    features: ['Full inventory management', 'Offline + auto-sync', 'Multi-branch support', 'Role-based access control'],
    badge: 'Enterprise',
    badgeColor: 'bg-foreground text-background',
    cardBg: 'bg-foreground',
    demoUrl: 'https://appdemo.zamzaminfotech.com',
    icon: 'BuildingOffice2Icon',
    price: 'Custom pricing',
  },
];

export default function ProductsPreview() {
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
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 reveal">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Two products,<br />one mission.
          </h2>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all products
          <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      {/* Product Cards — 2-col grid */}
      {/* Row 1: [col-1: ZambiJr] [col-2: ZambiEnterprise] */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ZambiJr */}
        <div className="reveal reveal-delay-1 bg-card border border-border rounded-3xl p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon name="ShoppingBagIcon" size={24} className="text-primary" />
            </div>
            <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">Zambi Jr</h3>
          <p className="text-sm text-muted-foreground mb-5 font-medium">Simple billing for small shops</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Everything a kirana store, boutique, or small retail shop needs — fast billing, Tamil/English support, and daily sales reports.
          </p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['Fast GST billing', 'English + Tamil UI', 'Daily sales summary', 'Customer receipts via WhatsApp']?.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckIcon" size={10} className="text-primary" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="https://appdemo.zamzaminfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-bold text-center hover:opacity-90 transition-all duration-200 hover:shadow-md hover:shadow-primary/20"
            >
              Try Demo
            </a>
            <Link
              href="/products"
              className="w-full py-3 border border-border rounded-full text-sm font-semibold text-foreground text-center hover:border-foreground transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* ZambiEnterprise */}
        <div className="reveal reveal-delay-2 bg-foreground border border-foreground rounded-3xl p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Icon name="BuildingOffice2Icon" size={24} className="text-white" />
            </div>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold rounded-full uppercase tracking-wider border border-white/20">
              Enterprise
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Zambi Enterprise</h3>
          <p className="text-sm text-white/60 mb-5 font-medium">Advanced system for large businesses</p>
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            Multi-branch inventory, offline sync, advanced reports, and role-based access for growing businesses and retail chains.
          </p>
          <ul className="flex flex-col gap-2.5 mb-8">
            {['Full inventory management', 'Offline + auto-sync', 'Multi-branch support', 'Role-based access control']?.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-white font-medium">
                <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckIcon" size={10} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="https://appdemo.zamzaminfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-white text-foreground rounded-full text-sm font-bold text-center hover:bg-muted transition-all duration-200 hover:shadow-md"
            >
              Try Demo
            </a>
            <Link
              href="/products"
              className="w-full py-3 border border-white/20 rounded-full text-sm font-semibold text-white text-center hover:border-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
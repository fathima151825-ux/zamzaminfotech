'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    num: '01',
    title: 'Software Development',
    desc: 'Custom billing and inventory applications tailored to your business workflow, built with modern tech stacks.',
    icon: 'CodeBracketIcon',
    category: 'development',
  },
  {
    num: '02',
    title: 'Billing Solutions',
    desc: 'GST-compliant billing systems with thermal printer support, WhatsApp receipts, and daily financial summaries.',
    icon: 'ReceiptPercentIcon',
    category: 'billing',
  },
  {
    num: '03',
    title: 'Business Automation',
    desc: 'Automate reorder alerts, staff shift reports, and end-of-day reconciliation to eliminate manual errors.',
    icon: 'CpuChipIcon',
    category: 'automation',
  },
];

export default function ServicesHighlight() {
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
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Divider */}
      <div className="w-full h-px bg-border mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        {/* Left sticky */}
        <div className="md:pr-16 md:border-r border-border sticky top-24 self-start reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance mb-6">
            Services built for real business challenges.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-sm">
            From custom software to ready-made billing solutions, we solve the day-to-day operational pain points of Indian retailers.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-80 transition-all duration-200 group"
          >
            All Services
            <Icon name="ArrowRightIcon" size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right: service list */}
        <div className="md:pl-16 flex flex-col gap-0 justify-between">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`service-item py-8 border-b border-border last:border-b-0 reveal reveal-delay-${i + 1} cursor-pointer group`}
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Icon name={svc.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{svc.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{svc.num}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* CLI-style card at bottom */}
          <div className="mt-8 bg-foreground rounded-2xl p-6 reveal reveal-delay-4">
            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <Icon name="CommandLineIcon" size={18} className="text-white" />
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Need a custom solution?</h4>
            <p className="text-sm text-white/60 mb-5">
              We build bespoke billing systems for specific industries — textile, pharmacy, electronics, and more.
            </p>
            <Link
              href="/contact"
              className="w-full flex items-center justify-between bg-white text-foreground px-5 py-3 text-sm font-bold rounded-full hover:bg-muted transition-all group"
            >
              Talk to us
              <div className="bg-foreground/10 rounded-full p-1 group-hover:bg-foreground/20 transition-colors">
                <Icon name="ArrowRightIcon" size={14} className="text-foreground" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
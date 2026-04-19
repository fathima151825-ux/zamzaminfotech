'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const services = [
{
  num: '01',
  icon: 'CodeBracketIcon' as const,
  title: 'Software Development',
  description:
  'Custom billing and inventory applications built from scratch for your specific business workflow. We handle everything from UI design to backend architecture and deployment.',
  deliverables: [
  'Custom billing system design',
  'Inventory module development',
  'Thermal printer & hardware integration',
  'Cloud or on-premise deployment',
  'Staff training and onboarding'],

  image: "https://images.unsplash.com/photo-1734193488029-fa4fe95cd526",
  imageAlt: 'Code editor on screen in dim developer workspace, dark background, green and white terminal text, focused atmosphere'
},
{
  num: '02',
  icon: 'ReceiptPercentIcon' as const,
  title: 'Billing Solutions',
  description:
  'Ready-to-deploy GST-compliant billing systems with everything a retail shop needs — from barcode scanning to WhatsApp receipts and daily financial summaries.',
  deliverables: [
  'GST invoice generation',
  'Barcode and QR scanner support',
  'Thermal & A4 printer support',
  'WhatsApp and SMS receipt sharing',
  'Daily/weekly sales reports'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a32821b-1772981326124.png",
  imageAlt: 'Modern retail POS terminal on clean shop counter, bright well-lit store interior, products visible in background'
},
{
  num: '03',
  icon: 'CpuChipIcon' as const,
  title: 'Business Automation',
  description:
  'Eliminate repetitive manual tasks with smart automation — from reorder triggers and shift-end reconciliation to automated supplier purchase orders.',
  deliverables: [
  'Low-stock reorder alerts',
  'End-of-day reconciliation automation',
  'Supplier PO generation',
  'Staff attendance integration',
  'Scheduled financial report emails'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e17ec1e-1774515743644.png",
  imageAlt: 'Abstract data dashboard on screen showing charts and graphs in dark blue office environment, professional business analytics'
}];


export default function ServicesDetail() {
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
      className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="w-full h-px bg-border mb-12" />

      <div className="flex flex-col gap-20">
        {services.map((svc, i) =>
        <div
          key={svc.num}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal reveal-delay-${i + 1}`}>
          
            {/* Text side — alternates left/right */}
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={svc.icon} size={20} className="text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{svc.num}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {svc.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {svc.description}
              </p>
              <ul className="flex flex-col gap-3">
                {svc.deliverables.map((d) =>
              <li key={d} className="service-item py-2 flex items-center gap-3 text-sm font-medium text-foreground cursor-default">
                    <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckIcon" size={10} className="text-primary" />
                    </span>
                    {d}
                  </li>
              )}
              </ul>
            </div>

            {/* Image side */}
            <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border group">
                <AppImage
                src={svc.image}
                alt={svc.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              
              </div>
              {/* Floating num badge */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-lg">{svc.num}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}
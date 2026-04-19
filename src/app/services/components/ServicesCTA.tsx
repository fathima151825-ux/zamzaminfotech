'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
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
      { threshold: 0.15 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20"
    >
      <div className="relative w-full rounded-3xl bg-foreground overflow-hidden px-8 py-20 md:py-24 text-center reveal">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Need a custom solution?
          </h2>
          <p className="text-white/60 text-base mb-8 leading-relaxed">
            Tell us about your business. We&apos;ll scope a solution that fits — whether it&apos;s a simple billing setup or a full inventory overhaul.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-full text-sm font-bold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full text-sm font-semibold hover:border-white transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
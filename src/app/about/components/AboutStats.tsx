'use client';
import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '2,500+', label: 'Active shops' },
  { value: '₹2Cr+', label: 'Billed daily' },
  { value: '6 yrs', label: 'In business' },
  { value: '2', label: 'Products shipped' },
];

export default function AboutStats() {
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
      className="pt-16 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {stats?.map((stat) => (
          <div
            key={stat?.label}
            className="bg-background flex flex-col items-center justify-center py-8 px-4 hover:bg-muted transition-colors"
          >
            <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-1">
              {stat?.value}
            </span>
            <span className="text-xs text-muted-foreground font-medium">{stat?.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CTASection() {
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
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 mt-8"
    >
      <div className="relative w-full rounded-3xl bg-foreground overflow-hidden px-8 py-20 md:py-28 text-center reveal">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/70 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to simplify<br />your billing?
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            Join 2,500+ shops across Tamil Nadu using ZamzamInfotech to bill faster and track smarter.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a
              href="https://appdemo.zamzaminfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-8 py-4 text-base min-w-[180px] text-center"
            >
              Try Demo Free
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full text-base font-semibold hover:border-white transition-all duration-300 min-w-[180px]"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
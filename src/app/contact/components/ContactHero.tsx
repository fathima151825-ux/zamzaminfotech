'use client';
import React, { useEffect, useRef } from 'react';

export default function ContactHero() {
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
      className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="reveal">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground editorial-tight mb-6">
          We&apos;re here to<br />
          <span className="text-primary">help you grow.</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Have questions about Zambi Jr or Enterprise? Want a custom billing solution? Our team responds within one business day.
        </p>
      </div>
    </section>
  );
}
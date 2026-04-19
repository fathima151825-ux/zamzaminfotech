'use client';
import React, { useEffect, useRef } from 'react';

export default function AboutStory() {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Vision */}
        <div className="reveal">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            To make every Indian shop — from a small kirana store in Coimbatore to a multi-branch supermarket in Chennai — run on modern, reliable software that actually speaks their language.
          </p>
        </div>

        {/* Mission */}
        <div className="reveal reveal-delay-1">
          <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-secondary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Build billing and inventory software that is fast enough for a busy Saturday, simple enough for a first-time user, and robust enough for a growing enterprise — all without requiring a constant internet connection.
          </p>
        </div>

        {/* Story */}
        <div className="reveal lg:col-span-2 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base text-muted-foreground leading-relaxed">
              ZamzamInfotech was founded in Chennai, Tamil Nadu, by a team of engineers who watched their own family businesses struggle with clunky, expensive billing software that crashed during peak hours and offered no Tamil language support.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We built Zambi Jr first — a stripped-down, keyboard-first billing tool for small shops. When our customers asked for inventory tracking and multi-branch support, Zambi Enterprise was born. Today, over 2,500 shops across Tamil Nadu trust our software every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
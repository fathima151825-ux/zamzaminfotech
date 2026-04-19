'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
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
      className="pt-32 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground editorial-tight mb-6">
            Built in Chennai,<br />
            <span className="text-primary">used across India.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            ZamzamInfotech was founded to solve a simple problem: Indian shopkeepers deserved billing software that spoke their language, worked without internet, and didn&apos;t cost a fortune.
          </p>
        </div>

        <div className="reveal reveal-delay-1 relative">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border group">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1d516d798-1768437649458.png"
              alt="Small team working at computers in a bright Chennai office, casual professional atmosphere, warm lighting"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            
          </div>
          {/* Location badge */}
          <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Headquartered in</p>
            <p className="text-base font-bold text-foreground">Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>);

}
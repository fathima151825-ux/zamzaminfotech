'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const parallaxCardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxBgRef?.current) {
        parallaxBgRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
      if (parallaxCardRef?.current) {
        parallaxCardRef.current.style.transform = `translateY(${scrollY * -0.04}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-28 md:pt-36 pb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top text grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
        <div className="lg:col-span-7 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Made for Indian Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold editorial-tight text-foreground text-balance">
            Smart Billing &<br />
            Inventory for<br />
            <span className="text-primary">Modern Shops</span>
          </h1>
        </div>
        <div className="lg:col-span-5 flex flex-col items-start lg:items-end reveal reveal-delay-1">
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-sm lg:text-right font-medium leading-relaxed">
            Fast billing, bilingual support (English + Tamil), and offline-ready inventory — built for shops of every size.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:justify-end">
            <Link
              href="/products"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-80 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              
              View Products
            </Link>
            <Link
              href="/app-demo"
              className="btn-premium flex items-center justify-center gap-2 px-6 py-3 text-sm">
              
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5">
                  <path d="M5 5a2 2 0 013.008-1.728l12 6.998a2 2 0 01.003 3.458l-12 7A2 2 0 015 19z" />
                </svg>
              </span>
              Try Demo
            </Link>
          </div>
        </div>
      </div>
      {/* Parallax image container */}
      <div className="reveal reveal-delay-2 w-full h-[320px] sm:h-[440px] md:h-[560px] rounded-2xl md:rounded-3xl overflow-hidden relative border border-border shadow-sm group">
        <div
          ref={parallaxBgRef}
          className="parallax-bg absolute inset-0 w-full h-[120%] -top-[10%]">
          
          <AppImage
            src="/assets/images/zamzaminfotech.com_hero-1776602590061.png"
            alt="Modern retail shop with point-of-sale terminal, bright clean interior, warm lighting, products on shelves"
            fill
            className="object-cover"
            priority />
          
        </div>
        {/* Scrim for overlay card legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Overlay Stats Card */}
        <div
          ref={parallaxCardRef}
          className="parallax-card absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl max-w-xs w-full hidden sm:block border border-white/60">
          
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                Today's Sales
              </p>
              <h4 className="text-sm font-bold text-foreground">Zambi Jr Dashboard</h4>
            </div>
            <div className="bg-green-50 text-green-700 border border-green-200 text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          </div>

          <div className="flex items-end gap-4 mb-4">
            <div>
              <p className="text-2xl font-bold text-foreground tracking-tight">₹48,320</p>
              <p className="text-[10px] text-muted-foreground font-medium">+12% from yesterday</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm font-semibold text-foreground">142</p>
              <p className="text-[10px] text-muted-foreground">Bills today</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-medium text-muted-foreground">
              <span>Daily target</span>
              <span>78%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[78%] rounded-full" />
            </div>
          </div>
        </div>

        {/* Badge top-right */}
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-white/60 shadow-lg hidden md:flex flex-col items-center">
          <span className="text-lg font-bold text-foreground">EN+தமிழ்</span>
          <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">Bilingual</span>
        </div>
      </div>
      {/* Stats row */}
      <div className="reveal reveal-delay-3 grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-0 border border-border rounded-b-2xl overflow-hidden">
        {[
        { value: '2,500+', label: 'Active Shops' },
        { value: '₹2Cr+', label: 'Billed Daily' },
        { value: '99.9%', label: 'Uptime' },
        { value: 'EN + தமிழ்', label: 'Bilingual' }]?.
        map((stat) =>
        <div
          key={stat?.label}
          className="bg-background flex flex-col items-center justify-center py-5 px-4 hover:bg-muted transition-colors">
          
            <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              {stat?.value}
            </span>
            <span className="text-xs text-muted-foreground font-medium mt-1">{stat?.label}</span>
          </div>
        )}
      </div>
    </section>);

}
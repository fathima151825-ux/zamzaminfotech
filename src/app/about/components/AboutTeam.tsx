'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'Farhan Rashid',
  role: 'Co-Founder & CEO',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a0ea664-1763296536479.png",
  alt: 'South Indian man in his 30s, professional headshot, warm neutral background, confident expression, business casual'
},
{
  name: 'Kavitha Subramaniam',
  role: 'Co-Founder & CTO',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_124ba0bf5-1763301531300.png",
  alt: 'South Indian woman in her 30s, professional headshot, warm neutral background, confident expression, business attire'
},
{
  name: 'Muthu Krishnan',
  role: 'Head of Product',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a0ea664-1763296536479.png",
  alt: 'South Indian man in his late 20s, professional headshot, light background, friendly expression, smart casual'
},
{
  name: 'Priya Natarajan',
  role: 'Lead Engineer',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_124ba0bf5-1763301531300.png",
  alt: 'South Indian woman in her late 20s, professional headshot, neutral background, focused expression, casual professional'
}];


export default function AboutTeam() {
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
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="w-full h-px bg-border mb-12" />
      <div className="reveal mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
          The Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          People behind the product.
        </h2>
      </div>
      {/* 4-col team grid */}
      {/* Row 1: [col-1: Farhan] [col-2: Kavitha] [col-3: Muthu] [col-4: Priya] */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {team?.map((member, i) =>
        <div
          key={member?.name}
          className={`reveal reveal-delay-${i + 1} group`}>
          
            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-muted border border-border">
              <AppImage
              src={member?.image}
              alt={member?.alt}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            
            </div>
            <h3 className="text-base font-bold text-foreground">{member?.name}</h3>
            <p className="text-xs text-muted-foreground font-medium mt-0.5">{member?.role}</p>
          </div>
        )}
      </div>
    </section>);

}
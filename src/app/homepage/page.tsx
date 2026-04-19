import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductsPreview from './components/ProductsPreview';
import ServicesHighlight from './components/ServicesHighlight';
import CTASection from './components/CTASection';

export default function HomepagePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <ServicesHighlight />
      <CTASection />
      <Footer />
    </main>
  );
}
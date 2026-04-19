import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './components/ProductsHero';
import ProductsGrid from './components/ProductsGrid';
import ProductsComparison from './components/ProductsComparison';

export default function ProductsPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <ProductsComparison />
      <Footer />
    </main>
  );
}
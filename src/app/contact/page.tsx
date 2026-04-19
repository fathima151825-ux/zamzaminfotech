import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactContent from './components/ContactContent';

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  );
}
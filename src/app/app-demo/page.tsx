import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoHero from './components/DemoHero';
import DemoCards from './components/DemoCards';
import AdminPanel from './components/AdminPanel';

export default function AppDemoPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <DemoHero />
      <DemoCards />
      <AdminPanel />
      <Footer />
    </main>
  );
}
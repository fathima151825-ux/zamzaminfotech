import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutTeam from './components/AboutTeam';
import AboutStats from './components/AboutStats';

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutTeam />
      <Footer />
    </main>
  );
}
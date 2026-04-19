'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center gap-2 group">
              <AppLogo
                size={72}
                onClick={() => {}}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
                ZamzamInfotech
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link?.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-premium px-5 py-2.5 text-sm"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <Icon
                name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={22}
                className="text-foreground"
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-2 mt-4">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold text-foreground py-3 border-b border-border hover:text-primary transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-premium block w-full text-center px-6 py-3.5 text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
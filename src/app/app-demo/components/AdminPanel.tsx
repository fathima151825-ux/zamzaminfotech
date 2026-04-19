'use client';
import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface AppEntry {
  id: string;
  name: string;
  slug: string;
  url: string;
}

const initialApps: AppEntry[] = [
  { id: '1', name: 'Zambi Jr', slug: 'zambijr', url: 'https://zambijr.zamzaminfotech.com' },
  { id: '2', name: 'Zambi Enterprise', slug: 'zambienterprise', url: 'https://zambienterprise.zamzaminfotech.com' },
];

export default function AdminPanel() {
  const [apps, setApps] = useState<AppEntry[]>(initialApps);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !slug || !url) return;
    const newApp: AppEntry = {
      id: String(Date.now()),
      name,
      slug,
      url,
    };
    setApps((prev) => [...prev, newApp]);
    setName('');
    setSlug('');
    setUrl('');
    setFormOpen(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full h-px bg-border mb-12" />

      <div className="reveal mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">
            Admin Panel
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Manage Demo Apps</h2>
        </div>
        <button
          onClick={() => setFormOpen(!formOpen)}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-all"
        >
          <Icon name={formOpen ? 'MinusIcon' : 'PlusIcon'} size={16} className="text-white" />
          Add New App
        </button>
      </div>

      {/* Success toast */}
      {submitted && (
        <div className="mb-6 flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-200 rounded-xl text-sm font-medium text-green-700">
          <Icon name="CheckCircleIcon" size={18} className="text-green-500" />
          App added successfully!
        </div>
      )}

      {/* Add form */}
      {formOpen && (
        <div className="reveal mb-8 bg-card border border-border rounded-2xl p-6">
          <h3 className="text-base font-bold text-foreground mb-5">Add New Demo App</h3>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">App Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Zambi Pro"
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subdomain (slug)</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s/g, ''))}
                placeholder="e.g. zambipro"
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors font-mono"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Demo URL</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://zambipro.zamzaminfotech.com"
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="md:col-span-3 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="px-5 py-2.5 border border-border rounded-full text-sm font-semibold text-foreground hover:border-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:opacity-90 transition-all"
              >
                Add App
              </button>
            </div>
          </form>
        </div>
      )}

      {/* App list */}
      <div className="reveal reveal-delay-1 border border-border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-4 bg-muted border-b border-border px-5 py-3">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">App Name</span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Slug</span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider col-span-2">URL</span>
        </div>
        {apps.map((app, i) => (
          <div
            key={app.id}
            className={`grid grid-cols-4 px-5 py-4 border-b border-border last:border-b-0 items-center ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}
          >
            <span className="text-sm font-semibold text-foreground">{app.name}</span>
            <span className="text-sm font-mono text-muted-foreground">{app.slug}</span>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline col-span-2 truncate flex items-center gap-1"
            >
              {app.url}
              <Icon name="ArrowTopRightOnSquareIcon" size={13} className="text-primary flex-shrink-0" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
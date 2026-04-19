import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Demo Apps', value: '2', icon: '📱', href: '/admin/apps' },
    { label: 'Active Demos', value: '2', icon: '✅', href: '/admin/apps' },
    { label: 'Settings', value: 'Configure', icon: '⚙️', href: '/admin/settings' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome to the ZamzamInfotech admin panel.</p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats?.map((stat) => (
          <Link
            key={stat?.label}
            href={stat?.href}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="text-3xl mb-3">{stat?.icon}</div>
            <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{stat?.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat?.label}</p>
          </Link>
        ))}
      </div>
      {/* Quick links */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/apps"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-all"
          >
            Manage Demo Apps
          </Link>
          <Link
            href="/admin/settings"
            className="px-5 py-2.5 border border-border rounded-full text-sm font-semibold text-foreground hover:border-foreground transition-colors"
          >
            Settings
          </Link>
          <Link
            href="/homepage"
            className="px-5 py-2.5 border border-border rounded-full text-sm font-semibold text-foreground hover:border-foreground transition-colors"
          >
            View Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}

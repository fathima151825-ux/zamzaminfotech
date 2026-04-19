import React from 'react';

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your admin preferences and configuration.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 max-w-xl">
        <h2 className="text-base font-bold text-foreground mb-4">General</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Site Name</label>
            <input
              type="text"
              defaultValue="ZamzamInfotech"
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              readOnly
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin Email</label>
            <input
              type="email"
              defaultValue="info@zamzaminfotech.com"
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              readOnly
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Settings management coming soon.</p>
      </div>
    </div>
  );
}

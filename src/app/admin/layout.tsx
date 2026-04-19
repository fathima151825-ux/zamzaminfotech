'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useAuth } from '@/contexts/AuthContext';

const sidebarLinks = [
  { label: 'Dashboard', href: '/admin', icon: 'Squares2X2Icon' as const },
  { label: 'Apps', href: '/admin/apps', icon: 'RectangleStackIcon' as const },
  { label: 'Settings', href: '/admin/settings', icon: 'Cog6ToothIcon' as const },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    const role = user?.user_metadata?.role || user?.app_metadata?.role;
    if (role !== 'owner') {
      router.replace('/homepage');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const role = user?.user_metadata?.role || user?.app_metadata?.role;
  if (role !== 'owner') return null;

  const displayName = user?.user_metadata?.full_name || user?.email || 'Admin';
  const initials = displayName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-40 w-64 bg-card border-r border-border flex flex-col transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-border">
          <AppLogo size={40} onClick={() => {}} />
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">ZamzamInfotech</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Admin Panel</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
              >
                <Icon name={link.icon} size={18} className={isActive ? 'text-primary-foreground' : 'text-current'} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Back to site */}
        <div className="px-3 pb-5 border-t border-border pt-4">
          <Link
            href="/homepage"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <Icon name="ArrowLeftIcon" size={16} className="text-current" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-card/80 backdrop-blur-md border-b border-border px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle sidebar"
          >
            <Icon name="Bars3Icon" size={20} className="text-foreground" />
          </button>

          {/* Page breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Admin</span>
            {pathname !== '/admin' && (
              <>
                <Icon name="ChevronRightIcon" size={14} className="text-muted-foreground" />
                <span className="capitalize font-medium text-foreground">
                  {pathname.split('/').pop()}
                </span>
              </>
            )}
          </div>

          {/* User info + logout */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-semibold text-foreground leading-tight">{displayName}</span>
              <span className="text-[10px] text-muted-foreground capitalize">Owner</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
              {initials}
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all border border-border"
            >
              <Icon name="ArrowRightOnRectangleIcon" size={14} className="text-current" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BookMarked,
  FileBarChart,
  TrendingUp,
  DollarSign,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/RCA/Avatar';
import { useAuthStore } from '@/stores/authStore';

const navItems = [
  { label: 'Dashboard', path: '/librarian', icon: LayoutDashboard },
  { label: 'User & Roles', path: '/librarian/users', icon: Users },
  { label: 'Books', path: '/librarian/books', icon: BookOpen },
  { label: 'Catalog', path: '/librarian/catalog', icon: BookMarked },
  { label: 'Fines', path: '/librarian/fines', icon: DollarSign },
  { label: 'Reports', path: '/librarian/reports', icon: FileBarChart },
  { label: 'Analytics', path: '/librarian/analytics', icon: TrendingUp },
  { label: 'Settings', path: '/librarian/profile', icon: Settings },
];

export default function LibrarianSidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    if (path === '/librarian') {
      return pathname === '/librarian';
    }
    return pathname.startsWith(path);
  };

  const nav = (
    <div className="flex flex-col h-full">
      <div className="pt-10 px-12 pb-6">
        <Link href="/librarian" className="flex items-center gap-2">
          <img
            src="/library-assets/white-book.png"
            alt="RCA Library"
            className="h-8 w-8 rounded-md object-contain"
          />
          <span className="text-xl font-bold text-white">RCA library</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMobileOpen(false)}
            className={cn('sidebar-nav-link', isActive(item.path) && 'active')}
          >
            <item.icon className="nav-icon h-5 w-5 shrink-0" />
            <span className="hidden lg:inline">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/8">
        <div className="flex items-center gap-3">
          <Avatar name={mounted ? (user?.name || 'User') : 'User'} size="sm" />
          <div className="hidden lg:block min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {mounted ? user?.name : '...'}
            </p>
            <p className="text-xs text-white/50 truncate">
              {mounted ? user?.email : '...'}
            </p>
          </div>
        </div>
        <Link href="/" className="sidebar-back-link mt-4 block text-center">
          Back to home
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-card shadow-sm border md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-60 bg-[#0A0E2E]">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {nav}
          </div>
        </div>
      )}

      <aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-16 lg:w-60 bg-[#0A0E2E] border-r border-white/8 z-40">
        {nav}
      </aside>
    </>
  );
}

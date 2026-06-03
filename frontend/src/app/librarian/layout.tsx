'use client';

import LibrarianSidebar from '@/components/LibrarianSidebar';
import { AppHeader } from '@/components/layout/AppHeader';
import ProtectedRoute from '@/components/ProtectedRoute';
import { usePathname } from 'next/navigation';

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/librarian':
      return 'Dashboard';
    case '/librarian/users':
      return 'User & Roles';
    case '/librarian/books':
      return 'Books';
    case '/librarian/catalog':
      return 'Catalog';
    case '/librarian/fines':
      return 'Fines';
    case '/librarian/reports':
      return 'Reports';
    case '/librarian/analytics':
      return 'Analytics';
    case '/librarian/notifications':
      return 'Notifications';
    case '/librarian/profile':
      return 'Settings';
    default:
      return 'Dashboard';
  }
}

export default function LibrarianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <ProtectedRoute requiredRole="LIBRARIAN">
      <div className="min-h-screen bg-white">
        <LibrarianSidebar />
        <main className="md:ml-16 lg:ml-60 pt-16 min-h-screen flex flex-col justify-between bg-white text-[#0A0E2E]">
          <AppHeader title={pageTitle} settingsHref="/librarian/profile" />
          <div className="flex-1 bg-white">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/authStore';
import RecordsAndPermits from '@/pages/discipline/RecordsAndPermits';

export default function NurseRecordsPage() {
  const router = useRouter();
  const { user, isAuthenticated, hydrated } = useAuthStore();

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    if (user?.role !== 'NURSE') {
      router.push('/discipline/dashboard');
    }
  }, [hydrated, isAuthenticated, user, router]);

  if (!hydrated || !isAuthenticated || user?.role !== 'NURSE') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#0A0E2E]/15 shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/rca-logo.jpg" alt="RCA Logo" className="h-10 w-10 rounded-md object-contain" />
            <div>
              <h1 className="text-lg font-bold text-[#0A0E2E]">Nurse Portal</h1>
              <p className="text-xs text-[#0A0E2E]/60">Records & Permits Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-[#0A0E2E]">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-[#0A0E2E]/60">{user?.role}</p>
            </div>
            <button
              onClick={() => {
                useAuthStore.getState().logout();
                router.push('/login');
              }}
              className="px-4 py-2 text-sm font-bold text-[#0A0E2E] hover:bg-[#0A0E2E]/5 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0A0E2E] mb-2">Records & Permits</h2>
            <p className="text-sm text-[#0A0E2E]/60">
              View and manage student discipline records and permits
            </p>
          </div>
          <RecordsAndPermits />
        </div>
      </main>
    </div>
  );
}

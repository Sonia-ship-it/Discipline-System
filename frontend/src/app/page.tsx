'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, hydrated } = useAuthStore();

  useEffect(() => {
    // Wait for hydration
    if (!hydrated) return;

    // If authenticated, redirect to login which will handle role-based redirect
    // If not authenticated, also redirect to login
    router.replace('/login');
  }, [hydrated, isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h1>
        <p className="text-gray-600">Redirecting to login</p>
      </div>
    </div>
  );
}

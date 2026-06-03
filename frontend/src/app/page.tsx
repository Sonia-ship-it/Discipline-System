'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('auth-token') || localStorage.getItem('access_token')
        : null;

    if (!token || !isAuthenticated || !user) {
      router.replace('/login');
      return;
    }

    if (user.role === 'LIBRARIAN') {
      router.replace('/librarian');
    } else {
      router.replace('/discipline/dashboard');
    }
  }, [isAuthenticated, user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Loading...</h1>
        <p className="text-gray-600">Redirecting to your portal</p>
      </div>
    </div>
  );
}

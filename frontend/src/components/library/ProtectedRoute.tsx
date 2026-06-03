'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useAuthStore } from '@/stores/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'STUDENT' | 'LIBRARIAN';
  redirectTo?: string;
}

export default function ProtectedRoute({
  children,
  requiredRole,
  redirectTo = '/login'
}: ProtectedRouteProps) {
  const { user, isLoading, isInitialized, hasTokens, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isInitialized || isLoading) return;

    const storedToken =
      localStorage.getItem('auth-token') || localStorage.getItem('access_token');

    if (!storedToken || !hasTokens || !user || error) {
      useAuthStore.getState().logout();
      router.replace(redirectTo);
      return;
    }

    if (requiredRole && user.role !== requiredRole) {
      if (user.role === 'LIBRARIAN') {
        router.replace('/librarian');
      } else {
        router.replace('/discipline/dashboard');
      }
    }
  }, [user, isLoading, isInitialized, hasTokens, error, requiredRole, router, redirectTo]);

  if (!isInitialized || isLoading || !hasTokens || !user || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
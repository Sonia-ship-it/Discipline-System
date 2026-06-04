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
    // Wait for hydration to complete
    if (!isInitialized || isLoading) return;

    const storedToken =
      localStorage.getItem('auth-token') || localStorage.getItem('access_token');

    // If no token or no user after hydration, redirect to login
    if (!storedToken || !hasTokens || !user || error) {
      useAuthStore.getState().logout();
      router.replace(redirectTo);
      return;
    }

    // Only check role after we have a valid user with a role
    if (requiredRole && user?.role && user.role !== requiredRole) {
      if (user.role === 'LIBRARIAN') {
        router.replace('/librarian');
      } else {
        router.replace('/discipline/dashboard');
      }
    }
  }, [user, isLoading, isInitialized, hasTokens, error, requiredRole, router, redirectTo]);

  // Show loading spinner while initializing or loading
  if (!isInitialized || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Show loading spinner if no tokens or no user
  if (!hasTokens || !user || error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Show loading spinner if checking role requirements
  if (requiredRole && (!user?.role || user.role !== requiredRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
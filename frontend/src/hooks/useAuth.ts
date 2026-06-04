'use client';

import { useAuthStore } from '@/stores/authStore';

/** Adapter so library components work with the discipline auth store */
export const useAuth = () => {
  const { user, token, isAuthenticated, hydrated, logout } = useAuthStore();

  return {
    user: user
      ? {
        id: String(user.id),
        email: user.email,
        name: user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role as 'STUDENT' | 'TEACHER' | 'LIBRARIAN' | 'ADMIN' | 'DISCIPLINE' | 'NURSE',
      }
      : null,
    isLoading: !hydrated,
    isInitialized: hydrated,
    hasTokens: !!token,
    error: null,
    logout,
  };
};

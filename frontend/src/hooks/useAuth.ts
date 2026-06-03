'use client';

import { useAuthStore } from '@/stores/authStore';

/** Adapter so library components work with the discipline auth store */
export const useAuth = () => {
  const { user, token, isAuthenticated, logout } = useAuthStore();

  return {
    user: user
      ? {
          id: String(user.id),
          email: user.email,
          name: user.name,
          role: user.role as 'STUDENT' | 'TEACHER' | 'LIBRARIAN',
        }
      : null,
    isLoading: false,
    isInitialized: true,
    hasTokens: !!token,
    error: null,
    logout,
  };
};

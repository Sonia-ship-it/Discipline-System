import api from '@/lib/library-api';
import { API_URL } from '@/lib/config';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  level?: string;
  role: 'STUDENT' | 'TEACHER' | 'LIBRARIAN';
  profilePicture?: string;
}

export const authService = {
  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    try {
      const response = await api.get('/auth/me');
      // Backend returns { user: userDetails, currentBorrows, borrowHistory }
      return response.data.user;
    } catch (error) {
      console.error('❌ Failed to get current user:', error);
      throw error;
    }
  },

  // Login with credentials (for librarians)
  login: async (credentials: LoginCredentials): Promise<User> => {
    const response = await api.post('/auth/login', credentials);

    // Extract tokens from response
    const { accessToken, refreshToken, user } = response.data;

    // Store tokens in localStorage
    if (accessToken && refreshToken) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
    }

    return user || response.data;
  },

  // Logout (clears HTTP-only cookie)
  logout: async (): Promise<void> => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Even if the backend call fails, we should still clear local tokens
      console.warn('Backend logout failed, but clearing local tokens anyway');
    }
  },

  // OAuth login URL for students (RCA MIS)
  getOAuthLoginUrl: (): string => {
    // Use current window location for redirect URL
    const appRedirectUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

    // Build the OAuth URL with RCA MIS specific parameters via backend
    const oauthUrl = `${API_URL}/auth/login?redirect=${encodeURIComponent(appRedirectUrl)}?redirect=%2F&oauth=true`;

    return oauthUrl;
  },

  // Check authentication status (via HTTP-only cookie)
  checkAuth: async (): Promise<User | null> => {
    try {
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error) {
      return null;
    }
  },

  // Update user profile
  updateProfile: async (data: { name?: string; email?: string }): Promise<User> => {
    const response = await api.patch('/auth/profile', data);
    return response.data.user;
  },
};
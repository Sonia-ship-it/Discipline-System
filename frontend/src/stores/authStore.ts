import { create } from 'zustand';
import { apiFetch } from '@/lib/api';

export type StaffRole = 'ADMIN' | 'DISCIPLINE' | 'NURSE' | 'LIBRARIAN';

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: StaffRole;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  hydrated: boolean;
  hydrate: () => void;
  login: (email: string, password: string) => Promise<StaffRole>;
  logout: () => void;
}

const decodeJWT = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window.atob(base64).split('').map((c) =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  // Always start with empty state — same on server and client
  user: null,
  token: null,
  isAuthenticated: false,
  hydrated: false,

  // Call this once on the client to load stored session
  hydrate: () => {
    if (typeof window === 'undefined') return;
    try {
      const token = localStorage.getItem('auth-token');
      const raw = localStorage.getItem('auth-user');
      const user: AuthUser | null = raw ? JSON.parse(raw) : null;
      set({
        token,
        user,
        isAuthenticated: !!token && !!user,
        hydrated: true,
      });
    } catch {
      set({ hydrated: true });
    }
  },

  login: async (email, password) => {
    const data = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    const token: string = data.access_token;
    const serverUser = data.user;
    const decoded = decodeJWT(token);

    const user: AuthUser = {
      id: String(serverUser?.id ?? decoded?.sub),
      firstName: serverUser?.firstName ?? decoded?.firstName ?? '',
      lastName: serverUser?.lastName ?? decoded?.lastName ?? '',
      email: serverUser?.email ?? decoded?.email ?? email,
      role: (serverUser?.role ?? decoded?.role ?? 'DISCIPLINE') as StaffRole,
    };

    localStorage.setItem('auth-token', token);
    localStorage.setItem('auth-user', JSON.stringify(user));

    set({ token, user, isAuthenticated: true, hydrated: true });

    return user.role;
  },

  logout: () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

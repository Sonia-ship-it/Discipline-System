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

      if (!token || !raw) {
        console.log('[Auth] No stored session found');
        set({ hydrated: true });
        return;
      }

      const user: AuthUser | null = raw ? JSON.parse(raw) : null;

      // Validate that user has required fields
      if (user && (!user.role || !user.email)) {
        console.error('[Auth] Invalid user data, missing required fields:', user);
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-user');
        localStorage.removeItem('access_token');
        set({ hydrated: true });
        return;
      }

      console.log('[Auth] Hydrated session for user:', user?.email, 'role:', user?.role);

      set({
        token,
        user,
        isAuthenticated: !!token && !!user,
        hydrated: true,
      });
    } catch (error) {
      console.error('[Auth] Hydration error:', error);
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

    console.log('[Auth] Login response:', { serverUser, decoded });

    const user: AuthUser = {
      id: String(serverUser?.id ?? decoded?.sub ?? decoded?.userId),
      firstName: serverUser?.firstName ?? decoded?.firstName ?? '',
      lastName: serverUser?.lastName ?? decoded?.lastName ?? '',
      email: serverUser?.email ?? decoded?.email ?? email,
      role: (serverUser?.role ?? decoded?.role ?? 'DISCIPLINE') as StaffRole,
    };

    // Validate that all required fields are present
    if (!user.id || !user.email || !user.role) {
      console.error('[Auth] Invalid user data after login:', user);
      throw new Error('Invalid user data received from server');
    }

    console.log('[Auth] Setting user session:', { email: user.email, role: user.role });

    localStorage.setItem('auth-token', token);
    localStorage.setItem('auth-user', JSON.stringify(user));
    // Also store as access_token for cross-system compatibility
    localStorage.setItem('access_token', token);

    set({ token, user, isAuthenticated: true, hydrated: true });

    return user.role;
  },

  logout: () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    localStorage.removeItem('access_token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

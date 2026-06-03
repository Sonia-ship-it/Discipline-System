import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { authService } from '@/services/authService';
import { loginStart, loginSuccess, loginFailure, logout } from '@/store/slices/authSlice';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [hasTokens, setHasTokens] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Safe notification function that only works if provider is available
  const safeNotify = (type: 'success' | 'error', title: string, message: string) => {
    try {
      // Dynamically import to avoid circular dependency during provider initialization
      import('@/hooks/useGlobalNotification').then(({ useGlobalNotification }) => {
        const { showSuccess, showError } = useGlobalNotification();
        if (type === 'success') {
          showSuccess(title, message);
        } else {
          showError(title, message);
        }
      }).catch(() => {
        // Silently fail if notification system isn't ready
      });
    } catch {
      // Fallback if notifications aren't available
    }
  };

  // Initialize state by checking if tokens exist in localStorage
  useEffect(() => {
    const checkInitialAuth = async () => {
      try {
        // Check if tokens exist in localStorage
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (accessToken && refreshToken) {
          setHasTokens(true);

          // Fetch user profile to populate user data
          try {
            const userData = await authService.getCurrentUser();
            queryClient.setQueryData(['auth', 'user'], userData);
          } catch (error) {
            console.error('Failed to fetch user profile:', error);
            // Tokens exist but profile fetch failed - still consider user authenticated
          }
        } else {
          setHasTokens(false);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        setHasTokens(false);
      } finally {
        setIsInitialized(true);
      }
    };

    checkInitialAuth();
  }, [queryClient]);

  // Get current user - only if tokens exist
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['auth', 'user'],
    queryFn: authService.getCurrentUser,
    enabled: hasTokens && isInitialized, // Only run query if tokens exist and we're initialized
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // Handle authentication errors
  useEffect(() => {
    if (error) {
      console.error('🔑 Authentication error:', error);
      // If we get a 401 or authentication error, we're not logged in
      if ((error as any)?.response?.status === 401 || (error as any)?.response?.status === 403) {
        setHasTokens(false);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        queryClient.clear();
      }
    }
  }, [error, queryClient]);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: authService.login,
    onMutate: () => {
      dispatch(loginStart());
    },
    onSuccess: (userData) => {

      // Check if tokens are in localStorage
      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      // Set hasTokens to true
      setHasTokens(true);

      dispatch(loginSuccess(userData));
      queryClient.setQueryData(['auth', 'user'], userData);
      safeNotify('success', 'Login Successful', `Welcome back, ${userData.name || 'User'}!`);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
      safeNotify('error', 'Login Failed', errorMessage);
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      dispatch(logout());
      queryClient.clear();
      setHasTokens(false);
      setIsInitialized(true);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      safeNotify('success', 'Logging Out', 'You are being logged out...');

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    },
    onError: (error) => {
      dispatch(logout());
      queryClient.clear();
      setHasTokens(false);
      setIsInitialized(true);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      safeNotify('success', 'Logging Out', 'You are being logged out...');

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    },
  });

  return {
    user: hasTokens ? user : null,
    isLoading: !isInitialized || (hasTokens && isLoading),
    isInitialized,
    hasTokens,
    error,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    loginError: loginMutation.error,
    getOAuthLoginUrl: authService.getOAuthLoginUrl,
  };
};
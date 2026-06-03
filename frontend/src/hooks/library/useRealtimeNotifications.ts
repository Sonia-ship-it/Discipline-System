'use client';

import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { io, Socket } from 'socket.io-client';
import { useGlobalNotification } from './useGlobalNotification';

interface RealtimeNotification {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
}

// Get socket URL with proper fallback
const getSocketUrl = (): string | null => {
  // Only run on client side
  if (typeof window === 'undefined') {
    return null;
  }

  // Try environment variable first
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl && envUrl !== 'undefined' && envUrl.trim()) {
    return envUrl;
  }

  // Fallback to production URL
  return 'https://rca-lms-backend-gdsc.onrender.com';
};

let globalSocket: Socket | null = null;

export const useRealtimeNotifications = () => {
  const queryClient = useQueryClient();
  const { showSuccess, showError, showWarning, showInfo } = useGlobalNotification();
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Prevent SSR execution
    if (typeof window === 'undefined') {
      return;
    }

    // Prevent multiple initializations
    if (isInitializedRef.current || globalSocket?.connected) {
      return;
    }

    isInitializedRef.current = true;

    const token = localStorage.getItem('access_token');
    if (!token) {
      isInitializedRef.current = false;
      return;
    }

    const socketUrl = getSocketUrl();

    if (!socketUrl) {
      console.error('❌ Socket URL is invalid');
      isInitializedRef.current = false;
      return;
    }


    try {
      const socket: Socket = io(`${socketUrl}/notifications`, {
        path: '/socket.io/',
        auth: { token },
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: 5,
        secure: true,
        rejectUnauthorized: false,
        forceNew: false,
      });

      globalSocket = socket;

      socket.on('connect', () => {
      });

      // Listen for real-time notifications
      socket.on('notification', (data: RealtimeNotification) => {

        // Show toast notification based on type
        switch (data.type) {
          case 'success':
            showSuccess(data.title, data.message);
            break;
          case 'error':
            showError(data.title, data.message);
            break;
          case 'warning':
            showWarning(data.title, data.message);
            break;
          case 'info':
          default:
            showInfo(data.title, data.message);
        }

        // Invalidate notifications queries to refresh data
        queryClient.invalidateQueries({ queryKey: ['notifications'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
      });

      // Listen for borrow request notifications
      socket.on('borrow-request-notification', (data: any) => {
        showInfo(data.title, data.message);
        queryClient.invalidateQueries({ queryKey: ['notifications'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
      });

      // Listen for new book notifications
      socket.on('new-book-notification', (data: any) => {
        showSuccess(data.title, data.message);
        queryClient.invalidateQueries({ queryKey: ['notifications'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
        queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
      });

      // Listen for stock updates
      socket.on('stock-update', (data: any) => {
        queryClient.invalidateQueries({ queryKey: ['books'] });
      });

      // Listen for borrow updates
      socket.on('borrow-update', (data: any) => {
        queryClient.invalidateQueries({ queryKey: ['borrowings'] });
      });

      socket.on('disconnect', () => {
      });

      socket.on('connect_error', (error) => {
        console.error('❌ Real-time notifications connection error:', error);
      });

      return () => {
        // Don't disconnect on unmount - keep global connection alive
        // Only disconnect if this is the last reference
      };
    } catch (error) {
      console.error('❌ Error creating WebSocket connection:', error);
      isInitializedRef.current = false;
    }
  }, [queryClient, showSuccess, showError, showWarning, showInfo]);
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationsService, NotificationsQuery, CreateNotificationDto } from '@/services/notificationsService';

export const useNotifications = (query: NotificationsQuery = {}) => {
  return useQuery({
    queryKey: ['notifications', query],
    queryFn: () => notificationsService.getNotifications(query),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export const useSystemNotifications = (query: NotificationsQuery = {}) => {
  return useQuery({
    queryKey: ['notifications', 'system', query],
    queryFn: () => notificationsService.getSystemNotifications(query),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export const useUnreadCount = (userId?: string, enabled = true) => {
  return useQuery({
    queryKey: ['notifications', 'unread-count', userId],
    queryFn: () => notificationsService.getUnreadCount(userId),
    enabled,
    staleTime: 30 * 1000,
    refetchInterval: enabled ? 30 * 1000 : false,
    retry: false,
  });
};

export const useNotificationStats = () => {
  return useQuery({
    queryKey: ['notifications', 'stats'],
    queryFn: notificationsService.getNotificationStats,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNotificationDto) => notificationsService.createNotification(data),
    onSuccess: () => {
      // Invalidate and refetch all notification-related queries
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
    },
  });
};

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: notificationsService.markAsRead,
    onSuccess: () => {
      // Invalidate and refetch all notification-related queries
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
    },
  });
};

export const useMarkAllAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId?: string) => {
      const result = await notificationsService.markAllAsRead(userId);
      return result;
    },
    onSuccess: () => {
      // Invalidate and refetch all notification-related queries
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
    },
    onError: (error) => {
      console.error('❌ Error marking all as read:', error);
    },
  });
};

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: notificationsService.deleteNotification,
    onSuccess: () => {
      // Invalidate and refetch all notification-related queries
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', 'stats'] });
    },
  });
};
'use client';

import { toast } from 'sonner';

export const useGlobalNotification = () => {
  const showSuccess = (title: string, message?: string) => {
    toast.success(title, { description: message });
  };

  const showError = (title: string, message?: string) => {
    toast.error(title, { description: message });
  };

  const showWarning = (title: string, message?: string) => {
    toast.warning(title, { description: message });
  };

  const showInfo = (title: string, message?: string) => {
    toast.info(title, { description: message });
  };

  return { showSuccess, showError, showWarning, showInfo };
};
